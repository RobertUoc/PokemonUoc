import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {  
  title = 'angular-pokemon-pwa';
  isListType: boolean = true;

  toggleView(view: string) {             
    this.isListType = !this.isListType;
  }

}
