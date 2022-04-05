import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IHeroesState} from '../interfaces/heroesState.interfaces'

export const heroesFeatureSelector =
  createFeatureSelector<IHeroesState>('heroes')

export const isLoadingSelector = createSelector(
  heroesFeatureSelector,
  (heroesState: IHeroesState) => heroesState.isLoader
)

export const isHeroesSelector = createSelector(
  heroesFeatureSelector,
  (heroesState: IHeroesState) => heroesState.heros
)

export const isFoundHeroes = createSelector(
  heroesFeatureSelector,
  (heroesState: IHeroesState) => heroesState.filter
)
