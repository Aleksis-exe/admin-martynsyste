import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ListHeroesComponent} from './components/list-heroes/list-heroes.component'
import {RouterModule, Routes} from '@angular/router'
import {ItemHeroComponent} from './components/item-hero/item-hero.component'
import {HeroesService} from './services/heroes.service'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {HeroesEffect} from './store/effects/heroes.effect'
import {LayoutsModule} from 'src/app/shared/layouts/layouts.module'
import {LoaderModule} from 'src/app/modules/loader/loader.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {SearchHeroComponent} from './components/search-hero/search-hero.component'
import {HeroesComponent} from './components/heroes/heroes.component'

const routes: Routes = [{path: '', component: HeroesComponent}]

@NgModule({
  declarations: [
    ListHeroesComponent,
    ItemHeroComponent,
    SearchHeroComponent,
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('heroes', reducer),
    EffectsModule.forFeature([HeroesEffect]),
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    LoaderModule,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
