import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Incidents() {
  return (
    <SafeAreaProvider style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Incidents!</Text>
      <Card>
        <Card.Title>REPORT</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
      <Card>
        <Card.Title>REPORT</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
      <Card>
        <Card.Title>REPORT</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
    </SafeAreaProvider>
  );
}

function Machines() {
  return (
    <SafeAreaProvider style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Machines!</Text>
      <Card>
        <Card.Title>Machine 1</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
      <Card>
        <Card.Title>Machine 2</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
      <Card>
        <Card.Title>Machine 3</Card.Title>
        <Card.Divider/>
        <Text>something bad happened</Text>
      </Card>
      <Card>
        <Card.Title>Machine 4</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
      <Card>
        <Card.Title>Machine 5</Card.Title>
        <Card.Divider/>
        <Text>yada yada</Text>
      </Card>
    </SafeAreaProvider>
  );
}

function Settings() {
  return (
    <SafeAreaProvider style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </SafeAreaProvider>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles}>
      <NavigationContainer>
        <Tab.Navigator activeColor="#017E88" inactiveColor="#152E3F" barStyle={{ backgroundColor: '#F3F4F8' }}>
          <Tab.Screen 
            name="Incidents" 
            component={Incidents} 
            options={{ 
              tabBarIcon:({color})=>(  
                <Icon name="alert-outline" color={color} size={25}/>  
              ), 
              tabBarBadge: 3 
            }}
          />
          <Tab.Screen 
            name="Machines" 
            component={Machines} 
            options={{ 
              tabBarIcon:({color})=>(  
                <Icon name="factory" color={color} size={25}/>  
              ), 
              tabBarBadge: 1 
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{ 
              tabBarIcon:({color})=>(  
                <Icon name="cogs" color={color} size={25}/>  
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});