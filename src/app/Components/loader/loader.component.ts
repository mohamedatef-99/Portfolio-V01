import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = true
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
      console.log(this.isLoading)
    }, 4450);
  }

}

