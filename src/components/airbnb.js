import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, DatePickerAndroid, Button, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  const [daots, setDaots] = useState(false);



  useEffect(() => {
    const getSearchData = async () => {
      try {
        const data = await AsyncStorage.getItem('searchData');
        if (data !== null) {
          setSearchResult(JSON.parse(data));
          setDaots(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSearchData();
  }, []);

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
      await AsyncStorage.setItem('searchData', JSON.stringify(response.data));
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


  const handleSubmit = async () => {

    searchStarted();
    fetchData();

    // Llama a fetchData al hacer clic en Submit
  };

  return (
    <View className="bg-transparent">


      {searchMode ? (
        <View style={{ padding: hp(2) }}>
          <View className=" items-center">

            <TouchableOpacity className="p-2 bg-indigo-400 rounded-3xl items-center flex-row justify-center gap-x-2" onPress={searchStarted}>
              <Text className="font-bold text-white" >Buscar</Text>
              <Icon name="angle-up" size={30} color="white" className="" />
            </TouchableOpacity>

          </View>
          <Text className="font-bold">City:</Text>
          <TextInput
            placeholder="Ciudad"
            value={city}
            onChangeText={(text) => setCity(text)}
            className="border rounded-xl border-gray-300 p-2 mt-2"
          />

          <View className="flex flex-row mt-2">
            <View className="w-1/2 pr-2">
              <Text className="font-bold">Check-in Date:</Text>
              <Button title="Fecha de Entrada" onPress={handleCheckinDate} className="border border-gray-300 rounded-xl" />
              {checkinDate && <Text>{checkinDate.toDateString()}</Text>}
            </View>
            <View className="w-1/2 pl-2">
              <Text className="font-bold">Check-out Date:</Text>
              <Button title="Fecha de Salida" onPress={handleCheckoutDate} className="border border-gray-300 rounded-xl" />
              {checkoutDate && <Text>{checkoutDate.toDateString()}</Text>}
            </View>
          </View>

          <View className="flex flex-row mt-2">
            <View className="w-1/2 pr-2">
              <Text className="font-bold">Adults:</Text>
              <TextInput
                placeholder="Número de adultos"
                keyboardType="numeric"
                value={adults}
                defaultValue='1'
                onChangeText={(text) => setAdults(text)}
                className="border border-gray-300 p-2 rounded-xl"
              />
            </View>
            <View className="w-1/2 pl-2">
              <Text className="font-bold">Children:</Text>
              <TextInput
                placeholder="Número de niños"
                keyboardType="numeric"
                value={children}
                defaultValue='0'
                onChangeText={(text) => setChildren(text)}
                className="border border-gray-300 p-2 rounded-xl"
              />
            </View>
          </View>

          <View className="flex flex-row mt-2">
            <View className="w-1/2 pr-2">
              <Text className="font-bold">Infants:</Text>
              <TextInput
                placeholder="Número de bebés"
                keyboardType="numeric"
                value={infants}
                defaultValue='0'
                onChangeText={(text) => setInfants(text)}
                className="border border-gray-300 p-2 rounded-xl"
              />
            </View>
            <View className="w-1/2 pl-2">
              <Text className="font-bold">Pets:</Text>
              <TextInput
                placeholder="Número de Mascotas"
                keyboardType="numeric"
                value={pets}
                defaultValue='0'
                onChangeText={(text) => setPets(text)}
                className="border border-gray-300 p-2 rounded-xl"
              />
            </View>
          </View>



          <Button title="Buscar" onPress={handleSubmit} className="mt-4" />
        </View>
      ) : (
        //cambiar tamaño a 45 creo y arreglar boton de buscar
        <View className="mb-24">
          <View className=" items-center ">

            <TouchableOpacity className="p-2 bg-indigo-400 rounded-3xl items-center flex-row justify-center gap-x-2" onPress={searchStarted}>
              <Text className="text-white font-bold" >Buscar</Text>
              <Icon name="angle-down" size={30} color="white" className="" />
            </TouchableOpacity>

          </View>
          {searchResult && searchResult.results.length > 0 ? (
            // Si hay resultados, mostrarlosç


            searchResult.results?.map((result) => (

              <View key={result.id} style={{ maxHeight: hp(50) }} className="shadow-md">

                <PropertyCard name={result.name} bathrooms={result.bathrooms} city={result.city} beds={result.beds} persons={result.persons} rating={result.rating} address={result.address} price={result.price} url={result.url} />
              </View>

            ))

          ) : (
            !daots ? (
              <View style={{ minHeight: hp(35), padding: hp(2) }} className=" items-center justify-center  ">
               <ActivityIndicator size="large" color="#007AFF" />
              </View>
            ) : (
              <View style={{ maxHeight: hp(45), padding: hp(2) }} className="gap-y-4">
                <Text className="text-center">Busca apartamentos.</Text>
              </View>
            )

          )}
        </View>
      )}



    </View>

  );
};


export default AirbnbSearch;
