import { StyleSheet, Text, View, Image } from 'react-native'
import Button from '../components/Button'
import { textStyle, colors } from '../style/theme'

const AboutMe = (width) => {
    const s = styles(width);

    return (
        <View style={s.mainContainer}>
            <Image
                source={require('../assets/images/image-amy.webp')}
                style={s.image}
            />

            <View style={s.contentContainer}>
                <View style={s.textContainer}>
                    <Text style={s.introText}>
                        I’m Amy, and I’d love to work on your next project
                    </Text>
                    <Text style={s.subText}>
                        I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!
                    </Text>
                </View>

                <Button theme={'light'} />
            </View>

        </View>
    )
}

export default AboutMe

const styles = (w) => StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        gap: 24,
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },
    contentContainer: {
        flexDirection: 'column',
        gap: 32,
    },
    textContainer: {
        flexDirection: 'column',
        gap: 20,
    },
    introText: {
        ...textStyle[2],
        color: colors.neutral900,
        textAlign: 'center',
    },
    subText: {
        ...textStyle[4],
        color: colors.neutral400,
        textAlign: 'center',
    }
})