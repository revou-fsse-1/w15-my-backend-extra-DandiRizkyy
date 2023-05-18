import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import * as process from 'process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: process.env['SESSION_SECRET'],
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder() 
    .setTitle('E-Commerce App Documentation Week 15')
    .setDescription('My Backend Documentation')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      requestInterceptor: (req) => {
        req.credentials = 'include';
        return req;
      }
    }
  });

  app.useGlobalPipes(new ValidationPipe({whitelist: true}));

  await app.listen(process.env.PORT || 4001);
}
bootstrap();
