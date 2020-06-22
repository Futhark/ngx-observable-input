import { Component } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    private counterValue = 0;
    public counterValue$: Observable<number>;
    public reverseCounterValue$: Observable<number>;

    constructor() {
        this.counterValue$ = interval(1000).pipe(map(() => this.counterValue++), share());
        this.reverseCounterValue$ = this.counterValue$.pipe(map((value) => 1000 - value));
    }
}
