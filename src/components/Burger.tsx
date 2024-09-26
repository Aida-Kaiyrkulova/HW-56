import { BurgerIngredient } from '../Ingredients';

interface BurgerProps {
    ingredients: BurgerIngredient[];
}

const Burger = ({ ingredients }: BurgerProps) => {
    if (ingredients.length === 0) {
        return <p>No ingredients added to the burger.</p>;
    }

    return (
        <div className="Burger">
            <div className="BreadTop">
                Bread Top
                <div className="Seeds1"> </div>
                <div className="Seeds1"> </div>
                <div className="Seeds2"> </div>
            </div>
            {ingredients.map(ingredient => {
                const IngredientClass = ingredient.name;
                return (
                    <div className={IngredientClass} key={ingredient.name}>
                        {ingredient.name} x {ingredient.count}
                    </div>
                );
            })}
            <div className="BreadBottom">Bread Bottom</div>
        </div>
    );
};

export default Burger;
