import {Component, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {IRoleForCheckbox} from '../../interfaces/role-for-checkbox.interface'
import {ISwitchRoleState} from '../../interfaces/switch-role-state.interface'
import {IUpdateRole} from '../../interfaces/update-role.interface'
import {isLoadingSelector, rolesByUserSelector} from '../../selector'
import {
  getRolesByUserAction,
  offRoleAction,
  onRoleAction,
} from '../../store/actions/switch-role.actions'

@Component({
  selector: 'module-switch-role',
  templateUrl: './switch-role.component.html',
  styleUrls: ['./switch-role.component.scss'],
})
export class SwitchRoleComponent implements OnInit {
  id$: string
  rolesByUser$: Observable<IRoleForCheckbox[] | null> | null = null
  isLoader$: Observable<boolean> | undefined
  formDelete!: FormGroup

  constructor(
    private store: Store<ISwitchRoleState>,
    private activateRoute: ActivatedRoute,
    private alert: AlertService
  ) {
    this.id$ = this.activateRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeForm()
  }

  initializeForm(): void {
    this.formDelete = new FormGroup({
      selectRole: new FormControl('', Validators.required),
    })
  }

  initializeValues(): void {
    this.store.dispatch(getRolesByUserAction({userId: this.id$}))
    this.rolesByUser$ = this.store.pipe(select(rolesByUserSelector))
    this.isLoader$ = this.store.pipe(select(isLoadingSelector))
  }

  get selectRole(): AbstractControl {
    return this.formDelete.controls['selectRole']
  }

  onDeleteRole() {
    if (this.selectRole.invalid) {
      this.alert.add({type: TypeAlert.danger, message: 'группа не выбрана'})
    }
    if (this.selectRole.valid) {
      const payload: IUpdateRole = {
        id: this.id$,
        roleName: this.selectRole.value,
      }
      this.store.dispatch(offRoleAction({payload}))
    }
  }
}
