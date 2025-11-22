import { StatusBar } from 'expo-status-bar';
import MainNavigation from './src/navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigation />
    </NavigationContainer>
  );
}

