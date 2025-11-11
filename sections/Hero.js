import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../style/theme'

const Hero = ({ screenSize }) => {
  const s = styles(screenSize);

  return (
    <View style={s.container}>
      <Text style={s.heroText}>Design solutions made easy</Text>
      <Text style={s.heroSubText}>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>
    </View>
  )
}

export default Hero

const styles = (screenSize) => StyleSheet.create({
  container: {
    width: screenSize === 'laptop' ? '68%' : 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    alignSelf: 'center',
  },
  heroText: {
    width: screenSize === 'laptop' ? '100%' : screenSize === 'tablet' ? '77%' : 'auto',
    ...(screenSize === 'tablet' ? textStyle[1] : textStyle[1.5]),
    textAlign: 'center',
    color: colors.neutral900,
  },
  heroSubText: {
    width: screenSize === 'laptop' ? '76%' : screenSize === 'tablet' ? '85%' : 'auto',
    ...textStyle[4],
    textAlign: 'center',
    color: colors.neutral400,
  },
})