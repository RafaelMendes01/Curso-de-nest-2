import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioServices } from "./usuario.service";

@Controller('users')
export class UsuarioController {


    constructor(private usuarioServices: UsuarioServices) { }

    @Get(':nomeDeUsuario')
    public buscaPorNomedeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const UsuarioEncontrado = this.usuarioServices.buscaPorNomeDeUsuario(nomeDeUsuario);
        if(!UsuarioEncontrado){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'usuario não encontrado.'
            });

        }
        return UsuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioServices.cria(usuario);
       return new NestResponseBuilder()
        .comStatus(HttpStatus.CREATED)
        .comHeaders({
            'location': `/users/${usuarioCriado.nomeDeUsuario}`
        })
        .comBody(usuarioCriado)
        .build();
    }
}