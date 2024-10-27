import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';


//interface que representa um contato
interface Contato {
  id: number
  nome: string
  telefone: string
}
//importado json e corrigido erro em tsconfig.json
import agenda from './agenda.json'
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
