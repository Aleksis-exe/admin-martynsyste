import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {IHero} from '../../interfaces/heroes.interface'
import {HeroesService} from '../../services/heroes.service'
import {
  getHeroesrAction,
  getHeroesrFailureAction,
  getHeroesrSuccessAction,
} from '../actions/heroes.actions'
import {ActionTypes} from '../actionsTypes'

@Injectable()
export class HeroesEffect {
  heroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesrAction),
      switchMap(() =>
        this.service.getHeroes().pipe(
          map((heroes: IHero[]) => {
            return getHeroesrSuccessAction({heroes})
          }),
          catchError((response: HttpErrorResponse) => {
            console.log('PassworChangeEffect', response.error)
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(getHeroesrFailureAction())
          })
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private service: HeroesService,
    private alert: AlertService
  ) {}
}
