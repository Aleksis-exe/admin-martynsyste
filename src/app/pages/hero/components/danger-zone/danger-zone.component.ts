import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
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
  @Input('idHero') idHero: string | undefined
  @Input('disable') disable: boolean | undefined

  constructor(private store: Store) {}

  ngOnInit(): void {}

  get textDisable(): string {
    if (this.disable) return 'подключить пользователя'
    return 'отключить пользователя'
  }

  onDisable(): void {
    if (this.disable !== undefined && this.idHero !== undefined)
      this.store.dispatch(
        disableHeroAction({idHero: this.idHero, disable: !this.disable})
      )
  }

  onDelete(): void {
    if (this.idHero !== undefined)
      this.store.dispatch(deleteHeroAction({idHero: this.idHero}))
  }
}
