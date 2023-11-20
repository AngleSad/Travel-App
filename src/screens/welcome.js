import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {

  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(() => ring1Padding.value = withSpring(ring2Padding.value+hp(4), {damping: 10}), 200)
    setTimeout(() => ring2Padding.value = withSpring(ring1Padding.value+hp(2), {damping: 10}), 100)
    

    setTimeout(() => navigation.navigate('Home'), 3000)
  }, [])

  return (
    <View className=" flex-1 items-center justify-center bg-blue-500">
      <Animated.View className="rounded-full bg-white/20" style={{padding: ring1Padding}}>
      <Animated.View className=" rounded-full bg-white/20 "style={{padding: ring2Padding}}>
      <Image source={require('../../assets/icon.png')} style={{width: hp(30), height: hp(30)}}/>
        </Animated.View>
        </Animated.View>
        
        <Text style={{fontSize: hp(5)}} className=" p-5 font-bold text-white">TRIPFLOW</Text>
        <Text style={{fontSize: hp(2)}} className=" text-sm font-medium text-white">La mejor App para Planear Vuelos e Itinerarios.</Text>
      <StatusBar style="auto" />
    </View>
  );
}