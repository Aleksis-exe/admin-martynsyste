import {Component, Input, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {IHero} from 'src/app/pages/hero/interfaces/response-hero.interface'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'form-update-hero',
  templateUrl: './form-update-hero.component.html',
  styleUrls: ['./form-update-hero.component.scss'],
})
export class FormUpdateHeroComponent implements OnInit {
  @Input() hero: IHero | undefined = undefined

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
      ]),
      lastName: new FormControl(this.hero?.lastName),
      firstName: new FormControl(this.hero?.firstName, Validators.required),
    })
  }

  validator(controlName: string): string | undefined {
    if (
      this.form.get(controlName)?.invalid &&
      (this.form.get(controlName)?.touched || this.form.get(controlName)?.dirty)
    )
      return 'is-invalid'
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
}
