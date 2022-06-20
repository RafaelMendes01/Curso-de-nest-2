import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioServices } from "./usuario.service";

@Controller('users')
export class UsuarioController {


    constructor(private usuarioServices: UsuarioServices){}

    @Get(':nomeDeUsuario')
    public buscaPorNomedeUsuario(@Param('nomeDeUsuario')nomeDeUsuario: string){
       const UsuarioEncontrado = this.usuarioServices.buscaPorNomeDeUsuario(nomeDeUsuario);
       return UsuarioEncontrado;
    }
    
    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
       const usuarioCriado =  this.usuarioServices.cria(usuario);

        return usuarioCriado;
    }
}