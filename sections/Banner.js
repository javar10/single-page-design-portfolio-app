import { StyleSheet, View, Image } from 'react-native'
import Logo from '../assets/images/Logo.png'
import Button from '../components/Button'

const Banner = ({ width }) => {
  const s = styles(width);

  return (
    <View style={s.container}>
      <Image source={Logo} style={s.logo} />
      <Button theme={'dark'} />
    </View>
  )
}

export default Banner

const styles = (w) => StyleSheet.create({
  container: {
    // width: w > 798 ? '100%' : 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // alignSelf: 'center',
  },
  logo: {
    width: w > 740 ? 64 : 48,
    height: w > 740 ? 64 : 48,
  }
})