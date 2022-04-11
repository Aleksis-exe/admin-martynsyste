import {createAction, props} from '@ngrx/store'
import {ITicketHero} from '../../interfaces/response-hero.interface'
import {IUpdateHero} from '../../interfaces/update-hero.interface'
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
  props<{hero: IUpdateHero}>()
)

export const updateHeroSuccessAction = createAction(
  ActionTypes.UPDATE_HERO_SUCCESS,
  props<{ticket: ITicketHero}>()
)

export const updateHeroFailureAction = createAction(
  ActionTypes.UPDATE_HERO_FAILURE
)

export const disableHeroAction = createAction(
  ActionTypes.DIABLE_HERO,
  props<{idHero: string; disable: boolean}>()
)

export const disableHeroSuccessAction = createAction(
  ActionTypes.DIABLE_HERO_SUCCESS,
  props<{idHero: string}>()
)

export const disableHeroFailureAction = createAction(
  ActionTypes.DIABLE_HERO_FAILURE
)

export const deleteHeroAction = createAction(
  ActionTypes.DELETE_HERO,
  props<{idHero: string}>()
)

export const deleteHeroSuccessAction = createAction(
  ActionTypes.DELETE_HERO_SUCCESS
)

export const deleteHeroailureAction = createAction(
  ActionTypes.DELETE_HERO_FAILURE
)
