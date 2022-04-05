import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {environment} from 'src/environments/environment'
import {IHero} from '../interfaces/heroes.interface'
import {ResponseHeroesType} from '../interfaces/ResponseHeroesType'

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<IHero[]> {
    const url = environment.apiUrl + '/users'
    return this.http.get<ResponseHeroesType>(url).pipe(
      map((response: ResponseHeroesType) => {
        return response
      })
    )
  }
}
