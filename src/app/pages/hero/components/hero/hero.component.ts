import {Component, OnInit} from '@angular/core'
import {FormGroup} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {IHero, ITicketHero} from '../../interfaces/response-hero.interface'
import {IUpdateHero} from '../../interfaces/updateHero.interface'
import {getHeroAction, updateHeroAction} from '../../store/actions/hero.actions'
import {isLoadingSelector, isTicketSelector} from '../../store/selectors'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  id: string
  isloader$: Observable<boolean> | null = null
  ticket$: Observable<ITicketHero | null> | null = null
 // hero$: Observable<IHero | undefined> | null = null
  form!: FormGroup

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<ITicketHero>
  ) {
    this.id = this.activateRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.store.dispatch(getHeroAction({idHero: this.id}))
    this.isloader$ = this.store.pipe(select(isLoadingSelector))
    this.ticket$ = this.store.pipe(select(isTicketSelector))
  }

  onSubmit(update: IUpdateHero): void {
    update.id = this.id
    console.log('update', {update})
    this.store.dispatch(updateHeroAction({update}))
  }
}
