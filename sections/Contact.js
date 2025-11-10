import { StyleSheet, Text, View } from 'react-native'
import Banner from './Banner'
import { colors, textStyle } from '../style/theme'
import Button from '../components/Button'

const Contact = ({ width }) => {
    const s = styles(width);

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
            <Banner width={width} />
        </View>
    )
}

export default Contact

const styles = (w) => StyleSheet.create({
    mainContainer: {
        width: w > 798 ? '82%' : '100%',
        paddingHorizontal: w > 798 ? 0 : w > 740 ? 32 : 16,
        gap: w > 798 ? 48 : 32,
    },
    contentContainer: {
        flexDirection: w > 798 ? 'row' : 'column',
        borderRadius: 10,
        paddingVertical: w > 798 ? 80 : w > 740 ? 64 : 40,
        paddingHorizontal: w > 798 ? 64 : w > 740 ? 40 : 16,
        gap: w > 798 ? 0 : 40,
        backgroundColor: colors.neutral900,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: w > 798 ? '51%' : 'auto',
        flexDirection: 'column',
        gap: 24,
    },
    introText: {
        ...(w > 740 ? textStyle[2] : textStyle[1.5]),
        color: colors.neutral200,
        textAlign: w > 798 ? 'left' : 'center',
    },
    subText: {
        ...textStyle[4],
        color: colors.neutral200,
        textAlign: w > 798 ? 'left' : 'center'
    },
})