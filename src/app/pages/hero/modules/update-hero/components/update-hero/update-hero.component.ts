import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {
  IHero,
  ITicketHero,
} from 'src/app/pages/hero/interfaces/response-hero.interface'

@Component({
  selector: 'update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.scss'],
})
export class UpdateHeroComponent implements OnInit {
  @Input() hero$: IHero | undefined = undefined
  constructor(private store: Store<ITicketHero>) {}

  ngOnInit(): void {}

  initializaValues(): void {}
}
