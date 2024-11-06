import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-toolbar-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatButton,
    RouterLink,
    NgForOf
  ],
  templateUrl: './toolbar-home.component.html',
  styleUrl: './toolbar-home.component.css'
})
export class ToolbarHomeComponent {
  toolbarItems = [
    { label: 'Home', route: '/home' },
    { label: 'Product', route: '/product' },
    { label: 'Solution', route: '/solution' },
    { label: 'Resources', route: '/resources' },
    { label: 'Pricing', route: '/pricing' }
  ];
}
