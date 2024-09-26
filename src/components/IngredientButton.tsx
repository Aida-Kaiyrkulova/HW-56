import { BurgerIngredient } from '../Ingredients';

interface IngredientButtonProps {
    ingredient: BurgerIngredient;
    onAdd: () => void;
    onRemove: () => void;
}

const IngredientButton = ({ ingredient, onAdd, onRemove }: IngredientButtonProps) => {
    return (
        <div className="IngredientButton">
            <img src={ingredient.image} alt={ingredient.name} />
            <span>{ingredient.name}</span>
            <button onClick={onAdd}>+</button>
            <button onClick={onRemove}>-</button>
            </div>
    );
};

export default IngredientButton;