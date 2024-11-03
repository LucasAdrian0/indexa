import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

//interface que representa um contato
interface Contato {
  id: number
  nome: string
  telefone: string
}

//importado json e corrigido erro em tsconfig.json
import agenda from '../../agenda.json'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;

  //guardar valor
  filtroPorTexto: string = ''

  //metodo para filtrar contatos por texto
  filtrarContatosPorTexto(): Contato[] {
    if (this.filtroPorTexto) {
      return this.contatos
    }
    return this.contatos.filter(contato =>{
      return contato.nome.toLocaleLowerCase().includes(this.filtroPorTexto.toLocaleLowerCase())
    })

  }

  //metodo para filtrar contatos por letras inicial
  filtrarContatosPorLetraInicial(letras: string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLocaleLowerCase().startsWith(letras)
    }) 
  }
}
