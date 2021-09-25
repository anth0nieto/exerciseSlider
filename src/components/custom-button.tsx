import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { MINT_LEAF } from '../constants';

type CustomButtonProps = {
  text: string;
  color?: string;
  width?: number;
  height?: number;
  marginTop?: number;
  fontSize?: number;
} & TouchableOpacityProps;

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    borderRadius: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Regular',
  },
});

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {
    text,
    disabled,
    onPress,
    color = MINT_LEAF,
    width = wp(80),
    height = hp(4),
    fontSize = hp(2.2),
    marginTop,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        ...styles.root,
        backgroundColor: color,
        width,
        height,
        marginTop,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ ...styles.text, fontSize }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
