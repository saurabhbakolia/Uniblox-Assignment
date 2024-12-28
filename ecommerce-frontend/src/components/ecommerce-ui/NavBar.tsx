import { Badge, Flex, MenuSeparator, Text, Box } from '@chakra-ui/react'
import { MenuRoot, MenuItem, MenuContent, MenuTrigger } from '@chakra-ui/react'
import { Avatar } from '@/components/ui/avatar'
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router';


const NavBar = () => {
    const { cart } = useCart();
    
    const handleCart = () => {
        
    };

    return (
        <Flex bgColor={'teal'} color={'white'} justify={'space-between'} align={'center'} paddingInline={20} paddingBlock={3}>
            <Text fontSize={'xl'} fontWeight={'semibold'}>
                <Link to={'/'} >Uniblox</Link>
            </Text>
            <Flex justify={'center'} align={'center'} gap={8}>
                <Box position={'relative'}>
                    <Link to={'/cart'} onClick={handleCart}>
                        <CiShoppingCart color='white' size={42} fontWeight={600} strokeWidth={1} />
                    </Link>
                    <Badge position={'absolute'} top={-1} right={-2} color={'white'} bg={'transparent'} borderRadius={'full'}>{cart.length}</Badge>
                </Box>
                <MenuRoot>
                    <MenuTrigger asChild position={'relative'}>
                        <Avatar size={'xs'} name='profile' src='' />
                    </MenuTrigger>
                    <MenuContent position={'absolute'} top={12} right={20} padding={2}>
                        <MenuItem
                            value='setting'
                            _hover={{ bg: "teal", color: "white" }}
                            padding={2}
                        >
                            Settings
                        </MenuItem>
                        <MenuSeparator />
                        <MenuItem
                            value='logout'
                            _hover={{ bg: "teal", color: "white" }} padding={2}
                        >
                            Log Out
                        </MenuItem>
                    </MenuContent>
                </MenuRoot>
            </Flex>
        </Flex>
    )
}

export default NavBar