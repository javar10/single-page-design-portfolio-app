import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './style/theme';
import Banner from './sections/Banner';
import Hero from './sections/Hero';
import Services from './sections/Services';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Portfolio from './sections/Portfolio';


export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  const { width } = useWindowDimensions();
  const screenSize = width > 1040 ? 'laptop' : width > 740 ? 'tablet' : 'phone';
  const s = styles(screenSize);

  return (
    <View style={s.mainContainer}>
      <StatusBar style="auto" />

      <ScrollView
        style={s.scrollView}
        contentContainerStyle={s.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={s.containerTop}>
          <Banner screenSize={screenSize} />
          <Hero screenSize={screenSize} />
          <Services width={width} />
        </View>

        <AboutMe width={width} />
        <Portfolio width={width} />
        <Contact screenSize={screenSize} />

      </ScrollView>
    </View>
  );
}

const styles = (screenSize) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.neutral200,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: screenSize === 'laptop' ? 32 : 24,
    paddingBottom: screenSize === 'laptop' ? 64 : screenSize === 'tablet' ? 40 : 24,
    gap: screenSize === 'laptop' ? 120 : screenSize === 'tablet' ? 80 : 64,
  },
  containerTop: {
    width: screenSize === 'laptop' ? '82%' : '100%',
    paddingHorizontal: screenSize === 'laptop' ? 0 : screenSize === 'tablet' ? 32 : 16,
    gap: screenSize === 'laptop' ? 80 : screenSize === 'tablet' ? 64 : 40,
  }
});
