import {
  Component,
  Input,
  ViewEncapsulation,
  numberAttribute,
} from '@angular/core';

interface IPlan {
  infos: IInfos;
}

interface IInfos {
  type: string;
  price: number;
}

/**
 * Caso tivesse mais regras para realizar no transform do input o ideal
 * era estrair para uma function, assim deixando mais compreensível o código
 *
 * @param value recebe o valor a ser tratado dentro da function
 * @returns
 */
function handlePlanType(value: string) {
  console.log('handlePlanType', value);
  return value.toUpperCase();
}

function styleButtonByPlanType(value: string): string {
  if (value.toUpperCase() === 'SIMPLES') {
    return 'white';
  }
  if (value.toUpperCase() === 'COMPLETO') {
    return 'purple';
  } else {
    return 'white';
  }
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
  /**
   * O bom de usar o Alias nos permite
   * mudar o nome das variáveis sem quebrar
   * quem consumir esses dados
   */
  @Input({
    required: true,
    alias: 'planType',
    transform: (value: string) => handlePlanType(value),
  })
  planType: string = '';

  @Input({
    alias: 'style',
  })
  colorBtnPlan: string = 'white';

  /**
   * required obriga a passagem desse parâmetro
   * somente a partir da versão 16 do angular
   */
  @Input({ required: true })
  planPrice: number = 0;

  plan: IPlan = {
    infos: {
      type: 'Simples',
      price: 100,
    },
  };

  @Input({ required: true })
  cardStyle: 'orange' | 'gray' = 'orange';

  getPriceFormated() {
    return 'R$ ' + this.planPrice + ',00/Mês';
  }

  getFullPrice() {
    setTimeout(() => {
      this.plan.infos.type = 'Simples V2';
    }, 3000);
    return 'R$ ' + this.plan.infos.price + ',00/Mês';
  }

  titleButton = 'Adquirir';

  btnCancelar = 'Cancelar';

  //botao filho foi clicado
  btnClicked(valueEmitted: boolean) {
    console.log('Botão filho foi clicado! Valor passado: ', valueEmitted);
    console.log('planType', this.planType);
  }

  /**
   * Input dos Styles personalizados
   * Aqui rola um array com o tipos?
   */
  @Input({
    alias: 'card',
  })
  card: boolean = false;

  @Input({
    alias: 'cardRoxo',
  })
  cardRoxo: boolean = false;
}
