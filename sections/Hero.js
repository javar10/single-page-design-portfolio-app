import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../style/theme'

const Hero = ({ width }) => {
  const s = styles(width);

  return (
    <View style={s.container}>
      <Text style={s.heroText}>Design solutions made easy</Text>
      <Text style={s.heroSubText}>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>
    </View>
  )
}

export default Hero

const styles = (w) => StyleSheet.create({
  container: {
    width: w > 798 ? '68%' : 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    alignSelf: 'center',
  },
  heroText: {
    width: w > 798 ? '100%' : w > 740 ? '77%' : 'auto',
    ...(w > 740 ? textStyle[1] : textStyle[1.5]),
    textAlign: 'center',
    color: colors.neutral900,
  },
  heroSubText: {
    width: w > 798 ? '76%' : w > 740 ? '85%' : 'auto',
    ...textStyle[4],
    textAlign: 'center',
    color: colors.neutral400,
  },
})