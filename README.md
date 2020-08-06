Angular binding for [BlurHash](https://github.com/woltapp/blurhash).

## Installation
```
npm install angular-blurhash
```

## Usage
Import **AngularBlurhashModule** in your root module
```ts
import { AngularBlurhashModule } from 'angular-blurhash';

@NgModule({
  imports: [AngularBlurhashModule]
})
```

Add **AngularBlurhash** component in the template
```html
<angular-blurhash [hash]="hash"
                  [URL]="URL"
                  [width]="width"
                  [height]="height"
                  [alt]="alt">
</angular-blurhash>
```

## Inputs
| Name                     | type          | Description                                                      |
| ------------------------ |-------------- | ---------------------------------------------------------------- |
| hash                     | string        | BlurHash string                                                  |
| URL                      | string        | Image URL                                                        |
| width                    | number        | CSS width                                                        |
| height                   | number        | CSS height                                                       |
| alt                      | string        | Optional `alt` attribute                                         |
