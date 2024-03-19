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

  card = {
    plan: this.plan,
  };

  handlePlanType(text: string) {
    this.card.plan.type = text;
  }
}
