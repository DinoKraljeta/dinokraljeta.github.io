import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SworCharacterService {
  characters = [
    'Boba',
    'Bossk',
    'DrAphra',
    'HanSolo',
    'IG-88',
    'Jyn',
    'Ketsu',
    'Lando',
  ];

  getImageUrl(character: string, number: number): string {
    return `assets/img/outer-rim/${character}/${number}.jpg`;
  }
}
