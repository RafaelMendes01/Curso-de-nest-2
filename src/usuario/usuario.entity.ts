import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
    id: Number;

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

    @IsEmail({
        message: 'email invalido'
    })
    email: string;

    @IsNotEmpty({
        message: 'senha e obrigatoria'
    })
    senha: string;

    @IsNotEmpty({
        message: 'nome completo e obrigatorio'
    })
    nomeCompleto: string;
    dataDeEntrada: Date;
}