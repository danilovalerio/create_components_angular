import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-variables',
  templateUrl: './temp-variables.component.html',
  styleUrl: './temp-variables.component.scss',
})
export class TempVariablesComponent {
  exemplo2 = '';

  clicou(input: HTMLInputElement) {
    console.log(input.value);
  }
}
