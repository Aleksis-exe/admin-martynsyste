import {Component, Input, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {IRoles} from '../../interfaces/roles.interface'
import {onRoleAction} from '../../store/actions/switch-role.actions'

@Component({
  selector: 'switch-role-add-role-form',
  templateUrl: './add-role-form.component.html',
  styleUrls: ['./add-role-form.component.scss'],
})
export class AddRoleFormComponent implements OnInit {
  @Input() roles$: IRoles[] | null = null
  @Input() idUSer: string = ''
  form!: FormGroup
  roles: IRoles[] | null | undefined = null

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValue()
  }

  initializeValue(): void {
    this.roles = this.roles$
  }

  initializeForm(): void {
    this.form = new FormGroup({
      search: new FormControl(''),
      select: new FormControl(null, Validators.required),
    })
  }

  onSearch(): void {
    this.roles = this.roles$?.filter((item: IRoles) =>
      item.description.includes(this.form.get('search')?.value)
    )
  }

  onSubmit(): void {
    console.log('valid form', this.form.valid)
    if (this.form.valid)
      this.store.dispatch(
        onRoleAction({
          payload: {id: this.idUSer, roleName: this.form.get('select')?.value},
        })
      )
  }
}
