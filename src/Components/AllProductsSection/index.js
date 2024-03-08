import {Component} from 'react'


import ImageUpload from '../imageUpload/ImageUpload'
import ProductCard from '../ProductCard'

import './index.css'

const ProductsList=[
    {
        "title": "Embroidered Net Gown",
        "brand": "Manyavar",
        "price": 62990,
        "id": 16,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
        "rating": "3.2"
    },
    {
        "title": "Front Load Machine",
        "brand": "Samsung",
        "price": 22490,
        "id": 24,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
        "rating": "4.5"
    },
    {
        "title": "Collider Black Dial Men's Watch",
        "brand": "Fossil",
        "price": 14995,
        "id": 33,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png",
        "rating": "4.3"
    },
    {
        "title": "True Wireless Earbuds",
        "brand": "LG",
        "price": 13499,
        "id": 18,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
        "rating": "4.4"
    },
    {
        "title": "Maritime Men's Watch",
        "brand": "Titan",
        "price": 11999,
        "id": 35,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png",
        "rating": "4.3"
    },
    {
        "title": "Neutra Analog Men's Watch",
        "brand": "Fossil",
        "price": 10995,
        "id": 34,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png",
        "rating": "4.1"
    },
    {
        "title": "Monsters Charm Toy",
        "brand": "Trendytap",
        "price": 8600,
        "id": 48,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
        "rating": "4.2"
    },
    {
        "title": "Privateer Quartz Watch",
        "brand": "Fossil",
        "price": 8122,
        "id": 31,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-black-watch.png",
        "rating": "4.4"
    },
    {
        "title": "Chronograph black Watch",
        "brand": "Fossil",
        "price": 6395,
        "id": 32,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png",
        "rating": "3.8"
    },
    {
        "title": "Podcast Microphone",
        "brand": "MAONO",
        "price": 5555,
        "id": 22,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png",
        "rating": "4.4"
    },
    {
        "title": "Virgin Avocado Oil",
        "brand": "ProV",
        "price": 4144,
        "id": 42,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
        "rating": "4.4"
    },
    {
        "title": "Wrap Dress",
        "brand": "Vero Moda",
        "price": 3039,
        "id": 12,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png",
        "rating": "3.2"
    },
    {
        "title": "Warm Up Jacket",
        "brand": "Monte Carlo",
        "price": 2796,
        "id": 11,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png",
        "rating": "4.4"
    },
    {
        "title": "Slim Fit Blazer",
        "brand": "LEVIS",
        "price": 2599,
        "id": 8,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png",
        "rating": "4.2"
    },
    {
        "title": "Men's Waistcoat",
        "brand": "LEVIS",
        "price": 2500,
        "id": 4,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
        "rating": "4.3"
    },
    {
        "title": "Sheer Anarkali",
        "brand": "Saadgi",
        "price": 2172,
        "id": 14,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-white-punjabi.png",
        "rating": "3.2"
    },
    {
        "title": "SilverBullet Mixer Grinder",
        "brand": "COOKWELL",
        "price": 1899,
        "id": 20,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
        "rating": "4.1"
    },
    {
        "title": "Zari Design Kurta",
        "brand": "Libas",
        "price": 1869,
        "id": 7,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png",
        "rating": "4.4"
    },
    {
        "title": "Analog Men's Watch",
        "brand": "Fastrack",
        "price": 1850,
        "id": 25,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
        "rating": "4.2"
    },
    {
        "title": "Embellished Maxi Dress",
        "brand": "STREET 9",
        "price": 1799,
        "id": 15,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-blue-fork.png",
        "rating": "3.2"
    },
    {
        "title": "PS5 Controller Charger",
        "brand": "New World",
        "price": 1749,
        "id": 21,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png",
        "rating": "3.3"
    },
    {
        "title": "Mixer Grinder",
        "brand": "Lifelong",
        "price": 1699,
        "id": 19,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
        "rating": "3.9"
    },
    {
        "title": "Dynamic Microphone",
        "brand": "JTS Store",
        "price": 1699,
        "id": 23,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-solo-mike.png",
        "rating": "3.9"
    },
    {
        "title": "Tea Kettle Pot",
        "brand": "Indian Art Villa",
        "price": 1685,
        "id": 26,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
        "rating": "3.8"
    },
    {
        "title": "Non-Toxic Robot Toys",
        "brand": "FunBlast",
        "price": 1545,
        "id": 52,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-short-green-robot.png",
        "rating": "3.3"
    },
    {
        "title": "Slim Fit Jeans",
        "brand": "LEVIS",
        "price": 1469,
        "id": 5,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png",
        "rating": "3.1"
    },
    {
        "title": "Panda Baby Product",
        "brand": "Panda",
        "price": 1399,
        "id": 47,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
        "rating": "4.3"
    },
    {
        "title": "Handheld Full Body Massager",
        "brand": "AGARO REGAL",
        "price": 1299,
        "id": 17,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
        "rating": "4.3"
    },
    {
        "title": "Turmeric Powder",
        "brand": "Patanjali",
        "price": 1234,
        "id": 45,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-turmeric.png",
        "rating": "2.8"
    },
    {
        "title": "Nova SuperGroom Multi-kit",
        "brand": "Nova",
        "price": 1199,
        "id": 30,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nover-v2-trimmer.png",
        "rating": "4.4"
    },
    {
        "title": "Animal Printed Shirt",
        "brand": "Mufti",
        "price": 1017,
        "id": 9,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png",
        "rating": "4"
    },
    {
        "title": "Knit Cream Sweater",
        "brand": "MansiCollections",
        "price": 996,
        "id": 13,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png",
        "rating": "3.2"
    },
    {
        "title": "Miss Chase Bodycon Dress",
        "brand": "LEVIS",
        "price": 974,
        "id": 6,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png",
        "rating": "3.8"
    },
    {
        "title": "Chilli Extract Sauce",
        "brand": "Everin",
        "price": 788,
        "id": 37,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
        "rating": "4.1"
    },
    {
        "title": "Batman Batmobile",
        "brand": "Funskool",
        "price": 745,
        "id": 46,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
        "rating": "4.7"
    },
    {
        "title": "Knitted Rabbit",
        "brand": "Ira",
        "price": 620,
        "id": 49,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
        "rating": "4.4"
    },
    {
        "title": "Kids Toy Train",
        "brand": "FIONA",
        "price": 599,
        "id": 51,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-red-train.png",
        "rating": "4.1"
    },
    {
        "title": "Honey Teddy Bear",
        "brand": "Honey",
        "price": 599,
        "id": 53,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png",
        "rating": "4.3"
    },
    {
        "title": "Cotton Hoodie",
        "brand": "Scott International",
        "price": 498,
        "id": 3,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
        "rating": "3.8"
    },
    {
        "title": "Nexa Yellow Car",
        "brand": "Quinergys",
        "price": 490,
        "id": 54,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-yellow-car.png",
        "rating": "4.1"
    },
    {
        "title": "Polyester Saree",
        "brand": "Ahalyaa",
        "price": 419,
        "id": 10,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-side-sareee.png",
        "rating": "3.8"
    },
    {
        "title": "Aluminium 4 Cup Tea Kettle",
        "brand": "Kitchen Expert",
        "price": 399,
        "id": 27,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
        "rating": "4.3"
    },
    {
        "title": "Beard Trimmer",
        "brand": "Nova",
        "price": 398,
        "id": 29,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nova-trimmer.png",
        "rating": "4.5"
    },
    {
        "title": "Plain Round Neck T-shirt",
        "brand": "Huetrap",
        "price": 395,
        "id": 2,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
        "rating": "4.1"
    },
    {
        "title": "Tripod Stand",
        "brand": "Sketchfab",
        "price": 390,
        "id": 28,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
        "rating": "4.2"
    },
    {
        "title": "Bot Robot Toy",
        "brand": "WireScorts",
        "price": 355,
        "id": 50,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-robot.png",
        "rating": "3.8"
    },
    {
        "title": "Wide Bowknot Hat",
        "brand": "MAJIK",
        "price": 288,
        "id": 1,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
        "rating": "3.6"
    },
    {
        "title": "Crystal Sugar",
        "brand": "NatureVit",
        "price": 278,
        "id": 44,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-sugar-cubes.png",
        "rating": "3.6"
    },
    {
        "title": "Basmati Rice",
        "brand": "Fortune",
        "price": 244,
        "id": 43,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-rice.png",
        "rating": "3.6"
    },
    {
        "title": "Flour Unbleached",
        "brand": "TWF Store",
        "price": 200,
        "id": 38,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
        "rating": "4.3"
    },
    {
        "title": "Maroon Kumkum ",
        "brand": "Amazon",
        "price": 200,
        "id": 40,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--kumkum.png",
        "rating": "3.9"
    },
    {
        "title": "Eggs",
        "brand": "Naturoz",
        "price": 60,
        "id": 36,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
        "rating": "3.6"
    },
    {
        "title": "Fresh Lemon, 100g",
        "brand": "Amazon",
        "price": 50,
        "id": 41,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-lemons.png",
        "rating": "4.5"
    },
    {
        "title": "Fresh Produce Green Chilli",
        "brand": "Amazon",
        "price": 30,
        "id": 39,
        "imageUrl": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
        "rating": "4.2"
    }
]


class AllProducts extends Component{
    state={productsList:ProductsList}

    renderProductsListView = () => {
        const {productsList} = this.state
        const shouldShowProductsList = productsList.length > 0
    
        return shouldShowProductsList ? (
          <div className="all-products-container">
            <ul className="products-list">
              {productsList.map(product => (
                <ProductCard productData={product} key={product.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="no-products-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
        )
      }
    
      render(){
        return(
            <div>
                <ImageUpload/>
                {this.renderProductsListView()}
            </div>
        )
      }


}
export default AllProducts