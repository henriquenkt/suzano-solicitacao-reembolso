import { Component } from '@angular/core';

@Component({
  selector: 'app-troca-escala',
  templateUrl: './troca-escala.component.html'
})
export class TrocaEscalaComponent {

  escalas: string[] = [
    'Escala 1',
    'Escala 2',
    'Escala 3',
    'Escala 4'
  ];

  turmas: string[] = [
    'Turma A',
    'Turma B',
    'Turma C',
    'Turma D'
  ];

  rows: Array<{dataInicio: string, dataFim: string, escala: string, turma: string}> = [
    { dataInicio: '', dataFim: '', escala: '', turma: '' }
  ];

  addRow() {
    this.rows.push({ dataInicio: '', dataFim: '', escala: '', turma: '' });
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

}
