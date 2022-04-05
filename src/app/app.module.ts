import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from 'src/environments/environment'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AccessDeniedModule} from './modules/access-denied/access-denied.module'
import { CreateHeroModule } from './pages/create-hero/create-hero.module'
import {HeroModule} from './pages/hero/hero.module'
import {HeroesModule} from './pages/heroes/heroes.module'
import {LayoutsModule} from './shared/layouts/layouts.module'
import {AlertBootstrapModule} from './shared/modules/alert-bootstrap/alert-bootstrap.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AlertBootstrapModule,
    LayoutsModule,
    AccessDeniedModule,
    HeroesModule,
    HeroModule,
    CreateHeroModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
