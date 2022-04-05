import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {ITicket} from '../../interfaces/ticket.interface'
import {AutchService} from '../../services/autch.service'
import {
  getTicketAction,
  getTicketFailureAction,
  getTicketSuccessAction,
} from '../actions/autch.actions'

@Injectable()
export class AutchEffect {
  constructor(
    private actions$: Actions,
    private service: AutchService,
    private router: Router
  ) {}

  autch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTicketAction),
      switchMap(() =>
        this.service.getTicket().pipe(
          map((ticket: ITicket) => {
            console.log('ticket', ticket)
            if (!contains(ticket.roles, 'root')) {
              this.router.navigate(['/accessdenied']) // not root
              return getTicketFailureAction()
            }
            return getTicketSuccessAction({ticket})
          }),
          catchError(() => {
            //  this.router.navigate(['/accessdenied'])
            return of(getTicketFailureAction())
          })
        )
      )
    )
  )

  getTicketSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getTicketSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    {dispatch: false}
  )

  getTicketFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getTicketFailureAction),
        tap(() => {
          this.router.navigate(['/accessdenied']) //
        })
      ),
    {dispatch: false}
  )
}

function contains(arr: string[], elem: string): boolean {
  return arr.some((i: string) => i === elem)
}
