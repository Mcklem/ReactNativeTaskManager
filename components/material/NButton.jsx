
import { StyleSheet, Pressable, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function NButton(props) {
  return (
    <Pressable {...props}
      style={styles.button}
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
    elevation: 3,
    backgroundColor: Colors.button.main
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.text.main,
  }
});
