import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
    alignContent: "center",
  },
  searchBox: {
    fontSize: 20,
    width: "100%",
    fontWeight: "300",
    marginBottom: 20,
    borderRadius: 8,
    padding: 15,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  results: {
    flex: 1,
    width: "100%",
  },
  result: {
    flex: 1,
    padding: 35,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 20,
    backgroundColor: "#445565",
  },
  genres: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 2,
  },
});

export default styles;
