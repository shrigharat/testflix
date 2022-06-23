import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';


//Review branch
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testflix';

  constructor(public theme:ThemeService) {
    
  }
}
