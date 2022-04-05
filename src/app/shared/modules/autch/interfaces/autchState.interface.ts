import {ITicket} from './ticket.interface'

export interface IAutchSate {
  ticket: ITicket | null
  isLoader: boolean
}
