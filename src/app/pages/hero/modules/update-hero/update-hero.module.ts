import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {UpdateHeroComponent} from './components/update-hero/update-hero.component'
import {FormUpdateHeroComponent} from './components/form-update-hero/form-update-hero.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [UpdateHeroComponent, FormUpdateHeroComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [UpdateHeroComponent],
})
export class UpdateHeroModule {}
