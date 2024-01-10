import { TextInput,Text, View, StyleSheet, Image } from 'react-native';

const Input  = (props)=> {
  return(
    <View>
      <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.secure}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});

export default Input;