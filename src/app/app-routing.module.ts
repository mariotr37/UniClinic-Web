import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { AgendarDiaLibreComponent } from './pagina/agendar-dia-libre/agendar-dia-libre.component';
import { AtenderCitaComponent } from './pagina/atender-cita/atender-cita.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import { CitasCompletadasComponent } from './pagina/citas-completadas/citas-completadas.component';
import { CitasPendientesComponent } from './pagina/citas-pendientes/citas-pendientes.component';
import { CitasRealizadasComponent } from './pagina/citas-realizadas/citas-realizadas.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { DetalleIncapacidadComponent } from './pagina/detalle-incapacidad/detalle-incapacidad.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { DetalleRecetaComponent } from './pagina/detalle-receta/detalle-receta.component';
import { EditarCuentaComponent } from './pagina/editar-cuenta/editar-cuenta.component';
import { EliminarCuentaComponent } from './pagina/eliminar-cuenta/eliminar-cuenta.component';
import { HistorialPacienteComponent } from './pagina/historial-paciente/historial-paciente.component';
import { InicioMedicoComponent } from './pagina/inicio-medico/inicio-medico.component';
import { InicioPacienteComponent } from './pagina/inicio-paciente/inicio-paciente.component';
import { ListarPqrsComponent } from './pagina/listar-pqrs/listar-pqrs.component';
import { RecuperacionCuentaComponent } from './pagina/recuperacion-cuenta/recuperacion-cuenta.component';
import { ResponderPqrsComponent } from './pagina/responder-pqrs/responder-pqrs.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "agendar-cita", component: AgendarCitaComponent },
  { path: "agendar-dia-libre", component: AgendarDiaLibreComponent },
  { path: "atender-cita", component: AtenderCitaComponent },
  { path: "cambiar-password", component: CambiarPasswordComponent },
  { path: "citas-completadas", component: CitasCompletadasComponent },
  { path: "citas-pendientes", component: CitasPendientesComponent },
  { path: "citas-realizadas", component: CitasRealizadasComponent },
  { path: "crear-pqrs", component: CrearPqrsComponent },
  { path: "detalle-cita", component: DetalleCitaComponent },
  { path: "detalle-incapacidad", component: DetalleIncapacidadComponent },
  { path: "detalle-pqrs", component: DetallePqrsComponent },
  { path: "detalle-receta", component: DetalleRecetaComponent },
  { path: "editar-cuenta", component: EditarCuentaComponent },
  { path: "eliminar-cuenta", component: EliminarCuentaComponent },
  { path: "historial-paciente", component: HistorialPacienteComponent },
  { path: "inicio-medico", component: InicioMedicoComponent },
  { path: "inicio-paciente", component: InicioPacienteComponent },
  { path: "listar-pqrs", component: ListarPqrsComponent },
  { path: "recuperacion-cuenta", component: RecuperacionCuentaComponent },
  { path: "responder-pqrs", component: ResponderPqrsComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
