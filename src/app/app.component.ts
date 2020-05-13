import { Component, ViewChild } from '@angular/core';
import { FabricjsLibraryComponent } from 'fabricjs-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabricjs-editor';

  @ViewChild('canvas', {static: false}) canvas: FabricjsLibraryComponent;

  public removeSelected() {
    this.canvas.removeSelected();
  }
}
