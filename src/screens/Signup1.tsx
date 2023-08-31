import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {signup1} from '../assets/svg/signup1';
import {signup2} from '../assets/svg/signup2';
import YellowButton from '../components/Buttons/YellowButton';
import {navigate} from '../navigator/Util';

const Signup1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.positionContainer}>{signup1}</View>
      <View style={styles.positionContainer}>{signup2}</View>
      <View style={[styles.positionContainer, {top: 87}]}>
        <View style={styles.upperImage}>
          <Image
            source={require('../assets/images/Ellipse1.png')}
            style={{height: 166, width: 166}}
          />
        </View>
      </View>
      <View style={[styles.positionContainer, {right: -48, top: -16}]}>
        <View style={[styles.upperImage, {backgroundColor: '#A9CECE'}]}>
          <Image
            source={require('../assets/images/cow2.png')}
            style={{height: 166, width: 166}}
          />
        </View>
      </View>
      <View style={[styles.positionContainer, {right: 12, top: 298}]}>
        <View
          style={[
            styles.upperImage,
            {
              backgroundColor: '#F8D2A5',
              height: 166,
              width: 166,
              borderRadius: 166,
            },
          ]}>
          <Image
            source={require('../assets/images/cow3.png')}
            style={{height: 149, width: 149}}
          />
        </View>
      </View>
      <View style={{flex: 1, marginTop: '140%', marginHorizontal: 16}}>
        <Text
          style={{
            fontSize: 32,
            color: '#545454',
            fontFamily: 'Open Sans',
            fontWeight: '800',
          }}>
          Welcome back
        </Text>
        <Text style={{fontWeight: '400', fontSize: 10, color: '#000'}}>
          Login to your account to continue
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20%',
        }}>
        <YellowButton
          onPress={() => {
            navigate('Signup', {});
          }}
          style={{width: 217, height: 48}}
          title="Login"
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 24,
        }}>
        <Pressable>
          <Text>
            Don’t have account?<Text style={{color: '#F49E3A'}}> Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Signup1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionContainer: {
    position: 'absolute',
  },
  upperImage: {
    height: 186,
    width: 186,
    borderRadius: 186,
    backgroundColor: '#B8DDC2',
    marginLeft: -48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
