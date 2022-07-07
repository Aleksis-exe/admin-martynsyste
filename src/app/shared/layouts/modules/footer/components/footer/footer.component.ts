import {Component, OnInit} from '@angular/core'
import setup from '../../../../../../../../package.json'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  version: string = ''
  constructor() {}

  ngOnInit(): void {
    this.version = setup.version.toString()
  }
}
