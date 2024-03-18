import { Component } from '@angular/core';

//decorator with props default
@Component({
  selector: 'app-card', //name component for html
  templateUrl: './card.component.html', //path for template component
  styleUrl: './card.component.scss', //path for styles for component
})
export class CardComponent {
  plan = {
    infos: {
      type: 'Simples',
      price: 100,
    },
  };

  getFullPrice() {
    setTimeout(() => {
      this.plan.infos.type = 'Simples V2';
    }, 3000);
    return 'R$ ' + this.plan.infos.price + ',00/Mês';
  }
}
