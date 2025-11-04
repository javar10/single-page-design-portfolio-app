import { StyleSheet, Text, View, Image } from 'react-native'
import { textStyle, colors } from '../style/theme'

const Card = ({ backgroundColor, height, imgHeight, imgWidth, image, text }) => {
    const s = styles(height, backgroundColor, imgHeight, imgWidth);

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

const styles = (height, backgroundColor, imgHeight, imgWidth) => StyleSheet.create({
    container: {
        height: height,
        borderRadius: 8,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: backgroundColor,
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