# ngx-observable-input

This small repository provides ObservableInput decorator to use Angular component input attributes as RxJS Observables.

# Why

There are many threads on Angular developer forums about treating input as observable streams. Instead of manually checking the changes in ngOnChanges hook this library provides a simple replacement for `@Input()` decorator that does all the magic behind the scenes.

# Usage

Install the library:

`npm install ngx-observable-input`

Let's say that we want to create an `image-item` component that takes an `url` as an input attribute. The parent `gallery` component has a `currentImageUrl` property that can change during runtime:

```html
...
<image-item [url]="currentImageUrl"></image-item>
```

We can treat that `url` input as an observable in our `image-item` component by using `@ObservableInput` decorator:

```ts
import { Component } from "@angular/core";
import { ObservableInput } from "ngx-observable-input";
import { Observable } from "rxjs";

@Component({
    selector: "image-item",
    template: `<img [src]="url$ | async" />`
})
export class GalleryComponent {
    @ObservableInput("url") public url$: Observable<string>;

    ...
}
```

Simple as that!

## Usage recommendation / naming convention

While the decorator can be used without the parameter it in most cases shouldn't. The parameter is used as an external attribute name and if omited will use the name of the property that it decorates (same bahavior as `@Input` decorator). It is okay for non-observable `@Input` but one should stick to the guidelines of observable naming connvetion inside components: https://angular.io/guide/rx-library#naming-conventions-for-observables

Using this convention without `@ObservableInput` parameter will end in weird attribute name for Angular component. For example:

### good:
```ts
@ObservableInput("url") public url$: Observable<string>;
```
```html
<image-item [url]="currentImageUrl"></image-item>
```

is **much more** preferrable than:

### bad:
```ts
@ObservableInput() public url$: Observable<string>;
```
```html
<image-item [url$]="currentImageUrl"></image-item>
```

since `url$` is not intuitive name for html-style tag property.
