import { z } from "zod";

export const PublishStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);
export type PublishStatus = z.infer<typeof PublishStatusSchema>;
