import React from 'react';
import {
    Text,
    TouchableOpacity,
    PixelRatio,
    Dimensions,
    Image,
    View,
    ScrollView,
    Animated,
    PanResponder,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles';
import ParrotLogo from '../assets/logoH.svg';
import Notification from '../assets/notification.svg';

import Arrow from '../assets/arrow2.svg'
import Star from '../assets/star.svg';
import Star1 from '../assets/star1.svg';

const screen_width=Dimensions.get("window").width;
const screen_height =Dimensions.get("window").height;
const images=[
    { id:1, uri: require('../assets/cards/1.png'),name: "first_image"},
    { id:2, uri: require('../assets/cards/2.png'),name: "sec_image"},
    { id:3, uri: require('../assets/cards/3.png'),name: "third_image"},
];


export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.renderImages=this.renderImages.bind(this);
        this.position = new Animated.ValueXY();
        this.state ={
            currentIndex:1
        }
    }

    componentwillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,

            onPanResponderMove:(eve,gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy})
            },

            onPanResponderRelease:(eve,gestureState) => {

            }
        })
    }

    renderImages = () => {
        
        return images.map((item,i) => {

            if(i< this.state.currentIndex)
        {
            return null
        }
        else if(i == this.state.currentIndex)
        {

            return(
                <Animated.View
                {...PanResponder.panHandlers}
                key={item.id}
                style={[{transform: this.position.getTranslateTransform()},{height: screen_height, width: screen_width , padding:10 }]}>
                <Image 
                style={{flex:1,borderRadius:20}}
                source= {item.uri}/>
                </Animated.View>
            )
            }   
            else{
                return(
                    <Animated.View
                     
                    key={item.id}
                    style={[{height: screen_height, width: screen_width , padding:10 }]}>
                    <Image 
                    style={{flex:1,borderRadius:20}}
                    source= {item.uri}/>
                    </Animated.View>
                )
            
        
            } 
        })
    
   
    }
    render() {
        return (
            <View style={styles.container}>
                
                <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png') }/>
                <View style={[styles.flexRowBetween, styles.homeHeader]}>
                    <View style={styles.flexRowStart}>
                <Image style={{
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (12) / 100),
                    width:  PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (32) / 100),
                marginLeft: -20}} 
                    source={require('../assets/logo1.png')} />
               <Text style={[styles.homeTitleText,{marginTop: 20, height: 50}]}>Waste Busterzz..</Text>
               </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Notification')}
                        style={[styles.flexColCenter,{marginTop:25}]}>
                        <Notification width={20} height={24} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRowBetween,{marginLeft:14,marginBottom:12, height:20}]}/>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
                    <View style ={{
                        //marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
                        height:PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (12) / 100),
                        width:PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (90) / 100),
                        alignSelf: "center",
                        zIndex: 2,
                        borderRadius: 20,
                        elevation: 5
                        }}>
                            <Text style={{alignSelf:"center", color: 'black',fontSize: 22,fontWeight: 'bold',marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (3) / 100),
                            }}>Guardians of the Garbage...</Text>
                    </View>
                    
                    <View style={[styles.flexRowBetween,{marginLeft:14,marginBottom:12, height:20}]}/>
                    <View style={{}}>
                    <Text style={{color: 'white', fontSize: 15,fontWeight: 'bold', alignSelf:"center", textAlign:"center"}}>
                        We as Waste Busterzz.. are here to help you find out the optimal location to setup you Waste Mamangement Plant and minimise your waste collection time. 
                        Don't know what to do with those plastic items and electric wires piling ? 
                        We come to your rescue. Give us your Plastic and E-waste and earn rewards in return. Wanna know how ?
                        Look down : )
                    </Text>
                    </View>

                    <View style={[styles.flexRowBetween,{marginLeft:14,marginBottom:12, height:20}]}/>
                    <View style={{
                width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
                height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                paddingHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (7) / 100),
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Story')}
                         >
                        <LinearGradient
                                    useAngle={true}
                                    angle={259.04}
                                    start={{x: 0.0, y: 0.25}} 
                                    end={{x: 0.5, y: 1.0}}
                                    locations={[0.0,0.9962]}
                                    colors={['#f0e00a', '#29BBBB']}
                                    style={styles.RegisterChildButton} >
                                    <View style={[styles.flexRowCenter,{width:PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (82/100)),
                                   // backgroundColor:"red",
                                        height:PixelRatio.roundToNearestPixel(Dimensions.get('window').height* 13 / 100),
                                        }]}>
                                        <View style={styles.flexColCenter}>
                                        <Text style={{
                                            fontFamily: 'Helvetica Neue',
                                            fontWeight: 'bold',
                                            fontSize: 16,                                     
                                            letterSpacing: 0.04,
                                            color:'#000000',
                                        }}>Optimise time, Minimize location</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            </View>

                            <View style={{
                                width: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (100) / 100),
                                marginTop:-20,
                                height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (20) / 100),
                                paddingHorizontal: PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (7) / 100),
                                }}>
                            <TouchableOpacity
                           onPress={() => this.props.navigation.navigate('Leaderboard')}
                                >
                                <LinearGradient
                                    useAngle={true}
                                    angle={259.04}
                                    start={{x: 0.0, y: 0.25}} 
                                    end={{x: 0.5, y: 1.0}}
                                    locations={[0.0,0.9962]}
                                    colors={['#f0e00a', '#29BBBB']}
                                    style={styles.RegisterChildButton} >
                                    <View style={[styles.flexRowCenter,{width:PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (82/100)),
                                        height:PixelRatio.roundToNearestPixel(Dimensions.get('window').height* 13 / 100),
                                        }]}>
                                        <View style={styles.flexColCenter}>
                                        <Text style={{
                                            fontFamily: 'Helvetica Neue',
                                            fontWeight: 'bold',
                                            fontSize: 16,                                     
                                            letterSpacing: 0.04,
                                            color:'#000',
                                        }}>Submit Waste</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                        </TouchableOpacity>
                        </View>
                   
                    
            
                </ScrollView>
            </View>
        );
    }
}  