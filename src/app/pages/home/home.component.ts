import { Component } from '@angular/core';
import { LandingBannerComponent } from "../../landing/landing-banner/landing-banner.component";
import { CategoriesComponent } from "../../component/categories/categories.component";
import { WhyChooseusComponent } from "../../component/why-chooseus/why-chooseus.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingBannerComponent, CategoriesComponent, WhyChooseusComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
