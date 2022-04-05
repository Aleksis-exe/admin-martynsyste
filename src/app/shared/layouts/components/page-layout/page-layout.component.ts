import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {ITicket} from 'src/app/shared/modules/autch/interfaces/ticket.interface'
import {
  isLoaderSelector,
  ticketSelector,
} from 'src/app/shared/modules/autch/store/selector'

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit {
  isloader$: Observable<boolean> | undefined
  ticket$: Observable<ITicket | null> | undefined

  constructor(private store: Store) {}
  initializeValues(): void {
    this.ticket$ = this.store.pipe(select(ticketSelector))
    this.isloader$ = this.store.pipe(select(isLoaderSelector))
  }
  ngOnInit(): void {
    this.initializeValues()
  }
}
