import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrl: './pipes-ex.component.scss',
})
export class PipesExComponent {
  name: string = 'Danilo';
  person = { name: 'Daniela', age: 'xx' };
}
