import { Flex, Image, Table, Text } from "@chakra-ui/react"
import { ProductCardType } from './ProductCard';

interface CartProductTableProps {
    cart: CartProductTableItemProps[];
}

interface CartProductTableItemProps extends ProductCardType {
    quantity: number;
}

const CartProductTable = ({ cart }: CartProductTableProps) => {
    return (
        <Table.Root size="sm">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Product</Table.ColumnHeader>
                    <Table.ColumnHeader>Price</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">Quantity</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {cart.map((item) => (
                    <Table.Row key={item.id} marginBlock={4}>
                        <Table.Cell>
                            <Flex gap={2} justify={'flex-start'} align={'center'}>
                                <Image
                                    src={item.imageUrl}
                                    rounded={"md"}
                                    alt={item.name}
                                    w={20}
                                    h={10}
                                    objectFit={'cover'}
                                    objectPosition={'center'}
                                />
                                <Text>{item.name}</Text>
                            </Flex>
                        </Table.Cell>
                        <Table.Cell>${item.price}</Table.Cell>
                        <Table.Cell textAlign={'end'} paddingInlineEnd={4}>{item.quantity}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default CartProductTable