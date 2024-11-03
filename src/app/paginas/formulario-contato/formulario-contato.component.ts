//importar todas as ferramentes relevantes para formulario, sempre vericar as telas de erros para fazer correções
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaContatosComponent } from '../lista-contatos/lista-contatos.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [//importar todos componentes que for utilizar em formularios
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule, //utiliza este importe para trabalhar com formulario
    ListaContatosComponent,
    RouterLink
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent{//importar todas as ferramentes relevantes para formulario, sempre vericar as telas de erros para fazer correçõesFormularioContatoComponent {
  //declarar uma propriedade que vai representar o formulario
  contatoForm!/*! representa operador não nula */: FormGroup;//formgroup é uma ferramenta para trabalhar com formulário, vai apresentar erro pq ela não foi inicializada, deve inicializar ela dentro do construtor no tipescript

  //construtor da classe contatoForm
  constructor(){
    this.contatoForm = new FormGroup({//contatoForm recebe um grupo de formulario
      //aqui devo escrever todos os campos do formulario
      nome: new FormControl('',Validators.required), //validatos.required verifica se o campoobrigatorio foi preenchido
      telefone: new FormControl('',Validators.required) ,
      email: new FormControl('',[Validators.required,Validators.email]) ,
      aniversario: new FormControl('',Validators.required) ,
      redes: new FormControl(''),
      observacoes: new FormControl('') 

    })
  }
  //medoto criado salvar contato, nome deve ser igual ao (ngSubmit) colocado no arquivo html
  salvarContato(){
      console.log(this.contatoForm.value);
  }
  //metodo para cancelar
  cancelar(){
    console.log('Submissao cancelada');
  }
}
