import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';

@Module({
  imports: [usuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
