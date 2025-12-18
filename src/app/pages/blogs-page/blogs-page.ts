import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { BlogCardComponent } from "./components/blog-card-component/blog-card-component";

@Component({
  selector: 'app-blogs-page',
  imports: [HeaderComponent, BlogCardComponent],
  templateUrl: './blogs-page.html',
  styleUrl: './blogs-page.scss',
})
export class BlogsPage {

}
