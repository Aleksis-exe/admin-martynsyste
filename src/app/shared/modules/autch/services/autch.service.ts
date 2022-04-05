import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {ITicket} from '../interfaces/ticket.interface'

@Injectable({
  providedIn: 'root',
})
export class AutchService {
  constructor(private http: HttpClient) {}

  getTicket(): Observable<ITicket> {
    const url = '/autch'
    return this.http.get<ITicket>(url).pipe(
      map((response: ITicket) => {
        console.log('get ticket', response)
        return response
      })
    )
  }
}
