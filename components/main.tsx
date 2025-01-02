import {StyleSheet, Text} from 'react-native';
import { Random } from './random';
import { SafeContainer } from './globalStyle/safeContainer';

export function Main(){
    const repeat=6;
    return(
        <SafeContainer>
            <Text> Hello World</Text>
            <Random/>
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