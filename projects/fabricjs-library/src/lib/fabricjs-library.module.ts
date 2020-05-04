import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { FabricjsLibraryComponent } from './fabricjs-library.component';

@NgModule({
  declarations: [FabricjsLibraryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  exports: [FabricjsLibraryComponent]
})
export class FabricjsLibraryModule { }
