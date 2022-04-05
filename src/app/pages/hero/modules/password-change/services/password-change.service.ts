import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PasswordChangeService {
  constructor(private http: HttpClient) {}

  changepassword(passa: {keyUser: string; pass: string}) {
    const url = `${environment.apiUrl}/users/changepassword`
    const form = new FormData()
    form.append('Id', passa.keyUser)
    form.append('NewPassword', passa.pass)
    return this.http.post(url, form)
  }
}
