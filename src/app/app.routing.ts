import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { ProductosComponent } from './components/productos/productos.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { AreasComunesComponent } from './components/areascomunes/areascomunes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CosasPerdidasComponent } from './components/cosasperdidas/cosasperdidas.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { FormDatosFinanzasComponent } from './components/datosfinanzas/form_finanzas.component';
import { FormDatosAreasComunesComponent } from './components/datosareascomunes/form_areascomunes.component';
import { FormDatosEventosComponent } from './components/datoseventos/form_eventos.component';
import { FormDatosAvisosComponent } from './components/datosavisos/form_avisos.component';
import { FormDatosCosasPerdidasComponent } from './components/datoscosasperdidas/form_cosasperdidas.component';
import { FormDatosDocumentosComponent } from './components/datosdocumentos/form_documentos.component';
import { FormContactoComponent } from './components/contacto_own/contacto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NBA_Component } from './components/nba/nba.component';
import { LoginComponent } from  './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

// Definir rutas
const appRoutes: Routes = [
  // Cuando la ruta esta vacia
  /*   { path: '', component: HomeComponent}, */
  // cuando se pone el nombre del componente en la ruta
  /*
    { path: 'productos', component: ProductosComponent},*/
  //Pase de parametros en ROPUTING
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/:id', component: UsuariosComponent },

  { path: 'home', component: HomeComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'nba', component: NBA_Component },

  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'finanzas', component: FinanzasComponent, canActivate: [AuthGuard] },
  { path: 'areascomunes', component: AreasComunesComponent, canActivate: [AuthGuard] },
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { path: 'avisos', component: AvisosComponent, canActivate: [AuthGuard] },
  { path: 'cosasperdidas', component: CosasPerdidasComponent, canActivate: [AuthGuard] },
  { path: 'documentos', component: DocumentosComponent, canActivate: [AuthGuard] },

/*   { path: 'datosfinanzas', component: FormDatosFinanzasComponent },
  { path: 'datosareascomunes', component: FormDatosAreasComunesComponent },
  { path: 'datoseventos', component: FormDatosEventosComponent },
  { path: 'datosavisos', component: FormDatosAvisosComponent },
  { path: 'datoscosasperdidas', component: FormDatosCosasPerdidasComponent },
  { path: 'datosdocumentos', component: FormDatosDocumentosComponent }, */
  { path: 'contacto', component: FormContactoComponent },
  { path: 'login', component: LoginComponent },
  // Cuando algo no existe
  { path: '**', component: LoginComponent },
];

export const appRoutingProdivers: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
