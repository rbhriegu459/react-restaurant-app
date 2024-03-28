import { Fragment } from 'react';
import mealsImage from '../../assests/header-img.jpg';
import classes from './Header.module.css'

const Header = props => {
    return (
        <Fragment>
            <header className= {classes.header}>
                <h1>ReactMeals</h1>
                <button>CART</button>
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food'/>
            </div>
        </Fragment>
    )
}

export default Header;