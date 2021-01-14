import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.sass']
})
export class FormularioReactivoComponent implements OnInit {

  constructor( private fb:FormBuilder) {
    this.form = FormGroup.prototype;
  }

  public form: FormGroup;
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.form = this.fb.group({
      user: [
          "Lenin",
          [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: [
          "",
          [Validators.required, Validators.email]]
    })
  }

  onSubmit(_datos: any){
    console.log(_datos.value);
  }

}
