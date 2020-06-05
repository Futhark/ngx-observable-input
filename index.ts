import { BehaviorSubject } from "rxjs";

export function ObservableInput(defaultValue?: any) {
    const subjectSymbol = Symbol();
    const subjectSymbolObservable = Symbol();

    return (target: any, key: PropertyKey) => {
        target[subjectSymbol] = new BehaviorSubject(defaultValue);
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
