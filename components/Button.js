import { useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, textStyle } from '../style/theme'

const Button = ({ theme }) => {
  const buttonRef = useRef(null);

  return (
    <Pressable
      ref={buttonRef}
      onPress={() => {
        console.log('Button pressed');
        buttonRef.current?.blur();
      }}
    >
      {({ pressed, hovered, focused }) => {
        const isDark = theme === 'dark';
        const isLight = theme === 'light';

        let textStyle;

        if (isDark) {
          if (pressed || hovered) textStyle = styles.darkHoveredBtn;
          else if (focused) textStyle = styles.darkFocusedBtn;
          else textStyle = styles.darkDefaultBtn;
        } else if (isLight) {
          if (pressed || hovered) textStyle = styles.lightHoverBtn;
          else if (focused) textStyle = styles.lightFocusedBtn;
          else textStyle = styles.lightDefaultBtn;
        }

        return (
          <Text style={[styles.buttonText, textStyle]}>
            Free Consultation
          </Text>
        );
      }}
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
    color: colors.neutral200,
  },
  darkDefaultBtn: {
    backgroundColor: colors.neutral900,
  },
  darkHoveredBtn: {
    backgroundColor: colors.galacticBlue500,
  },
  darkFocusedBtn: {
    backgroundColor: colors.neutral900,
    borderColor: 'transparent',
    borderWidth: 2,
    shadowColor: colors.galacticBlue500,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  lightDefaultBtn: {
    backgroundColor: colors.lightRed500,
  },
  lightHoverBtn: {
    backgroundColor: colors.summerYellow500,
    color: colors.neutral0
  },
  lightFocusedBtn: {
    backgroundColor: colors.lightRed500,
    borderColor: 'transparent',
    borderWidth: 2,
    shadowColor: colors.lightRed500,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  }
})