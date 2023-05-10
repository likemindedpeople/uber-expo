import { Icon } from '@rneui/base';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
// import React from 'react'

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Casco Viejo, Panamá, Panamá',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Zócalo, CDMX, México',
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
