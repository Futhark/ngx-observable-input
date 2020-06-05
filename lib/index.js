"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function ObservableInput(defaultValue) {
    const subjectSymbol = Symbol();
    const subjectSymbolObservable = Symbol();
    return (target, key) => {
        target[subjectSymbol] = new rxjs_1.BehaviorSubject(defaultValue);
        target[subjectSymbolObservable] = target[subjectSymbol].asObservable();
        Object.defineProperty(target, key, {
            set: function (value) {
                if (value !== this[subjectSymbol].getValue())
                    this[subjectSymbol].next(value);
            },
            get: function () {
                return this[subjectSymbolObservable];
            }
        });
    };
}
exports.ObservableInput = ObservableInput;
