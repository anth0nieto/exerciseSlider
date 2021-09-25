import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SECONDARY_COLOR } from '../constants';

type CustomInputProps = {
  isMoney?: boolean;
  validationMessage?: string;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    width: wp(30),
    height: hp(5),
    alignSelf: 'center',
    margin: hp(1),
    backgroundColor: SECONDARY_COLOR,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: hp(0.5),
    borderWidth: hp(0.2),
    paddingHorizontal: wp(5),
  },
  textInput: {
    paddingHorizontal: wp(2),
    height: '100%',
    width: '100%',
    fontSize: hp(2),
    textAlign: 'center',
    color: 'white',
    paddingVertical: 0,
    fontFamily: 'Montserrat-Medium',
  },
  validationText: {
    position: 'absolute',
    bottom: -hp(2),
    fontSize: hp(1.2),
    color: 'white',
    marginTop: hp(0.5),
    marginLeft: wp(2),
    fontFamily: 'Montserrat-ExtraLight',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: wp(5),
    justifyContent: 'center',
  },
  moneyText: {
    alignSelf: 'center',
    fontSize: hp(2.5),
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
});

const CustomInput: React.FC<CustomInputProps> = props => {
  const { isMoney = false, validationMessage = '' } = props;
  return (
    <View style={styles.container}>
      {isMoney && (
        <View style={styles.iconContainer}>
          <Text style={styles.moneyText}> $ </Text>
        </View>
      )}
      <TextInput
        {...props}
        style={styles.textInput}
        keyboardType="numeric"
        placeholderTextColor="white"
        numberOfLines={1}
        underlineColorAndroid="transparent"
      />
      {validationMessage.length > 0 && (
        <Text style={styles.validationText}>* {validationMessage}</Text>
      )}
    </View>
  );
};

export default CustomInput;
