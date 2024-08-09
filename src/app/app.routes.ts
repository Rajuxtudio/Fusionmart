import { RouterModule, Routes } from '@angular/router';
import { SignInFormComponent } from "./auth/sign-in-form/sign-in-form.component";
import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';
import { LandingBannerComponent } from './landing/landing-banner/landing-banner.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { HomeComponent } from './pages/home/home.component';
import { LaptopJSComponent } from './admin/laptop-js/laptop-js.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { BuyNowComponent } from './pages/buy-now/buy-now.component';


export const routes: Routes = [
    {path:'signIn', component: SignInFormComponent},
    {path:'signUp', component: SignUpFormComponent},
    {path:'shop', component: LandingBannerComponent},
    {path:'laptops', component: LaptopsComponent},
    {path:'laptopJs', component: LaptopJSComponent},
    {path:'', component: HomeComponent},
    {path:'cart', component: CartComponent},
    {path:'buy', component: BuyNowComponent},
    {path:'**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}