import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, mergeMap, of, switchMap} from 'rxjs'
import {ITicketHero} from '../../interfaces/response-hero.interface'
import {HeroService} from '../../services/hero.service'
import {
  getHeroFailureAction,
  getHeroSuccessAction,
} from '../actions/hero.actions'
import {ActionTypes} from '../actionsType'

@Injectable()
export class HeroEffect {
  hero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.GET_HERO),
      mergeMap(({idHero}) =>
        this.service.getHero(idHero).pipe(
          map((ticket: ITicketHero) => {
            return getHeroSuccessAction({ticket})
          }),
          catchError(() => {
            return of(getHeroFailureAction)
          })
        )
      )
    )
  )

  constructor(private actions$: Actions, private service: HeroService) {}
}
