import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faClockRotateLeft, faLandmark, faQuestion, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  iconsMenu = {
    home: faLandmark,
    question: faQuestion,
    bookMark: faBookmark,
    history: faClockRotateLeft,
    card: faAddressCard,
    groups: faUserGroup
  }
}
