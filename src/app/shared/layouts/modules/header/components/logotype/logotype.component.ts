import {Component, OnInit} from '@angular/core'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'header-logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss'],
})
export class LogotypeComponent implements OnInit {
  urlLogo: string = '/images'
  constructor() {}

  ngOnInit(): void {
    if (environment.production) {
      this.urlLogo = '/app/admin-martynsystem/assets'
    }
    else{
      this.urlLogo = '/dev/assets'
    }
  }
}
