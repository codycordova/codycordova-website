import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cody Cordova\'s Shop - CODY CORDOVA',
  description: 'Purchase music and merch from Cody Cordova\'s store.',
  openGraph: {
    title: 'Cody Cordova\'s Shop',
    description: 'Purchase music and merch from Cody Cordova\'s store.',
    images: ['http://www.codycordova.com/uploads/9/7/2/8/97282376/published/cody-2020-black-fill-png.png?1723694786'],
    url: 'http://www.codycordova.com/shop.html',
  },
}

// Product data extracted from shop.html
const products = [
  {
    id: 'p51',
    name: 'Cody Cordova All-over Men\'s T-shirt',
    price: '$32.00',
    image: '/images/s814183768690713336_p51_i1_w1000.jpeg',
    description: 'Get to know your new favorite tee - it\'s super smooth, super comfortable, and made from a cotton touch polyester jersey that won\'t fade after washing.',
  },
  {
    id: 'p52',
    name: 'Plain Cody Cordova Logo Champion T-Shirt',
    price: '$30.00',
    image: '/images/s814183768690713336_p52_i1_w1000.jpeg',
    description: 'Enrich your wardrobe with this elegant design on a Champion t-shirt that has the brand logo embroidered on the left sleeve.',
  },
  {
    id: 'p53',
    name: 'Embroidered CC patches',
    price: '$15.00',
    image: '/images/s814183768690713336_p53_i1_w1000.jpeg',
    description: 'Spice up your outfit by adding an eye-catching embroidered CC patch.',
  },
  {
    id: 'p59',
    name: '$CODY Token Beanie SWAGGGGGG!!!!',
    price: '$25.00',
    image: '/images/s814183768690713336_p59_i1_w1000.jpeg',
    description: 'The perfect beanie has arrived! This embroidered beauty has a snug fit that ensures you\'re going to feel cozy and warm whatever you\'re doing. Every purchase comes with 25 $CODY Tokens!',
  },
  {
    id: 'p60',
    name: 'BABY MAMA RESPECT FLAG',
    price: '$30.00',
    image: '/images/s814183768690713336_p60_i1_w1000.jpeg',
    description: 'Show your respect with this flag.',
  },
]

export default function Shop() {
  return (
    <div className="wsite-content">
      <div className="container">
        <h2 className="wsite-content-title" style={{ textAlign: 'center' }}>Shop</h2>

        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>
        <hr className="styled-hr" style={{ width: '100%' }} />
        <div style={{ height: '20px', overflow: 'hidden', width: '100%' }}></div>

        <div className="paragraph" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p><em>E-commerce functionality will be added in a later phase. For now, products are displayed for reference.</em></p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', background: '#fafafa' }}>
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={640}
                  style={{ width: 'auto', maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 className="wsite-content-title" style={{ fontSize: '20px', marginBottom: '10px' }}>
                  {product.name}
                </h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2a2a2a', marginBottom: '10px' }}>
                  {product.price}
                </div>
                <div className="paragraph" style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                  {product.description}
                </div>
                <button className="wsite-button" style={{ width: '100%' }} disabled>
                  <span className="wsite-button-inner">Coming Soon</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

