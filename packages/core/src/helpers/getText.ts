// @ts-nocheck
import { Node as ProseMirrorNode } from '@tiptap/pm/model'

import { TextSerializer } from '../types'
import { getTextBetween } from './getTextBetween'

export function getText(
  node: ProseMirrorNode,
  options?: {
    blockSeparator?: string
    textSerializers?: Record<string, TextSerializer>
  },
) {
  const range = {
    from: 0,
    to: node.content.size,
  }

  return getTextBetween(node, range, options)
}
