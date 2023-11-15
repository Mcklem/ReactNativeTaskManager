import Button from '../material/Button'
import { StyleSheet, View } from 'react-native';
import Screens from '../../constants/Screens';
import Colors from '../../constants/Colors';
import Text from '../material/Text';

export default function BoardScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Not available</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgrounds.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.text.warn
    }
});
