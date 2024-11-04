import { Component } from '@angular/core';
import { CyberpunkActionService } from '../cyberpunk-action.service';

@Component({
  selector: 'app-cyberpunk',
  templateUrl: './cyberpunk.component.html',
  styleUrls: ['./cyberpunk.component.scss'],
})
export class CyberpunkComponent {
  battleSequence = this.cyberpunkService.battleSequence;
  actionSequence = this.cyberpunkService.actionSequence;
  selectedAction = { label: '', value: null };
  imgUrl: string = '';

  constructor(private cyberpunkService: CyberpunkActionService) {}

  setImage() {
    if (this.selectedAction?.value) {
      this.imgUrl = this.cyberpunkService.getImageUrl(
        this.selectedAction.value
      );
    }
  }
}
