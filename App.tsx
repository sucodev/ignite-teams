import { StatusBar } from 'react-native'
import { ThemeProvider } from "styled-components";

import { useFonts,Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import theme from './src/themes';

import { Loading } from "@components/Loading";

import { Routes } from './src/routes';

// test comment IIII
export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
     {fontsLoaded ?  <Routes /> : <Loading />}
    </ThemeProvider>
  );
}


