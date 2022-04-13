import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SwitchRoleService} from './services/switch-role.service'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducer} from './reducer'
import {SwitchRoleEffect} from './store/effects/switch-role.effect'
import {SwitchRoleComponent} from './components/switch-role/switch-role.component'
import {AddRoleComponent} from './components/add-role/add-role.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AddRoleFormComponent} from './components/add-role-form/add-role-form.component'

@NgModule({
  declarations: [SwitchRoleComponent, AddRoleComponent, AddRoleFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('switch-role', reducer),
    EffectsModule.forFeature([SwitchRoleEffect]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SwitchRoleService],
  exports: [SwitchRoleComponent],
})
export class SwitchRoleModule {}
