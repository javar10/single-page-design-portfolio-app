import { StyleSheet, View, Image } from 'react-native'
import Logo from '../assets/images/Logo.png'
import Button from '../components/Button'

const Banner = () => {

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 48, height: 48 }}/>
      <Button theme={'dark'}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
})