import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../style/theme'
import Card from '../components/Card'

const IMAGES = {
    graphicDesign: require('../assets/images/pattern-graphic-design.png'),
    uiUx: require('../assets/images/pattern-ui-ux.png'),
}


const Services = () => {


    return (
        <View>
            <View>
                <Card
                    backgroundColor={colors.galacticBlue500}
                    height={364}
                    imgHeight={192}
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
                    image={IMAGES.uiUx}
                    text={'UI/UX'}
                />
                   <Card
                    backgroundColor={colors.galacticBlue500}
                    height={364}
                    imgHeight={192}
                    image={IMAGES.graphicDesign}
                    text={'Graphic Design'}
                />
                </View>
                <Card
                    backgroundColor={colors.galacticBlue500}
                    height={364}
                    imgHeight={192}
                    image={IMAGES.graphicDesign}
                    text={'Graphic Design'}
                />
            </View>

            <View>

            </View>
        </View>

    )
}

export default Services

const styles = StyleSheet.create({})