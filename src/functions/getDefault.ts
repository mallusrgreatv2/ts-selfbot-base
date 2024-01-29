import { resolve as resolvePath } from "path";
export async function getDefault(filePath: string) {
  return (await import(`file://${resolvePath(filePath)}`)).default as unknown;
}
