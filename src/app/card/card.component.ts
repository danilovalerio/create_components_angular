import { Component } from '@angular/core';

//decorator with props default
@Component({
  selector: 'app-card', //name component for html
  templateUrl: './card.component.html', //path for template component
  styleUrl: './card.component.scss', //path for styles for component
})
export class CardComponent {
  type = 'Simples';
  price = 100;

  getFullPrice() {
    setTimeout(() => {
      this.type = 'Simples V2';
    }, 3000);
    return 'R$ ' + this.price + ',00/Mês';
  }
}
