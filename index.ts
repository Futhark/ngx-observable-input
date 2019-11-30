import { Input as decorateAsInput } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export function ObservableInput(attributeKey?: string) {
    const subjectSymbol = Symbol();
    const subjectSymbolObservable = Symbol();

    return (target: any, key: PropertyKey) => {
        decorateAsInput(attributeKey)(target, key);

        Object.defineProperty(target, key, {
            set: function (value) {
                if (!this[subjectSymbol]) {
                    this[subjectSymbol] = new BehaviorSubject(target[key]);
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
