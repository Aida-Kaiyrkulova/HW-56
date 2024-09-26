import { useState, useCallback } from 'react';
import { INGREDIENTS, BurgerIngredient } from './Ingredients';
import Burger from './components/Burger';
import IngredientButton from './components/IngredientButton';
import BurgerPrice from './components/BurgerPrice';
import './App.css';

const BASE_PRICE = 30; // Базовая цена бургера

const App = () => {
    const [ingredients, setIngredients] = useState<BurgerIngredient[]>(INGREDIENTS);

    const handleAddIngredient = useCallback((ingredient: BurgerIngredient) => {
        setIngredients(prev =>
            prev.map(i =>
                i.name === ingredient.name ? { ...i, count: i.count + 1 } : i
            )
        );
    }, []);

    const handleRemoveIngredient = useCallback((ingredient: BurgerIngredient) => {
        setIngredients(prev =>
            prev.map(i =>
                i.name === ingredient.name && i.count > 0
                    ? { ...i, count: i.count - 1 }
                    : i
            )
        );
    }, []);

    const removeAllIngredients = useCallback(() => {
        setIngredients(prev => prev.map(i => ({ ...i, count: 0 })));
    }, []);

    const calculateBurgerPrice = () => {
        const totalIngredientsPrice = ingredients.reduce(
            (acc, ingredient) => acc + ingredient.price * ingredient.count,
            0
        );
        return BASE_PRICE + totalIngredientsPrice;
    };

    return (
        <div className="Burger">
            <h1>Burger Constructor</h1>
            <div>
                {INGREDIENTS.map(ingredient => (
                    <IngredientButton
                        key={ingredient.name}
                        ingredient={ingredient}
                        onAdd={() => handleAddIngredient(ingredient)}
                        onRemove={() => handleRemoveIngredient(ingredient)}
                    />
                ))}
            </div>
            <Burger ingredients={ingredients.filter(ing => ing.count > 0)} />
            <BurgerPrice price={calculateBurgerPrice()} />
            <button onClick={removeAllIngredients}>Clear All Ingredients</button>
        </div>
    );
};

export default App;