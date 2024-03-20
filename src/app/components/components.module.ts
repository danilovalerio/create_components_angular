import { NgModule } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [CardButtonComponent, CardComponent],
  imports: [],
  exports: [CardButtonComponent, CardComponent],
})
export class ComponentsModule {}
