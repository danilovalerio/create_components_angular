import { Component, EventEmitter, Input, Output } from '@angular/core';

interface IPerson {
  name: string;
  age: number;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  @Input({ required: true }) personName: string = '';
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) personIndex: number = 0;
  @Input({ required: true }) isFirst: boolean = false;
  @Input({ required: true }) isLast: boolean = false;
  @Input({ required: true }) isOdd: boolean = false;
  @Input({ required: true }) estaSelecionado: boolean = false;

  //vamos enviar o index do item selecionado
  @Output('personSelected') onPersonSelectEmitt = new EventEmitter<number>();

  selectPerson() {
    this.onPersonSelectEmitt.emit(this.personIndex);
  }
}
