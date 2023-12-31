import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', 'big-card.responsive.component.css']
})
export class BigCardComponent {
  @Input()
  photoBigCard: string = '';
  @Input()
  titleBigCard: string = '';
  @Input()
  descriptionBigCard: string = '';
  @Input()
  Id:string = '';
}
