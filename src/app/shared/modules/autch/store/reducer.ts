import {Action, createReducer, on} from '@ngrx/store'
import {IAutchSate} from '../interfaces/autchState.interface'
import {
  getTicketAction,
  getTicketFailureAction,
  getTicketSuccessAction,
} from './actions/autch.actions'

const initialState: IAutchSate = {
  ticket: null,
  isLoader: false,
}

const appReducer = createReducer(
  initialState,
  on(getTicketAction, (state: IAutchSate) => ({...state, isLoader: true})),
  on(getTicketSuccessAction, (state: IAutchSate, action) => ({
    ...state,
    ticket: action.ticket,
    isLoader: false,
  })),
  on(getTicketFailureAction, (state: IAutchSate) => ({...initialState}))
)

export function reducer(state: IAutchSate, action: Action) {
  return appReducer(state, action)
}
