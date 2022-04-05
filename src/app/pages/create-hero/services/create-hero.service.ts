import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {ITicket} from 'src/app/shared/modules/autch/interfaces/ticket.interface'
import {environment} from 'src/environments/environment'
import {IAddHero} from '../interfaces/add-hero.interface'

@Injectable({
  providedIn: 'root',
})
export class CreateHeroService {
  constructor(private http: HttpClient) {}

  add(hero: IAddHero): Observable<ITicket> {
    const url = `${environment.apiUrl}/users/create`
    const data = new FormData()
    data.append('Email', hero.email)
    data.append('UserName', hero.userName)
    data.append('Password', hero.password)
    data.append('Phone', hero.phoneNumber)
    data.append('LastName', hero.lastName)
    data.append('FirstName', hero.firstName)
    console.log('service')
    return this.http.post<ITicket>(url, data).pipe(
      map((response: ITicket) => {
        console.log('get ticket', response)
        return response
      })
    )
  }
}
