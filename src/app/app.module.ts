import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { InicioPacienteComponent } from './pagina/inicio-paciente/inicio-paciente.component';
import { EditarCuentaComponent } from './pagina/editar-cuenta/editar-cuenta.component';
import { EliminarCuentaComponent } from './pagina/eliminar-cuenta/eliminar-cuenta.component';
import { RecuperacionCuentaComponent } from './pagina/recuperacion-cuenta/recuperacion-cuenta.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { CitasCompletadasComponent } from './pagina/citas-completadas/citas-completadas.component';
import { ListarPqrsComponent } from './pagina/listar-pqrs/listar-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { ResponderPqrsComponent } from './pagina/responder-pqrs/responder-pqrs.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { DetalleRecetaComponent } from './pagina/detalle-receta/detalle-receta.component';
import { DetalleIncapacidadComponent } from './pagina/detalle-incapacidad/detalle-incapacidad.component';
import { InicioMedicoComponent } from './pagina/inicio-medico/inicio-medico.component';
import { CitasPendientesComponent } from './pagina/citas-pendientes/citas-pendientes.component';
import { AtenderCitaComponent } from './pagina/atender-cita/atender-cita.component';
import { HistorialPacienteComponent } from './pagina/historial-paciente/historial-paciente.component';
import { AgendarDiaLibreComponent } from './pagina/agendar-dia-libre/agendar-dia-libre.component';
import { CitasRealizadasComponent } from './pagina/citas-realizadas/citas-realizadas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    InicioPacienteComponent,
    EditarCuentaComponent,
    EliminarCuentaComponent,
    RecuperacionCuentaComponent,
    CambiarPasswordComponent,
    AgendarCitaComponent,
    CitasCompletadasComponent,
    ListarPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    ResponderPqrsComponent,
    DetalleCitaComponent,
    DetalleRecetaComponent,
    DetalleIncapacidadComponent,
    InicioMedicoComponent,
    CitasPendientesComponent,
    AtenderCitaComponent,
    HistorialPacienteComponent,
    AgendarDiaLibreComponent,
    CitasRealizadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
