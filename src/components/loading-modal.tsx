import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { PRIMARY_COLOR } from '../constants';

type FloatingButtonProps = {
  title: string;
  animationType?: 'slide' | 'fade';
  size?: 'small' | 'large';
  show: boolean;
  onRequestClose?: () => void;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0009',
  },
  modalView: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: wp(40),
    height: hp(30),
  },
  modalText: {
    fontSize: hp(2),
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
});

const LoadginModal: React.FC<FloatingButtonProps> = ({
  title,
  animationType = 'fade',
  size = 'small',
  show,
  onRequestClose = () => { },
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent
      visible={show}
      onRequestClose={onRequestClose}
    >
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            { height: size === 'small' ? hp(10) : hp(18) },
          ]}
        >
          <ActivityIndicator size={size} color={PRIMARY_COLOR} />
          <Text
            style={[
              styles.modalText,
              { fontSize: size === 'small' ? hp(1.5) : hp(2) },
            ]}
          >
            {title}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadginModal;
