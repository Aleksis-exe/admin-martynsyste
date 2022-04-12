import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {IHero} from '../../interfaces/response-hero.interface'
import {
  deleteHeroAction,
  disableHeroAction,
} from '../../store/actions/hero.actions'

@Component({
  selector: 'hero-danger-zone',
  templateUrl: './danger-zone.component.html',
  styleUrls: ['./danger-zone.component.scss'],
})
export class DangerZoneComponent implements OnInit {
  @Input('hero') hero: IHero | undefined
  @Input('disable') disable: boolean | undefined

  constructor(private store: Store) {}

  ngOnInit(): void {}

  get textDisable(): string {
    if (this.disable) return 'подключить пользователя'
    return 'отключить пользователя'
  }

  onDisable(): void {
    if (this.disable !== undefined && this.hero !== undefined)
      this.store.dispatch(
        disableHeroAction({idHero: this.hero.id, disable: !this.disable})
      )
  }

  onDelete(): void {
    if (this.hero !== undefined)
      if (confirm(`Удалить пользователя ${this.hero.fullName} ?`))
        this.store.dispatch(deleteHeroAction({hero: this.hero}))
  }
}
