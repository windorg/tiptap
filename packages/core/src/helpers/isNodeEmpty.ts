// @ts-nocheck
import { Node as ProseMirrorNode } from '@tiptap/pm/model'

export function isNodeEmpty(node: ProseMirrorNode): boolean {
  const defaultContent = node.type.createAndFill()?.toJSON()
  const content = node.toJSON()

  return JSON.stringify(defaultContent) === JSON.stringify(content)
}
