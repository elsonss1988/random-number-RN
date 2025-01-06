import {Button} from 'react-native-paper'

export function ButtonLucky(){
    return(
        <Button icon="clover" mode="contained" onPress={()=>console.warn("Gerando Sorte")}>
            Sorte
        </Button>
    )
}