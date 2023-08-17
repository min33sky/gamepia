import { z } from 'zod';

const Environment = z.object({
  RAWG_API_KEY: z.string(),
});

export type Environment = z.infer<typeof Environment>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}
