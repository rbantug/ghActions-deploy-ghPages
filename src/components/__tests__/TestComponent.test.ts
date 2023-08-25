import { describe, expect, beforeEach, afterEach, test } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/vue'

import TestComponent from '../TestComponent.vue'

beforeEach(() => {
    render(TestComponent)
})

afterEach(() => {
    cleanup()
})

describe('TestComponent', () => {
  test('increment one', async () => {
    const button = await screen.findByTestId('btnIncrement')
    await fireEvent.click(button)
    const element = await screen.findByTestId('count')
    expect(element.innerHTML.trim()).toBe('Count: 1')
  })

  test('check if count is 3', async () => {
    const button = await screen.findByTestId('btnIncrement')
    await fireEvent.click(button)
    await fireEvent.click(button)
    await fireEvent.click(button)
    const element = await screen.findByTestId('count')
    expect(element.innerHTML.trim()).toBe('Count: 3')
  })
})
