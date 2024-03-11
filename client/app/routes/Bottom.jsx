import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Category from "./../screens/Category";
import Filter from "../screens/Filter";
import Product from "../screens/Product";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator>
      <Screen name="Home" component={Category} />
      <Screen name="filter" component={Filter} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}

export default MyTabs;
