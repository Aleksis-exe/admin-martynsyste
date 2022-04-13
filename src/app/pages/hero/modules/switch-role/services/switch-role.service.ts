import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {environment} from 'src/environments/environment'
import {IRoleForCheckbox} from '../interfaces/role-for-checkbox.interface'
import {IRoles} from '../interfaces/roles.interface'
import {IUpdateRole} from '../interfaces/update-role.interface'

@Injectable({
  providedIn: 'root',
})
export class SwitchRoleService {
  constructor(private http: HttpClient) {}

  /* получаем роли пользователя по id */
  getRolesByIdUser(userId: string): Observable<IRoleForCheckbox[]> {
    const url = environment.apiUrl + '/users/rolesbyuser/' + userId
    return this.http
      .get<IRoleForCheckbox[]>(url)
      .pipe(map((response: IRoleForCheckbox[]) => response))
  }

  getRoles(): Observable<IRoles[]> {
    const url = environment.apiUrl + '/roles'
    return this.http
      .get<IRoles[]>(url)
      .pipe(map((response: IRoles[]) => response))
  }

  onRole(model: IUpdateRole): Observable<IRoleForCheckbox[]> {
    const url = `${environment.apiUrl}/users/role/on/${model.id}/${model.roleName}`
    return this.http
      .get<IRoleForCheckbox[]>(url)
      .pipe(map((response: IRoleForCheckbox[]) => response))
  }

  offRole(model: IUpdateRole): Observable<IRoleForCheckbox[]> {
    const url = `${environment.apiUrl}/users/role/off/${model.id}/${model.roleName}`
    return this.http
      .get<IRoleForCheckbox[]>(url)
      .pipe(map((response: IRoleForCheckbox[]) => response))
  }
}
