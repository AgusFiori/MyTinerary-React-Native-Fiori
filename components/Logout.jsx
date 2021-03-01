import AsyncStorage from "@react-native-async-storage/async-storage";

const Logout = () => {
  return AsyncStorage.clear();
};

export default Logout;
