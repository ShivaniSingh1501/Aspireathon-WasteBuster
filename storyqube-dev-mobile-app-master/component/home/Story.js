import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Platform,
    Image,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
import Share from '../assets/share.svg'
import Arrow from '../assets/arrow.svg'
import Lock from '../assets/lock.svg'
import Logo from '../assets/logo.svg'
import Star from '../assets/star.svg'
import Star1 from '../assets/star1.svg'
import { ScrollView } from 'react-native-gesture-handler';
const { UIManager } = NativeModules;
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class StoryScreen extends React.Component {
    state = {
        enable: false
    };
    _onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ enable: !this.state.enable })
    }
    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.storyContainer}>
                        <View style={styles.flexColStart} >
                            <Image style={styles.storyImage} source={require('../assets/HomeScreen.png')} />
                        </View>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={styles.storyScreenHeader}>
                            <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                                height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                        </TouchableOpacity>
                        <View style={[styles.flexColStart, styles.storyScreenContainer]}>
                            


                           
                           
                           



                        </View>
                    </View >
                </ScrollView>
            </>
        );
    }
}  
