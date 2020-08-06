import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularBlurhashComponent } from './components/angular-blurhash.component';

@NgModule({
  declarations: [AngularBlurhashComponent],
  imports: [BrowserModule],
  exports: [AngularBlurhashComponent]
})
export class AngularBlurhashModule { }
