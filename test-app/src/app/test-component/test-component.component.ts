import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs";
import { ObservableInput } from "ngx-observable-input";
import { first, tap } from "rxjs/operators";

@Component({
    selector: "app-test-component",
    templateUrl: "./test-component.component.html",
    styleUrls: ["./test-component.component.css"],
})
export class TestComponentComponent implements OnInit, OnChanges {
    public bazinga: number;
    // tslint:disable-next-line:no-input-rename
    @ObservableInput() @Input("bazinga") public bazinga$: Observable<number>;
    // tslint:disable-next-line: no-input-rename
    @ObservableInput("this is the value for a non initialized input") @Input("notInitialized") public notInitialized$: Observable<number>;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.bazinga = changes.bazinga$.currentValue;
    }

    ngOnInit() {
    }
}
