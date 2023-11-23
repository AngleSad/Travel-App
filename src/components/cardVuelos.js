import axios from 'axios';
import FlightCard from './vuelos';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Vuelos = () => {
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [daots, setDaots] = useState(false);
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');
    const [fechaLlegada, setFechaLlegada] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        fetchData();
        const getSearchData = async () => {
            try {
                const data = await AsyncStorage.getItem('searchVuelos');
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
            url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
            params: {
              fromId: 'BCN.AIRPORT',
              toId: 'MAD.AIRPORT',
              departDate: '2023-12-01',
              
              adults: '1',
              currency_code: 'EUR'
            },
            headers: {
              'X-RapidAPI-Key': 'e30b4947a2msh39494b249f26a68p11a917jsne10263cbf18e',
              'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
          };
          

        try {
            const response = await axios.request(options);
            
            setSearchResult(response.data);
            setError(null);
           
            await AsyncStorage.setItem('searchVuelos', JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            {searchResult && searchResult.data ? (
                // Si hay resultados, mostrarlosç


                searchResult.data.flightOffers?.map((result) => {
                    

                    const origen = result.segments[0].departureAirport.city;
                    const destino = result.segments[0].arrivalAirport.city;
                    const fechaSalida = result.segments[0].departureTime.split('T')[0];
                    const fechaLlegada = result.segments[0].arrivalTime.split('T')[0];
                    console.log(fechaSalida, fechaLlegada)


                    return (
                        <View key={result.id} style={{ maxHeight: hp(50) }} className="shadow-md">

                            <FlightCard origen={origen} destino={destino} fechaSalida={fechaSalida} fechaLlegada={fechaLlegada} precio={result.priceBreakdown.total.units} />
                        </View>
                    )
                })

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
    )
};

export default Vuelos;