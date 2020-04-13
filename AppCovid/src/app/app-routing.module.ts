import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PaisComponent } from './componentes/pais/pais.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pais',component:PaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
