import { routing, appRoutingProdivers} from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DpDatePickerModule } from 'ng2-date-picker';

// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('es', deLocale);



//Services
import { ConexionService } from './services/conexion.service';
import { ProductoService } from './services/producto.service';
import { UserService } from './services/users.service';

// Curso
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { TresComponent } from './components/tres/tres.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NBA_Component } from './components/nba/nba.component';


// Mi proyecto
import { HeadComponent } from './components/head/head.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { LoginComponent } from  './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, UnoComponent, DosComponent, TresComponent, HomeComponent, ContactoComponent, DepartamentosComponent, ProductosComponent, InicioComponent, HeadComponent, FooterComponent, FinanzasComponent, AreasComunesComponent, EventosComponent, AvisosComponent, CosasPerdidasComponent, DocumentosComponent, FormDatosFinanzasComponent, FormDatosAreasComunesComponent, FormDatosEventosComponent, FormDatosAvisosComponent, FormDatosCosasPerdidasComponent, FormDatosDocumentosComponent, FormContactoComponent, UsuariosComponent, NBA_Component
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, routing, HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, DpDatePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot() ],
  providers: [appRoutingProdivers, ConexionService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
