import test from 'node:test'
import assert from 'node:assert/strict'
import { moveKey } from '../src/rail-order.ts'

test('moveKey 把图标挪到目标位置', () => {
  assert.deepEqual(moveKey(['a', 'b', 'c', 'd'], 'd', 'a'), ['d', 'a', 'b', 'c'])
  assert.deepEqual(moveKey(['a', 'b', 'c', 'd'], 'a', 'c'), ['b', 'c', 'a', 'd'])
  assert.deepEqual(moveKey(['a', 'b'], 'x', 'a'), ['a', 'b'])
})
