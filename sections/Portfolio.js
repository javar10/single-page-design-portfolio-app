import { useRef } from 'react'
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
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.introText}>My Work</Text>
            <Carousel />
            <View style={styles.arrowsContainer}>
                <Pressable
                    ref={leftRef}
                    onPress={() => {
                        console.log('Button pressed');
                        leftRef.current?.blur();
                    }}
                >
                    {({ pressed, hovered, focused }) => {
                        let source = ARROWS.leftDefault;

                        if (pressed || hovered) {
                            source = ARROWS.leftHover;
                        } else if (focused) {
                            source = ARROWS.leftFocus;
                        }

                        return <Image source={source} style={styles.arrowBtn} />;
                    }}
                </Pressable>

                <Pressable
                    ref={rightRef}
                    onPress={() => {
                        console.log('Button pressed');
                        rightRef.current?.blur();
                    }}
                >
                    {({ pressed, hovered, focused }) => {
                        let source = ARROWS.rightDefault;

                        if (pressed || hovered) {
                            source = ARROWS.rightHover;
                        } else if (focused) {
                            source = ARROWS.rightFocus;
                        }

                        return <Image source={source} style={styles.arrowBtn} />;
                    }}
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