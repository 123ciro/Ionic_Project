import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuarios } from '../../models/usuarios';

/**
 * Generated class for the FormUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-usuario',
  templateUrl: 'form-usuario.html',
})


export class FormUsuarioPage {

  form: FormGroup;
  usu: Usuarios = new Usuarios;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder

  ) {
    this.form= this.crearFormulario();
  }



 private  crearFormulario() {
   return  this.formBuilder.group({

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],


    });
  }

}
