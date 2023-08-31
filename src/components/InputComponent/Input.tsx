import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {cross} from '../../assets/svg/cross';

const Input = ({
  placeholder,
  value,
  onChangeText,
  onClear,
  style,
  title,
  inputStyle,
  plain,
}) => {
  return (
    <View style={{gap: 6}}>
      
      <Text style={{fontSize: 16, color: '#000'}}>{title}</Text>
      <Text style={{fontSize: 16, color: '#000'}}>{plain}</Text>
      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#000'}
          style={{flex: 1}}
          value={value}
          onChangeText={onChangeText}
          keyboardType="number-pad"
          cursorColor={'#000'}
        />
        <TouchableOpacity onPress={onClear}>{cross}</TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    height: 48,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: '#F39E3A',
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
