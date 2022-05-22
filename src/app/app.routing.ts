import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditarComponent } from './components/editar/editar.component';
import { BodyComponent } from './components/body/body.component';


const appRoutes : Routes = [
    {path : "", component : BodyComponent},
    {path :"log-in",component :LogInComponent},
    {path : "registro", component : RegistroComponent},
    {path : "perfil", component : PerfilComponent},
    {path: "logout", component : LogoutComponent},
    {path: "editar", component : EditarComponent}

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);