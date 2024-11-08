import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  typescript: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  rules: {
    "no-console": "warn",
  },
});
