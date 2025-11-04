import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../style/theme'

const Button = ({ theme }) => {
  return (
    <Pressable>
      <Text style={[
        styles.buttonText,
        theme === 'dark' ? styles.buttonDark : styles.buttonLight
      ]}
      >Free Consultation
      </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonText: {
    ...textStyle[5],
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 999,
    gap: 10,
    alignSelf: 'center',
  },
  buttonDark: {
    backgroundColor: colors.neutral900,
    color: colors.neutral0,
  },
  buttonLight: {
    backgroundColor: colors.lightRed500,
    color: colors.neutral200,
  }
})