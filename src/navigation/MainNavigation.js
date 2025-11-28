import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomNavigation";
import GameUi from "../screens/GameUi";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false, }}
        
      />
      <Stack.Screen
        name="GameUi"
        component={GameUi}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
