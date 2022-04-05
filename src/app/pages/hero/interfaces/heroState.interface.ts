import {ITicketHero} from './response-hero.interface'

export interface IHeroState {
  ticket: ITicketHero | null
  isLoader: boolean
}
