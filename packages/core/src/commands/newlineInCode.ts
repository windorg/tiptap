// @ts-nocheck
import { newlineInCode as originalNewlineInCode } from '@tiptap/pm/commands'

import { RawCommands } from '../types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    newlineInCode: {
      /**
       * Add a newline character in code.
       */
      newlineInCode: () => ReturnType
    }
  }
}

export const newlineInCode: RawCommands['newlineInCode'] = () => ({ state, dispatch }) => {
  return originalNewlineInCode(state, dispatch)
}
