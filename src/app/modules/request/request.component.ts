import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html'
})
export class RequestComponent {


data: any = []
formLoaded: any = true;
options: any = [];
selectedOption: number = 0;


ngOnInit(): void {
  this.data.empresa = "9"
  this.data.nome_empresa = 'Suzano SA'
  this.data.matricula = "417462"
  this.data.nome_colaborador = "MARCELA DE SOUZA OLIVEIRA"
  this.data.cargo = "CONSULTOR(A) REC HUMANOS I"
  this.data.centro_de_custo = "JORNADA CUIDAR E VALORIZAR"
  this.data.data_admissao = "10/04/2018"

  this.options = [
    { value: 0, text: 'Escolha um tipo de reembolso' },
    { value: 1, text: 'Inclusão de marcação' },
    { value: 2, text: 'Abono de dia' },
    { value: 3, text: 'Troca de escala' },
    { value: 4, text: 'Sobreaviso' }
  ];
}

}
