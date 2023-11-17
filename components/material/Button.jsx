
import { StyleSheet, Pressable, View } from 'react-native';
import Colors from '../../constants/Colors';
import Text from './Text';

export default function Button(props) {

  function getButtonColor() {

    if (props?.mode != null) {
      switch (props.mode) {
        case "primary":
          return Colors.button.main
        case "secondary":
          return Colors.button.secondary
        case "warning":
          return Colors.button.warn
        case "danger":
          return Colors.button.cancel
        default:
          return Colors.button.main
      }
    }
    else return Colors.button.main
  }


  return (
    <Pressable {...props}
      style={{ ...styles.button, backgroundColor: getButtonColor() }}
    >
      <Text style={styles.text}>{props?.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.text.main,
  }
});
