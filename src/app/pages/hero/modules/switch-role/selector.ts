import {createFeatureSelector, createSelector} from '@ngrx/store'
import {ISwitchRoleState} from './interfaces/switch-role-state.interface'

export const switchFeatureSelector =
  createFeatureSelector<ISwitchRoleState>('switch-role')

export const isLoadingSelector = createSelector(
  switchFeatureSelector,
  (state: ISwitchRoleState) => state.isLoader
)

export const rolesByUserSelector = createSelector(
  switchFeatureSelector,
  (state: ISwitchRoleState) => state.rolesByUser
)
export const rolesSelector = createSelector(
  switchFeatureSelector,
  (state: ISwitchRoleState) => state.roles
)
