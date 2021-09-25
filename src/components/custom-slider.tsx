import Slider, { SliderProps } from '@react-native-community/slider';
import { FormikProps } from 'formik';
import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NUMBER_REGEX } from '../constants';
import { CalculateModel } from '../model';
import CustomInput from './custom-input';

type CustomSliderProps = {
  title: string;
  name: 'totalMount' | 'period';
  moneyIcon?: boolean;
  formikProps: FormikProps<CalculateModel>;
} & SliderProps;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: '100%',
    marginVertical: hp(1),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: hp(2),
    fontFamily: 'Montserrat-Regular',
    textTransform: 'uppercase',
  },
  slider: { width: '100%', height: hp(5) },
  valuesLabel: {
    color: 'white',
    fontSize: hp(1.5),
    fontWeight: '300',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Light',
  },
});

const CustomSlider: React.FC<CustomSliderProps> = props => {
  const sliderRef = useRef<Slider>(null);
  const { title, name, moneyIcon = false, formikProps } = props;
  const handleChange = (text: string) => {
    if (NUMBER_REGEX.test(text.toString())) {
      formikProps.setFieldValue(name, parseFloat(text));
      sliderRef.current?.setNativeProps({ value: parseFloat(text) });
    } else {
      formikProps.setFieldValue(name, 0);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>{title}</Text>
        <CustomInput
          value={`${formikProps.values[name]}`}
          isMoney={moneyIcon}
          validationMessage={formikProps.errors[name]}
          onChangeText={handleChange}
        />
      </View>
      <Slider
        {...props}
        ref={sliderRef}
        style={styles.slider}
        minimumTrackTintColor="#FFF"
        maximumTrackTintColor="#FFF"
        thumbTintColor="#FFF"
        onValueChange={value => formikProps.setFieldValue(name, value)}
      />
      <View style={styles.rowContainer}>
        <Text style={styles.valuesLabel}>
          {moneyIcon && '$'} {props.minimumValue}
        </Text>
        <Text style={styles.valuesLabel}>
          {moneyIcon && '$'} {props.maximumValue}
        </Text>
      </View>
    </View>
  );
};

export default CustomSlider;
