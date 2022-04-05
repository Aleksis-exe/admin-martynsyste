import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PasswordChangeComponent} from './components/password-change/password-change.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {PasswordChangeService} from './services/password-change.service'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {PassworChangeEffect} from './store/effects/passwor-change.effect'
import {reducer} from './store/reducer'

@NgModule({
  declarations: [PasswordChangeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('password-change', reducer),
    EffectsModule.forFeature([PassworChangeEffect]),
  ],
  exports: [PasswordChangeComponent],
  providers: [PasswordChangeService],
})
export class PasswordChangeModule {}
