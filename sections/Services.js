import { StyleSheet, Text, View } from 'react-native'
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
        <View>
            <View>
                <Card
                    backgroundColor={colors.galacticBlue500}
                    height={364}
                    imgHeight={192}
                    imgWidth={128}
                    image={IMAGES.graphicDesign}
                    text={'Graphic Design'}
                />
            </View>

            <View>
                <View>
                    <Card
                        backgroundColor={colors.orange500}
                        height={182}
                        imgHeight={64}
                        imgWidth={64}
                        image={IMAGES.uiUx}
                        text={'UI/UX'}
                    />
                    <Card
                        backgroundColor={colors.pink500}
                        height={182}
                        imgHeight={64}
                        imgWidth={64}
                        image={IMAGES.apps}
                        text={'Apps'}
                    />
                </View>
                <Card
                    backgroundColor={colors.lightRed500}
                    height={364}
                    imgHeight={64}
                    imgWidth={128}
                    image={IMAGES.illustrations}
                    text={'Illustrations'}
                />
            </View>

            <View>
                <Card
                    backgroundColor={colors.cyan500}
                    height={364}
                    imgHeight={64}
                    imgWidth={160}
                    image={IMAGES.photography}
                    text={'Photography'}
                />
                 <Card
                    backgroundColor={colors.darkPurple500}
                    height={364}
                    imgHeight={64}
                    imgWidth={128}
                    image={IMAGES.motionGraphics}
                    text={'Motion Graphics'}
                />
            </View>
        </View>

    )
}

export default Services

const styles = StyleSheet.create({})