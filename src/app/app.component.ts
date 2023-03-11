import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio-Using-Angular';
  isLoading: boolean = true
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4450);
  }
}

