import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DwfaActionService {
  gameRoundSequence = [
    { label: '0. Start of round', value: 1 },
    { label: '1a. Harvesters', value: 2 },
    { label: '1b. Carryalls & Ornithopters', value: 3 },
    { label: '2. Action resolution', value: 4 },
    { label: '3. Dezert hazards | Spice harvesting | Round end', value: 5 },
    { label: 'Special rules', value: 13 },
  ];

  harkonnenActions = [
    { label: 'A1. Leadership - Attack a Sietch', value: 6 },
    { label: 'A2. Leadership - Attack a Legion', value: 7 },
    { label: 'A3. Leadership - Move the Legions', value: 8 },
    { label: 'B. Deployment', value: 9 },
    { label: 'C. Mentat', value: 10 },
    { label: 'D. House', value: 11 },
    { label: 'E. Combat', value: 12 },
  ];

  getImageUrl(action: string): string {
    return `assets/img/war-for-arrakis/${action}.jpg`;
  }
}
