import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit {
  @Input('appCountUp') target!: number;

  private speed = 10; // smaller = faster
  private increment!: number;
  private current = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.increment = this.target / 200;
    this.countUp();
  }

  countUp() {
    this.current += this.increment;
    if (this.current < this.target) {
      this.el.nativeElement.innerText = Math.ceil(this.current);
      setTimeout(() => this.countUp(), this.speed);
    } else {
      this.el.nativeElement.innerText = this.target + '+';
    }
  }
}