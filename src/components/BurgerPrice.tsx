interface BurgerPriceProps {
    price: number;
}

const BurgerPrice = ({ price }: BurgerPriceProps) => {
    return <h3>Total Price: {price} som</h3>;
};

export default BurgerPrice;