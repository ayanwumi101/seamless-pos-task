import { createContext, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Home'
import ProductDetails from "./pages/ProductDetails"
import Header from './components/Header'
import { getAllProductsApi } from './pages/apis'


export const ProductsContext = createContext(null)

function App() {

  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await getAllProductsApi()
      const data = await response.data
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts()
  })

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <ProductsContext.Provider 
    value={{
      products, 
      setProducts
      } as any}
    >
    <Box as='main'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
    </Box>
    </ProductsContext.Provider>
  )
}

export default App
