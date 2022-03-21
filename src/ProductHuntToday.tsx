import { Sequence, useVideoConfig } from 'remotion'

import { BaseBackground } from './components/BaseBackground'
import { ContentWrapper } from './components/ContentWrapper'
import { ProductList } from './components/ProductList'
import useProductHuntData from './hooks/useProductHuntData'

export const ProductHuntToday = () => {
  const videoConfig = useVideoConfig()
  const { products, date } = useProductHuntData()

  return (
    <div style={{ flex: 1, backgroundColor: '#da5630' }}>
      {/* Background */}
      <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
        <BaseBackground date={date} />
      </Sequence>

      {/* ProductList */}
      <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
        <ContentWrapper>
          <ProductList products={products} />
        </ContentWrapper>
      </Sequence>
    </div>
  )
}
