import { Component } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.scss',
})
export class ViewChildrenComponent {
  buttonList = ['Botão 1', 'Botão 2', 'Botão 3'];
}
