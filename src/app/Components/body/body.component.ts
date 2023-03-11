import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input()isLoading!: boolean;
  text = 'Software Engineer';

  ngOnInit(): void {
    this.typeWriter();
  }
  typeWriter() {
    const speed = 100;
    const elem = document.getElementById('typewriter');

    let i = 0;
    const type = () => {
      if (i < this.text.length) {
        if (elem){
          elem.innerHTML += this.text.charAt(i);
          i++;
        }
        setTimeout(type, speed);
      } else {
        setTimeout(erase, speed + 1000);
      }
    };

    const erase = () => {
      if (i > 0) {
        if (elem) {
          elem.innerHTML = this.text.substring(0, i - 1);
          i--;
        }
        setTimeout(erase, speed);
      } else {
        if (this.text === 'Software Engineer') {
          this.text = 'Web Developer';
        } else if (this.text === 'Web Developer') {
          this.text = 'Freelancer';
        } else {
          this.text = 'Software Engineer';
        }
        setTimeout(type, speed);
      }
    };

    type();
  }

}

