import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(
        session({
            secret: 'exulabawRnfgv7aMlrPyttSZtuPlh7pEfP4sC4igISpvXQyIdqugqyrhcZHScPAC',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 3600000 },
        }),
    );

    await app.listen(3000);
}
bootstrap();
