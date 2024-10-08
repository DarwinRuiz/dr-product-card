
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ProductCard, } from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('ProductCard', () => {
    test('renders ProductCard component succeded', () => {
        const { container } = render(<ProductCard product={product1}>
            {
                () => (
                    <h1>Product Card</h1>
                )
            }
        </ProductCard>)

        expect(container).toMatchSnapshot()
    });


    test('should increment the counter', () => {
        const wrapper = render(<ProductCard product={product1}>
            {
                ({ count, incrementBy }) => (
                    <>
                        <h1>Product Card</h1>
                        <span title="count">{count}</span>
                        <button onClick={() => incrementBy(1)}>+</button>
                    </>
                )
            }
        </ProductCard>)

        const { container } = wrapper

        expect(container).toMatchSnapshot()

        const elementButton = wrapper.getByText('+')
        fireEvent.click(elementButton)

        const elementSpan = wrapper.getByTitle('count')
        expect(elementSpan.innerHTML).toBe('1')
    });
})