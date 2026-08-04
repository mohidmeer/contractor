import path from "path";

/** Absolute path to the root uploads directory. */
export function getUploadDir() {
  return path.join(process.cwd(), "uploads");
}

/** Public URL for a file stored in uploads/, e.g. `/uploads/uuid.jpg`. */
export function toUploadPublicUrl(filename: string) {
  return `/uploads/${filename.replace(/^\/+/, "")}`;
}

/** Persistable path for a file in uploads/, e.g. `uploads/uuid.jpg`. */
export function toUploadPath(filename: string) {
  return `uploads/${filename.replace(/^\/+/, "")}`;
}
