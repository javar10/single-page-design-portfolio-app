import { StyleSheet, Text, View } from 'react-native'
import Banner from './Banner'
import { colors, textStyle } from '../style/theme'
import Button from '../components/Button'

const Contact = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.introText}>
                        Book a call with me
                    </Text>
                    <Text style={styles.subText}>
                        I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.
                    </Text>
                </View>
                <Button theme={'light'} />
            </View>
            <Banner />
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingHorizontal: 16,
        gap: 32
    },
    contentContainer: {
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 16,
        gap: 40,
        backgroundColor: colors.neutral900,
    },
    textContainer: {
        flexDirection: 'column',
        gap: 24,
    },
    introText: {
        ...textStyle[1],
        color: colors.neutral200,
        textAlign: 'center',
    },
    subText: {
        ...textStyle[4],
        color: colors.neutral200,
        textAlign: 'center'
    },
})