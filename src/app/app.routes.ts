import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';


export const routes: Routes = [
//aqui deve constar os caminhos que o angular deve seguir
{path: 'formulario' , component: FormularioContatoComponent},
{path: 'lista-contatos', component: ListaContatosComponent},
{
    path: '', 
    redirectTo:'/lista-contatos',
    pathMatch:'full'//se o roteador for 4200 redireciona para lista de contatos- existe dois tipos:
    //'prefix': Indica que a rota deve ser correspondida se a URL começa com o padrão definido na rota.
    //'full': Indica que a rota deve ser correspondida somente se a URL completa corresponder ao padrão definido na rota.
}
];
