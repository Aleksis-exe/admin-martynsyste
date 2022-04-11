import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import {IAddHero} from '../../interfaces/add-hero.interface'

@Component({
  selector: 'form-create-hero',
  templateUrl: './form-create-hero.component.html',
  styleUrls: ['./form-create-hero.component.scss'],
})
export class FormCreateHeroComponent implements OnInit {
  @Output('onSubmit') onCreateHeroSubmitEvent = new EventEmitter<IAddHero>()

  form!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        passwordConfirmation: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        login: new FormControl('', [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._]{1,40}'),
        ]),
        domain: new FormControl('lesorub59.com', Validators.required),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '[+7-8]{1,2}[(][0-9]{3}[)][0-9]{3}[-][0-9]{2}[-][0-9]{2}'
          ),
        ]),
      },
      {validators: this.matchingPasswordsValidator}
    )
  }

  validator(controlName: string): string | undefined {
    if (
      this.form.get(controlName)?.invalid &&
      (this.form.get(controlName)?.touched || this.form.get(controlName)?.dirty)
    )
      return 'is-invalid'
    return
  }

  matchingPasswords(controlName: string): string | undefined {
    if (this.form.errors?.['matchingPasswords']) return 'is-invalid'
    return this.validator(controlName)
  }

  onSubmit(): void {
    console.log(this.form)
    const hero: IAddHero = {
      ...this.form.value,
      email: `${this.form.get('login')?.value}@${
        this.form.get('domain')?.value
      }`,
      userName: `${this.form.get('login')?.value}`,
    }
    this.onCreateHeroSubmitEvent.emit(hero)
  }

  matchingPasswordsValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const pass = control.get('password')
    const confirm = control.get('passwordConfirmation')
    return pass?.value === confirm?.value ? null : {matchingPasswords: true}
  }
}
