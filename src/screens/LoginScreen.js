import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function Login() {

    return (
        <View className=" gap-8" style={{padding: hp(4), paddingVertical: hp(7)}}>
            <View className=" bg-gray-200 rounded-3xl items-center " style={{ padding: hp(4), height: hp(35) }}>
                <Text style={{ fontSize: hp(4.5) }} className=" font-bold text-black">TRIPFLOW</Text>
                <Image source={require('../../assets/icon.png')} style={{ width: hp(30), height: hp(30), resizeMode: 'contain' }} />
            </View>
            <View className="p-4 gap-y-4">
                <Text className=" font-bold text-3xl">LOG IN</Text>
                <TextInput
                    className="border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:text-base "
                    style={{ height: hp(8) }}
                    placeholder="MAIL"
                />
                <TextInput
                    className=" w-full border-2 border-gray-300 rounded-lg px-4 placeholder:font-bold placeholder:text-base "
                    style={{ height: hp(8) }}
                    placeholder="CONTRASEÑA"
                />
            </View>
            <View className=" gap-y-2 " style={{ padding: hp(2) }}>
                <TouchableOpacity className="w-full bg-gray-200 justify-center rounded-3xl" style={{ height: hp(8) }}>
                    <View>
                        <Text className="text-center font-bold text-xl" >INICIA SESIÓN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text className="text-center text-base text-blue-900 underline" >No tienes una cuenta? Regístrate</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}