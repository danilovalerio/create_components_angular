import { Pipe, PipeTransform } from '@angular/core';

//Notação @Pipe para indicar ao angular que esse é um pipe
@Pipe({
  name: 'statusClass', //nome da classe sem o pipe para padronizar
})
export class StatusClassPipe implements PipeTransform {
  transform(status: number): string {
    /*
    Ao invés dos if,s poderíamos jogar para dentro de enum's ou um obj que foi o caso aqui entre outras melhorias no código

    if (status === 1) {
      return 'active';
    } else if (status === 2) {
      return 'partial';
    } else {
      return 'blocked';
    }
    */

    const objStatus: { [key: number]: string } = {
      1: 'active',
      2: 'partial',
      3: 'blocked',
    };

    return objStatus[status];
  }
}
