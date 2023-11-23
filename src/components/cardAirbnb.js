import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PropertyCard = ({ name, bathrooms, beds, city, persons, rating, address, price, url }) => {
  const openURL = () => {
    Linking.openURL(url);
  };
  return (
    
    <View className=' bg-indigo-200 rounded-xl p-4 m-4'>
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
        <Icon name="star" size={20} color="gold" />
        <Text className="ml-2">{rating}</Text>
        <Text className='ml-auto font-bold text-xl'>{`$${price.total}`}</Text>
      </View>
      <TouchableOpacity className='flex-row items-center mt-2  rounded-xl bg-indigo-400 p-2 self-start' onPress={openURL}>
        <Text className='text-white mr-2'>Ver más</Text>
        <Icon name="angle-right" size={20} color="white" className='ml-2' />
      </TouchableOpacity>
    </View>
    
  );
};

export default PropertyCard;
