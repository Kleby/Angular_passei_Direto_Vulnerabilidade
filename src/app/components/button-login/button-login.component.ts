import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-button-login',
  standalone: true,
  imports: [],
  templateUrl: './button-login.component.html',
  styleUrl: './button-login.component.css'
})
export class ButtonLoginComponent implements OnInit{
  public imgSrc = signal('');
  @Input() set inputImgSrc( imgSrc: string){
    this.imgSrc.set(imgSrc)
  }

  public loginTitle = signal('');
  @Input() set inputLoginTitle(title: string){
    this.loginTitle.set(title);
  }

  protected bgColor: string = '';


  ngOnInit(): void {
      switch(this.loginTitle()){
        case 'Google':
          this.bgColor = 'login-g'
          break;
        
        case 'Facebook':
          this.bgColor = 'login-f'
          break;
        
        default: 
          this.bgColor = '';
          break;
      }
  }

}
