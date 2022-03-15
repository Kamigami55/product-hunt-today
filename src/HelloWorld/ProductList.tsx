// import {interpolate, useCurrentFrame} from 'remotion';

export const ProductList = ({ products }) => {
  // const frame = useCurrentFrame();
  // const opacity = interpolate(frame, [0, 30], [0, 1]);
  return (
    <div className="flex flex-grow flex-col justify-between p-4">
      {products.map((product) => (
        <div
          key={product.name}
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 ">
              <p className="text-xl font-bold text-gray-100">{product.rank}</p>
            </div>
            <img src={product.thumbnail} alt="" className="h-12 w-12" />
            <div>
              <h2 className="text-4xl">{product.name}</h2>
              <h3 className="text-2xl">{product.tagline}</h3>
            </div>
          </div>
          <div className="flex flex-col border-2 border-gray-200 py-1 px-2 text-center">
            <p className="text-xl font-semibold">▲</p>
            <p className="text-xl font-semibold">{product.votesCount}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
