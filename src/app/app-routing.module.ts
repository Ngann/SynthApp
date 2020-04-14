import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PianoKeyboardComponent, BluesKeyboardComponent, IonianKeyboardComponent, MinorBluesKeyboardComponent, DrumSetComponent } from './keyboard';


const routes = [
  {path: '', redirectTo: 'drums', pathMatch: 'full'},
  {path: 'piano', component: PianoKeyboardComponent},
  {path: 'blues', component: BluesKeyboardComponent},
  {path: 'ionian', component: IonianKeyboardComponent},
  {path: 'minorblues', component: MinorBluesKeyboardComponent},
  {path: 'drums', component: DrumSetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
