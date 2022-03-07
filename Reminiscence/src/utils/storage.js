import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (k = 'uid') => {
  try {
    const uid = await AsyncStorage.getItem(k);
    return uid;
  } catch (e) {}
};

const setItem = async (k = 'uid', v) => {
  try {
    await AsyncStorage.setItem(k, v);
  } catch (e) {}
};

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};

export {getItem, setItem, clear};
