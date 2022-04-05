import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {IAddHero} from '../../interfaces/add-hero.interface'
import {addHeroAction} from '../../store/actions/create-hero.actions'

@Component({
  selector: 'create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
})
export class CreateHeroComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  create_hero(hero: IAddHero): void {
    console.log('create_hero.', hero)
    this.store.dispatch(addHeroAction({hero}))
  }
}
