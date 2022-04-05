import {Component, Input, OnInit} from '@angular/core'
import {IHero} from '../../interfaces/heroes.interface'

@Component({
  selector: 'app-item-hero',
  templateUrl: './item-hero.component.html',
  styleUrls: ['./item-hero.component.scss'],
})
export class ItemHeroComponent implements OnInit {
  @Input('hero') hero: IHero | null = null
  constructor() {}

  ngOnInit(): void {

  }
}
