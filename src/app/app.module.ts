import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SworCharacterSelectorComponent } from './swor-character-selector/swor-character-selector.component';

import { SworCharacterService } from './swor-character.service';
import { LandingComponent } from './landing/landing.component';
import { OuterRimComponent } from './outer-rim/outer-rim.component';

@NgModule({
  declarations: [
    AppComponent,
    SworCharacterSelectorComponent,
    LandingComponent,
    OuterRimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [SworCharacterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
