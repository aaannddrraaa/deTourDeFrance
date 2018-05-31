import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import Pin from '../components/Pin';

const bg = 'https://s15.postimg.cc/5ziwzdkmz/tdf-map-bg.jpg';
const map = 'https://s15.postimg.cc/maj0vp4uj/tdf-map.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
  {
    title: 'What does it take to finish today’s race?',
    body:
      "You'll need some pretty good energy reserves to get through this one. Statistics show that the necessary calories intake is X. Oxygen consumption is estimated at Y.",
    date: '31st May 2018, 8:00AM'
  },
  {
    title: 'Did you know?',
    body:
      "Fabio Casartelli died here in 1995, descending the slopes of the Portet d'Aspet. After his death, it became mandatory to wear a helmet during the Tour de France.",
    date: '31st May 2018, 9:00AM',
    img: require('../assets/img1-b.jpg')
  },
  {
    title: 'You start the day in the fortified town of Carcassonne',
    body:
      "You start the day in the fortified town of Carcassonne, a UNESCO World Heritage Site since 1997. The city is known for its wines, but also for its castle hoardings. It is believed that Carcassonne was the first fortress to use them in times of siege. The city's catholic cathedral is a national monument and was built in the 13th century.",
    date: '31st May 2018, 10:00AM'
  },
  {
    title:
      'The famous bell towers of Pamiers can already be clearly seen in the distance.',
    body:
      "The famous bell towers of Pamiers can already be clearly seen in the distance. If you want to know, the town's main square is covered in red marble. And it's not just any square because it was walked by the young Gabriel Faure, one of France's best 19th century composers.",
    date: '31st May 2018, 1:05PM',
    img: require('../assets/img1-b.jpg')
  },
  {
    title: 'You have just entered the Natural Park of the Pyrenees ariégeoises',
    body:
      "You have just entered the Natural Park of the Pyrenees ariégeoises, a protected site sitting at the border between France and Spain. The area is famous for its Bethmale cheese, locally produced in dozens of varieties. The area has nearly 20 high-altitude lakes and some of the birds nesting here can't be found anywhere in the world.",
    date: '31st May 2018, 2:27PM',
    img: require('../assets/img1-b.jpg')
  }
];

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, data[0]);
  }

  changeInfo = id => {
    this.setState({
      title: data[id].title,
      body: data[id].body,
      date: data[id].date,
      img: data[id].img
    });
  };

  render() {
    return (
      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: '#222' }}
          bounces={false}
        >
          <Image source={{ uri: map }} style={{ height: 250, width: 1000 }} />
          <View
            style={{
              backgroundColor: '#ff001e',
              height: 250,
              width: 2,
              position: 'absolute',
              left: 50
            }}
          />
          <Pin left={10} color="#00b941" onClick={() => this.changeInfo(0)} />
          <Pin left={100} color="#00b941" onClick={() => this.changeInfo(1)} />
          <Pin left={300} color="#ff001e" onClick={() => this.changeInfo(2)} />
          <Pin left={450} color="#00b941" onClick={() => this.changeInfo(3)} />
          <Pin left={780} color="#ff001e" onClick={() => this.changeInfo(4)} />
        </ScrollView>
        <ScrollView
          style={{
            paddingTop: 20,
            paddingLeft: 15,
            paddingRight: 15,
            height: 1000
          }}
        >
          {this.state.title ? (
            <Text
              style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}
            >
              {this.state.title}
            </Text>
          ) : null}
          {this.state.date ? (
            <Text style={{ fontSize: 15, color: '#555', paddingBottom: 10 }}>
              {this.state.date}
            </Text>
          ) : null}
          {this.state.body ? (
            <Text style={{ lineHeight: 19, fontSize: 16 }}>
              {this.state.body}
            </Text>
          ) : null}
          {this.state.img ? (
            <Image
              source={this.state.img}
              style={{
                width: width,
                marginTop: 25,
                marginBottom: 25,
                height: 500
              }}
            />
          ) : null}
        </ScrollView>
      </ScrollView>
    );
  }
}
