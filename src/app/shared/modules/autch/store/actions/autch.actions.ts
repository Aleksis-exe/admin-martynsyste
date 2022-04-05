import {createAction, props} from '@ngrx/store'
import {ITicket} from '../../interfaces/ticket.interface'
import {ActionTypes} from '../actionsnsType'

export const getTicketAction = createAction(ActionTypes.GET_TICKET)
export const getTicketSuccessAction = createAction(
  ActionTypes.GET_TICKET_SUCCESS,
  props<{ticket: ITicket}>()
)
export const getTicketFailureAction = createAction(
  ActionTypes.GET_TICKET_FAILURE
)
