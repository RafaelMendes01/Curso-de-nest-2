import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnicoConstraint } from "./is-nome.de-usuario-unico";
import { UsuarioController } from "./usuario.controller";
import { UsuarioServices } from "./usuario.service";

@Module({
    controllers: [UsuarioController],
    providers: [
        UsuarioServices,
        IsNomeDeUsuarioUnicoConstraint
    ]
})
export class usuarioModule{

}