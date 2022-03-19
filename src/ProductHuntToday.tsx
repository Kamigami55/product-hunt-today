import { Sequence, useVideoConfig } from 'remotion'

import { ProductList } from './components/ProductList'
import useProductHuntData from './hooks/useProductHuntData'

export const ProductHuntToday = () => {
  const videoConfig = useVideoConfig()
  const products = useProductHuntData()

  return (
    <div style={{ flex: 1, backgroundColor: '#da5630' }}>
      <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
        <div className="relative h-full w-full p-8">
          <div className="relative flex h-full w-full flex-col rounded-xl bg-white">
            <h1
              className="text-center text-4xl font-bold"
              style={{ color: '#da5630' }}
            >
              Top 5 in Product Hunt Today
            </h1>
            <ProductList products={products} />
          </div>
        </div>
      </Sequence>
    </div>
  )
}
