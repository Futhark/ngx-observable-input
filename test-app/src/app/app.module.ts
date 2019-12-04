import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TestComponentComponent } from "./test-component/test-component.component";

@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        TestComponentComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
