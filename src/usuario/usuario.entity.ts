import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome.de-usuario-unico";

export class Usuario {
    id: Number;

    @Expose({
        name: 'userName'
    })
    @IsNomeDeUsuarioUnico({
        message: 'nome de usuario precisa ser unico'
    })
    @IsNotEmpty({
        message: 'nome de usuario e obrigatorio'
    })
    @IsString({
        message: 'nome do usuario precisa ser em string'
    })
    nomeDeUsuario: string;

    @Expose({
        name: 'email'
    })

    @IsEmail({
        message: 'email invalido'
    })
    email: string;

    @Expose({
        name: 'passWord'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'senha e obrigatoria'
    })
    senha: string;

    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'nome completo e obrigatorio'
    })
    nomeCompleto: string;

    @Expose({
        name: 'joinDate'
    })
    dataDeEntrada: Date;
}