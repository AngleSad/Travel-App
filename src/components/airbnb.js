import React, { useState } from 'react';
import { View, Text, TextInput, DatePickerAndroid, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropertyCard from './cardAirbnb';

const AirbnbSearch = () => {
  const [city, setCity] = useState('');
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [infants, setInfants] = useState('');
  const [pets, setPets] = useState('');
  const [currency, setCurrency] = useState('USD'); // Valor inicial
  const [searchMode, setSearchMode] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',// Ajusta la URL según tu API
      params: {
        location: city,
        checkin: '2023-12-01',  // Ajusta el formato según lo que requiere tu API
        checkout: '2023-12-07',
        adults,
        children,
        infants,
        pets,
        currency,
      },
      headers: {
        'X-RapidAPI-Key': 'e30b4947a2msh39494b249f26a68p11a917jsne10263cbf18e',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSearchResult(response.data);
      setError(null);
      console.log(searchResult);
    } catch (error) {
      console.error(error);
      setError('Error en la solicitud. Verifica tus parámetros y conexión a Internet.');
    }
  };


  const showDatePicker = async (dateSetter) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        dateSetter(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn('No se pudo abrir el selector de fecha', message);
    }
  };
  const searchStarted = () => {
    setSearchMode(!searchMode);
  
  };

  const handleCheckinDate = () => {
    showDatePicker(setCheckinDate);
  };

  const handleCheckoutDate = () => {
    showDatePicker(setCheckoutDate);
  };

  
  const handleSubmit = () => {

    searchStarted();
    fetchData();  // Llama a fetchData al hacer clic en Submit
  };

  return (
    <View className="bg-transparent">
      
      
      {searchMode ? (
        <ScrollView style={{maxHeight: hp(45)}}>
        <Text>City:</Text>
      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
        className="border border-gray-300 p-2 mt-2"
      />

      <View className="flex flex-row mt-2">
        <View className="w-1/2 pr-2">
          <Text>Check-in Date:</Text>
          <Button title="Select Date" onPress={handleCheckinDate} />
          {checkinDate && <Text>{checkinDate.toDateString()}</Text>}
        </View>
        <View className="w-1/2 pl-2">
          <Text>Check-out Date:</Text>
          <Button title="Select Date" onPress={handleCheckoutDate} />
          {checkoutDate && <Text>{checkoutDate.toDateString()}</Text>}
        </View>
      </View>

      <View className="flex flex-row mt-2">
        <View className="w-1/2 pr-2">
          <Text>Adults:</Text>
          <TextInput
            placeholder="Enter adults count"
            keyboardType="numeric"
            value={adults}
            onChangeText={(text) => setAdults(text)}
            className="border border-gray-300 p-2"
          />
        </View>
        <View className="w-1/2 pl-2">
          <Text>Children:</Text>
          <TextInput
            placeholder="Enter children count"
            keyboardType="numeric"
            value={children}
            onChangeText={(text) => setChildren(text)}
            className="border border-gray-300 p-2"
          />
        </View>
      </View>

      <View className="flex flex-row mt-2">
        <View className="w-1/2 pr-2">
          <Text>Infants:</Text>
          <TextInput
            placeholder="Enter infants count"
            keyboardType="numeric"
            value={infants}
            onChangeText={(text) => setInfants(text)}
            className="border border-gray-300 p-2"
          />
        </View>
        <View className="w-1/2 pl-2">
          <Text>Pets:</Text>
          <TextInput
            placeholder="Enter pets count"
            keyboardType="numeric"
            value={pets}
            onChangeText={(text) => setPets(text)}
            className="border border-gray-300 p-2"
          />
        </View>
      </View>

      <View className="items-center mb-4">
      <TouchableOpacity className="p-4 bg-blue-200 rounded-3xl items-center w-20 justify-center" onPress={searchStarted}>
      <Text >Buscar</Text>
      </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={handleSubmit} className="mt-4" />
      </ScrollView>
      ) : (
        //cambiar tamaño a 45 creo y arreglar boton de buscar
        <ScrollView style={{maxHeight: hp(30)}}> 
        
        {searchResult && searchResult.results.length > 0 ? (
          // Si hay resultados, mostrarlosç
          searchResult.results?.map((result) => (
            <View key={result.id} style={{ maxHeight: hp(50)}} className="shadow-md">
              
              <PropertyCard name={result.name} bathrooms={result.bathrooms} city={result.city} beds={result.beds} persons={result.persons} rating={result.rating} address={result.address} price={result.price} />
            </View>
            
          ))
        ) : (
          // Si no hay resultados, mostrar un mensaje
          <Text className="text-center">No hay apartamentos disponibles.</Text>
        )}
      </ScrollView>
      )}
      
      <View className="items-center mt-8">
      <TouchableOpacity className="p-4 bg-blue-200 rounded-3xl items-center w-20 justify-center" onPress={searchStarted}>
      <Text >Buscar</Text>
      </TouchableOpacity>
      </View>
      
    </View>

  );
};


export default AirbnbSearch;
