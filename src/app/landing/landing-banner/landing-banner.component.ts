import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderQuickActionComponent } from "../header-quick-action/header-quick-action.component";
import { MainHeaderComponent } from "../main-header/main-header.component";


@Component({
  selector: 'app-landing-banner',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderQuickActionComponent, MainHeaderComponent],
  templateUrl: './landing-banner.component.html',
  styleUrl: './landing-banner.component.scss'
})
export class LandingBannerComponent {

}
