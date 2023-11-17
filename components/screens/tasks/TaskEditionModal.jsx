import { Modal, Pressable, StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";
import Button from "../../material/Button";
import Text from "../../material/Text";
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { getDateFromUnix, getHoursAndMinutesDiff } from "../../../utils/dateTime";
import Postit from '../../../assets/postit.svg';

export default function TaskEditionModal({ visible, onRequestClose, onPressHide }) {

    return <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View>
                    <Text style={styles.contentTitleText}>Nueva tarea</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text >Hora de inicio: </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text >Hora de fin: </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text >Duración estimada: </Text>
                    </View>
                </View>
                <Text style={{ ...styles.contentTitleText }}>Comentario</Text>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
                    <Button
                        title="Atrás"
                        onPress={onPressHide}>
                    </Button>
                    <Button
                        title="Desasignar"
                        mode="warning"
                        onPress={onPressHide}>
                    </Button>
                </View>
            </View>
        </View>
    </Modal>
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        padding: 8,
        backgroundColor: Colors.backgrounds.header,
        borderRadius: 20,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalTitleText: {
        marginTop: 30,
        color: Colors.text.main,
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalContentText: {
        marginTop: 10,
        color: Colors.text.main,
        fontSize: 14,
        textAlign: 'left',
    },
    contentTitleText: {
        marginTop: 15,
        color: Colors.text.main,
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
});
