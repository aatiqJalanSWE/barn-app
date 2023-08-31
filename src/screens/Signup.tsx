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

const Signup = () => {
  const [value, setValue] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>{atiq1}</View>
      <View style={[styles.container1]}>{atiq2}</View>
      <Image source={require('../assets/images/cow.png')} style={styles.cow} />
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>Login to Barn</Text>
        <Input
          placeholder={'Enter mobile number'}
          title={'Enter your phone number'}
          value={value}
          onChangeText={setValue}
          style={{}}
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
            navigate('OtpPage', {number: value});
          }}
          title="Get OTP"
        />
      </View>
      <Conditions />
    </SafeAreaView>
  );
};

export default Signup;

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
});
