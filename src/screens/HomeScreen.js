import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function Home() {

  return (
    <View className=" flex-1 items-center justify-center bg-white">
      <View className="rounded-full bg-white/20" style={{padding: hp(5)}}>
      <View className=" rounded-full bg-white/20 "style={{padding: hp(2)}}>
      <Image source={require('../../assets/icon.png')} style={{width: hp(30), height: hp(30)}}/>
        </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}