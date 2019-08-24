import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiddleGeneratorComponent } from './pages/riddle-generator/riddle-generator.component';
import { EightBallComponent } from './pages/eight-ball/eight-ball.component';

const routes: Routes = [
  { path: 'riddlegenerator', component: RiddleGeneratorComponent },
  { path: 'eightball', component: EightBallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
