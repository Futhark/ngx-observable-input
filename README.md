# ngx-observable-input

This small repository provides ObservableInput decorator to use Angular component input attributes as RxJS Observables.

Angular AOT compiler support from version 2.0.0

## Changelog

Look for changes in CHANGELOG.md file.

# Why

There are many threads on Angular developer forums about treating input as observable streams. Instead of manually checking the changes in ngOnChanges hook this library provides a simple addition to `@Input()` decorator that does all the magic behind the scenes.

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
    @ObservableInput() @Input("url") public url$: Observable<string>;
    ...
}
```

Simple as that!

## Default value

Since version 3.0.0 the behavior of unused (not set) input attributes has changed. Previously the observable was `undefined`. Now the observable is initiated by an `defaultValue` argument provided to decorator: `@ObservableInput(defaultValue: any)`. This allows developer to safely subscribe to such observables without null-checking first.

## Usage recommendation / naming convention

The `@Input` decorator is often used without the parameter, but when working with `@ObservableInput` it in most cases shouldn't. The parameter is used as an attribute name in HTML templates and if omited will use the name of the property that it decorates. It is okay for non-observable `@Input` but one should stick to the guidelines of observable naming convention: https://angular.io/guide/rx-library#naming-conventions-for-observables

Using this convention without `@Input` parameter will end in non-standard attribute name for Angular component. For example:

### good:
```ts
@ObservableInput() @Input("url") public url$: Observable<string>;
```
where we have `url` attribute:
```html
<image-item url="{{ currentImageUrl }}"></image-item>
```

is **much more** preferrable than:

### bad:
```ts
@ObservableInput() @Input() public url$: Observable<string>;
```
where we have non-intuitive `url$` attribute
```html
<image-item url$="{{ currentImageUrl }}"></image-item>
```

Using `@Input` parameter will cause TSLint warnings with `no-input-rename` rule enabled.
