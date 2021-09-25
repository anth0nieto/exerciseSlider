import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  ELECTRON_BLUE,
  MAX_VALUE_PERIOD,
  MIN_VALUE_PERIOD,
  MIN_VALUE_TOTAL_MOUNT,
  MAX_VALUE_TOTAL_MOUNT,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from './constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as yup from 'yup';
import { Formik, FormikProps } from 'formik';
import CustomButton from './components/custom-button';
import CustomSlider from './components/custom-slider';
import { CalculateModel } from './model';

const styles = StyleSheet.create({
  root: {
    padding: wp(5),
    backgroundColor: SECONDARY_COLOR,
    borderRadius: hp(0.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    color: 'white',
    fontSize: hp(2.5),
    textAlign: 'center',
    marginVertical: hp(1),
    fontFamily: 'Montserrat-Bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContainer: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: hp(0.5),
    marginVertical: hp(1),
  },
  textFooter: {
    color: 'white',
    marginVertical: hp(1),
    fontSize: hp(2),
    fontFamily: 'Montserrat-Regular',
    textTransform: 'uppercase',
  },
});

const validationSchema = yup.object().shape({
  totalMount: yup
    .number()
    .min(MIN_VALUE_TOTAL_MOUNT, 'El monto total mínimo es de 5000')
    .max(MAX_VALUE_TOTAL_MOUNT, 'El monto total máximo es de 50000')
    .required('El monto total es requerido'),
  period: yup
    .number()
    .min(MIN_VALUE_PERIOD, 'El plazo mínimo es de 3')
    .max(MAX_VALUE_PERIOD, 'El plazo máximo es de 24')
    .required('El Plazo es requerido'),
});

const Main: Node = () => {
  const initialValues: CalculateModel = {
    totalMount: MIN_VALUE_TOTAL_MOUNT,
    period: MIN_VALUE_PERIOD,
  };

  const onGetCredit = () => {
    //HANDLE GET CREDIT
    console.log('HANDLE GET CREDIT');
  };

  const handleSeeDetails = () => {
    // HANDLE SEE ACCOUNT DETAILS
    console.log('HANDLE SEE ACCOUNT DETAILS');
  };

  const handleSubmit = (formikProps: FormikProps<CalculateModel>) => {
    formikProps.validateForm(formikProps.values).then(fieldErrors => {
      if (fieldErrors) {
        formikProps.handleSubmit();
      }
    });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Simulá tu crédito</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onGetCredit}
        validateOnChange
      >
        {(formikProps: FormikProps<CalculateModel>) => (
          <>
            <CustomSlider
              title={'Monto Total'}
              name="totalMount"
              formikProps={formikProps}
              moneyIcon
              minimumValue={5000}
              maximumValue={50000}
              step={100}
            />
            <CustomSlider
              title={'Plazo'}
              name="period"
              formikProps={formikProps}
              minimumValue={3}
              maximumValue={24}
              step={1}
            />

            <View style={styles.footerContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.textFooter}>Cuota Fija por mes</Text>
                <Text style={styles.textFooter}>
                  {' '}
                  ${' '}
                  {!formikProps.errors.period && !formikProps.errors.totalMount
                    ? (
                      formikProps.values.totalMount /
                      formikProps.values.period
                    ).toFixed(2)
                    : 0}
                </Text>
              </View>
              <View style={styles.rowContainer}>
                <CustomButton
                  text="Obtené Crédito"
                  width={wp(40)}
                  onPress={() => handleSubmit(formikProps)}
                  fontSize={hp(1.8)}
                  activeOpacity={0.7}
                />
                <CustomButton
                  text="Ver detalles de cuotas"
                  width={wp(25)}
                  onPress={handleSeeDetails}
                  fontSize={hp(1.2)}
                  color={ELECTRON_BLUE}
                  activeOpacity={0.7}
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Main;
