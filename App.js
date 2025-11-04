import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './style/theme';
import Banner from './sections/Banner';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AboutMe from './sections/AboutMe';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  return (
    <View style={styles.containerMain}>
      <StatusBar style="auto" />

      <ScrollView >

        <View style={styles.containerTop}>
          <Banner />
          <Hero />
          <Services />
        </View>

        <AboutMe />

        <Banner />
      </ScrollView>
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
    width: '100%',
    padding: 16,
    gap: 40
  }
});
