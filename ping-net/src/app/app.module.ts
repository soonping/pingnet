import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RiddleGeneratorComponent } from './pages/riddle-generator/riddle-generator.component';
import { EightBallComponent } from './pages/eight-ball/eight-ball.component';

@NgModule({
  declarations: [
    AppComponent,
    RiddleGeneratorComponent,
    EightBallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
