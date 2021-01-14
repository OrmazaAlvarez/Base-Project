import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.sass']
})
export class ImageContainerComponent implements OnInit {
  @Input() image: string;
  
  constructor() { 
    this.image = '';
  }

  ngOnInit(): void {
  }

  isItemDisabled(){}

}
