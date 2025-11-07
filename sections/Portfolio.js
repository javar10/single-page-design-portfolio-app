import { useRef, useState } from 'react'
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

let index = 2;

const Portfolio = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(index);

    const changeIndex = (direction) => {
        let nextIndex = currentIndex;
        nextIndex = currentIndex + direction

        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex > 4) nextIndex = 4;

        setCurrentIndex(nextIndex);
        
        // console.log('Left Button pressed');
        console.log(currentIndex);
        leftRef.current?.blur();
        rightRef.current?.blur();
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.introText}>My Work</Text>
            <Carousel
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <View style={styles.arrowsContainer}>
                <Pressable
                    ref={leftRef}
                    onPress={() => changeIndex(-1)}
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
                    onPress={() => changeIndex(1)}
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