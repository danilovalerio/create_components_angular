import { Component, ViewEncapsulation } from '@angular/core';

interface IPlan {
  infos: IInfos;
}

interface IInfos {
  type: string;
  price: number;
}

//decorator with props default
@Component({
  selector: 'app-card', //name component for html
  templateUrl: './card.component.html', //path for template component
  styleUrl: './card.component.scss', //path for styles for component
  //encapsulation: ViewEncapsulation.None, //remove o encapsulamento desse component
})
export class CardComponent {
  plan: IPlan = {
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
