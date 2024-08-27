import { Component } from '@angular/core';

@Component({
  selector: 'app-inclusao-marcacao',
  standalone: false,
  templateUrl: './inclusao-marcacao.component.html'
})
export class InclusaoMarcacaoComponent {
listaOcorrencias: any[] = [];
isRequestNew: any;

rows: Array<{data: string, hora: string, justificativa: string}> = [
  { data: '2024-08-26', hora: '14:00', justificativa: 'Reunião de equipe' },
  { data: '2024-08-27', hora: '10:00', justificativa: 'Consulta médica' },
];

justificativas: string[] = [
  'Reunião de equipe',
  'Consulta médica',
  'Entrega de relatório',
  'Treinamento',
  'Outros'
];

addRow() {
  this.rows.push({ data: '', hora: '', justificativa: '' });
}

removeRow(index: number) {
  this.rows.splice(index, 1);
}
}
