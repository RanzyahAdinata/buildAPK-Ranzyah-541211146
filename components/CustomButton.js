import { Button } from 'react-native';

const ButtonC = (props)=> {
  return (
    <Button title={props.title}  onPress={props.onPress} color="#068FFF"/>
  );
}

export default ButtonC;