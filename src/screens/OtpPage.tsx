import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {atiq1} from '../assets/svg/atiq1';
import {atiq2} from '../assets/svg/aatq2';
import Conditions from '../components/Buttons/Texts/Conditions';
import YellowButton from '../components/Buttons/YellowButton';
import Input from '../components/InputComponent/Input';
import {navigate} from '../navigator/Util';

const OtpPage = ({nav, route}) => {
  const data = route.params.number;
  console.log(data);

  const [value, setValue] = useState(data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>{atiq1}</View>
      <View style={[styles.container1]}>{atiq2}</View>
      <Image source={require('../assets/images/cow.png')} style={styles.cow} />
      <View style={styles.mainContainer}>
        
        <Text style={styles.textStyle}>Enter OTP</Text>
        <Input
          plain={`Please enter the code sent to ${data}`}
          placeholder={''}
          value={value}
          onChangeText={setValue}
          style={{}}
          title={'OTP'}
          inputStyle={undefined}
          onClear={() => {
            setValue(null);
          }}
        />
      </View>
      <View style={styles.button}>
        <YellowButton
          style={{width: 138, height: 48}}
          onPress={() => {
            navigate('OtpPage', {});
          }}
          title="Login"
        />
      </View>
      <Conditions />
    </SafeAreaView>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container1: {
    position: 'absolute',
  },
  cow: {position: 'absolute', height: 220, width: 200, right: 0},
  mainContainer: {flex: 1, marginHorizontal: 16, marginTop: '30%'},
  textStyle: {
    color: 'black',
    fontSize: 32,
    fontWeight: '800',
    marginVertical: 32,
    marginTop: 100,
  },
  button: {
    position: 'absolute',
    bottom: 90,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },
  plainText :{
    width:291,
    height : 20,
    top:327,
    left: 24,
  },
  plain :{
    color: '#F39E3A'
  }
});
