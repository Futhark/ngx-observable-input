import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ObservableInput } from "ngx-observable-input";

@Component({
    selector: "app-test-component",
    templateUrl: "./test-component.component.html",
    styleUrls: ["./test-component.component.css"]
})
export class TestComponentComponent implements OnInit {
    @ObservableInput("value") public value$: Observable<number>;

    constructor() { }

    ngOnInit() {
    }
}
