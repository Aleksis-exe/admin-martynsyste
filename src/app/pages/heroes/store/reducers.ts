import {createReducer, on, Action} from '@ngrx/store'
import {IHeroesState} from '../interfaces/heroesState.interfaces'
import {
  getHeroesrAction,
  getHeroesrSuccessAction,
  searchHeroesByFullName,
} from './actions/heroes.actions'

const initialState: IHeroesState = {
  heros: [],
  filter: [],
  isLoader: false,
}
const heroesReducer = createReducer(
  initialState,
  on(
    getHeroesrAction,
    (state: IHeroesState): IHeroesState => ({
      ...state,
      isLoader: true,
    })
  ),
  on(
    getHeroesrSuccessAction,
    (state: IHeroesState, action): IHeroesState => ({
      ...state,
      heros: action.heroes,
      isLoader: false,
    })
  ),
  on(searchHeroesByFullName, (state: IHeroesState, action) => ({
    ...state,
    filter: state.heros.filter(
      (item) =>
        item.fullName.includes(action.search) ||
        item.fullName.toLowerCase().includes(action.search)
    ),
  }))
)
export function reducer(state: IHeroesState, action: Action) {
  return heroesReducer(state, action)
}
