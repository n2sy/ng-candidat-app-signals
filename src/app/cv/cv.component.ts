import { Component } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { GestionCandsService } from '../gestion-cands.service';

@Component({
  selector: 'app-cv',
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [];

  //Manière 1 - Injection de dépendances
  constructor(private candSer: GestionCandsService) {}

  //Manière 2 - Injection de dépendances
  //private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.tabCandidats = this.candSer.getAllCandidates();
  }
}
