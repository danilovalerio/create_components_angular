import { Component, Input, ViewEncapsulation } from '@angular/core';

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
  //encapsulation: ViewEncapsulation.ShadowDom, //isola esse componente e nenhum estilo global pode sobrescrever o CSS desse componente,ele só pode alterar o filho
})
export class CardComponent {
  @Input('planTypeAlias') planType: string = '';
  @Input() planPrice: number = 0;

  plan: IPlan = {
    infos: {
      type: 'Simples',
      price: 100,
    },
  };

  getPriceFormated() {
    return 'R$ ' + this.planPrice + ',00/Mês';
  }

  getFullPrice() {
    setTimeout(() => {
      this.plan.infos.type = 'Simples V2';
    }, 3000);
    return 'R$ ' + this.plan.infos.price + ',00/Mês';
  }
}
