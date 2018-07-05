import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
const INGREDIENT_PRICE = {
  salad: 0.7,
  meat: 1.3,
  cheese: 0.8,
  bacon: 1.0
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    price: 5
  };
  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients }; //if used array, will cause the wrong input and result an exception
    updateIngredients[type] = newCount;
    const oldPrice = this.state.price;
    const newPrice = oldPrice + INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updateIngredients,
      price: newPrice
    });
  };
  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients }; //if used array, will cause the wrong input and result an exception
    updateIngredients[type] = newCount;
    const oldPrice = this.state.price;
    const newPrice = oldPrice - INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updateIngredients,
      price: newPrice
    });
  };
  render() {
    const disableInfo = { ...this.state.ingredients };
    console.log(disableInfo);
    for (let i in disableInfo) {
      disableInfo[i] = disableInfo[i] <= 0;
    }
    // const disableInfo = Object.values(this.state.ingredients);
    // console.log(disableInfo);
    // disableInfo.forEach(element => {
    //   element = element <= 0;
    // });
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          addIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          disableInfo={disableInfo}
          price={this.state.price}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
