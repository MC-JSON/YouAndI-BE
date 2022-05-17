const db = require('../db')
const Pottery = require('../models/Pottery.js')
const Types = require('../models/Types.js')

const main = async () => {
  const pottery = [
    {
      name: 'White & Blue Abstract Face Plate',
      types: 'plate',
      description:
        'Ceramic plate with unique single line face drawing. The base glaze on the porcelain plate is white with cobalt for the single line face drawing.',
      price: '$35.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/cfce32/3635293397/il_1140xN.3635293397_bz0d.jpg'
    },

    {
      name: 'Handmade Stoneware Mug',
      types: 'mug',
      description:
        'Ceramic mug made from recycled stoneware with a blue interior and a white and black speckled exterior. Glazed using food safe glazes, and twice fired in an electric kiln.',
      price: '$40.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/2c4745/3709475353/il_794xN.3709475353_2buc.jpg'
    },

    {
      name: 'Blue Tea Mug',
      types: 'mug',
      description:
        'The mug is made of a mixed clay body of porcelain and stoneware. Part of the shell midden collection inspired by the beaches of Sweden.',
      price: '$35.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/878f9e/3191083939/il_794xN.3191083939_bgua.jpg'
    },

    {
      name: 'Handmade Clay Earrings',
      types: 'jewelry',
      description:
        'Minimal clay earrings handcrafted from red stoneware and finished with cobalt glaze and gold colored accent. Ear wires are 14K gold plated.',
      price: '$55.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/95cb2d/3795259995/il_794xN.3795259995_epwi.jpg'
    },

    {
      name: 'Hand-built Ceramic Bowl',
      types: 'bowl',
      description:
        'Bowl hand-built out of a mix of stoneware and porcelain and glazed in a glossy white with white and yellow flowers.',
      price: '$40.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/44da24/3333730244/il_794xN.3333730244_azx5.jpg'
    },

    {
      name: 'White Porcelain Bowl',
      types: 'bowl',
      description:
        'Handmade serving bowl with a white porcelain body and an interior glazed in a beautiful crisp green. Exterior has a very minimal marbling design.',
      price: '$65.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/1a3ef0/3709469781/il_794xN.3709469781_t3bt.jpg'
    },

    {
      name: 'Ceramic Vase with Floral Botanicals',
      types: 'vase',
      description:
        'Vase handmade on the wheel out of a mix of stoneware and porcelain clay and adorned with botanical flowers. The vase is glazed white with a purple-pink slightly metallic accent along the edge of the flowers.',
      price: '$65.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/97d439/3413347162/il_794xN.3413347162_8z90.jpg'
    },

    {
      name: 'Botanical Flower Sculpture',
      types: 'sculpture',
      description:
        'Fifteen flower ceramic flower sculpture. Each flower created by hand out of marbled black and white porcelain and mounted upon a hand-built base of raw porcelain.',
      price: '$100.00',
      image:
        'https://i.etsystatic.com/18071613/r/il/bbc56f/3635290091/il_794xN.3635290091_799c.jpg'
    }
  ]

  const types = [
    {
      typesName: 'plate',
      image:
        'https://i.etsystatic.com/18071613/r/il/dea2a4/3637445431/il_794xN.3637445431_gelr.jpg'
    },
    {
      typesName: 'mug',
      image:
        'https://i.etsystatic.com/18071613/r/il/0bfeb4/3191084133/il_794xN.3191084133_4ogl.jpg'
    },
    {
      typesName: 'jewelry',
      image:
        'https://i.etsystatic.com/18071613/r/il/8260f3/3703886304/il_794xN.3703886304_mjg0.jpg'
    },
    {
      typesName: 'bowl',
      image:
        'https://i.etsystatic.com/18071613/r/il/f514af/3589803338/il_794xN.3589803338_ijtv.jpg'
    },
    {
      typesName: 'vase',
      image:
        'https://i.etsystatic.com/18071613/r/il/b95c4b/3640066043/il_794xN.3640066043_f9so.jpg'
    },

    {
      typesName: 'sculpture',
      image:
        'https://i.etsystatic.com/18071613/r/il/aa5750/3465883546/il_794xN.3465883546_q2co.jpg'
    }
  ]

  await Pottery.insertMany(pottery)
  await Types.insertMany(types)
  console.log('Pottery thrown!')
}
const run = async () => {
  await main()
  db.close()
}
run()
