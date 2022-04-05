import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {ResponseHeroesType} from '../../interfaces/ResponseHeroesType'
import {
  getHeroesrAction,
  searchHeroesByFullName,
} from '../../store/actions/heroes.actions'
import {
  isFoundHeroes,
  isHeroesSelector,
  isLoadingSelector,
} from '../../store/selector'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  isloader$!: Observable<boolean>
  heroes$!: Observable<ResponseHeroesType>
  constructor(private store: Store) {}

  initializeValues(): void {
    this.heroes$ = this.store.pipe(select(isHeroesSelector))
    this.isloader$ = this.store.pipe(select(isLoadingSelector))
    this.store.dispatch(getHeroesrAction())
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  onChange(search: string): void {
    this.store.dispatch(searchHeroesByFullName({search}))
    this.heroes$ = this.store.pipe(select(isFoundHeroes))
  }
}
