import {Component, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {changePasswordAction} from '../../store/actions/passwor-change.actions'
import {isLoaderSelector} from '../../store/selector'

@Component({
  selector: 'hero-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
  form!: FormGroup
  keyUser: string
  isLoader$: Observable<boolean> | null = null
  constructor(
    private alert: AlertService,
    private activateRoute: ActivatedRoute,
    private store: Store
  ) {
    this.keyUser = this.activateRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.initializeValue()
    this.initializeForm()
  }

  private initializeValue(): void {
    this.isLoader$ = this.store.pipe(select(isLoaderSelector))
  }

  private initializeForm(): void {
    this.form = new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
      },
      {validators: this.matchingPasswordsValidator}
    )
  }

  matchingPasswords(controlName: string): string | undefined {
    if (this.form.errors?.['matchingPasswords']) return 'is-invalid'
    return this.validator(controlName)
  }

  matchingPasswordsValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const pass = control.get('password')
    const confirm = control.get('confirmPassword')
    return pass?.value === confirm?.value ? null : {matchingPasswords: true}
  }

  validator(controlName: string): string | undefined {
    if (
      this.form.get(controlName)?.invalid &&
      (this.form.get(controlName)?.touched || this.form.get(controlName)?.dirty)
    )
      return 'is-invalid'
    //  if (this.form.invalid && this.form.touched) return 'is-invalid'
    return
  }

  onSubmit(): void {
    const pass = this.form.get('password')?.value
    const confirm = this.form.get('confirmPassword')?.value
    if (pass !== confirm) {
      this.alert.add({
        type: TypeAlert.warning,
        message: 'поле "пароль" не совподает с полем "подтвердите пароль"',
      })
      return
    }

    this.store.dispatch(
      changePasswordAction({payload: {keyUser: this.keyUser, pass}})
    )
    this.form.reset()
  }

  get password(): AbstractControl | null {
    return this.form.get('password')
  }

  get confirmPassword(): AbstractControl | null {
    return this.form.get('confirmPassword')
  }
}
