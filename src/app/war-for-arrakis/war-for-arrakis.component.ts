import { Component } from '@angular/core';
import { DwfaActionService } from '../dwfa-action.service';

@Component({
  selector: 'app-war-for-arrakis',
  templateUrl: './war-for-arrakis.component.html',
  styleUrls: ['./war-for-arrakis.component.scss'],
})
export class WarForArrakisComponent {
  gameRoundSequence = this.dwfaActionService.gameRoundSequence;
  harkonnenActions = this.dwfaActionService.harkonnenActions;
  selectedAction = { label: '', value: null };
  imgUrl: string = '';

  constructor(private dwfaActionService: DwfaActionService) {}

  setImage() {
    if (this.selectedAction?.value) {
      this.imgUrl = this.dwfaActionService.getImageUrl(
        this.selectedAction.value
      );
    }
  }
}
