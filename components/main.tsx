import {StyleSheet, Text} from 'react-native';
import { Random } from './random';
import { SafeContainer } from './globalStyle/safeContainer';
import { ButtonLucky } from './button';

export function Main(){
    const repeat=6;
    return(
        <SafeContainer>
            <Text> Números da Mega Sena</Text>
            <Random/>
            <ButtonLucky/>
            <Text>Gerador de Sorte</Text>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})