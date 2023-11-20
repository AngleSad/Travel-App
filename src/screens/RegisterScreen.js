import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function Register() {

  return (
    <View className=" gap-8">
      <View className=" bg-gray-200 rounded-bl-3xl rounded-br-3xl items-center flex " style={{padding: hp(4), height: hp(35)}}>
      
      <Image source={require('../../assets/icon.png')} style={{width: hp(20), height: hp(20), resizeMode: 'contain'}}/>
      <View className='items-center gap-2'>
      <Text style={{fontSize: hp(2.5)}} className=" font-bold text-black">Planea tu viaje</Text>
      <Text style={{fontSize: hp(2)}} className=" text-black text-center ">Descubre nuevos destinos y crea recuerdos memorables!</Text>
      </View>
      </View>
      <View className="p-4 gap-y-4">
      <TextInput
       className="border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:text-base "
       style={{height: hp(8)}}
        placeholder="MAIL"
      />
      <TextInput
       className=" w-full border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:text-base "
       style={{height: hp(8)}}
        placeholder="CONTRASEÑA"
      />
      <TextInput
       className=" w-full border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:text-base "
       style={{height: hp(8)}}
        placeholder="NOMBRE"
      />
      <TextInput
       className=" w-full border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:text-base"
       style={{height: hp(8)}}
        placeholder="APELLIDO"
        
      />
      
      </View>
      <View className=" gap-y-2 " style={{padding: hp(2)}}>
      <TouchableOpacity className="w-full bg-gray-200 justify-center rounded-3xl" style={{height: hp(8)}}>
      <View>
        <Text className="text-center font-bold text-xl" >REGÍSTRATE</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
        <Text className="text-center text-base text-blue-900 underline" >Ya estas registrado? Inicia Sesión</Text>
      </View>
      </TouchableOpacity>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}