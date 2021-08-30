import React, {useState, useRef, useEffect} from 'react';
import { FlatList, TouchableHighlight, View, Text} from 'react-native';
import styles from './homeStyles';
import data from '../../data/data';
import Card from '../card/card';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const voidCard = {title:"", image:""};
  const [currentCards, setCurrentCards] = useState([voidCard,data[0],data[1]]);
 
  
  useEffect( () => {
    ref.current.scrollToIndex({index: currentIndex});      
  },[currentIndex])
  
  async function prevCard() {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);    
    await ref.current.scrollToIndex({index: currentIndex});    
    setCurrentCards(currentIndex === 1 ? [voidCard,data[0],data[1]] : [data[currentIndex-2],data[currentIndex-1],data[currentIndex]]);
  }

  async function nextCard() {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);    
    await ref.current.scrollToIndex({index: currentIndex});    
    setCurrentCards(currentIndex === data.length - 2 ? [data[currentIndex],data[currentIndex+1],voidCard] : [data[currentIndex],data[currentIndex+1],data[currentIndex+2]]);
  }
  
  return (
    <View style={styles.homeContainer}>
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}        
        data={currentCards}
        scrollEnabled={false}
        horizontal={true}
        ref={ref}
        renderItem={({ item }) => (           
          <Card title={item.title} image={item.image}/>
        )}
        extraData={currentIndex}
      />      
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={prevCard}
          disabled={currentIndex === 0 ? true : false}
        >
          <View style={styles.button}>
            <Text style={styles.title}>Previous</Text>
          </View>          
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={nextCard}
          disabled={currentIndex === data.length -1 ? true : false}
        >
          <View style={styles.button}>
            <Text style={styles.title}>Next</Text>
          </View>          
        </TouchableHighlight>
      </View>
    </View>
  );
}