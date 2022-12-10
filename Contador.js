import { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

export default function Contador() {
    const [jogador1, setVida1] = useState('20')
    const [jogador2, setVida2] = useState('20')
    const [cor1, setCor1] = useState('blue')
    const [cor2, setCor2] = useState('red')
    const [fonte1, setFonte1] = useState('black')
    const [fonte2, setFonte2] = useState('black')

    function mais1() {
        setVida1(Number(jogador1) + 1)
    }

    function menos1() {
        setVida1(Number(jogador1) - 1)
    }

    function mais2() {
        setVida2(Number(jogador2) + 1)
    }

    function menos2() {
        setVida2(Number(jogador2) - 1)
    }

    function restart() {
        setVida1('20')
        setVida2('20')
    }

    function mudaCor1() {
        switch (cor1) {
            case 'white':
                setCor1('blue')
                break
            case 'blue':
                setCor1('black')
                setFonte1('white')
                break
            case 'black':
                setCor1('red')
                setFonte1('black')
                break
            case 'red':
                setCor1('green')
                break
            case 'green':
                setCor1('white')
                break
        }
    }

    function mudaCor2() {
        switch (cor2) {
            case 'white':
                setCor2('blue')
                break
            case 'blue':
                setCor2('black')
                setFonte2('white')
                break
            case 'black':
                setCor2('red')
                setFonte2('black')
                break
            case 'red':
                setCor2('green')
                break
            case 'green':
                setCor2('white')
                break
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View style={[styles.visaoGeral, { backgroundColor: cor1, transform: [{ rotateZ: '180deg' }] }]}>
                    <TouchableOpacity
                        style={styles.player}
                        onPress={() => menos1()}
                    >
                        <Text style={[styles.texto, { color: fonte1 }]}>-</Text>
                    </TouchableOpacity>
                    <Text style={[styles.texto, { color: fonte1 }]}>{jogador1}</Text>
                    <TouchableOpacity
                        style={styles.player}
                        onPress={() => mais1()}
                    >
                        <Text style={[styles.texto, { color: fonte1 }]}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.barra}>
                    <TouchableOpacity
                        style={[styles.restart, { backgroundColor: cor1 }]}
                        onPress={() => mudaCor1()}
                    >
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.restart, { backgroundColor: 'white' }]}
                        onPress={() => restart()}
                    >
                        <Text style={{textAlign:'center'}}>R</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.restart, { backgroundColor: cor2 }]}
                        onPress={() => mudaCor2()}
                    >
                    </TouchableOpacity>
                </View>

                <View style={[styles.visaoGeral, { backgroundColor: cor2 }]}>
                    <TouchableOpacity
                        style={styles.player}
                        onPress={() => menos2()}
                    >
                        <Text style={[styles.texto, { color: fonte2 }]}>-</Text>
                    </TouchableOpacity>
                    <Text style={[styles.texto, { color: fonte2 }]}>{jogador2} </Text>
                    <TouchableOpacity
                        style={styles.player}
                        onPress={() => mais2()}
                    >
                        <Text style={[styles.texto, { color: fonte2 }]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        visaoGeral: {
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: '48%',
            borderColor: 'black'
        },
        player: {
            alignSelf: 'center',
            height: '100%',
            width: '40%',
            justifyContent: 'center'
        },
        texto: {
            fontSize: 100,
            alignSelf: 'center'
        },
        barra: {
            height: '4%',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        restart: {
            width: '10%',
            height: '90%',
            margin: '1%'
        }
    }
)