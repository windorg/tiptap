// @ts-nocheck
import { liftEmptyBlock as originalLiftEmptyBlock } from '@tiptap/pm/commands'

import { RawCommands } from '../types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    liftEmptyBlock: {
      /**
       * Lift block if empty.
       */
      liftEmptyBlock: () => ReturnType,
    }
  }
}

export const liftEmptyBlock: RawCommands['liftEmptyBlock'] = () => ({ state, dispatch }) => {
  return originalLiftEmptyBlock(state, dispatch)
}
