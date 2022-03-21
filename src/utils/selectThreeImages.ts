export const selectThreeImages = (images) => {
  if (images.length < 1) {
    return []
  }
  if (images.length === 1) {
    return [images[0], images[0], images[0]]
  }
  if (images.length === 2) {
    return [images[0], images[1], images[0]]
  }
  return [images[0], images[1], images[2]]
}
