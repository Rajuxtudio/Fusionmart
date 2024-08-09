import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatCardModule,MatRegModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  
  constructor(private router: Router) {}

  seeAllLaptops() {
      this.router.navigate(['laptops']);
  }
}
