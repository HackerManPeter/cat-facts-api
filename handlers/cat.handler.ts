import config from "../config";
import { getRandomCatFact, rateLimiter } from "../utils";

export default async function (
  req: Bun.BunRequest,
  server: Bun.Server<unknown>
) {
  // Rate Limiter
  const address = server.requestIP(req);
  const shouldRateLimit = rateLimiter(address);

  if (shouldRateLimit) {
    return Response.json(
      {
        status: false,
        error: "too many requests, relax abeg the server is cheap 😸",
      },
      { status: 429 }
    );
  }

  // Fetch cat data
  const catFact = await getRandomCatFact();

  // Gracefully handle failed requests
  if (!catFact) {
    return Response.json(
      {
        status: "failed",
        error: "unable get random cat fact 😿",
      },
      { status: 500 }
    );
  }

  // Happy path 😸
  return Response.json(
    {
      status: "success",
      user: {
        email: config.email,
        name: config.fullName,
        stack: ["golang", "nodejs", "typescript"],
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    },
    { status: 200 }
  );
}
