import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id : 'm1',
        name : 'Sushi',
        description : 'Finest fresh vegetables',
        price : 22.99,
    },
    {
        id : 'm2',
        name : 'Pasta',
        description : 'White Sauce Pasta',
        price : 16.5,
    },
    {
        id : 'm3',
        name : 'Burger',
        description : 'American, Aloo tikki',
        price : 12.99,
    },
    {
        id : 'm4',
        name : 'Green Bowl',
        description : 'Healthy and green',
        price : 21.99,
    }

]
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return <li>{meal.name}</li>;
    });
    return <section className={classes.meals}>
        <ul>{mealsList}</ul>
    </section>
};

export default AvailableMeals;