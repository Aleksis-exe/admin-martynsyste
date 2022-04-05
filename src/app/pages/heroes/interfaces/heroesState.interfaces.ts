import {ResponseHeroesType} from './ResponseHeroesType'

export interface IHeroesState {
  heros: ResponseHeroesType
  filter: ResponseHeroesType
  isLoader: boolean
}
