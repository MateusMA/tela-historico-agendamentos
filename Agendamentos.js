import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const Agendamentos = (props) => {

    //Interações com state
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    //Código para carregamento das fontes antes da renderização
    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            /> 
        )
    }

    async function loadResourcesAsync() {
        await Promise.all([
            Font.loadAsync({
                'montserrat-regular-texto': require('./assets/fonts/montserrat/Montserrat-Regular.ttf')
            }),
        ])
    }

    function handleLoadingError(error) {
        console.warn(error);
    }

    function handleFinishLoading(setLoadingComplete) {
        setLoadingComplete(true);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.calendar}>
                <View style={styles.calendar_header}>
                    <Text style={styles.header_title}>Bem Vindo</Text>
                    <Text style={styles.header_copy}>Histórico de agendamentos</Text>
                </View>
                <View style={styles.calendar_plan}>
                    <View style={styles.cl_plan}>
                        <Text style={styles.cl_title}>Hoje</Text>
                        <Text style={styles.cl_copy}>22  de  Abril  2020, 11:00</Text>
                    </View>
                </View>
                <View style={styles.calendar_events}>
                    <Text style={styles.ce_title}>Data/Hora/Duração</Text>
                    <View style={styles.event_item}>
                        <Text style={styles.ei_Title}>11/03/2020, 10:30 até 13:30, 03 Horas</Text>
                        <Text style={styles.ei_Copy}>Tarefa: Carregar compras</Text>
                        <Text style={styles.ei_Copy}>Custo: R$ 240,00</Text>
                        <Text style={styles.ei_Copy}>Pagamento: Débito</Text>
                        <Text style={styles.ei_Pay}>Status de pagamento: Efetuado</Text>
                    </View>
                    <View style={styles.event_item}>
                        <Text style={styles.ei_Title}>11/03/2020, 10:30 até 13:30, 03 Horas</Text>
                        <Text style={styles.ei_Copy}>Tarefa: Carregar compras</Text>
                        <Text style={styles.ei_Copy}>Custo: R$ 240,00</Text>
                        <Text style={styles.ei_Copy}>Pagamento: Débito</Text>
                        <Text style={styles.ei_NoPay}>Status de pagamento: Falhou</Text>
                    </View>
                    <View style={styles.event_item}>
                        <Text style={styles.ei_Title}>11/03/2020, 10:30 até 13:30, 03 Horas</Text>
                        <Text style={styles.ei_Copy}>Tarefa: Carregar compras</Text>
                        <Text style={styles.ei_Copy}>Custo: R$ 240,00</Text>
                        <Text style={styles.ei_Copy}>Pagamento: Débito</Text>
                        <Text style={styles.ei_ExecPay}>Status de pagamento: Processando...</Text>
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaff',
        fontFamily: "montserrat-regular-texto",
    },
    calendar: {
        width: 370,
        margin: 8,
    },
    calendar_header: {
        height: 50,
        borderBottom: 2,
    },
    header_copy: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "montserrat-regular-texto",
    },
    header_title: {
        color: '#fff',
        fontFamily: "montserrat-regular-texto",
    },
    calendar_plan: {
        height: 120,
    },
    cl_plan: {
        padding: 10,
        borderWidth: 0.10,
        borderColor: '#aaaaff',
        backgroundColor: 'rgba(999,999,999,1)',
        shadowColor: "#0000ff",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.84,
        elevation: 5,
        alignContent: 'center',
        alignSelf: 'center'
    },
    cl_title: {
        fontSize: 15,
        fontFamily: "montserrat-regular-texto",
    },
    cl_copy: {
        fontSize: 20,
        margin: 20
    },
    calendar_events: {
    },
    ce_title: {
        fontSize: 15,
        color: '#fff',
        fontFamily: "montserrat-regular-texto",
    },
    event_item: {
        width: 310,
        height: 138,
        alignContent: 'center',
        alignSelf: 'center',
        margin: 18,
        padding: 5,
        backgroundColor: 'rgba(999,999,999,1)',
        shadowColor: "#0000ff",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ei_Title: {
        color: '#111111dd',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        fontFamily: "montserrat-regular-texto",
    },
    ei_Copy: {
        fontSize: 13,
        marginLeft: 24,
        fontFamily: "montserrat-regular-texto",
        padding: 5
    },
    ei_Pay: {
        fontSize: 13,
        marginLeft: 24,
        padding: 5,
        fontFamily: "montserrat-regular-texto",
        color: 'green'
    },
    ei_NoPay: {
        fontSize: 13,
        marginLeft: 24,
        padding: 5,
        fontFamily: "montserrat-regular-texto",
        color: 'red'
    },
    ei_ExecPay: {
        fontSize: 13,
        marginLeft: 24,
        padding: 5,
        fontFamily: "montserrat-regular-texto",
        color: 'blue'
    },

})

export default Agendamentos