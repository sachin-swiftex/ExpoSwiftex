import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNavigation from "./src/navigation/MainNavigation";
export default function App() {
  const [message, setMessage] = useState("Connecting...");
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={{ colors: { background: "#0a2a58" } }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#0a2a58" }}>
          <MainNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
