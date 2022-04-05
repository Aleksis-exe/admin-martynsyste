import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-avatar-autch-user',
  templateUrl: './avatar-autch-user.component.html',
  styleUrls: ['./avatar-autch-user.component.scss'],
})
export class AvatarAutchUserComponent implements OnInit {
  @Input() fullname: string | null | undefined = null
  @Input() idUser: string | null | undefined = null

  constructor() {}

  ngOnInit(): void {}
}
