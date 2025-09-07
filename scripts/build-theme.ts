import fs from "fs";
import path from "path";
import { buildThemeCss } from "@noahwright/design";
import theme from "../theme";

const out = path.resolve(process.cwd(), "public", "theme.css");
const css = buildThemeCss(theme);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, css, "utf8");
console.log(`Wrote ${out}`);
