import {createAction, props} from '@ngrx/store'
import {IHero} from '../../interfaces/heroes.interface'
import {ActionTypes} from '../actionsTypes'

export const getHeroesrAction = createAction(ActionTypes.GET_HEROES)
export const getHeroesrSuccessAction = createAction(
  ActionTypes.GET_HEROES_SUCCESS,
  props<{heroes: IHero[]}>()
)
export const getHeroesrFailureAction = createAction(
  ActionTypes.GET_HEROES_FAILURE
)
export const searchHeroesByFullName = createAction(
  ActionTypes.SEARCH_HEROES_BY_FULL_NAME,
  props<{search: string}>()
)
