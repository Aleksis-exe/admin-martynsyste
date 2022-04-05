import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BoxAlertComponent} from './components/box-alert/box-alert.component'
import {AlertService} from './services/alert.service'

@NgModule({
  declarations: [BoxAlertComponent],
  imports: [CommonModule],
  exports: [BoxAlertComponent],
  providers: [AlertService],
})
export class AlertBootstrapModule {}
