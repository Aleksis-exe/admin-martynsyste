import {Action, createReducer, on} from '@ngrx/store'
import {IPassworChangeState} from '../interfaces/passwordChange.interface'
import {
  changePasswordAction,
  changePasswordFailureAction,
  changePasswordSuccessAction,
} from './actions/passwor-change.actions'

const initialState: IPassworChangeState = {
  isLoader: false,
}
const passwordChangeReducer = createReducer(
  initialState,
  on(changePasswordAction, (state: IPassworChangeState) => ({
    ...state,
    isLoader: true,
  })),
  on(changePasswordSuccessAction, (state: IPassworChangeState) => ({
    ...state,
    isLoader: false,
  })),
  on(changePasswordFailureAction, (state: IPassworChangeState) => ({
    ...state,
    isLoader: false,
  }))
)
export function reducer(state: IPassworChangeState, action: Action) {
  return passwordChangeReducer(state, action)
}
