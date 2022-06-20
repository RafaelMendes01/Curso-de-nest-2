import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioServices{
     private usuarios: Array<Usuario> = [{
        id: 1,
        nomeDeUsuario: 'rafael',
        email: 'rafael@email',
        senha: '123',
        nomeCompleto: 'rafael mendes laurenio',
        dataDeEntrada: new Date(),
}];
     public cria(usuario: Usuario): Usuario{
         this.usuarios.push(usuario);
 
         return usuario;
     }
    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
       return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
         
    }
}