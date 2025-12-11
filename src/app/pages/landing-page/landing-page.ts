// import { HeaderPage } from "../header-page/header-page";
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, ChartModule, FooterComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  // themeEffect = effect(() => {
  //     if (this.configService.transitionComplete()) {
  //         if (this.designerService.preset()) {
  //             this.initChart();
  //         }
  //     }
  // });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);

      this.data = {
        labels: [
          "",
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Agust',
          'Sep',
          '',
          'Nov',
        ],
        datasets: [
          {
            backgroundColor: '#00ad6a',
            hoverBackgroundColor: '#00ad6a',
            data: [, 44, 70, 56, 40, 60, 80, 70, 80, 75, , 85],
            order: 3,
          },
          {
            backgroundColor: '#f68787',
            hoverBackgroundColor: '#f68787',
            data: [, 66, 60, 65, 45, 55, 60, 45, 65, 100, , 70],
            order: 2,
          },
          {
            type: 'line',
            fill: true,
            backgroundColor:'white',
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: [50, 33, 50, 41, 36, 40, 50, 35, 40, 70, 75, 47],
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          background: {
            color: 'black',
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              padding:-20,
              z: 5,
              backdropPadding: 0,
              showLabelBackdrop: true
            },
            stackWeight:1,
            border: {
              display: false
            },
            grid: {
              tickLength: 0,
              offset:false,
              drawTicks: false,
              z: 1,
            
            }
          },
          y: {
            border: {
              display: false,
            },
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            }
          },
        },
        elements : {
          point : {
            pointStyle : 'false',
            radius: 10,
            borderWidth: 5,
            borderColor: '#666',
            rotation: 5,
            hoverRadius: 10,
            hoverBorderWidth: 5,
            backgroundColor: '#000000ff'
          },

          line : {
            borderWidth: 5,
            capBezierPoints: false,
            backgroundColor: 'black'
          }


        }
      };
    }
  }
}
