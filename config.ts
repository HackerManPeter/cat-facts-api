type Config = {
  // APP
  port: number;

  // RATE LIMITING
  coolDownTime: number;
  requestCountLimit: number;

  // API
  baseURL: string;
  factLength: string;
  email: string;
  fullName: string;
};

const config: Config = {
  // APP
  port: Number(Bun.env.PORT || 3000),

  // RATE LIMITING
  coolDownTime: Number(Bun.env.COOL_DOWN_TIME || 3),
  requestCountLimit: Number(Bun.env.REQUEST_LIMIT || 3),

  // API
  baseURL: Bun.env.CAT_API_BASE_URL || "https://catfact.ninja",
  factLength: Bun.env.FACT_LENGTH || "100",
  email: Bun.env.EMAIL || "pebueku@gmail.com",
  fullName: Bun.env.FULL_NAME || "Uyiosa Peter Ebueku",
} as const;

export default config;
