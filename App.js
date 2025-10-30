import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './sections/Header';
import { colors } from './style/theme';
import Hero from './sections/Hero';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Hero />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    alignItems: 'center',
    paddingVertical: 24,
    gap: 64,
  },
});
