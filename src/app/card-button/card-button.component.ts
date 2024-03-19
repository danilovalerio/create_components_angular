import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  //template: ` <div class="card-button">Adquirir</div> `,
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  @Output('btnAlias') btnClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButtonClick');

    //dispara o conteúdo para o comp pai
    //e podemos tipar o obj enviado para o pai
    this.btnClickEmitter.emit(true);
  }
}
