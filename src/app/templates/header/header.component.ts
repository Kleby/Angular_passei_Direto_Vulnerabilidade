import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, SideNavComponent, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './menu-checkbox.components.css'],
})
export class HeaderComponent implements OnInit{
  searchIcon = faMagnifyingGlass;
  menuIcons = {
    menuBars: faBars,
    menuClosed: faXmark,
  };

  searchControl: FormControl<string | null>;

  constructor(){
    this.searchControl= new FormControl('', [
      Validators.required
    ])

  }

  ngOnInit(): void {
    // this.searchControl = new FormControl('')
  }

  @Output()
  showSideBarEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  isClearSearchEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  sendSearchEmit: EventEmitter<string> = new EventEmitter<string>();

  showMenu(event: any) {
    const isChecked: boolean = event.target.checked;
    return this.showSideBarEmit.emit(isChecked);
  }

  clearSearch() {
    this.isClearSearchEmit.emit(true);    
    this.searchControl.setValue('');    
  }

  findFile(){
    this.sendSearchEmit.emit(this.searchControl.value || '');
  }
}
