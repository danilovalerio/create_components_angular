import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss',
})
export class NgStyleComponent {
  fontSize: number = 30;
  textColor: 'blue' | 'orange' = 'blue';
  btnText: 'Azul' | 'Laranja' = 'Azul';

  increaseFontSize() {
    this.fontSize += 5;
  }

  decreaseFontSize() {
    this.fontSize -= 5;
  }

  toggleFontColor() {
    if (this.textColor === 'blue') {
      this.textColor = 'orange';
      this.btnText = 'Azul';
    } else {
      this.textColor = 'blue';
      this.btnText = 'Laranja';
    }
  }
}
