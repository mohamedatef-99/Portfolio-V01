import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AnimationBuilder, keyframes, style, animate } from '@angular/animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input()isLoading!: boolean;
  intersectionObserver!: IntersectionObserver;
  animationPlayed = new Set<HTMLElement>();

  constructor(
    private elementRef: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const storeEls = this.elementRef.nativeElement.querySelectorAll('.store-animation') as NodeListOf<HTMLElement>;
    storeEls.forEach((storeEl) => {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target === storeEl) {
            if (!this.animationPlayed.has(storeEl)) {
              this.animationPlayed.add(storeEl);
              this.animateStore(storeEl);
            }
          }
        });
      }, {
        threshold: 0.5
      });
      this.intersectionObserver.observe(storeEl);
    });
  }

  animateStore(storeEl: HTMLElement) {
    const animation = this.animationBuilder.build([
      animate('1000ms ease-out', keyframes([
        style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(0)', opacity: 1, offset: 1 })
      ]))
    ]);

    const player = animation.create(storeEl);

    player.onDone(() => {
      this.intersectionObserver.unobserve(storeEl);
    });

    player.play();
  }
}

