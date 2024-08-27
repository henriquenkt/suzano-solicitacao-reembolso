import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-aviso',
  templateUrl: './sobre-aviso.component.html'
})
export class SobreAvisoComponent {
  rows: Array<{data: string, horaInicio: string, horaFim: string}> = [
    { data: '', horaInicio: '', horaFim: '' }
  ];

  addRow() {
    this.rows.push({ data: '', horaInicio: '', horaFim: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }
}
