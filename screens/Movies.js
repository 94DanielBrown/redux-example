import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getMovies } from "../store/actions/movies";

const Movies = () => {
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    fetchMovies();
  }, []);

  const movieData = useSelector((state) => state.movies);
  const moviesArray = movieData.movies;

  const renderItem = ({ item }) => {
    const imageURL = "https://image.tmdb.org/t/p/w185" + item.poster_path;
    return (
      <View>
        <View>
          <Image
            source={{ uri: imageURL }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.contentMargin}>
            <View>
              <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={styles.voteRow}>
              <MaterialIcons color="green" name="thumb-up" size={32} />
              <Text style={styles.voteText}>{item.vote_count}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 44 }}>
      <Text style={{ fontSize: 22 }}>Popular Movies</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          data={moviesArray}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
  },
  moviesContainer: {
    flex: 1,
    marginTop: 12,
  },
  imageMargin: {
    marginVertical: 12,
  },
  movieTitle: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  contentMargin: {
    flex: 1,
    marginLeft: 12,
  },
  voteRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  voteText: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#64676D'
  }
});

export default Movies;
