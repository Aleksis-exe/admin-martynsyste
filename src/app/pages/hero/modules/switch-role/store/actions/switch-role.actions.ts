import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../../actionsTypes'
import {IRoleForCheckbox} from '../../interfaces/role-for-checkbox.interface'
import {IRoles} from '../../interfaces/roles.interface'
import {IUpdateRole} from '../../interfaces/update-role.interface'

export const getRolesByUserAction = createAction(
  ActionTypes.GET_ROLES_BY_ID_USER,
  props<{userId: string}>()
)
export const getRolesByUserSuccessAction = createAction(
  ActionTypes.GET_ROLES_BY_ID_USER_SUCCESS,
  props<{roles: IRoleForCheckbox[]}>()
)
export const getRolesByUserFailureAction = createAction(
  ActionTypes.GET_ROLES_BY_ID_USER_FAILURE
)
export const getRolesAction = createAction(ActionTypes.GET_ROLES)
export const getRolesSuccessAction = createAction(
  ActionTypes.GET_ROLES_SUCCESS,
  props<{roles: IRoles[]}>()
)
export const getRolesFailureAction = createAction(ActionTypes.GET_ROLES_FAILURE)
export const onRoleAction = createAction(
  ActionTypes.ON_ROLE,
  props<{payload: IUpdateRole}>()
)
export const onRoleSuccessAction = createAction(
  ActionTypes.ON_ROLE_SUCCESS,
  props<{roles: IRoleForCheckbox[]}>()
)
export const onRoleFailureAction = createAction(ActionTypes.ON_ROLE_FAILURE)
export const offRoleAction = createAction(
  ActionTypes.OFF_ROLE,
  props<{payload: IUpdateRole}>()
)
export const offRoleSuccessAction = createAction(
  ActionTypes.OFF_ROLE_SUCCESS,
  props<{roles: IRoleForCheckbox[]}>()
)
export const offRoleFailureAction = createAction(ActionTypes.OFF_ROLE_FAILURE)
