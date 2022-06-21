import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode;

  //fetch previously stored value for dark mode from local storage
  constructor() { 
    this.darkMode = Boolean(localStorage.getItem('darkMode'));
    document.body.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode+'')
    document.body.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }
}
