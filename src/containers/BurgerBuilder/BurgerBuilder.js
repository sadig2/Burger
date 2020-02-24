import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  bacon: 1.7,
  meat: 3
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };


  updatePurchaseState = (ingredients) => {


    const sum = Object.keys(ingredients).map(
      (key) => {
        return ingredients[key]
      }
    ).reduce((sum, el) => {
      return sum + el;
    }, 0)

    this.setState({ purchasable: sum > 0 })
  }


  addIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type]
    const newCount = oldCount + 1;

    const newIngredient = { ...this.state.ingredients }

    newIngredient[type] = newCount

    const priceAddition = INGREDIENT_PRICES[type]

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;



    this.setState({
      ingredients: newIngredient, totalPrice: newPrice
    })

    this.updatePurchaseState(newIngredient)

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return;
    }
    let newCount = oldCount - 1;

    const newIng = { ...this.state.ingredients }

    newIng[type] = newCount;

    const oldTotal = this.state.totalPrice
    const priceSubstraction = INGREDIENT_PRICES[type]
    let newTotal = oldTotal - priceSubstraction;


    this.setState({
      ingredients: newIng, totalPrice: newTotal
    })

    this.updatePurchaseState(newIng)

  }

  render() {

    const disableding = { ...this.state.ingredients }

    for (let x in disableding) {
      disableding[x] = disableding[x] <= 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls

          ingredientAdded={this.addIngredientHandler}
          ingredientSubstracted={this.removeIngredientHandler}
          disabled={disableding}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
