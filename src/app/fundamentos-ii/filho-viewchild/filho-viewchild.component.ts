import { Component } from '@angular/core';

@Component({
  selector: 'app-filho-viewchild',
  templateUrl: './filho-viewchild.component.html',
  styleUrl: './filho-viewchild.component.scss',
})
export class FilhoViewchildComponent {
  message: string = 'Sou o componente filho!';

  dizerOi() {
    alert('Oiiii!!!!!!');
  }
}
