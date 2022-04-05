import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = []

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SidebarComponent],
})
export class SidebarModule {}
