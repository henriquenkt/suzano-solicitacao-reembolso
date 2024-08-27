import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './modules/request/request.component';
import { GestorAprovacaoComponent } from './modules/gestor-aprovacao/gestor-aprovacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/solicitacao',
    pathMatch: 'full',
  },
  {
    path: 'solicitacao',
    component: RequestComponent
  },
  {
    path: 'gestor',
    component: GestorAprovacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
