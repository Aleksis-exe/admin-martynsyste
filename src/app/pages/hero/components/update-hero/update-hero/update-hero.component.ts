import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {
  IHero,
  ITicketHero,
} from 'src/app/pages/hero/interfaces/response-hero.interface'
import {IUpdateHero} from '../../../interfaces/update-hero.interface'
import {HeroService} from '../../../services/hero.service'
import {updateHeroAction} from '../../../store/actions/hero.actions'

@Component({
  selector: 'update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.scss'],
})
export class UpdateHeroComponent implements OnInit {
  @Input() hero$: IHero | undefined = undefined
  constructor(
    private store: Store<ITicketHero>,
    private service: HeroService
  ) {}

  ngOnInit(): void {}

  onSubmit(hero: IUpdateHero): void {
    console.log('UpdateHeroComponent.onSubmit()', hero)
    this.store.dispatch(updateHeroAction({hero}))
  }
}
