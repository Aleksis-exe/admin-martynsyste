import {Action, createReducer, on} from '@ngrx/store'
import {ISwitchRoleState} from './interfaces/switch-role-state.interface'
import {
  getRolesAction,
  getRolesByUserAction,
  getRolesByUserFailureAction,
  getRolesByUserSuccessAction,
  getRolesSuccessAction,
  offRoleAction,
  offRoleFailureAction,
  offRoleSuccessAction,
  onRoleAction,
  onRoleFailureAction,
  onRoleSuccessAction,
} from './store/actions/switch-role.actions'

const initialState: ISwitchRoleState = {
  rolesByUser: [],
  isLoader: false,
  roles: [],
}
const switchRoleReducer = createReducer(
  initialState,
  on(getRolesByUserAction, (state: ISwitchRoleState) => ({
    ...state,
    isLoader: true,
  })),
  on(getRolesByUserSuccessAction, (state: ISwitchRoleState, action) => ({
    ...state,
    isLoader: false,
    rolesByUser: action.roles,
  })),
  on(getRolesByUserFailureAction, (state: ISwitchRoleState) => ({
    ...state,
    isLoader: false,
    rolesByUser: [],
  })),
  on(getRolesAction, (state: ISwitchRoleState) => ({...state})),
  on(getRolesSuccessAction, (state: ISwitchRoleState, action) => ({
    ...state,
    roles: action.roles,
  })),
  on(getRolesByUserFailureAction, (state: ISwitchRoleState) => ({
    ...state,
    roles: [],
  })),
  on(onRoleAction, (state: ISwitchRoleState) => ({...state})),
  on(onRoleSuccessAction, (state: ISwitchRoleState, action) => ({
    ...state,
    rolesByUser: action.roles,
  })),
  on(onRoleFailureAction, (state: ISwitchRoleState) => ({...state})),
  on(offRoleAction, (state: ISwitchRoleState) => ({...state})),
  on(offRoleSuccessAction, (state: ISwitchRoleState, action) => ({
    ...state,
    rolesByUser: action.roles,
  })),
  on(offRoleFailureAction, (state: ISwitchRoleState) => ({...state}))
)
export function reducer(state: ISwitchRoleState, action: Action) {
  return switchRoleReducer(state, action)
}
