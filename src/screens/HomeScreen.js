import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import Card from '../components/vuelos';
import Menu from '../components/menu';
import AirbnbSearch from '../components/airbnb';
import Vuelos from '../components/cardVuelos';

export default function Home() {

  const [vuelos, setVuelos] = useState([]);
  const [airbnb, setAirbnb] = useState(false);


  const vuelosActivo = () => {
    setVuelos(!vuelos);
    setAirbnb(false);

  };
  const airbnbActivo = () => {
    setAirbnb(!airbnb);
    setVuelos(false);
  };

  return (
    <View className="flex-1 bg-transparent">
      <ScrollView >

        <View className=" bg-blue-200 rounded-3xl flex justify-center gap-y-8 " style={{ paddingVertical: hp(8), height: hp(35), paddingHorizontal: hp(4) }}>
          <Text style={{ fontSize: hp(3.2) }} className=" font-bold  text-left">Planea tu viaje con TripFlow</Text>
          <View className="relative flex-1">
            <TextInput
              className="border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:bg-gray-200 placeholder:text-base "
              style={{ height: hp(7) }}
              placeholder="BUSCA TU DESTINO"
            />
            <Image
              source={require('../../assets/rigth.png')}
              style={{ top: hp(2), width: hp(3), height: hp(3) }}
              className="absolute right-4"
            />
          </View>


        </View>

        <View className="flex flex-row justify-between" style={{ paddingVertical: hp(2), paddingHorizontal: hp(2.7) }}>
          <TouchableOpacity onPress={vuelosActivo}>
            <View className=" rounded-full  bg-blue-200  justify-center items-center" style={{ height: hp(8), width: hp(8) }}>

              <Image source={require('../../assets/airplane.png')} style={{ height: hp(5), width: hp(5) }} />
            </View>
          </TouchableOpacity>
          <View className="h-16 w-16 rounded-full bg-blue-200 justify-center items-center" style={{ height: hp(8), width: hp(8) }}>
            <Image source={require('../../assets/hotel.png')} style={{ height: hp(5), width: hp(5) }} />
          </View>
          <TouchableOpacity onPress={airbnbActivo}>
            <View className="h-16 w-16 rounded-full  bg-blue-200  justify-center items-center" style={{ height: hp(8), width: hp(8) }}>
              <Image source={require('../../assets/airbnb.png')} style={{ height: hp(5), width: hp(5) }} />
            </View>
          </TouchableOpacity>
          <View className="h-16 w-16 rounded-full  bg-blue-200  justify-center items-center" style={{ height: hp(8), width: hp(8) }}>
            <Image source={require('../../assets/sparkles.png')} style={{ height: hp(5), width: hp(5) }} />
          </View>

        </View>
        {vuelos &&
          <View className="flex mb-24" style={{ paddingHorizontal: hp(2) }}>
            <Vuelos/>
          </View>

        }
        {airbnb &&
          <AirbnbSearch />
        }
      </ScrollView>
      <Menu />
      <StatusBar style="dark" />
    </View>
  );
}