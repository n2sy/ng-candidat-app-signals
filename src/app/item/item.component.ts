import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [TitleCasePipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
}
