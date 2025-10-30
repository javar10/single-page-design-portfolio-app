import { StyleSheet, View, Image } from 'react-native'
import Logo from '../assets/images/Logo.png'
import Button from '../components/Button'

const Header = () => {

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 48, height: 48 }}/>
      <Button theme={'dark'}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '91.5%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
})