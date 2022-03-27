import { interpolate, useCurrentFrame } from 'remotion'

import { ImagesCarousel } from './ImagesCarousel'
import { Rank } from './Rank'
import { Thumbnail } from './Thumbnail'

export const ProductDetailProduct = ({ product }) => {
  const { rank, thumbnail, name, topics, description, images, votesCount } =
    product
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
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-hidden">
          <Thumbnail src={thumbnail} className="h-20 w-20" />
          <div>
            <h2 className="mb-2 text-4xl leading-8 text-gray-900 line-clamp-2">
              {name}
            </h2>
            <div className="flex items-center gap-1">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="box-border flex-shrink-0 rounded border border-gray-400 bg-gray-50 px-2 py-1 text-sm text-gray-500"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Rank rank={rank} />
          <div className="flex gap-2 rounded border border-[#db4200] bg-[#f64900] py-1 px-2 text-center text-white">
            <p className="text-xl font-semibold">▲</p>
            <p className="text-xl font-semibold">{votesCount}</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-2xl leading-7 text-gray-700 line-clamp-3">
          {description}
        </p>
      </div>

      <ImagesCarousel images={images} />
    </div>
  )
}
