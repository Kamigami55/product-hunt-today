import { interpolate, useCurrentFrame } from 'remotion'

import { Rank } from './Rank'

export const Product = ({ product, transitionStart }) => {
  const frame = useCurrentFrame()

  const opacity = interpolate(
    frame,
    [transitionStart, transitionStart + 15],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  const translate = interpolate(
    frame,
    [transitionStart, transitionStart + 15],
    [20, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  return (
    <div
      className="flex items-center justify-between gap-4"
      style={{ opacity: opacity, transform: `translateY(${translate}px)` }}
    >
      <div className="flex items-center gap-4">
        <Rank rank={product.rank} />
        <img src={product.thumbnail} alt="" className="h-12 w-12" />
        <div>
          <h2 className="text-4xl">{product.name}</h2>
          <h3 className="text-2xl leading-6">{product.tagline}</h3>
        </div>
      </div>
      <div className="flex flex-col rounded border-2 border-gray-200 py-1 px-2 text-center">
        <p className="text-xl font-semibold">▲</p>
        <p className="text-xl font-semibold">{product.votesCount}</p>
      </div>
    </div>
  )
}
