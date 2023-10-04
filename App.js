import { View, Text, Switch, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

const App = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme()
  return(
    <View className="flex-1 items-center justify-center bg-gray-100 dark:bg-black">
      <View>
        <Text className="text-2xl text-center font-bold text-gray-900 dark:text-white">This Application is use for changing background using nativewind package.</Text>
        <Text className="text-center text-xl mt-5 font-bold text-gray-900 dark:text-white">If you have see the result click the button</Text>
      </View>
      <Switch value={colorScheme} onChange={toggleColorScheme} />

    </View>
  )
}

export default App;
