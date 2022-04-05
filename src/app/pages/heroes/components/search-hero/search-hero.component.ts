import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
  @Output('onSearch') onSearchHerosEvent = new EventEmitter<string>()

  form: FormGroup = new FormGroup({ search: new FormControl('') })

  constructor() { }

  ngOnInit(): void {
    this.form.get('search')?.valueChanges.subscribe(q => {
      this.onSearch(q)
    })
  }

  onSearch(message: string): void {
    this.onSearchHerosEvent.emit(message)
  }
}
