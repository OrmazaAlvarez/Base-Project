import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.sass']
})
export class FormularioBasicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(_datos){
    console.log(_datos.value);
  }
}
