import { StyleSheet, Text, View, Image } from 'react-native'
import Button from '../components/Button'
import { textStyle, colors } from '../style/theme'

const AboutMe = ({ screenSize }) => {
    const s = styles(screenSize);

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

const styles = (screenSize) => StyleSheet.create({
    mainContainer: {
        width: screenSize === 'laptop' ? '82%' : '100%',
        flexDirection: screenSize === 'laptop' ? 'row' : 'column',
        paddingHorizontal: screenSize === 'laptop' ? 0 : screenSize === 'tablet' ? 32 : 16,
        gap: screenSize === 'laptop' ? 0 : 24,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        height: screenSize === 'laptop' ? 445 : 300,
        width: screenSize === 'laptop' ? 445 : 300,
        resizeMode: 'contain',
    },
    contentContainer: {
        width: screenSize === 'laptop' ? '49%' : 'auto',
        flexDirection: 'column',
        gap: 32,
        alignItems: screenSize === 'laptop' ? 'flex-start' : 'center',
    },
    textContainer: {
        flexDirection: 'column',
        gap: 20,
    },
    introText: {
        ...textStyle[2],
        color: colors.neutral900,
        textAlign: screenSize === 'laptop' ? 'left' : 'center',
    },
    subText: {
        ...textStyle[4],
        color: colors.neutral400,
        textAlign: screenSize === 'laptop' ? 'left' : 'center',
    }
})