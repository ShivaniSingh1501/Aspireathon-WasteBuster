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
import LinearGradient from 'react-native-linear-gradient'
import styles from '../Styles'
import Back from '../assets/notification/back.svg'
export default class LeaderboardScreen extends React.Component {
    render() {
        return (
            <View style={styles.leaderboardContainer}>
                <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png') }/>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={[styles.flexRowStart, styles.leaderBoardHeader]}>
                    <Back width={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)}
                        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100)} />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginLeft: 10,
                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
                            fontWeight: 'bold',
                        }} >
                        SubmitWaste
                        </Text>
                </TouchableOpacity>

                <Text style={{marginBottom:5,color: 'black', fontSize: 18,fontWeight: 'bold', alignSelf:"center", textAlign:"center"}}>
                        Making the best out of Waste : )
                </Text>
                <Text style={{marginBottom:10,color: 'black', fontSize: 15,fontWeight: 'bold', alignSelf:"center", textAlign:"center"}}>
                        Choose the type of waste
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
                <LinearGradient
                    useAngle={true}
                    angle={105}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#FCC201', '#DBA514']}
                    style={styles.leaderBoardCard1}>
                    
                    <View style={[styles.leaderBoardCol,{width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100), alignContent:"center"}]} >
                        <Text style={{fontWeight:"bold", fontSize:20, alignSelf:"center"}}>Plastic Waste</Text>
                    </View>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
                <LinearGradient
                    useAngle={true}
                    angle={103}
                    //   angleCenter= {{ x: 0.5, y: 0.5}}
                    // start={{ x: 0.11, y: 0.95 }}
                    // end={{ x: 0.0, y: 0.95 }}
                    locations={[0.0, 1.0]}
                    colors={['#E7E8EB', '#C0BEC6']}
                    style={styles.leaderBoardCard1}>
                    
                    <View style={[styles.leaderBoardCol,{width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (84) / 100), alignContent:"center"}]} >
                        <Text style={{fontWeight:"bold", fontSize:20, alignSelf:"center"}}>E-Waste</Text>
                    </View>
                </LinearGradient>
                </TouchableOpacity>

                <Text style={{marginTop:10,color: 'black', fontSize: 18,fontWeight: 'bold', alignSelf:"center", textAlign:"center"}}>
                        Being the bridge between you and our partners.
                </Text>
                <Text style={{marginBottom:5,color: 'black', fontSize: 18,fontWeight: 'bold', alignSelf:"center", textAlign:"center"}}>
                Look at our partners.
                </Text>
                
                <View style={styles.flexRowCenter}>
                <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                    marginLeft: -20}} 
                    source={require('../assets/1.png')} />
                    <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                    marginLeft: -20}} 
                    source={require('../assets/Facebook.svg')} />
                    <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                    marginLeft: -20}} 
                    source={require('../assets/2.png')} />
                    </View>

                    <View style={[styles.flexRowCenter,{marginTop:20}]}>
                <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                    marginLeft: -20}} 
                    source={require('../assets/3.png')} />
                    <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                    marginLeft: -20}} 
                    source={require('../assets/Facebook.svg')} />
                    <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                    marginLeft: -20}} 
                    source={require('../assets/4.png')} />
                    </View>
               
               
                
            </View >
        );
    }
}  
