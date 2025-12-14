import { Component, signal, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  private show = signal(false);
  get toggled():boolean
  {
    return this.show();
  } 

  toggle() {    
    this.show.set(!this.show());
  }
}
