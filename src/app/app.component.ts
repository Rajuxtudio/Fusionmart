import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderQuickActionComponent } from "./landing/header-quick-action/header-quick-action.component";
import { MainHeaderComponent } from "./landing/main-header/main-header.component";
import { LandingBannerComponent } from "./landing/landing-banner/landing-banner.component";
import { ItemCardComponent } from "./component/item-card/item-card.component";
import { MatRegModule } from './mat-reg/mat-reg.module';
import {laptopjs} from './Entities/globalConstants'
import { FooterComponent } from "./component/footer/footer.component";
import { CategoriesComponent } from "./component/categories/categories.component";
import { WhyChooseusComponent } from "./component/why-chooseus/why-chooseus.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderQuickActionComponent, MainHeaderComponent, LandingBannerComponent, ItemCardComponent, MatRegModule, FooterComponent, CategoriesComponent, WhyChooseusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FusionMart';

  ItemCardData = laptopjs


}
