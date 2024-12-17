import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-test-signal',
  imports: [],
  templateUrl: './test-signal.component.html',
  styleUrl: './test-signal.component.css',
})
export class TestSignalComponent {
  count = signal(1);
  double = computed(() => {
    console.log(`computing double of ${this.count()}`);
    return this.count() * 2;
  });

  constructor() {
    effect(() => {
      localStorage.setItem('count', this.count().toString());
    });
  }

  ngOnInit() {
    // console.log(this.count());
    setTimeout(() => {
      this.count.set(2);
    }, 1000);
    setTimeout(() => {
      this.count.set(3);
    }, 3000);
    setTimeout(() => {
      this.count.set(4);
    }, 5000);
    // console.log(this.double());
    // this.count.set(2);
    // this.count.set(3);
    // this.count.set(4);
    // console.log(this.double());
    // console.log(this.double());
    // console.log(this.double());
  }
}
