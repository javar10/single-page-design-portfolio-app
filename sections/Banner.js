import { StyleSheet, View, Image } from 'react-native'
import Logo from '../assets/images/Logo.png'
import Button from '../components/Button'

const Banner = ({ screenSize }) => {
  const s = styles(screenSize);

  return (
    <View style={s.container}>
      <Image source={Logo} style={s.logo} />
      <Button theme={'dark'} />
    </View>
  )
}

export default Banner

const styles = (screenSize) => StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: screenSize === 'tablet' ? 64 : 48,
    height: screenSize === 'tablet' ? 64 : 48,
  }
})