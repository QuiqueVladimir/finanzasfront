import { Component } from '@angular/core';
import {ToolbarHomeComponent} from '../../components/toolbar-home/toolbar-home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ToolbarHomeComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
