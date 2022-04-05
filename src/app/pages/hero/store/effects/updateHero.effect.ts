import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {map, switchMap} from 'rxjs'
import {ITicketHero} from '../../interfaces/response-hero.interface'
import {HeroService} from '../../services/hero.service'
import {updateHeroSuccessAction} from '../actions/hero.actions'
import {ActionTypes} from '../actionsType'

@Injectable()
export class UpdateHeroEffect {
  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.UPDATE_HERO),
      switchMap(({update}) =>
        this.service.updateHero(update).pipe(
          map((ticket: ITicketHero) => {
            return updateHeroSuccessAction({ticket})
          })
        )
      )
    )
  )

  constructor(private actions$: Actions, private service: HeroService) {}
}
