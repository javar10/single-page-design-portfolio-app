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


const Services = ({ width }) => {
    const s = styles(width);

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

const styles = (w) => StyleSheet.create({
    mainContainer: {
        flexDirection: w > 1040 ? 'row' : 'column',
        gap: w > 1040 ? 24 : 20,
    },
    topContainer: {
        flex: w > 740 ? 2 : undefined,
        flexDirection: w > 740 ? 'row' : 'column',
        gap: w > 1040 ? 24 : 20,
    },
    sectionContainer: {
        flex: w > 740 ? 1 : undefined,
        height: 364,
        gap: w > 1040 ? 24 : 20,
        flexDirection: 'column'
    },
    twoSmallCards: {
        height: 182,
        width: '100%',
        gap: w > 1040 ? 24 : 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    twoLongCards: {
        flex: 1,
        minHeight: w > 1040 ? 364 : w > 740 ? 182 : 384,
        gap: w > 1040 ? 24 : 20,
        flexDirection: w > 1040 ? 'column' : w > 740 ? 'row' : 'column'
    },
})