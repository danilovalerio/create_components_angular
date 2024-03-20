import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-component',
  templateUrl: './ngif-component.component.html',
  styleUrl: './ngif-component.component.scss',
})
export class NgifComponentComponent {
  minhaPropDiva = true;

  togglePropDiv() {
    this.minhaPropDiva = !this.minhaPropDiva;
  }
}
