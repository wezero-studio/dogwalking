import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    ignores: [".next/", "out/", "build/", "next-env.d.ts", "src/visual-edits/**"],
  },
  {
    rules: {
      // Site copy intentionally uses "// Label" style text (e.g. footer nav headings) —
      // not stray comments left in JSX.
      "react/jsx-no-comment-textnodes": "off",
    },
  },
];

export default config;
