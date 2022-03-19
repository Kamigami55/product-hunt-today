import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

import { Product } from './Product'

export const ProductList = ({ products }) => {
  const frame = useCurrentFrame()
  const videoConfig = useVideoConfig()

  const opacity = interpolate(
    frame,
    [videoConfig.durationInFrames - 20, videoConfig.durationInFrames - 5],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  return (
    <div
      className="flex flex-grow flex-col justify-between p-4"
      style={{ opacity: opacity }}
    >
      {products.map((product, index) => (
        <Product
          key={product.name}
          product={product}
          transitionStart={index * 10}
        />
      ))}
    </div>
  )
}
