import React from 'react';
import { Dimensions, View } from "react-native";
// import HealthCard from 'react-native-health-card';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;


  
const DetailScreen = ({data,click}:any) => {
    const [visible, setVisible] = React.useState(false);
   
    
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const value =(data)?data.data['vietnam']:null;
  
    return (
   
            <View>
                
                <Card>
                    <Card.Title title="Deaths" subtitle="in VN"  />
                    <Card.Content>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://static.themoscowtimes.com/image/1360/2a/TASS39689830.jpg' }} />
                    <Card.Actions>
                    <Button>{(value)?value.deaths+" case":"loading"}</Button>
                    <Button onPress={()=>{
                        click()
                    }}>deaths.</Button>
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Title title="Recovered" subtitle="in VN"  /> 
                    <Card.Content>
                
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://assets.weforum.org/article/image/large_uzjSrwayYYlPXz0yhnyo7dXc9aO46rsQCl1VtT0eAjk.jpg' }} />
                    <Card.Actions>
                    <Button>{(value)?value.recovered+" case":"loading"}</Button>
                    <Button>recovered.</Button>
                    </Card.Actions>
                </Card>
              
            </View>
        
    );
};

export default DetailScreen;