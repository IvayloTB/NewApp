import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from "../app.component";
import { HomePageComponent } from "../home-page/home-page.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AppComponent, HomePageComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}

