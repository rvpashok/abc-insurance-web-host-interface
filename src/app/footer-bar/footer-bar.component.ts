import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [ToolbarModule, CommonModule, MenubarModule],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss'
})
export class FooterBarComponent {

  constructor(private router : Router){


  }

  
  footerMenuItems = new Array<MenuItem>();

  ngOnInit() {
    this.footerMenuItems = [
      {
          label: 'About Us',
          icon: 'pi pi-user',
          command: () => {
              this.onClickAboutUs();
          }
      },
      {
          label: 'Contact Us',
          icon: 'fa fa-regular fa-address-card',
          command: () => {
              this.onClickContactUs();
          }
      },
      {
        label: 'Careers',
        icon: 'pi pi-question-circle',
        command: () => {
          this.onClickCareers();
      }
      },
      {
        label: 'Press Release',
        icon: 'pi pi-external-link',
        command: () => {
          this.onClickPressRelease();
      }
     },
      {
        label: '2024-2025',
        icon: 'fa fa-solid fa-copyright',
        command: () => {
      }
    }
  ];
  }

  onClickAboutUs(){
    this.router.navigate(['/about-us'])
  }
  onClickCareers(){
    this.router.navigate(['/careers'])
  }
  onClickContactUs(){
    this.router.navigate(['/contact-us'])
  }
  onClickPressRelease(){
    this.router.navigate(['/press-release'])
  }


}
