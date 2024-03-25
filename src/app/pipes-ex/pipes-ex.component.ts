import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrl: './pipes-ex.component.scss',
})
export class PipesExComponent {
  person = { name: 'Daniela', status: 1 };
  person2 = { name: 'Olivia', status: 2 };
  person3 = { name: 'Danilo', status: 3 };

  getStyle(status: number) {
    console.log('getStyle foi chamado');
    return {
      active: status === 1,
      partial: status === 2,
      blocked: status === 3,
    };
  }
}
