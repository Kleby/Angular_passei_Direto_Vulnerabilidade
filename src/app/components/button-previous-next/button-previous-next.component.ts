import { Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { icons } from '../../../assets/iconsSvg';

@Component({
  selector: 'app-button-previous-next',
  standalone: true,
  imports: [],
  templateUrl: './button-previous-next.component.html',
  styleUrl: './button-previous-next.component.css'
})
export class ButtonPreviousNextComponent {

  btnIcon = {
    right: icons['btn-circle-right'],
    left: icons['btn-circle-left']
  }

  @Output() 
  sendPositionEmit: EventEmitter<number> = new EventEmitter<number>()

  public position: WritableSignal<number> = signal(0);
  // position == -1 => left
  // position = 1 => right
  @Input() set inputPosition(position: number){
    this.position.set(position);
  }

  public disabledPrevious:WritableSignal<boolean> = signal(true);
  @Input() set inputDisabledPrevious(disabled: boolean){
    this.disabledPrevious.set(disabled);
  }
  public disabledNext:WritableSignal<boolean> = signal(true);
  @Input() set inputDisabledNext(disabled: boolean){
    this.disabledNext.set(disabled);
  }

  onHandlerClick(){
    this.sendPositionEmit.emit(this.position());    
  }
}
