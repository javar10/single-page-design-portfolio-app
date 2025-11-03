import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Banner from './sections/Banner';
import { colors } from './style/theme';
import Hero from './sections/Hero';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  return (
    <View style={styles.containerMain}>
      <StatusBar style="auto" />
      <View style={styles.containerTop}>
        <Banner />
        <Hero />
      </View>

      <Banner />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: colors.neutral200,
    alignItems: 'center',
    paddingVertical: 24,
    gap: 64,
  },
  containerTop: {
    borderColor: 'red',
    borderWidth: 3,
    width: '100%',
    padding: 16,
    gap: 40
  }
});
