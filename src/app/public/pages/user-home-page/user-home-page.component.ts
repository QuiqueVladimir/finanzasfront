import { Component } from '@angular/core';
import {SidenavDashboardComponent} from "../../components/sidenav-dashboard/sidenav-dashboard.component";

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [
    SidenavDashboardComponent
  ],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css'
})
export class UserHomePageComponent {

}
