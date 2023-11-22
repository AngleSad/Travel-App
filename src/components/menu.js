import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Menu = ({ onPressButton1, onPressButton2, onPressButton3 }) => {
  return (
    <View  className="absolute bottom-6 flex-row justify-around rounded-full bg-blue-200  mx-4 min-w-[84%]" style={{padding: hp(2)}}>
      <TouchableOpacity onPress={onPressButton1}>
        <Image
          source={require('../../assets/user.png')} // Reemplaza con la ruta correcta de tu imagen 1
          style={{height: hp(5), width: hp(5)}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton2}>
        <Image
          source={require('../../assets/ihome.png')} // Reemplaza con la ruta correcta de tu imagen 2
          
          style={{height: hp(5), width: hp(5)}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton3}>
        <Image
          source={require('../../assets/journal.png')} // Reemplaza con la ruta correcta de tu imagen 3
          style={{height: hp(5), width: hp(5)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
