import {FlatList, Text, View } from 'react-native';

type RandomProps={
    repeat?: number
}

function BuildRandom(){
    const max=60;
    const min=1;
    const delta = (max-min)+1;
    const random = Math.floor(Math.random()*delta)+min;
    return random
}

export function Random({repeat=6}: RandomProps) {

    const numbersRandoms = Array.from({length:repeat}).map((_,index)=>BuildRandom());
    const sortedNumbers = numbersRandoms.sort((a,b)=>a-b);
    
    return(
        <FlatList
        data={sortedNumbers}
        renderItem={({item})=>(<Text>{item}</Text>)}
        keyExtractor={(_,index)=>index.toString()}
        ListEmptyComponent={<Text>Empty</Text>}
/>
    )
}