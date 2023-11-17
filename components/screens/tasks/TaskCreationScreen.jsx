
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';

export default function TaskCreationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Task creation</Text>
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
});
