// @ts-nocheck
import { Node as ProseMirrorNode } from '@tiptap/pm/model'

import { NodeWithPos, Predicate } from '../types'

export function findChildren(node: ProseMirrorNode, predicate: Predicate): NodeWithPos[] {
  const nodesWithPos: NodeWithPos[] = []

  node.descendants((child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos,
      })
    }
  })

  return nodesWithPos
}
