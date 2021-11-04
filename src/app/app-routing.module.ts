import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PremierComponent} from "./premier/premier.component"
import {DeuxiemeComponent} from "./deuxieme/deuxieme.component"

const routes: Routes = [
{
  path: 'premier',
  component: PremierComponent
},
{
  path: 'deuxieme',
  component: DeuxiemeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
