import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-features-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './features-page.html',
  styleUrl: './features-page.scss',
})
export class FeaturesPage {

}
