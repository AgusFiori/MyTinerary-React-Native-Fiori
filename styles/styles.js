import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({
  containerHome: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: 200,
  },
  homeBannerCtn: {
    width: "100%",
    height: "100%",
  },
  homeBanner: {
    flex: 1,
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  homeBodyCtn: {
    backgroundColor: "white",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  callToActionCtn: {
    backgroundColor: "#98ff98",
    width: "80%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  callTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});