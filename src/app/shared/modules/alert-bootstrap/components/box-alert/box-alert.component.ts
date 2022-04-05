import {Component} from '@angular/core'
import {IAlert, TypeAlert} from '../../interface/alert.interface'
import {AlertService} from '../../services/alert.service'

@Component({
  selector: 'box-alert',
  template: '<div id="box-alerts"></div>',
  styles: ['#box-alerts {position:absolute;top:2rem;right:3rem;z-index:1010;}'],
})
export class BoxAlertComponent {
  constructor() {}
}
