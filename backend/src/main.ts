import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function App() {
  try {
    const PORT = 3001;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () => console.log(`Server working on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

void App();
