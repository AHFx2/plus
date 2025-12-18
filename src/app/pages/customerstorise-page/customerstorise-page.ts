import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { FooterComponent } from "../footer-component/footer-component";

@Component({
  selector: 'app-customerstorise-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './customerstorise-page.html',
  styleUrl: './customerstorise-page.scss',
})
export class CustomerstorisePage {

}
