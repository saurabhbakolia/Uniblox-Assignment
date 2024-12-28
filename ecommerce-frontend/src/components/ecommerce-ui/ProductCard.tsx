import { useCart } from "@/contexts/CartContext";
import { Box, Button, Card, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

export interface ProductCardType {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC = () => {
    const { addToCart } = useCart();

    const cardData: ProductCardType[] = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `Living Room Sofa ${index + 1}`,
        description: "This sofa is perfect for modern tropical spaces, baroque-inspired spaces.",
        price: 450 + index * 10,
        imageUrl:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    }));

    return (
        <Box paddingInline={20} paddingBlock={6}>
            <Grid
                gridTemplateColumns={{
                    base: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                }}
                gap={4}
                flexWrap="wrap"
            >
                {cardData.map((card) => (
                    <Card.Root key={card.id} maxW="sm" overflow="hidden">
                        <Image src={card.imageUrl} alt={`Image of ${card.name}`} />
                        <Card.Body gap="2" padding={3}>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Description>{card.description}</Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                ${card.price}
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2" padding={3}>
                            <Button variant="solid" padding={2}>
                                Buy now
                            </Button>
                            <Button variant="ghost" padding={2} onClick={() => addToCart(card)}>
                                Add to cart
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductCard;
