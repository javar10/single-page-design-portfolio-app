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
  const s = styles(width);

  return (
    <View style={s.mainContainer}>
      <StatusBar style="auto" />

      <ScrollView
        style={s.scrollView}
        contentContainerStyle={s.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={s.containerTop}>
          <Banner width={width} />
          <Hero width={width} />
          <Services width={width} />
        </View>

        <AboutMe width={width} />
        <Portfolio width={width} />
        <Contact width={width} />

      </ScrollView>
    </View>
  );
}

const styles = (w) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.neutral200,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: w > 1440 ? 32 : 24,
    paddingBottom: w > 1440 ? 64 : w > 740 ? 40 : 24,
    gap: w > 1440 ? 120 : w > 740 ? 80 : 64,
  },
  containerTop: {
    width: w > 798 ? '82%' : '100%',
    paddingHorizontal: w > 1440 ? 0 : w > 740 ? 32 : 16,
    gap: w > 1440 ? 80 : w > 740 ? 64 : 40,
  }
});
