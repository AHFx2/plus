import { Component } from '@angular/core';
import { FooterComponent } from '../../../footer-component/footer-component';
import { HeaderComponent } from '../../../header-component/header-component';


@Component({
  selector: 'app-customerstory-component',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './customerstory-component.html',
  styleUrl: './customerstory-component.scss',
})
export class CustomerstoryComponent {

}
