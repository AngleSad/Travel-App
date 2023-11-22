import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PropertyCard = ({ name, bathrooms, beds, city, persons, rating, address, price }) => {
  return (
    <View className='bg-blue-200 rounded-xl p-4 m-4'>
      <Text className='text-xl font-bold mb-2'>{name}</Text>
      <Text>{address}</Text>
      <Text>{city}</Text>
      <View className='flex-row items-center mt-2 mb-2'>
        <Icon name="users" size={20} color="black" />
        <Text className='ml-2'>{persons}</Text>
      </View>
      <View className='flex-row items-center mt-2 gap-2'>
        <Icon name="bath" size={20} color="black" />
        <Text className='ml-2'>{bathrooms}</Text>
        
        <Icon name="bed" size={20} color="black" className='ml-2' />
        <Text className='ml-2'>{beds}</Text>
      </View>
      <View className='flex-row items-center mt-2'>
        <Text>{`Rating: ${rating}`}</Text>
        <Text className='ml-auto font-bold'>{`$${price.total}`}</Text>
      </View>
    </View>
  );
};

export default PropertyCard;
