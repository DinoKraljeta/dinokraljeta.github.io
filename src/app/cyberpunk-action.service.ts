import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CyberpunkActionService {
  battleSequence = [
    { label: 'Gang', value: 1 },
    { label: 'Edgerunner', value: 2 },
  ];

  actionSequence = [
    { label: 'After activation', value: 3 },
    { label: 'After reclaim', value: 4 },
  ];

  getImageUrl(action: string): string {
    return `assets/img/cyberpunk/${action}.jpg`;
  }
}
