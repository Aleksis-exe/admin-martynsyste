import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() idUser: string | undefined =
    'https://head-shot.ru/files/avatars/1573406861.jpg'
  @Input() fullname: string | undefined = ''

  constructor() {}

  ngOnInit(): void {}
}
