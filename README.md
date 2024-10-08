# DR-Product-Card

Es un paquete de pruebas de despliegue en NPM


## Ejemplo

```
 import { ProductCard, ProductImage, ProductTitle, ProductButton } from 'dr-product-card'
```

```
<ProductCard  product={product}

                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    () => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />
                        </>
                    )
                }
</ProductCard>
```


### Darwin Ruiz