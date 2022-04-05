import {Action, createReducer, on} from '@ngrx/store'
import {IHeroState} from '../interfaces/heroState.interface'
import {
  getHeroAction,
  getHeroSuccessAction,
  updateHeroAction,
  updateHeroFailureAction,
  updateHeroSuccessAction,
} from './actions/hero.actions'
import {routerNavigationAction} from '@ngrx/router-store'

const initialState: IHeroState = {
  ticket: null,
  isLoader: false,
}
const heroReducer = createReducer(
  initialState,
  on(getHeroAction, (state: IHeroState) => ({
    ...state,
    isLoader: true,
  })),
  on(getHeroSuccessAction, (state: IHeroState, action) => ({
    ...state,
    ticket: action.ticket,
    isLoader: false,
  })),
  on(updateHeroAction, (state: IHeroState) => ({
    ...state,
    isLoader: true,
  })),
  on(updateHeroSuccessAction, (state: IHeroState, actions) => ({
    ...state,
    ticket: actions.ticket,
    isLoader: false,
  })),
  on(updateHeroFailureAction, (state: IHeroState) => ({
    ...state,
    isLoader: false,
  })),
  on(routerNavigationAction, (): IHeroState => initialState)
)
export function reducer(state: IHeroState, action: Action) {
  return heroReducer(state, action)
}
