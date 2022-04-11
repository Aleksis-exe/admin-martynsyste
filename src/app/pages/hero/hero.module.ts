import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeroComponent} from './components/hero/hero.component'
import {RouterModule, Routes} from '@angular/router'
import {HeroService} from './services/hero.service'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducer'
import {EffectsModule} from '@ngrx/effects'
import {HeroEffect} from './store/effects/hero.efect'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {SwitchRoleModule} from './modules/switch-role/switch-role.module'
import {PasswordChangeModule} from './modules/password-change/password-change.module'
import {LayoutsModule} from 'src/app/shared/layouts/layouts.module'
import {LoaderModule} from 'src/app/modules/loader/loader.module'
import {DangerZoneComponent} from './components/danger-zone/danger-zone.component'
import {UpdateHeroComponent} from './components/update-hero/update-hero/update-hero.component'
import {FormUpdateHeroComponent} from './components/update-hero/form-update-hero/form-update-hero.component'

const routes: Routes = [{path: 'hero/:id', component: HeroComponent}]

@NgModule({
  declarations: [
    HeroComponent,
    DangerZoneComponent,
    UpdateHeroComponent,
    FormUpdateHeroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('hero', reducer),
    EffectsModule.forFeature([HeroEffect]),
    LayoutsModule,
    LoaderModule,
    SwitchRoleModule,
    PasswordChangeModule,
  ],
  providers: [HeroService],
})
export class HeroModule {}
