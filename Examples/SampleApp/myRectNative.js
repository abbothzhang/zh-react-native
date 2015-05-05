/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var SampleApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.twoColumn,styles.marginTopLong]}>
          <View style={styles.line}/>
          <View style={styles.cell}>
              <Image style={styles.icon} 
                  source={{uri: 'http://gtms02.alicdn.com/tps/i2/T1YVf_FN4bXXceU5Yh-48-48.png'}}/>
              <Text style={styles.cellText}>
                  我收藏的店铺
              </Text>
              <Image style={styles.arrow} 
                  source={{uri: 'http://gtms04.alicdn.com/tps/i4/T18e4.FGxcXXa94Hfd-32-32.png'}}/>
          </View>
          
          <View style={styles.lineCenter}/>
          <View style={styles.cell}>
              <Image style={styles.icon} 
                  source={{uri: 'http://gtms03.alicdn.com/tps/i3/T1itT.FGtbXXceU5Yh-48-48.png'}}/>
              <Text style={styles.cellText}>
                  我关注的达人
              </Text>
              <Image style={styles.arrow} 
                  source={{uri: 'http://gtms04.alicdn.com/tps/i4/T18e4.FGxcXXa94Hfd-32-32.png'}}/>
          </View>

          <View style={styles.line}/>
        </View>

        <View style={[styles.twoColumn]}>
          <View style={styles.line}/>
          <View style={styles.cell}>
              <Image style={styles.icon} 
                  source={{uri: 'http://gtms02.alicdn.com/tps/i2/T1YZoaFPRaXXceU5Yh-48-48.png'}}/>
              <Text style={styles.cellText}>
                  我赞过的动态
              </Text>
              <Image style={styles.arrow} 
                  source={{uri: 'http://gtms04.alicdn.com/tps/i4/T18e4.FGxcXXa94Hfd-32-32.png'}}/>
          </View>
          
          <View style={styles.lineCenter}/>
          <View style={styles.cell}>
              <Image style={styles.icon} 
                  source={{uri: 'http://gtms01.alicdn.com/tps/i1/T1GXD_FUpbXXceU5Yh-48-48.png'}}/>
              <Text style={styles.cellText}>
                  我收藏的动态
              </Text>
              <Image style={styles.arrow} 
                  source={{uri: 'http://gtms04.alicdn.com/tps/i4/T18e4.FGxcXXa94Hfd-32-32.png'}}/>
          </View>

          <View style={styles.line}/>
        </View>

        <View style={styles.oneColumn}>
          <View style={styles.line}/>
          <View style={styles.cell}>
              <Image style={styles.icon} 
                  source={{uri: 'http://gtms02.alicdn.com/tps/i2/T1uTEaFU0XXXceU5Yh-48-48.png'}}/>
              <Text style={styles.cellText}>
                  评论
              </Text>
              <Image style={[styles.arrow,styles.marginLeftLong]} 
                  source={{uri: 'http://gtms04.alicdn.com/tps/i4/T18e4.FGxcXXa94Hfd-32-32.png'}}/>
          </View>
          <View style={styles.line}/>
        </View>
        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#eee',
  },
  marginTopLong:{
    marginTop:90,
  },

  twoColumn:{
    marginTop:15,
    height:73,
    backgroundColor:"#fff",
  },
  oneColumn:{
    marginTop:15,
    height:36,
    backgroundColor:"#fff",
  },
  line:{
    height:0.5,
    backgroundColor:"#ddd",
  },
  lineCenter:{
    height:0.5,
    backgroundColor:"#ddd",
    marginLeft:15,
  },
  cell:{
    height:36,
    flexDirection:"row",
  },
  icon:{
    width:24,
    height:24,
    marginLeft:15,
    marginTop:6,
  },
  cellText:{
    height:24,
    marginTop:10,
    marginLeft:10,
    color:'#3d4245',
  },
  arrow:{
    width:15,
    height:15,
    marginLeft:160,
    marginTop:10,
  },
  marginLeftLong:{
    marginLeft:216,
  }
});

AppRegistry.registerComponent('SampleApp', () => SampleApp);
