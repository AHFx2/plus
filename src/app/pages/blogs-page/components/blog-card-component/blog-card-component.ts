import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card-component',
  imports: [],
  templateUrl: './blog-card-component.html',
  styleUrl: './blog-card-component.scss',
})
export class BlogCardComponent {
  @Input() animated:boolean = true;
}
