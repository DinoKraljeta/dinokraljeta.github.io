import { Component } from '@angular/core';
import { SworCharacterService } from '../swor-character.service';

@Component({
  selector: 'app-swor-character-selector',
  templateUrl: './swor-character-selector.component.html',
  styleUrls: ['./swor-character-selector.component.scss'],
})
export class SworCharacterSelectorComponent {
  characters = this.sworCharacterService.characters;
  selectedCharacter: string | null = null;
  imageUrl: string = '';
  randomizeEnabled = false;

  constructor(private sworCharacterService: SworCharacterService) {}

  setInitialImage() {
    if (this.selectedCharacter) {
      this.imageUrl = this.sworCharacterService.getImageUrl(
        this.selectedCharacter,
        0
      );
      this.randomizeEnabled = true;
    }
  }

  randomizeImage() {
    if (this.selectedCharacter) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      this.imageUrl = this.sworCharacterService.getImageUrl(
        this.selectedCharacter,
        randomNumber
      );
    }
  }
}
