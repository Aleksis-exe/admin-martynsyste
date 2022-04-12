import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import {catchError, map, mergeMap, of, switchMap, tap} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {ITicketHero} from '../../interfaces/response-hero.interface'
import {HeroService} from '../../services/hero.service'
import {
  deleteHeroAction,
  deleteHeroailureAction,
  deleteHeroSuccessAction,
  disableHeroAction,
  disableHeroFailureAction,
  disableHeroSuccessAction,
  getHeroAction,
  getHeroFailureAction,
  getHeroSuccessAction,
  updateHeroAction,
  updateHeroFailureAction,
  updateHeroSuccessAction,
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

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHeroAction),
      mergeMap((args) =>
        this.service.delete(args.hero.id).pipe(
          map(() => {
            return deleteHeroSuccessAction(args)
          }),
          catchError((response: HttpErrorResponse) => {
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(deleteHeroailureAction())
          })
        )
      )
    )
  )

  deleteSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteHeroSuccessAction),
        tap((args) => {
          this.alert.add({
            type: TypeAlert.success,
            message: `Пользователь удален безвозвратно <b>${args.hero.userName}</b> <b>${args.hero.fullName}</b>`,
          })
          this.router.navigate(['/'])
        })
      ),
    {dispatch: false}
  )

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateHeroAction),
      switchMap(({hero}) =>
        this.service.updateHero(hero).pipe(
          map((ticket: ITicketHero) => {
            return updateHeroSuccessAction({ticket})
          }),
          catchError((response: HttpErrorResponse) => {
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(updateHeroFailureAction())
          })
        )
      )
    )
  )

  disable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(disableHeroAction),
      switchMap((args) =>
        this.service.disable(args.idHero, args.disable).pipe(
          map(() => {
            return getHeroAction({idHero: args.idHero})
          }),
          catchError((response: HttpErrorResponse) => {
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(disableHeroFailureAction())
          })
        )
      )
    )
  )

  constructor(
    private alert: AlertService,
    private actions$: Actions,
    private service: HeroService,
    private router: Router,
    private store: Store
  ) {}
}
