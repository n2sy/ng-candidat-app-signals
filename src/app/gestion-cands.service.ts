import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandsService {
  //selectedCandidat;
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 20, 'designer', 'lisa.png'),
  ];

  getAllCandidates() {
    return this.tabCandidats;
  }
  constructor() {}
}
