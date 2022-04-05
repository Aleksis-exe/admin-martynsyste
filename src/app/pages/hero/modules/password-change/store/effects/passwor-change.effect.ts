import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, mergeMap, of} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {PasswordChangeService} from '../../services/password-change.service'
import {
  changePasswordFailureAction,
  changePasswordSuccessAction,
} from '../actions/passwor-change.actions'
import {ActionsType} from '../actionsType'

@Injectable()
export class PassworChangeEffect {
  constructor(
    private actions$: Actions,
    private service: PasswordChangeService,
    private alert: AlertService
  ) {}
  change$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionsType.CHANGE_PASS),
      mergeMap(({payload}) =>
        this.service.changepassword(payload).pipe(
          map(() => {
            this.alert.add({
              type: TypeAlert.success,
              message: 'пароль обновлен',
            })
            return changePasswordSuccessAction()
          }),
          catchError((response: HttpErrorResponse) => {
            console.log('PassworChangeEffect', response.error)
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(changePasswordFailureAction())
          })
        )
      )
    )
  )
}
