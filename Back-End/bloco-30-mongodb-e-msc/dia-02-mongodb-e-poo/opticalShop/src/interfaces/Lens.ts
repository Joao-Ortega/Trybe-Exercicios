  import { z } from 'zod';

  const lensSchema = z.object({
    degree: z.number(),
    antiGlare: z.boolean(),
    blueLightFilter: z.boolean(),
  });

  type Lens = z.infer<typeof lensSchema>;

  export default Lens;
  export { lensSchema };