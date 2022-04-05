import {createAction, props} from '@ngrx/store'
import {IAddHero} from '../../interfaces/add-hero.interface'
import {ActionsTypes} from '../ActionsType'

export const addHeroAction = createAction(
  ActionsTypes.ADD_HERO,
  props<{hero: IAddHero}>()
)
export const addHeroSuccessAction = createAction(ActionsTypes.ADD_HERO_SUCCESS)
export const addHeroFailureAction = createAction(ActionsTypes.ADD_HERO_FAILURE)
