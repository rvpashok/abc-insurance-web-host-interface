import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from "./header-bar/header-bar.component";
import { FooterBarComponent } from "./footer-bar/footer-bar.component";
import { SharedModule } from 'shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBarComponent, FooterBarComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-host';
}
