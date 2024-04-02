import { Component} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  bookMarkIcon = faBookmark;
}
