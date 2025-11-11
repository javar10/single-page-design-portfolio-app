import { StyleSheet, Text, View } from 'react-native'
import Banner from './Banner'
import { colors, textStyle } from '../style/theme'
import Button from '../components/Button'

const Contact = ({ screenSize }) => {
    const s = styles(screenSize);

    return (
        <View style={s.mainContainer}>
            <View style={s.contentContainer}>
                <View style={s.textContainer}>
                    <Text style={s.introText}>
                        Book a call with me
                    </Text>
                    <Text style={s.subText}>
                        I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.
                    </Text>
                </View>
                <View>
                    <Button theme={'light'} />
                </View>

            </View>
            <Banner screenSize={screenSize} />
        </View>
    )
}

export default Contact

const styles = (screenSize) => StyleSheet.create({
    mainContainer: {
        width: screenSize === 'laptop' ? '82%' : '100%',
        paddingHorizontal: screenSize === 'laptop' ? 0 : screenSize === 'tablet' ? 32 : 16,
        gap: screenSize === 'laptop' ? 48 : 32,
    },
    contentContainer: {
        flexDirection: screenSize === 'laptop' ? 'row' : 'column',
        borderRadius: 10,
        paddingVertical: screenSize === 'laptop' ? 80 : screenSize === 'tablet' ? 64 : 40,
        paddingHorizontal: screenSize === 'laptop' ? 64 : screenSize === 'tablet' ? 40 : 16,
        gap: screenSize === 'laptop' ? 0 : 40,
        backgroundColor: colors.neutral900,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: screenSize === 'laptop' ? '51%' : 'auto',
        flexDirection: 'column',
        gap: 24,
    },
    introText: {
        ...(screenSize === 'tablet' ? textStyle[2] : textStyle[1.5]),
        color: colors.neutral200,
        textAlign: screenSize === 'laptop' ? 'left' : 'center',
    },
    subText: {
        ...textStyle[4],
        color: colors.neutral200,
        textAlign: screenSize === 'laptop' ? 'left' : 'center'
    },
})