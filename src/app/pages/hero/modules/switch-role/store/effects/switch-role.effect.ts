import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, mergeMap, of, tap} from 'rxjs'
import {TypeAlert} from 'src/app/shared/modules/alert-bootstrap/interface/alert.interface'
import {AlertService} from 'src/app/shared/modules/alert-bootstrap/services/alert.service'
import {ActionTypes} from '../../actionsTypes'
import {IRoleForCheckbox} from '../../interfaces/role-for-checkbox.interface'
import {IRoles} from '../../interfaces/roles.interface'
import {IUpdateRole} from '../../interfaces/update-role.interface'
import {SwitchRoleService} from '../../services/switch-role.service'
import {
  getRolesByUserFailureAction,
  getRolesByUserSuccessAction,
  getRolesFailureAction,
  getRolesSuccessAction,
  offRoleFailureAction,
  onRoleFailureAction,
} from '../actions/switch-role.actions'

@Injectable()
export class SwitchRoleEffect {
  constructor(
    private actions$: Actions,
    private service: SwitchRoleService,
    private alert: AlertService
  ) {}

  getRolesByUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.GET_ROLES_BY_ID_USER),
      mergeMap(({userId}) =>
        this.service.getRolesByIdUser(userId).pipe(
          map((roles: IRoleForCheckbox[]) => {
            return getRolesByUserSuccessAction({roles})
          }),
          catchError(() => {
            return of(getRolesByUserFailureAction)
          })
        )
      )
    )
  )

  getRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.GET_ROLES),
      mergeMap(() =>
        this.service.getRoles().pipe(
          map((roles: IRoles[]) => {
            return getRolesSuccessAction({roles})
          }),
          catchError((response: HttpErrorResponse) => {
            console.log('PassworChangeEffect', response.error)
            response.error.error.map((item: string) => {
              this.alert.add({type: TypeAlert.warning, message: item})
            })
            return of(getRolesFailureAction)
          })
        )
      )
    )
  )

  onRole$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ActionTypes.ON_ROLE),
        tap(({payload}: {payload: IUpdateRole}) =>
          this.service.onRole(payload)
        ),
        catchError((response: HttpErrorResponse) => {
          console.log('on role effect', response.error)
          response.error.error.map((item: string) => {
            this.alert.add({type: TypeAlert.warning, message: item})
          })
          return of(onRoleFailureAction)
        })
      ),
    {dispatch: false}
  )

  offRole$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ActionTypes.OFF_ROLE),
        tap(({payload}: {payload: IUpdateRole}) =>
          this.service.offRole(payload)
        ),
        catchError((response: HttpErrorResponse) => {
          console.log('off role effect', response.error)
          response.error.error.map((item: string) => {
            this.alert.add({type: TypeAlert.warning, message: item})
          })
          return of(offRoleFailureAction)
        })
      ),
    {dispatch: false}
  )
}
