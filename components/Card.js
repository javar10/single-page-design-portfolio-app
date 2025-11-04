import { StyleSheet, Text, View, Image } from 'react-native'
import { textStyle, colors } from '../style/theme'

const Card = ({ backgroundColor, imgHeight, imgWidth, image, text }) => {
    const s = styles(backgroundColor, imgHeight, imgWidth);

    return (
        <View style={s.container}>
            <View style={s.imageContainer}>
                <Image
                    source={image}
                    style={s.image}
                />
            </View>
            <Text style={s.text}>{text}</Text>
        </View>
    )
}

export default Card

const styles = (backgroundColor, imgHeight, imgWidth) => StyleSheet.create({
    container: {
        height: '100%',
        borderRadius: 8,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: backgroundColor,
        flex: 1,
    },
    imageContainer: {
        alignItems: 'flex-end',
    },
    image: {
        height: imgHeight,
        width: imgWidth,
        justifySelf: 'flex-end',
        resizeMode: 'contain'
    },
    text: {
        ...textStyle[3],
        color: colors.neutral0,
    }
})