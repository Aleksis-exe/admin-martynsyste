import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {IRoles} from '../../interfaces/roles.interface'
import {ISwitchRoleState} from '../../interfaces/switch-role-state.interface'
import {rolesSelector} from '../../selector'
import {getRolesAction} from '../../store/actions/switch-role.actions'

@Component({
  selector: 'switch-role-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  roles$: Observable<IRoles[]> | null = null
  constructor(private store: Store<ISwitchRoleState>) {}

  ngOnInit(): void {
    this.initializeValue()
  }

  initializeValue(): void {
    this.store.dispatch(getRolesAction())
    this.roles$ = this.store.select(rolesSelector)
  }
}
