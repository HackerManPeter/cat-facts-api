import { catHandler, errorHandler, notFoundHandler } from "./handlers";
import config from "./config";

const server = Bun.serve({
  port: config.port,
  routes: {
    "/me": {
      GET: catHandler,
    },
  },
  fetch: notFoundHandler,
  error: errorHandler,
});

console.log(`Server listening @ ${server.url} 🚀`);
