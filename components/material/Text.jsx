
import { StyleSheet, Pressable, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function NText(props) {
    return (
        <Text style={{...props.styles, ...styles.text}} {...props}></Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: Colors.text.main,
    }
});
