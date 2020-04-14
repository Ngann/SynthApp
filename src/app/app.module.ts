import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { MidiInputService } from './service/pipeline/inputs/midi-input.service';
import { AudioOutputService } from './service/pipeline/outputs/audio-output.service';
import { SynthesisService } from './service/pipeline/synthesis/synthesis.service';
import { PipelineService } from './service/pipeline/pipeline.service';
import { DrumPCMTriggeringService } from './service/pipeline/synthesis/drum-pcm-triggering.service';
import { BluesKeyboardComponent } from './keyboard/blues/blues-keyboard.component';
import { IonianKeyboardComponent } from './keyboard/ionian/ionian-keyboard.component';
import { MinorBluesKeyboardComponent } from './keyboard/minorblues/minor-blues-keyboard.component';
import { DrumSetComponent } from './keyboard/drumset/drum-set.component';
import { PianoKeyboardComponent } from './keyboard/piano/piano-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    BluesKeyboardComponent,
    DrumSetComponent,
    IonianKeyboardComponent,
    MinorBluesKeyboardComponent,
    PianoKeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MidiInputService,
    AudioOutputService,
    SynthesisService,
    PipelineService,
    DrumPCMTriggeringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
