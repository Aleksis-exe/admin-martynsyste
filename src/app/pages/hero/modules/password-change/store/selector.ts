import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IPassworChangeState} from '../interfaces/passwordChange.interface'

export const passwordChangeFeatureSelector =
  createFeatureSelector<IPassworChangeState>('password-change')

export const isLoaderSelector = createSelector(
  passwordChangeFeatureSelector,
  (state: IPassworChangeState) => state.isLoader
)
