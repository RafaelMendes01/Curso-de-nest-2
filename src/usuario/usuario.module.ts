import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioServices } from "./usuario.service";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioServices]
})
export class usuarioModule{

}