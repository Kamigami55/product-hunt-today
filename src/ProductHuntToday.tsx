import { formatInTimeZone } from 'date-fns-tz'
import { Sequence, useVideoConfig } from 'remotion'

import { ProductList } from './components/ProductList'
import useProductHuntData from './hooks/useProductHuntData'

export const ProductHuntToday = () => {
  const videoConfig = useVideoConfig()
  const { products, date } = useProductHuntData()

  return (
    <div style={{ flex: 1, backgroundColor: '#da5630' }}>
      <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
        <div className="relative h-full w-full p-8">
          <div className="relative flex h-full w-full flex-col rounded-xl bg-white p-4">
            <h1
              className="text-center text-4xl font-bold"
              style={{ color: '#da5630' }}
            >
              Top 5 in Product Hunt Today
            </h1>
            <h2 className="text-center text-2xl text-gray-400">
              {formatInTimeZone(
                new Date(date),
                'America/Los_Angeles',
                'MMMM d, yyyy'
              )}
            </h2>
            <ProductList products={products} />
          </div>
        </div>
      </Sequence>
    </div>
  )
}
