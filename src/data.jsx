import product1 from '/images/image-product-1.jpg'
import product2 from '/images/image-product-2.jpg'
import product3 from '/images/image-product-3.jpg'
import product4 from '/images/image-product-4.jpg'
import product1Thumbnail from '/images/image-product-1-thumbnail.jpg'
import product2Thumbnail from '/images/image-product-2-thumbnail.jpg'
import product3Thumbnail from '/images/image-product-3-thumbnail.jpg'
import product4Thumbnail from '/images/image-product-4-thumbnail.jpg'

const item = {
  name: 'Fall Limited Edition Sneakers',
  series: 'Sneaker Company',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 250.0,
  discount: {
    has: true,
    percent: 50
  },
  images: [
    {
      main: product1,
      thumbnail: product1Thumbnail
    },
    {
      main: product2,
      thumbnail: product2Thumbnail
    },
    {
      main: product3,
      thumbnail: product3Thumbnail
    },
    {
      main: product4,
      thumbnail: product4Thumbnail
    }
  ]
}

export default item