
import React from 'react'
import { render } from '@testing-library/react'
import { ProductImage, } from '../../src/components/ProductImage'
import { ProductCard } from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('ProductImage', () => {
    test('renders ProductImage component width custom image succeded', () => {
        const { container } = render(<ProductImage imageUrl="https://hola.jpg" />)

        expect(container).toMatchSnapshot()
    });

    test('Should show the component with product image', () => {
        const { container } = render(<ProductCard product={product1}>
            {
                () => (
                    <ProductImage />
                )
            }
        </ProductCard>)

        expect(container).toMatchSnapshot()
    });
})