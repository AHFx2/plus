import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-pricing-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.scss',
})
export class PricingPage {

}
