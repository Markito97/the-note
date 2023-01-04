"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function App() {
    try {
        const PORT = 3001;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        await app.listen(PORT, () => console.log(`Server working on ${PORT}`));
    }
    catch (err) {
        console.log(err);
    }
}
void App();
//# sourceMappingURL=main.js.map