import {
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'

import { Logo } from './HelloWorld/Logo'
import { ProductList } from './HelloWorld/ProductList'
import { Subtitle } from './HelloWorld/Subtitle'
import { Title } from './HelloWorld/Title'
import useProductHuntData from './hooks/useProductHuntData'

export const ProductHuntToday = () => {
  const frame = useCurrentFrame()
  const videoConfig = useVideoConfig()
  const products = useProductHuntData()

  // console.log(products)

  const opacity = interpolate(
    frame,
    [videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )
  const transitionStart = 25

  return (
    <div style={{ flex: 1, backgroundColor: '#da5630' }}>
      {/* <div style={{ opacity }}> */}
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
      {/* <Sequence from={0} durationInFrames={videoConfig.durationInFrames}> */}
      {/* <Logo transitionStart={transitionStart} /> */}
      {/* </Sequence> */}
      {/* <Sequence from={transitionStart + 10}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 50}>
					<Subtitle />
				</Sequence> */}
      {/* </div> */}
    </div>
  )
}
