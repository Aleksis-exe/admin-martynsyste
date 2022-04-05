import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {getTicketAction} from './shared/modules/autch/store/actions/autch.actions'
import {isLoaderSelector} from './shared/modules/autch/store/selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isloader$: Observable<boolean> | undefined
  constructor(private store: Store, private router: Router) {}

  initializeValues(): void {
    this.isloader$ = this.store.pipe(select(isLoaderSelector))
    this.store.dispatch(getTicketAction())
    //this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.initializeValues()
  }
}
