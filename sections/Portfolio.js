import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { colors, textStyle } from '../style/theme'
import Carousel from './Carousel'

const ARROWS = {
    leftDefault: require('../assets/images/Left-Default.png'),
    leftFocus: require('../assets/images/Left-Focus.png'),
    leftHover: require('../assets/images/Left-Hover.png'),
    rightDefault: require('../assets/images/Right-Default.png'),
    rightFocus: require('../assets/images/Right-Focus.png'),
    rightHover: require('../assets/images/Right-Hover.png'),
}

const Portfolio = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.introText}>My Work</Text>
            <Carousel />
            <View style={styles.arrowsContainer}>
                <Pressable>
                    <Image
                        source={ARROWS.leftDefault}
                        style={styles.arrowBtn}
                    />
                </Pressable>
                <Pressable>
                    <Image
                        source={ARROWS.rightDefault}
                        style={styles.arrowBtn}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default Portfolio

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'column',
        gap: 40,
        alignItems: 'center',
    },
    introText: {
        ...textStyle[1.5],
        color: colors.neutral900,
        textAlign: 'centers',
    },
    arrowsContainer: {
        flexDirection: 'row',
        gap: 16
    }, 
    arrowBtn: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
    }
})