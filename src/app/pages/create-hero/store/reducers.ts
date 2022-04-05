import {Action, createReducer, on} from '@ngrx/store'
import {ICreateHeroState} from '../interfaces/create-hero-state.interface'
import {
  addHeroAction,
  addHeroFailureAction,
  addHeroSuccessAction,
} from './actions/create-hero.actions'

const initialState: ICreateHeroState = {
  isLoader: false,
}

const createHeroReducer = createReducer(
  initialState,
  on(addHeroAction, (state: ICreateHeroState) => ({...state, isLoader: true})),
  on(addHeroSuccessAction, (state: ICreateHeroState) => ({
    ...state,
    isLoader: false,
  })),
  on(addHeroFailureAction, (state: ICreateHeroState) => ({
    ...state,
    isLoader: false,
  }))
)

export function reducer(
  state: ICreateHeroState,
  action: Action
): ICreateHeroState {
  return createHeroReducer(state, action)
}
