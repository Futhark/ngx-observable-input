import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { ObservableInput } from "ngx-observable-input";

@Component({
    selector: "app-test-component",
    templateUrl: "./test-component.component.html",
    styleUrls: ["./test-component.component.css"],
})
export class TestComponentComponent implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @ObservableInput() @Input("bazinga") public bazinga$: Observable<number>;

    constructor() { }

    ngOnInit() {
    }
}
