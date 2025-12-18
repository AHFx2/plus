import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header-component/header-component";
import { FooterComponent } from "../../../footer-component/footer-component";
import { BlogCardComponent } from "../blog-card-component/blog-card-component";

@Component({
  selector: 'app-blog-details-page',
  imports: [HeaderComponent, FooterComponent, BlogCardComponent],
  templateUrl: './blog-details-page.html',
  styleUrl: './blog-details-page.scss',
})
export class BlogDetailsPage {

}
