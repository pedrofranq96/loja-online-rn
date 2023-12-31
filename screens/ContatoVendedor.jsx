import React from 'react';

import {Text, View, StyleSheet} from 'react-native';


export default function ContatoVendedor({dados}){
  const {product: {vendedor}} = dados
 

    return (
      <View style={styles.container}>
        <Text style={styles.info}>Vendedor: {vendedor.name}</Text>
        <Text style={styles.info}>Telefone: {vendedor.telefone}</Text>
        <Text style={styles.info}>Email: {vendedor.email}</Text>
        <Text style={styles.info}>Nota: {vendedor.nota}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

