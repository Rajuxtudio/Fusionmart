import { Component } from '@angular/core';
import { MatRegModule } from '../../mat-reg/mat-reg.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatRegModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
