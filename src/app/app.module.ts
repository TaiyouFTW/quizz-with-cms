import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Font Awesome
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorInterceptor } from "./_shared/interceptors/error.interceptor";
import { LayoutComponent } from './_shared/components/_layout/layout.component';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./_shared/modules/material.module";
import { WavesComponent } from './_shared/components/waves/waves.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, StartComponent, WavesComponent, GameComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: ErrorInterceptor
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
