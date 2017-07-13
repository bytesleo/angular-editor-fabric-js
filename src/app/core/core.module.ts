import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../editor/editor.module#EditorModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ShellComponent,
    MainContentComponent,
    TopBarComponent
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
