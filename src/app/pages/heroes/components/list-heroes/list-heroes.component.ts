import {Component, Input, OnInit} from '@angular/core'
import {IHero} from '../../interfaces/heroes.interface'
import {ResponseHeroesType} from '../../interfaces/ResponseHeroesType'

@Component({
  selector: 'list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent implements OnInit {
  @Input('heroes') heroes$: ResponseHeroesType | null = []
  constructor() {}

  ngOnInit(): void {
    console.log('ListHeroesComponent.heros', this.heroes$)
  }
}
