import { Component } from '@angular/core';

@Component({
  selector: 'app-abono-dia',
  templateUrl: './abono-dia.component.html'
})
export class AbonoDiaComponent {
  motivosAbono: string[] = [
    'Consulta médica',
    'Reunião externa',
    'Treinamento',
    'Outros'
  ];

  rows: Array<{data: string, quantidadeHoras: number, motivoAbono: string, dataInicial: string, horaInicial: string, dataFinal: string, horaFinal: string}> = [
    { data: '', quantidadeHoras: 0, motivoAbono: '', dataInicial: '', horaInicial: '', dataFinal: '', horaFinal: '' }
  ];

  addRow() {
    this.rows.push({ data: '', quantidadeHoras: 0, motivoAbono: '', dataInicial: '', horaInicial: '', dataFinal: '', horaFinal: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }
}
