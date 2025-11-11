import { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

const IMAGES = [
    require('../assets/images/image-slide-1.jpg'),
    require('../assets/images/image-slide-2.jpg'),
    require('../assets/images/image-slide-3.jpg'),
    require('../assets/images/image-slide-4.jpg'),
    require('../assets/images/image-slide-5.jpg'),
];

const Carousel = ({ width, currentIndex, setCurrentIndex }) => {
    const IMAGE_WIDTH = width > 740 ? 540 : 270;
    const GAP = width > 740 ? 32 : 20;
    const ITEM_SIZE = IMAGE_WIDTH + GAP;
    const SWIPE_THRESHOLD = 50;
    const PADDING = (width - IMAGE_WIDTH) / 2;

    const s = styles(width, GAP, PADDING, IMAGE_WIDTH);

    const scrollRef = useRef(null);
    const startX = useRef(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!scrollRef.current || !isReady) return;
        centerImage(currentIndex, false);
    }, [currentIndex, isReady]);

    const centerImage = (index, animated = true) => {
        const offsetX = index * ITEM_SIZE - width / 2 + IMAGE_WIDTH / 2 + PADDING;
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ x: offsetX, animated });
        }
    };

    const handleScrollBeginDrag = (e) => {
        startX.current = e.nativeEvent.contentOffset.x;
    };

    const handleScrollEndDrag = (e) => {
        const x = e.nativeEvent.contentOffset.x;
        const diff = x - startX.current;

        let nextIndex = currentIndex;

        if (diff > SWIPE_THRESHOLD && currentIndex < IMAGES.length - 1) {
            nextIndex = currentIndex + 1;
        } else if (diff < -SWIPE_THRESHOLD && currentIndex > 0) {
            nextIndex = currentIndex - 1;
        }

        setCurrentIndex(nextIndex);
        centerImage(nextIndex);
    };

    return (
        <View style={s.mainContainer} onLayout={() => setIsReady(true)}>
            <ScrollView
                ref={scrollRef}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                decelerationRate="fast"
                onScrollBeginDrag={handleScrollBeginDrag}
                onScrollEndDrag={handleScrollEndDrag}
                contentContainerStyle={s.imageContainer}
                style={s.scrollView}
            >
                {IMAGES.map((img, i) => (
                    <Image key={i} source={img} style={s.image} />
                ))}
            </ScrollView>
        </View>
    );
}

export default Carousel

const styles = (w, GAP, PADDING, IMAGE_WIDTH) => StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: w > 740 ? 360 : 180,
        width: '100%'
    },
    scrollView: {
        width: '100%',
        overflowX: 'scroll',
    },
    imageContainer: {
        flexDirection: 'row',
        gap: GAP,
        alignItems: 'center',
        paddingHorizontal: PADDING,
        minWidth: '100%'
    },
    image: {
        width: IMAGE_WIDTH,
        height: w > 740 ? 360 : 180,
        resizeMode: 'contain',
        borderRadius: w > 740 ? 8 : 6,
    },
});
