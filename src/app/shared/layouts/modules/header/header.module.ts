import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from './components/header/header.component'
import {LogotypeComponent} from './components/logotype/logotype.component';
import { AvatarAutchUserComponent } from './components/avatar-autch-user/avatar-autch-user.component'

@NgModule({
  declarations: [HeaderComponent, LogotypeComponent, AvatarAutchUserComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
