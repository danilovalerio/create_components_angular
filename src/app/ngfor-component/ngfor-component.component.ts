import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-component',
  templateUrl: './ngfor-component.component.html',
  styleUrl: './ngfor-component.component.scss',
})
export class NgforComponentComponent {
  personSelectedIndex: number | undefined;

  listPeoples = [
    { name: 'Maria', age: 90 },
    { name: 'Maria 2', age: 91 },
    { name: 'Maria 3', age: 92 },
    { name: 'Maria 4', age: 93 },
  ];

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
}
