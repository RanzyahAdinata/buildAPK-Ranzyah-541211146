import {Text, View,StyleSheet} from 'react-native'; 
  const Deskripsi = () => {
    return (
    <View>
      <Text style={styles.deskripsi}>
      "Halo, nama saya Aldo. Saya merupakan remaja pencari makna hidup dan cinta sejati. Usia saya 17 Tahun asal sekolah SMK Telkom Purwokerto."
      </Text>
    </View>
  );
  }

  const styles = StyleSheet.create({

    deskripsi: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,

  },
});

export default Deskripsi;