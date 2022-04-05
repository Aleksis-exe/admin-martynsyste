import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {ITicket} from 'src/app/shared/modules/autch/interfaces/ticket.interface'
import {CreateHeroService} from '../../services/create-hero.service'
import {
  addHeroAction,
  addHeroFailureAction,
  addHeroSuccessAction,
} from '../actions/create-hero.actions'

@Injectable()
export class CreateHeroEffect {
  constructor(
    private actions$: Actions,
    private service: CreateHeroService,
    private alert: AlertService,
    private router: Router
  ) {}

  createHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addHeroAction),
      switchMap(({hero}) =>
        this.service.add(hero).pipe(
          map((ticket: ITicket) => {
            this.router.navigate(['/hero/' + ticket.user.id])
            return addHeroSuccessAction()
          }),
          catchError((response: HttpErrorResponse) => {
            console.log('PassworChangeEffect', response.error)
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(addHeroFailureAction())
          })
        )
      )
    )
  )
}
