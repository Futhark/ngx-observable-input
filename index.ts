import { BehaviorSubject } from "rxjs";

export function ObservableInput(defaultValue?: any) {
    const subjectSymbol = Symbol();
    const subjectSymbolObservable = Symbol();

    return function (target: any, key: PropertyKey) {
        Object.defineProperty(target, key, {
            set: function (value) {
                if (!this[subjectSymbol]) {
                    this[subjectSymbol] = new BehaviorSubject(value);
                    this[subjectSymbolObservable] = this[subjectSymbol].asObservable();
                }

                if (value !== this[subjectSymbol].getValue())
                    this[subjectSymbol].next(value);
            },
            get: function () {
                if (!this[subjectSymbol]) {
                    this[subjectSymbol] = new BehaviorSubject(defaultValue);
                    this[subjectSymbolObservable] = this[subjectSymbol].asObservable();
                }

                return this[subjectSymbolObservable];
            }
        });
    };
}
