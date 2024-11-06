import { Component, HostListener } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {NgClass, NgForOf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-sidenav-dashboard',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatList,
    MatListItem,
    MatButton,
    NgForOf,
    NgClass,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './sidenav-dashboard.component.html',
  styleUrl: './sidenav-dashboard.component.css'
})
export class SidenavDashboardComponent {

  menuItems = [
    {label:'Dashboard', route:'/dashboard', icon:'dashboard'},
    {label: 'Portfolios', route: '/portfolios', icon: 'folder'},
    {label: 'Invoice Management', route: '/bill', icon: 'receipt'},
    {label: 'Reports', route: '/reports', icon: 'bar_chart'},
    {label: 'Profile', route: '/profile', icon: 'person'}
  ]
}
