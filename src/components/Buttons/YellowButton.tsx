import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {arrowright} from '../../assets/svg/arrowright';

interface IButton {
  onPress?: Function;
  title?: string;
  style?: any;
  textStyle?: any;
}
const YellowButton = (auto: IButton) => {
  return (
    <TouchableOpacity
      onPress={() => {
        auto.onPress ? auto.onPress() : null;
      }}
      style={[styles.button, auto.style]}>
      <Text style={[{color: '#FFF'}, auto.textStyle]}>{auto.title}</Text>
      <View style={{position: 'absolute', right: 20}}>{arrowright}</View>
    </TouchableOpacity>
  );
};

export default YellowButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    backgroundColor: '#F49E3A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 10,
  },
});
