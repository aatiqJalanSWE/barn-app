import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Conditions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>By signing up, you agree to our</Text>
      <Text style={styles.textStyle}>
        <Text style={styles.textColor}> Terms & Conditions</Text> and
        <Text style={styles.textColor}> Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default Conditions;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 30},
  textStyle: {color: '#000', fontSize: 10},
  textColor: {color: '#F49E3A'},
});
