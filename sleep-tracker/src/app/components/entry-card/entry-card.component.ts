import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
})
export class EntryCardComponent {

  @Input() dateLogged: string;
  @Input() sleepTime?: string;
  @Input() notes?: string;
  @Input() sleepiness?: string;

  constructor() {
  }

}
