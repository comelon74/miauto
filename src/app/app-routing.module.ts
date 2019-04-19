import { LoginComponent } from './pages/login/login.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';

const app_routes:Routes=[
    {path:'',component:InicioComponent},
    {path:'mapa',component:MapaComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'conocenos',component:ConocenosComponent},
    {path:'login',component:LoginComponent},
    {path:'**',pathMatch:'full', redirectTo:''}
]

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
      RouterModule
    ]
})


export class AppRoutingModule{

}