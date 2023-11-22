import React from 'react';
import { View, Text } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Card = ({ origen, destino, fechas, precio }) => {
  return (
    <View className="flex-row justify-between items-center border rounded-xl border-gray-300 mb-4 " style={{padding: hp(2)}}>
      <View>
        <Text className="font-bold text-lg">{origen} - {destino}</Text>
        <Text>{fechas}</Text>
      </View>
      <View>
        <Text className="font-bold text-xl">{precio} €</Text>
      </View>
    </View>
  );
};

export default Card;
