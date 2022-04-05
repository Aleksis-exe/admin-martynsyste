import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PageLayoutComponent} from './components/page-layout/page-layout.component'
import {EmptyLayoutComponent} from './components/empty-layout/empty-layout.component'
import {AutchModule} from '../modules/autch/autch.module'
import {HeaderModule} from './modules/header/header.module'
import {SidebarModule} from './modules/sidebar/sidebar.module'
import {FooterModule} from './modules/footer/footer.module'

@NgModule({
  declarations: [PageLayoutComponent, EmptyLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    AutchModule,
  ],
  exports: [PageLayoutComponent, EmptyLayoutComponent],
})
export class LayoutsModule {}
