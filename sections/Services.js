import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../style/theme'
import Card from '../components/Card'

const IMAGES = {
    graphicDesign: require('../assets/images/pattern-graphic-design.png'),
}


const Services = () => {


    return (
        <View>
            <Card
                backgroundColor={colors.galacticBlue500}
                height={364}
                imgHeight={192}
                image={IMAGES.graphicDesign}
                text={'Graphic Design'}
            />
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})