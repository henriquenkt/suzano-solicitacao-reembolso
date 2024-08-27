import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbonoDiaComponent } from './modules/abono-dia/abono-dia.component';
import { RequestComponent } from './modules/request/request.component';
import { InclusaoMarcacaoComponent } from './modules/inclusao-marcacao/inclusao-marcacao.component';
import { SobreAvisoComponent } from './modules/sobre-aviso/sobre-aviso.component';
import { TrocaEscalaComponent } from './modules/troca-escala/troca-escala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GestorAprovacaoComponent } from './modules/gestor-aprovacao/gestor-aprovacao.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    AbonoDiaComponent,
    RequestComponent,
    InclusaoMarcacaoComponent,
    SobreAvisoComponent,
    TrocaEscalaComponent,
    GestorAprovacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzSelectModule,
    NzRadioModule,
    DialogModule,
    ButtonModule,
    ToggleButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
