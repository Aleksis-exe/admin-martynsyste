import {Component, Input, OnInit} from '@angular/core'
import {IRoleForCheckbox} from '../../interfaces/role-for-checkbox.interface'

@Component({
  selector: 'switch-role-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent implements OnInit {
  @Input() roles: IRoleForCheckbox[] | null = null
  constructor() {}

  ngOnInit(): void {
  }
}
