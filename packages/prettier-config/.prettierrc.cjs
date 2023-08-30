module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  singleAttributePerLine: false,
  useTabs: false,
  vueIndentScriptAndStyle: false,

  // 自定义配置
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  // trailingComma: 'es5',
  stylelintIntegration: true,
  eslintIntegration: true,

  // 插件
  plugins: ['prettier-plugin-packagejson'],
}
