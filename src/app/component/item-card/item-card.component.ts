import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule,MatRegModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() ItemCardData: any;

  searchText: string = '';

  constructor(private router: Router) {}

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
  buyNow() {
    this.router.navigate(['buy']);
}
}
