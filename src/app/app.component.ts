import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TestSignalComponent } from './test-signal/test-signal.component';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, TestSignalComponent, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'candidatsApp';
}
