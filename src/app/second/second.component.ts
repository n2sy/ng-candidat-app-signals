import { Component, Input, input, output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  @Input() exColor = 'red';
  color = input.required<string>({ alias: 'c' });
  // color = input<string>();

  // sendToParent = output<string>();
  sendToParent = output<string>({ alias: 'stp' });

  ngOnChanges(changes: SimpleChange) {
    //console.log(changes);
  }

  changeExColorFromChild() {
    this.exColor = 'white';
  }

  changeColorFromChild() {
    // FIXME: on ne peut pas modifier un signal
    //this.color = "blue"
  }
}
