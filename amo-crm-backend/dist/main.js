"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'exulabawRnfgv7aMlrPyttSZtuPlh7pEfP4sC4igISpvXQyIdqugqyrhcZHScPAC',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 },
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map