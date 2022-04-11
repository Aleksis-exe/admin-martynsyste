import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {environment} from 'src/environments/environment'
import {IChangePassword} from '../interfaces/change-password.interface'
import {ITicketHero} from '../interfaces/response-hero.interface'
import {IUpdateHero} from '../interfaces/update-hero.interface'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getHero(id: string): Observable<ITicketHero> {
    const url = environment.apiUrl + '/users/ticket/' + id
    return this.http
      .get<ITicketHero>(url)
      .pipe(map((response: ITicketHero) => response))
  }

  updateHero(data: IUpdateHero): Observable<ITicketHero> {
    const url = `${environment.apiUrl}/Users/update`
    const headers = new HttpHeaders()
      // .set('accept', '*/*')
      .set('Content-Type', 'multipart/form-data')
    const formData = new FormData()
    formData.append('Id', data.id)
    formData.append('Email', data.email)
    formData.append('FirstName', data.firstName)
    formData.append('LastName', data.lastName)
    formData.append('Phone', data.phoneNumber)
    data.icon ? formData.append('Avatar', data.icon) : null
    return this.http
      .put<ITicketHero>(url, formData)
      .pipe(map((response: ITicketHero) => response))
  }

  changePassword(model: IChangePassword): void {
    const url = `${environment.apiUrl}/admin/api/users/changePassword/`
    const formData = new FormData()
    formData.append('Id', model.id)
    formData.append('NewPassword', model.password)
    this.http.post(url, formData)
  }

  disable(idHero: string, disable: boolean): Observable<ITicketHero> {
    let url$: string = ''
    if (disable) {
      url$ = `${environment.apiUrl}/DangerZone/lockout?id=${idHero}`
    } else {
      url$ = `${environment.apiUrl}/DangerZone/unlock?id=${idHero}`
    }
    return this.http
      .get<ITicketHero>(url$)
      .pipe(map((response: ITicketHero) => response))
  }

  delete(idHero: string): Observable<any>{
    const url$ = `${environment.apiUrl}/DangerZone/delete?id=${idHero}`
    return this.http.delete(url$)
  }
}
