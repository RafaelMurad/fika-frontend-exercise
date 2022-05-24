import React, { useState } from "react";
import styles from "./styles";
import { Text, TextInput, View, ScrollView, Image } from "react-native";

import { findMovie, fetchMovies } from "./api";

export default function App() {
  const [state, setState] = useState({
    placeHolder: "Search for a movie",
    results: [],
  });

  if (state.results.length === 0) {
    fetchMovies().then((data) => {
      setState({ ...state, results: data.results });
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FikaSearch</Text>
      <TextInput
        style={styles.searchBox}
        placeholder={state.placeHolder}
        onChangeText={(text) => setState({ ...state, placeHolder: text })}
        onSubmitEditing={() => {
          findMovie(state.placeHolder).then((data) => {
            setState((state) => {
              return {
                ...state,
                results: data.results,
                placeHolder: "Search for a movie",
              };
            });
          });
        }}
      />

      <ScrollView style={styles.results}>
        {state.results.map((result) => (
          <View key={result.id} style={styles.result}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>Genres:</Text>
            {result.genreNames.map((genre) => {
              return (
                <Text style={styles.genres} key={genre}>
                  {genre}
                </Text>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
