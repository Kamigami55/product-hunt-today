import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

import { ProductDetailProduct } from './ProductDetailProduct'

export const ProductDetail = ({ product }) => {
  const frame = useCurrentFrame()
  const videoConfig = useVideoConfig()

  const opacity = interpolate(
    frame,
    [videoConfig.durationInFrames - 15, videoConfig.durationInFrames - 5],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  return (
    <div
      className="flex h-full flex-col justify-between"
      style={{ opacity: opacity }}
    >
      <ProductDetailProduct product={product} />
    </div>
  )
}
