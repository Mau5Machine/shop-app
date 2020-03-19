import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import {
  ProductsOverviewScreen,
  ProductDetailsScreen,
  CartScreen
} from "../screens/shop";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTitleStyle: { fontFamily: "open-sans-bold" },
      headerBackTitleStyle: { fontFamily: "open-sans" },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
