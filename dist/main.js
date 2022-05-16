"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const dotenvExpand = require("dotenv-expand");
const dotenv = require("dotenv");
dotenvExpand.expand(dotenv.config());
const app_module_1 = require("./app.module");
const log_middleware_1 = require("./middlewares/log.middleware");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const swaggerInit = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle(process.env.SWAGGER_TITLE)
        .setDescription(process.env.SWAGGER_DESC)
        .setVersion(process.env.npm_config_init_version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser('12345'));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(log_middleware_1.log);
    app.useGlobalPipes(new common_1.ValidationPipe());
    swaggerInit(app);
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map