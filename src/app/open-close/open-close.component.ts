import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '1000px',
        width: '1000px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '50px',
        width: '50px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      // zo moet je niet meer transitions schrijven als je meer state's toevoegt, * is voor alle states
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],

})
export class OpenCloseComponent {
isOpen=true;

toggle(){
  this.isOpen=!this.isOpen;
}
  
}
