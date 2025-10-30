import { StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../style/theme'

const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heroText}>Design solutions made easy</Text>
      <Text style={styles.heroSubText}>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
    container: {
        width: '91.5%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    heroText: {
        ...textStyle[1.5],
        textAlign: 'center',
        color: colors.neutral900,
    },
    heroSubText: {
        ...textStyle[4],
        textAlign: 'center',
        color: colors.neutral400,
    },
})