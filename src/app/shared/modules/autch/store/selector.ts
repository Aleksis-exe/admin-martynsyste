import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IAutchSate} from '../interfaces/autchState.interface'

export const appFeatureSelector = createFeatureSelector<IAutchSate>('autch')

export const ticketSelector = createSelector(
  appFeatureSelector,
  (appState: IAutchSate) => appState.ticket
)

export const isLoaderSelector = createSelector(
  appFeatureSelector,
  (appState: IAutchSate) => appState.isLoader
)
