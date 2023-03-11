import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AnimationBuilder, keyframes, style, animate } from '@angular/animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input()isLoading!: boolean;
  intersectionObserver!: IntersectionObserver;
  aboutEl!: HTMLElement;
  animationPlayed = false;

  constructor(
    private elementRef: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.aboutEl = this.elementRef.nativeElement.querySelector('.skills-animation');
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === this.aboutEl) {
          if (!this.animationPlayed) {
            this.animationPlayed = true;
            this.animateAbout();
          }
        }
      });
    }, {
      threshold: 0.5
    });
    this.intersectionObserver.observe(this.aboutEl);
  }

  animateAbout() {
    const animation = this.animationBuilder.build([
      
      animate('1000ms ease-out', keyframes([
        style({ transform: 'translateY(100%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateY(0)', opacity: 1, offset: 1 })
      ]))
    ]);
    
    const player = animation.create(this.aboutEl);
    
    player.onDone(() => {
      this.intersectionObserver.unobserve(this.aboutEl);
    });
    
    player.play();
  }
}
