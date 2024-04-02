import { Component, OnInit } from '@angular/core';
import { ButtonLoginComponent } from '../../components/button-login/button-login.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonLoginComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // elementHtml: HTMLElement | null = null;
  // coordX: number = 0;

  // disabledIconPrevious: boolean = true;
  // disabledIconNext: boolean = true;

  // numberCards: number = 0;

  ngOnInit(): void {
    // this.numberCards = 5;
    // this.verificationIsDisabled();
  }

  // setElement(id: string): HTMLElement | null{
  //   return document.getElementById(id);
  // }
  // getId(event: Event): string{    
  //   const target = event.target as HTMLElement;
  //   console.log(target);
    
  //   return target.id || '';
  // }
  // onHandlerScroll(position: number) {    
  //   const cardWidth = Number(this.elementHtml?.scrollWidth) / this.numberCards;
  //   if(!this.elementHtml) 
    
  //   this.elementHtml!.scrollLeft += cardWidth * position;
  // }
  
  // verificationIsDisabled(event: Event){
  //   const target = event.target as HTMLElement;
  //   this.elementHtml = this.setElement(target?.id);   
  //   this.disabledIconPrevious = (this.elementHtml?.scrollLeft === 0)? false : true;
  //   this.disabledIconNext = (this.elementHtml!.scrollLeft < this.elementHtml!.clientWidth);
  // }
}
