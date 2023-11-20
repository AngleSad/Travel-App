import { StatusBar } from 'expo-status-bar';
import {  Text, View, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function Home() {

  return (
    <View className=" ">
      <View className=" bg-black rounded-bl-3xl rounded-br-3xl flex justify-center gap-y-8 " style={{paddingVertical: hp(8), height: hp(35), paddingHorizontal: hp(4)}}>
            <Text style={{fontSize: hp(3.2)}} className=" font-bold text-white text-left">Planea tu viaje con TripFlow</Text>
            <TextInput
                    className="border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:bg-gray-200 placeholder:text-base "
                    style={{ height: hp(7) }}
                    placeholder="BUSCA TU DESTINO"
                />
      </View>
      <StatusBar style="light" />
    </View>
  );
}