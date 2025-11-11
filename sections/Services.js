import { StyleSheet, View } from 'react-native'
import { colors } from '../style/theme'
import Card from '../components/Card'

const IMAGES = {
    graphicDesign: require('../assets/images/pattern-graphic-design.png'),
    uiUx: require('../assets/images/pattern-ui-ux.png'),
    apps: require('../assets/images/pattern-apps.png'),
    illustrations: require('../assets/images/pattern-illustrations.png'),
    photography: require('../assets/images/pattern-photography.png'),
    motionGraphics: require('../assets/images/pattern-motion-graphics.png')
}


const Services = ({ screenSize }) => {
    const s = styles(screenSize);

    return (
        <View style={s.mainContainer}>
            <View style={s.topContainer}>
                <View style={s.sectionContainer}>
                    <Card
                        backgroundColor={colors.galacticBlue500}
                        imgHeight={192}
                        imgWidth={128}
                        image={IMAGES.graphicDesign}
                        text={'Graphic Design'}
                    />
                </View>

                <View style={s.sectionContainer}>
                    <View style={s.twoSmallCards}>
                        <Card
                            backgroundColor={colors.orange500}
                            imgHeight={64}
                            imgWidth={64}
                            image={IMAGES.uiUx}
                            text={'UI/UX'}
                        />
                        <Card
                            backgroundColor={colors.pink500}
                            imgHeight={64}
                            imgWidth={64}
                            image={IMAGES.apps}
                            text={'Apps'}
                        />
                    </View>
                    <Card
                        backgroundColor={colors.lightRed500}
                        imgHeight={64}
                        imgWidth={128}
                        image={IMAGES.illustrations}
                        text={'Illustrations'}
                    />
                </View>
            </View>


            <View style={s.twoLongCards}>
                <Card
                    backgroundColor={colors.cyan500}
                    imgHeight={64}
                    imgWidth={160}
                    image={IMAGES.photography}
                    text={'Photography'}
                    style={s.longCard}
                />
                <Card
                    backgroundColor={colors.darkPurple500}
                    imgHeight={64}
                    imgWidth={128}
                    image={IMAGES.motionGraphics}
                    text={'Motion Graphics'}
                    style={s.longCard}
                />
            </View>
        </View>

    )
}

export default Services

const styles = (screenSize) => StyleSheet.create({
    mainContainer: {
        flexDirection: screenSize === 'laptop' ? 'row' : 'column',
        gap: screenSize === 'laptop' ? 24 : 20,
    },
    topContainer: {
        flex: screenSize === 'laptop' || screenSize === 'tablet' ? 2 : undefined,
        flexDirection: screenSize === 'laptop' || screenSize === 'tablet' ? 'row' : 'column',
        gap: screenSize === 'laptop' ? 24 : 20,
    },
    sectionContainer: {
        flex: screenSize === 'laptop' || screenSize === 'tablet' ? 1 : undefined,
        height: 364,
        gap: screenSize === 'laptop' ? 24 : 20,
        flexDirection: 'column'
    },
    twoSmallCards: {
        height: 182,
        width: '100%',
        gap: screenSize === 'laptop' ? 24 : 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    twoLongCards: {
        flex: 1,
        minHeight: screenSize === 'laptop' ? 364 : screenSize === 'tablet' ? 182 : 384,
        gap: screenSize === 'laptop' ? 24 : 20,
        flexDirection: screenSize === 'laptop' ? 'column' : screenSize === 'tablet' ? 'row' : 'column'
    },
})