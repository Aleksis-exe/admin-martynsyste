import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IHeroState} from '../interfaces/heroState.interface'

export const heroFeatureSelector = createFeatureSelector<IHeroState>('hero')

export const isTicketSelector = createSelector(
  heroFeatureSelector,
  (heroState: IHeroState) => heroState.ticket
)
export const isHeroSelector = createSelector(
  heroFeatureSelector,
  (heroState: IHeroState) => heroState.ticket?.user
)
export const isRolesSelector = createSelector(
  heroFeatureSelector,
  (heroState: IHeroState) => heroState.ticket?.roles
)
export const isLoadingSelector = createSelector(
  heroFeatureSelector,
  (heroState: IHeroState) => heroState.isLoader
)
