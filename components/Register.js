import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import Input from '../components/CustomInput';
import ButtonC from '../components/CustomButton';
import CustomImage from '../components/CustomImage';

export default function RegisterScreen({ navigation }) {
  const ToPort = () => {
    navigation.navigate('Portfolio');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomImage source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.des}>Daftar untuk melanjutkan yah</Text>
        <Input placeholder="Nama Lengkap" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Ulang Password" secureTextEntry={true} />
        <ButtonC title="Register" onPress={ToPort} color="#068FFF" />
        <Text style={styles.register}>
          Sudah punya akun?{' '}
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Login')}>
            Masuk
          </Text>{' '}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  logo: {
    height: 50,
    width: 50,
  },
  des: {
    fontSize: 12,
    marginBottom: 30,
    color: '#B4B4B3',
  },
  register: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#B4B4B3',
  },
});
