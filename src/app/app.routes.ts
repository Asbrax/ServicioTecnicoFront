import {RouterModule, Routes } from '@angular/router';

import {AsociadoComponent } from './components/asociado/asociado.component';
import {AsociadosComponent } from './components/asociados/asociados.component';
import {PagoClienteComponent } from './components/pago-cliente/pago-cliente.component';
import {PagoExitosoComponent } from './components/pago-exitoso/pago-exitoso.component';
import {RegisterUserComponent } from './components/register-user/register-user.component';
import { TareaCotizarComponent } from './components/tarea-cotizar/tarea-cotizar.component';
import {HistorialOperacionesComponent} from './components/historial-operaciones/historial-operaciones.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const APP_ROUTES: Routes = [
    {path: 'asociado/:id', component: AsociadoComponent},
    {path: 'asociados', component: AsociadosComponent},
    {path: 'cotizar', component: TareaCotizarComponent},
    {path: 'pagoCliente', component: PagoClienteComponent},
    {path: 'pagoExitoso', component: PagoExitosoComponent},
    {path: 'historial', component: HistorialOperacionesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'registro', component: RegisterUserComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'asociados'}
];

//export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES, {useHash: true});
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
