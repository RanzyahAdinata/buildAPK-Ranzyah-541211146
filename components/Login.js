import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

import Input from '../components/CustomInput';
import ButtonC from '../components/CustomButton';
import CustomImage from '../components/CustomImage';

export default function LoginScreen({ navigation }) {
  const url1 = 'https://myaccount.google.com/'; // Ganti dengan URL yang sesuai

  const openUrl1 = () => {
    Linking.openURL(url1);
  };

  const ToPort = () => {
    navigation.navigate('Portfolio');
  };

  return (
    <View style={styles.container}>
      <CustomImage source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.des}>Ketuk untuk melanjutkan aksi yah</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry={true} />
      <Text style={styles.pass}>Lupa Password? </Text>

      <ButtonC title="login" onPress={ToPort} color="#068FFF" />

      <Text style={styles.atau}>or</Text>
      <Button title="google" onPress={openUrl1} color="#9DB2BF" />
      <Text style={styles.register}>
        Belum Punya Akun?{' '}
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Register')}>
          Daftar Sekarang
        </Text>{' '}
      </Text>
    </View>
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
  pass: {
    fontSize: 13,
    textAlign: 'right',
    marginBottom: 15,
    color: 'blue',
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
  atau: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
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
