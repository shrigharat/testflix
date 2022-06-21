import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode;

  constructor() { 
    this.darkMode = Boolean(localStorage.getItem('darkMode'));
    console.log('Theme service initialized : ', this.darkMode);
    document.body.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode+'')
    document.body.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }
}
