import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-alert',
  templateUrl: './confirmation-alert.component.html',
  styleUrls: ['./confirmation-alert.component.sass']
})
export class ConfirmationAlertComponent implements OnInit {
  public active: boolean;
  @Input() total: number;
  constructor() { 
    this.active = false;
  }

  ngOnInit(){
  }

  hideShow(){
    this.active = !this.active;
  }
}
