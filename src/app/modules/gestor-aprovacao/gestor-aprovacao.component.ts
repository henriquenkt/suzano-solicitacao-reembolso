import { Component } from '@angular/core';

@Component({
  selector: 'app-gestor-aprovacao',
  templateUrl: './gestor-aprovacao.component.html'
})
export class GestorAprovacaoComponent {

  rows = [
    { matricula: '12345', nome: 'João Silva', centroDeCusto: 'Marketing', local: 'São Paulo', data: new Date('2024-08-26'), tipoReembolso: 'Marcação de Ponto', aprovado: false, reprovado: false },
    { matricula: '67890', nome: 'Maria Oliveira', centroDeCusto: 'Financeiro', local: 'Rio de Janeiro', data: new Date('2024-08-27'), tipoReembolso: 'Abono de Dia', aprovado: false, reprovado: false }
  ];

  selectedRow: any = null;
  displayModal: boolean = false;

  toggleAll(field: 'aprovado' | 'reprovado', event: any) {
    const isChecked = event.target.checked;
    this.rows.forEach(row => row[field] = isChecked);
  }

  openPopup(row: any) {
    this.selectedRow = row;
    this.displayModal = true;
  }

  closePopup() {
    this.displayModal = false;
  }

  save() {
    // Lógica para salvar as mudanças
    console.log('Salvando...', this.rows);
  }
}
