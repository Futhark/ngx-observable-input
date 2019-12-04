"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function ObservableInput() {
    const subjectSymbol = Symbol();
    const subjectSymbolObservable = Symbol();
    return (target, key) => {
        Object.defineProperty(target, key, {
            set: function (value) {
                if (!this[subjectSymbol]) {
                    this[subjectSymbol] = new rxjs_1.BehaviorSubject(target[key]);
                    this[subjectSymbolObservable] = this[subjectSymbol].asObservable();
                }
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
