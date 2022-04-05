import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {LayoutsModule} from 'src/app/shared/layouts/layouts.module'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'

import {CreateHeroComponent} from './components/create-hero/create-hero.component'
import {LoaderModule} from 'src/app/modules/loader/loader.module'
import {CreateHeroService} from './services/create-hero.service'
import {FormCreateHeroComponent} from './components/form-create-hero/form-create-hero.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CreateHeroEffect} from './store/effects/create-hero.effect'

const routes: Routes = [{path: 'create-hero', component: CreateHeroComponent}]

@NgModule({
  declarations: [CreateHeroComponent, FormCreateHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('create-hero', reducer),
    EffectsModule.forFeature([CreateHeroEffect]),
    LayoutsModule,
    LoaderModule,
  ],
  providers: [CreateHeroService],
})
export class CreateHeroModule {}
