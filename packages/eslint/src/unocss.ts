import unocssPlugin from '@unocss/eslint-plugin'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export { unocssPlugin }

export const unocss: FlatESLintConfigItem[] = [
  {
    plugins: {
      '@unocss': unocssPlugin,
    },
    rules: {
      ...unocssPlugin.configs.recommended.rules,
    },
  },
]
