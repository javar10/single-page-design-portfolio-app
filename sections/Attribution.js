import { View, Text, Linking, StyleSheet } from 'react-native'
import { colors, textStyle } from '../style/theme'

const Attribution = ({ screenSize }) => {
    const s = styles(screenSize);

    return (
        <View style={s.container}>
            <Text style={s.attText}>
                Challenge by {''}
                <Text
                    style={[s.attText, s.attLink]}
                    onPress={() => Linking.openURL('https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6')}
                >
                    Frontend Mentor
                </Text>.
            </Text>
            {screenSize === 'laptop' && <Text style={s.attText}>{' '}</Text>}
            {screenSize === 'tablet' && <Text style={s.attText}>{' '}</Text>}
            <Text style={s.attText}>
                Coded by {''}
                <Text
                    style={[s.attText, s.attLink]}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/javargas')}
                >
                    Jessica Vargas
                </Text>.
            </Text>
        </View>
    )
}

export default Attribution

const styles = (screenSize) => StyleSheet.create({
    container: {
        width: screenSize === 'laptop' ? 730 : '91.5%',
        flexDirection: screenSize === 'laptop' || screenSize === 'tablet' ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    attText: {
        color: colors.neutral400,
        ...textStyle[5],
        marginBottom: 1,
    },
    attLink: {
        textDecorationLine: 'underline',
    },
});