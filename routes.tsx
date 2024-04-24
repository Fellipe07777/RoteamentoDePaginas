import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/'
import { Home } from './pages/paginaReceita'
import { Carros } from './pages/paginaCarros'
import { Musica } from './pages/paginaMusica'
import { Filmes } from './pages/paginaFilmes'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="fast-food" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="fast-food-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Carros"
                component={Carros}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="cars" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="cars-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="musica"
                component={Musica}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="headset" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="headset-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Filmes"
                component={Filmes}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="filme" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="book-on" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}