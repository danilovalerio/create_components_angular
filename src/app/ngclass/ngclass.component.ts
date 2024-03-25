import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.scss',
})
export class NgclassComponent {
  isGreen: boolean = true;

  setToGreen() {
    this.isGreen = true;
  }

  setToOranage() {
    this.isGreen = false;
  }
}
