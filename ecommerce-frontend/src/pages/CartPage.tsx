import NavBar from '@/components/ecommerce-ui/NavBar'
import { useCart } from '@/contexts/CartContext'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { EmptyState } from "@/components/ui/empty-state"
import { LuShoppingCart } from 'react-icons/lu'
import CartProductTable from '@/components/ecommerce-ui/CartProductTable'

const CartPage = () => {
  const { cart, placeOrder } = useCart();
  return (
    <div>
      <NavBar />
      <Box
        marginBlock={10}
        paddingInline={20}
        w={'full'}
      >
        {cart.length > 0 ?
          <Flex wrap={'wrap'} gap={10}>
            <Box w={'62%'}>
              <Heading>Shopping Bag</Heading>
              <Text marginBlockEnd={4}>{cart.length} items in your bag.</Text>
              <Flex
                direction={'column'}
                gap={4}
                justify={'flex-start'}
                align={'flex-start'}
                borderRadius={4}
                shadow={'lg'}
                padding={4}
              >
                <CartProductTable cart={cart} />
              </Flex>
            </Box>
            <Box
              w={'32%'}
              padding={3}
              borderRadius={4}
              shadow={'lg'}
            >
              <Box position={'relative'}>
                <Heading size={'md'} marginBlockEnd={3}>Coupon Code</Heading>
                <Text fontSize={16}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae rerum, magni dolorum optio deleniti repellendus sapiente tempore natus quae, perferendis sunt, minus ut! Aut libero neque blanditiis enim aliquam.</Text>
                <Input
                  placeholder='coupon code'
                  size={'sm'}
                  paddingInline={3}
                  borderRadius={'full'}
                  marginBlock={2}
                />
                <Button variant={'plain'} color={'orange.300'} position={'absolute'} right={'14px'} top={'148px'} fontSize={'16px'} _hover={{ color: 'orange.600' }}>check</Button>
                <Button
                  paddingInline={3}
                  borderRadius={'full'}
                  w={'full'}
                  size={'sm'}
                >
                  Apply
                </Button>
              </Box>
              <Box
                bg={'teal.500'}
                padding={4}
                borderRadius={16}
                marginBlockStart={4}
                w={'full'}
              >
                <Heading size={'sm'} marginBlockEnd={3}>Cart Total</Heading>
                <Flex direction={'column'} justify={'flex-start'} align={'flex-start'} gap={1}>
                  <Flex justify={'space-between'} align={'center'} w={'full'}>
                    <Text fontSize={'14px'}>Cart Subtotal</Text>
                    <Text fontSize={'14px'}>$ 72.22</Text>
                  </Flex>
                  <Flex justify={'space-between'} align={'center'} w={'full'}>
                    <Text fontSize={'14px'}>Discount</Text>
                    <Text fontSize={'14px'} color={'white'}>- $ 72.22</Text>
                  </Flex>
                  <Flex justify={'space-between'} align={'center'} w={'full'} fontWeight={'semibold'}>
                    <Text fontSize={'14px'}>Cart Total</Text>
                    <Text fontSize={'14px'}>$ 72.22</Text>
                  </Flex>
                </Flex>
                <Button
                  padding={4}
                  marginBlockStart={6}
                  borderRadius={'full'}
                  bg={'white'}
                  color={'teal'}
                  size={'sm'}
                  w={'full'}
                  fontWeight={'medium'}
                  onClick={placeOrder}
                >
                  Checkout
                </Button>
              </Box>
            </Box>
          </Flex>
          :
          <EmptyState
            icon={<LuShoppingCart />}
            title="Your cart is empty"
            description="Explore our products and add items to your cart"
            paddingBlock={20}
          />
        }
      </Box>
    </div>
  )
}

export default CartPage