import React from 'react';
import FlashMessage from 'react-native-flash-message';
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
    ScrollView,
    TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import styles from '../Styles';
import ParrotLogo from '../assets/logoS.svg';
import Eye from '../assets/eye.svg';

const { UIManager } = NativeModules;
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {    
    state = {
        password: '',
        email: '',
        name:'',
        signIn: false,
        hidden: true,
        selection: {
            start: 0,
            end: 0
           }
    };
    setSelection = () => {
        this.setState({ select: { start: 0, end: 0 } });
        };

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    handleName = (text) => {
        this.setState({ name: text })
    }
    // toggle between sign in card and sign up card
    _onPress = () => {
        // Animate the update  
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                300,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.scaleXY
            )
        );
        this.setState({ signIn: !this.state.signIn })
    }

    // new sign uu creation details
    newSignUp = async() => {
        const { name , email , password} = this.state
        const data = {
            name , email , password
        }
        console.log(data)
        if(email && name && password){
            try {
            await AsyncStorage.setItem('name',name);
            await AsyncStorage.setItem('email',email);
            await AsyncStorage.setItem('password',password);
            console.log("signup successfull")
            } catch(e) {
                console.log("signup failed")
            }
            {/*
            fetch('http://ec2-54-196-99-77.compute-1.amazonaws.com:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response =>{
                if(response.status==201){
                    showMessage({
                        message: "sign up successful"
                    });
                }
                else{
                    showMessage({
                        message: "sign up failed"
                    });
                }
                console.log(response)
            }).catch(err => {
                //console.log('upload err', err)
                console.error(err)
            })
        */}
    }
         

    }

    //get info from async
    signInAsync = async () => {
        try {
            
            console.log(this.state)
            const userToken = ['userToken', 'abc']
            await AsyncStorage.multiSet([userToken])
        } catch (e) {
            console.log('setting user token error-', e)
        }
    };

    //new sign up
    signInNew = async() =>{
        const { email , password} = this.state
        const data = {
         email , password
        }
        console.log(data)
        if(email && password){
            try {
                const e_email = await AsyncStorage.getItem('email')
                console.log("email found is ",e_email)
                this.signInAsync()
              } catch(e) {
                // error reading value
                console.log("sign in failed , check username & password and retry")
              }

            {/*
            fetch('http://ec2-54-196-99-77.compute-1.amazonaws.com:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response =>{
                if(response.status==200){
                    this.signInAsync()
                }
                else{
                    showMessage({
                        message: "sign in failed , check username & password and retry"
                    });
                }
                
                console.log('sai')
                console.log(response)
            }).catch(err => {
                //console.log('upload err', err)
                console.error(error)
            })
        */}

    }
}
    // create one for signup

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Image style={styles.backgroundImage} source={require('../assets/HomeScreen.png')} />

                <View style={{
                    flexDirection: 'column',
                    marginTop: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (11) / 100),
                    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (5) / 100),
                    width: '100%',
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    paddingHorizontal: '26%'
                }}>
                    <ParrotLogo width={PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (47) / 100)}
                        height={'100%'} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'center' }}>

                    <View style={styles.rowCenter} >
                        <View style={{
                            backgroundColor: '#171B35',
                            borderRadius: 20,
                            marginTop: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (14) / 100) :
                                PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (8.5) / 100),
                            width: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100) :
                                PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (65) / 100)
                        }}>
                            {
                                this.state.signIn &&
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardHeader}>
                                        Welcome
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent} 
                                            placeholder='email                                        '
                                            maxlength = '5'
                                            selection={this.state.setSelection} 
                                            onChangeText={this.handleEmail}
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <View>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='password              '
                                            secureTextEntry={this.state.hidden}
                                            onChangeText={this.handlePassword}
                                            placeholderTextColor='#747686'
                                    
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                        </View>
                                        <View style={styles.inputContent} >
                                            <Eye height={'100%'} onPress={ () => this.setState({ hidden: !this.state.hidden })} />
                                        </View>
                                    </View>

                                    <View style={styles.forgotPasswordRight}>
                                        <Text style={{ color: '#747686', fontSize: 10 }}>Forgot password?</Text>
                                    </View>
                                    <FlashMessage
                        position="top"
                        style={
                            { width: '100%', 
                            height:50, 
                            backgroundColor: '#356DB7' }
                        }
                        titleStyle={{ textAlign: 'center' }} />
                                </View>
                            }
                            {
                                this.state.signIn ?
                                    <TouchableOpacity
                                        onPress={this.signInAsync}
                                        ///onPress={() => this.props.navigation.navigate('Notification')}
                                        style={styles.cardSignButton}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                                            fontSize: 18,
                                            color: 'white'
                                        }}>
                                            SIGN IN
                                    </Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={this._onPress} style={styles.cardUp}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
                                            fontSize: 16,
                                            color: '#D4D4D9'
                                        }}>
                                            SIGN IN
                                    </Text>
                                    </TouchableOpacity>
                            }


                        </View>
                    </View>

                    <View style={styles.rowCenter} >
                        <View style={{
                            backgroundColor: '#171B35',
                            borderRadius: 20,
                            // height: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100) :
                            //     PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (35) / 100),
                            width: this.state.signIn ? PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (65) / 100) :
                                PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (75) / 100)
                        }}>
                            {
                                !this.state.signIn &&
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardHeader}>
                                        Create New
                                    </Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='name                                              '
                                            onChangeText={this.handleName}
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='email                                              '
                                            onChangeText={this.handleEmail}
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.inputContent}
                                            placeholder='password              '
                                            secureTextEntry={this.state.hidden}
                                            onChangeText={this.handlePassword}
                                            placeholderTextColor='#747686'
                                            // onChangeText={text => onChangeText(text)}
                                        />
                                        <View style={styles.inputContent} >
                                            <Eye height={'100%'} onPress={ () => this.setState({ hidden: !this.state.hidden }) }/>
                                        </View>
                                    </View>

                                    <View style={styles.forgotPasswordRight}>
                                        <Text style={{ color: '#747686', fontSize: 10 }}>Forgot password?</Text>
                                    </View>
                                    <FlashMessage
                        position="top"
                        style={{ width: '100%', height:50, backgroundColor: '#356DB7' }}
                        titleStyle={{ textAlign: 'center' }} />
                                </View>
                            }
                            {
                                this.state.signIn ?
                                    <TouchableOpacity
                                        onPress={this._onPress} style={styles.cardDown}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (6) / 100),
                                            fontSize: 16,
                                            color: '#D4D4D9'
                                        }}>
                                            Create New
                                    </Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity
                                        onPress={this.newSignUp}
                                        style={styles.cardCreateButton}>
                                        <Text style={{
                                            lineHeight: PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (7) / 100),
                                            fontSize: 18,
                                            color: 'white'
                                        }}>
                                            Create New
                                    </Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>


            </View >
            </ScrollView>
        );
    }
}  
