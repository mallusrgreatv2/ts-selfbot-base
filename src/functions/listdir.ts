import { globSync } from "glob";
export default function listdir(dir: string) {
  return globSync(`dist/${dir}/**/*.js`);
}
