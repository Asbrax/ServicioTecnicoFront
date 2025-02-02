import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';
import { AsociadosService } from './services/asociados.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BodyComponent } from './components/shared/body/body.component';
import { AsociadosComponent } from './components/asociados/asociados.component';
import { PagoClienteComponent } from './components/pago-cliente/pago-cliente.component';
import { PerfilProfesionalComponent } from './components/perfil-profesional/perfil-profesional.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule, MatTabsModule} from '@angular/material';
import { AsociadoComponent } from './components/asociado/asociado.component';
import { TareaCotizarComponent } from './components/tarea-cotizar/tarea-cotizar.component';
import { PagoExitosoComponent } from './components/pago-exitoso/pago-exitoso.component';
import { HistorialOperacionesComponent } from './components/historial-operaciones/historial-operaciones.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AsociadosComponent,
    PagoClienteComponent,
    AsociadoComponent,
    TareaCotizarComponent,
    PagoExitosoComponent,
    HistorialOperacionesComponent,
    PerfilProfesionalComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [AsociadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
