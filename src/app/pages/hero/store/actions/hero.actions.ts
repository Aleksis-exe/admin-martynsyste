import {createAction, props} from '@ngrx/store'
import {ITicketHero} from '../../interfaces/response-hero.interface'
import {IUpdateHero} from '../../interfaces/updateHero.interface'
import {ActionTypes} from '../actionsType'

export const getHeroAction = createAction(
  ActionTypes.GET_HERO,
  props<{idHero: string}>()
)

export const getHeroSuccessAction = createAction(
  ActionTypes.GET_HERO_SUCCESS,
  props<{ticket: ITicketHero}>()
)

export const getHeroFailureAction = createAction(ActionTypes.GET_HERO_FAILURE)

export const updateHeroAction = createAction(
  ActionTypes.UPDATE_HERO,
  props<{update: IUpdateHero}>()
)

export const updateHeroSuccessAction = createAction(
  ActionTypes.UPDATE_HERO_SUCCESS,
  props<{ticket: ITicketHero}>()
)

export const updateHeroFailureAction = createAction(
  ActionTypes.UPDATE_HERO_FAILURE
)
