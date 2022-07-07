import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import {IHero} from 'src/app/pages/hero/interfaces/response-hero.interface'
import { maskString } from 'src/app/shared/expansion'
import {environment} from 'src/environments/environment'
import {IUpdateHero} from '../../../interfaces/update-hero.interface'

@Component({
  selector: 'form-update-hero',
  templateUrl: './form-update-hero.component.html',
  styleUrls: ['./form-update-hero.component.scss'],
})
export class FormUpdateHeroComponent implements OnInit {
  @Input() hero: IHero | undefined = undefined

  @Output('onSubmit') onUpdateSubmit = new EventEmitter<IUpdateHero>()

  form!: FormGroup
  blob: Blob | null = null // тут будет хранится портрет пользователя
  srcImage: string = '' // адрес портрет пользователя

  constructor() {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValue()
  }

  initializeValue(): void {
    this.srcImage = this.toSrcImage()
  }

  initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl(this.hero?.email, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(this.hero?.phoneNumber, [
        Validators.required,
        Validators.pattern(
          '[+7-8]{1,2}[(][0-9]{3}[)][0-9]{3}[-][0-9]{2}[-][0-9]{2}'
        ),
      ]),
      lastName: new FormControl(this.hero?.lastName),
      firstName: new FormControl(this.hero?.firstName, Validators.required),
      file: new FormControl(),
    })
  }

  validator(controlName: string): string | undefined {
    const control: AbstractControl | null = this.form.get(controlName)
    if (control !== null) {
      if (
        control.invalid &&
        (control.touched || control.dirty || control.pristine)
      )
        return 'is-invalid'
    }
    return
  }

  setSrcImage(dataUrl: string = ''): void {
    this.srcImage = this.toSrcImage(dataUrl)
  }

  toSrcImage(dataUrl: string = ''): string {
    if (dataUrl === '') {
      return `${environment.apiUrl}/Users/icon/${this.hero?.id}?dd=${
        Math.random() % 1000
      }`
    }
    return dataUrl
  }

  get fileControl(): AbstractControl {
    return this.form.controls['file']
  }

  buffSrcImage() {
    return (datUrl: string): void => {
      this.setSrcImage(datUrl)
    }
  }

  getImage(event: Event): void {
    const element = event.currentTarget as HTMLInputElement
    let fileList: FileList | null = element.files
    const buf = this.buffSrcImage()
    if (fileList) {
      this.blob = fileList[0]
      let reader = new FileReader()
      reader.readAsDataURL(fileList[0])
      reader.onload = function () {
        if (typeof reader.result === 'string') buf(reader.result)
      }
      reader.onerror = function () {
        console.log(reader.error)
      }
    }
  }

  onSubmit(): void {
    const model: IUpdateHero = {
      id: this.hero?.id ? this.hero?.id : '',
      email: this.form.get('email')?.value,
      phoneNumber: this.form.get('phoneNumber')?.value,
      lastName: this.form.get('lastName')?.value,
      firstName: this.form.get('firstName')?.value,
      icon: this.blob ? this.blob : undefined,
    }
    if (this.form.valid) this.onUpdateSubmit.emit(model)
  }

  validSubmit(): boolean {
    return !(
      (this.form.touched && this.form.valid) ||
      (this.fileControl.dirty && this.form.valid)
    )
  }
  format(e: any) {
    this.form.controls['phoneNumber'].setValue(maskString(e.target.value,'+#(###)###-##-##','+()-'))
  }
}
