import { interpolate, useCurrentFrame } from 'remotion'

import { ImagesCarousel } from './ImagesCarousel'
import { Rank } from './Rank'

export const ProductDetailProduct = ({ product }) => {
  const {
    rank,
    thumbnail,
    name,
    tagline,
    topics,
    description,
    images,
    votesCount,
  } = product
  const frame = useCurrentFrame()

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const translate = interpolate(frame, [0, 15], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <div style={{ opacity: opacity, transform: `translateY(${translate}px)` }}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Rank rank={rank} />
          <img src={thumbnail} alt="" className="h-12 w-12" />
          <div>
            <h2 className="text-4xl text-gray-900">{name}</h2>
            <h3 className="mb-2 text-xl leading-6 text-gray-700">{tagline}</h3>
            <div className="flex items-center gap-1">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="box-border rounded-sm border border-gray-400 bg-gray-50 px-2 py-1 text-sm text-gray-500"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded border-2 border-gray-200 py-1 px-2 text-center">
          <p className="text-xl font-semibold">▲</p>
          <p className="text-xl font-semibold">{votesCount}</p>
        </div>
      </div>

      <div className="mb-2">
        <p className="text-xl leading-6 text-gray-700 line-clamp-3">
          {description}
        </p>
      </div>

      <ImagesCarousel images={images} />
    </div>
  )
}
