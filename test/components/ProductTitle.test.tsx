
import React from 'react'
import { render } from '@testing-library/react'
import { ProductTitle, } from '../../src/components/ProductTitle'
import { ProductCard } from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('ProductTitle', () => {
    test('renders ProductTitle component width custom title succeded', () => {
        const { container } = render(<ProductTitle title="Custom title" />)

        expect(container).toMatchSnapshot()
    });

    test('Should show the component with product name', () => {
        const { container } = render(<ProductCard product={product1}>
            {
                () => (
                    <ProductTitle />
                )
            }
        </ProductCard>)

        expect(container).toMatchSnapshot()
    });
})