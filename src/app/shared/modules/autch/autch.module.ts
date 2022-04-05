import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducer} from './store/reducer'
import {AutchEffect} from './store/effects/autch.effects'
import {AutchService} from './services/autch.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('autch', reducer),
    EffectsModule.forFeature([AutchEffect]),
  ],
  providers: [AutchService],
})
export class AutchModule {}
