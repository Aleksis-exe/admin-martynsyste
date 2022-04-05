import {createAction, props} from '@ngrx/store'
import {
  IChangePassword,
  IChangePasswordError,
} from '../../interfaces/passwordChange.interface'
import {ActionsType} from '../actionsType'

export const changePasswordAction = createAction(
  ActionsType.CHANGE_PASS,
  props<{payload: IChangePassword}>()
)
export const changePasswordSuccessAction = createAction(
  ActionsType.CHANGE_PASS_SUCCESS
)
export const changePasswordFailureAction = createAction(
  ActionsType.CHANGE_PASS_FAILURE
)
