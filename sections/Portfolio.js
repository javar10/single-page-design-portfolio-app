import { Pressable, StyleSheet, Text, View , Image} from 'react-native'
import { colors, textStyle } from '../style/theme'
import Carousel from './Carousel'

const Portfolio = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.introText}>My Work</Text>
      <Carousel />
      <View>
        <Pressable></Pressable>
        <Pressable></Pressable>
      </View>
    </View>
  )
}

export default Portfolio

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'column',
        gap: 40,
        alignItems: 'center',
    },
    introText: {
        ...textStyle[1.5],
        color: colors.neutral900,
        textAlign: 'centers',
    }
})