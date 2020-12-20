import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-alert',
  templateUrl: './confirmation-alert.component.html',
  styleUrls: ['./confirmation-alert.component.sass']
})
export class ConfirmationAlertComponent implements OnInit {
  public active: boolean;
  constructor() { 
    this.active = false;
  }

  ngOnInit(): void {
  }

  hideShow(){
    this.active = !this.active;
  }
}
