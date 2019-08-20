import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiddleGeneratorComponent } from './pages/riddle-generator/riddle-generator.component';

const routes: Routes = [
  { path: 'riddlegenerator', component: RiddleGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
