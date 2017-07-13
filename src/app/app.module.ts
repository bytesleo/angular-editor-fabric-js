import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from 'app/core/core.module';
import { ShellComponent } from 'app/core/shell/shell.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    ShellComponent
  ]
})
export class AppModule { }
