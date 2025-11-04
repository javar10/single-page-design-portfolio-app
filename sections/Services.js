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


const Services = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.sectionContainer}>
                    <Card
                        backgroundColor={colors.galacticBlue500}
                        imgHeight={192}
                        imgWidth={128}
                        image={IMAGES.graphicDesign}
                        text={'Graphic Design'}
                    />
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.twoSmallCards}>
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


            <View style={styles.twoLongCards}>
                <Card
                    backgroundColor={colors.cyan500}
                    imgHeight={64}
                    imgWidth={160}
                    image={IMAGES.photography}
                    text={'Photography'}
                    style={styles.longCard}
                />
                <Card
                    backgroundColor={colors.darkPurple500}
                    imgHeight={64}
                    imgWidth={128}
                    image={IMAGES.motionGraphics}
                    text={'Motion Graphics'}
                    style={styles.longCard}
                />
            </View>
        </View>

    )
}

export default Services

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        gap: 20,
    },
    topContainer: {
        flexDirection: 'column',
        gap: 20,
    },
    sectionContainer: {
        height: 364,
        gap: 20,
        flexDirection: 'column'
    },
    twoSmallCards: {
        height: 182,
        width: '100%',
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    twoLongCards: {
        height: 384,
        gap: 20,
        flexDirection: 'column'
    }
})