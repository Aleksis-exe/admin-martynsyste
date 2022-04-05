import {createFeatureSelector, createSelector} from '@ngrx/store'
import {ICreateHeroState} from '../interfaces/create-hero-state.interface'

export const createHeroFeatureSelector =
  createFeatureSelector<ICreateHeroState>('create-hero')

export const isLoadingSelector = createSelector(
  createHeroFeatureSelector,
  (state: ICreateHeroState) => state.isLoader
)
