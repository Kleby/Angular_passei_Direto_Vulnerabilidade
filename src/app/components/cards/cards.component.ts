import { Component} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ButtonPreviousNextComponent } from '../button-previous-next/button-previous-next.component';
import { every } from 'rxjs';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, ButtonPreviousNextComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent{

  scrollCards = 0;
  coordX = 372;

  disabledIconPrevious: boolean = false;
  disabledIconNext: boolean = true;
  
  numberCards: number = 5;

  onHandlerScroll(position: number) {
    this.mover(this.coordX * position);

  }

  verificationIsDisabled(event: Event) {
    const target = event.target as HTMLElement;
    this.disabledIconPrevious = this.scrollCards >= this.coordX;
    this.disabledIconNext = (target.offsetWidth + this.scrollCards) < target.scrollWidth  
  }

  mover(moverCard: number){
    this.scrollCards += moverCard; 
  }

}
