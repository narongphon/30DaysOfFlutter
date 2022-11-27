const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TCCHomeExpand from "./screens/TCCHomeExpand";
import TCCSplashScreen from "./screens/TCCSplashScreen";
import TCCLogin from "./screens/TCCLogin";
import Notification from "./screens/Notification";
import TCCHomeRefresh from "./screens/TCCHomeRefresh";
import TCCHomeInitial from "./screens/TCCHomeInitial";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TCCHomeExpand"
              component={TCCHomeExpand}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TCCSplashScreen"
              component={TCCSplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TCCLogin"
              component={TCCLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TCCHomeRefresh"
              component={TCCHomeRefresh}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TCCHomeInitial"
              component={TCCHomeInitial}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <TCCSplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
