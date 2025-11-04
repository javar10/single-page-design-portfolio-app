import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './style/theme';
import Banner from './sections/Banner';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.containerTop}>
          <Banner />
          <Hero />
          <Services />
        </View>

        <AboutMe />

        <Contact />
    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.neutral200,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
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
