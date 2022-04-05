import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AccessDeniedComponent} from './components/access-denied/access-denied.component'
import {RouterModule, Routes} from '@angular/router'
import {LayoutsModule} from 'src/app/shared/layouts/layouts.module'

const routes: Routes = [
  {path: 'accessdenied', component: AccessDeniedComponent},
]

@NgModule({
  declarations: [AccessDeniedComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutsModule],
  exports: [AccessDeniedComponent],
})
export class AccessDeniedModule {}
