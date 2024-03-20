import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'criacao_components';

  plan = {
    type: 'Simples',
    price: 100,
  };

  plan2 = {
    type: 'Completo',
    price: 250,
  };

  card = {
    plan: this.plan,
  };

  card2 = {
    plan: this.plan2,
  };

  handlePlanType(text: string) {
    this.card.plan.type = text;
  }
}
