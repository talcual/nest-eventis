import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    // Allow requests from github.dev and its subdomains (e.g. <user>.github.dev).
    // Use a function so we can accept non-browser requests (origin === undefined)
    // and validate hostnames properly. This also avoids using '*' when
    // credentials: true (which would be rejected by browsers).
    origin: (origin, callback) => {
      // Allow non-browser requests (curl, server-side) which have no origin
      if (!origin) return callback(null, true);
      try {
        const url = new URL(origin);
        const host = url.hostname.toLowerCase();
        const allowedHost = 'github.dev';
        if (host === allowedHost || host.endsWith('.' + allowedHost)) {
          return callback(null, true);
        }
      } catch (e) {
        // If origin is not a valid URL, reject it below
      }
      callback(new Error('CORS policy: origin not allowed'));
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
