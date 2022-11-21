import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

// TouchableOpacity A LA PLACE DE BUTTON

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: "black",
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <ScrollView>
          {/* -------------------BLOCK HEADER------------------- */}

          <View
            style={{
              backgroundColor: "#393939",
            }}
          >
            <Image
              source={require("./assets/IMDB.png")}
              style={{
                width: 30,
                height: 10,
                marginLeft: 10,
                padding: 30,
              }}
              resizeMode="contain"
            />
            <StatusBar style="auto" />
          </View>

          {/* -------------------BLOCK INTERSTELLAR------------------- */}

          <View style={stylesNum2.container}>
            <Text style={stylesFonts.title}>Interstellar</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={stylesFonts.subtitles}>2014</Text>
              <Text style={stylesFonts.subtitles}>PG-13</Text>
              <Text style={stylesFonts.subtitles}>2H 49min</Text>
              <Text style={stylesFonts.subtitles}>
                Adventure, Drama, Sci-Fi
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("./assets/film.jpg")}
                style={{
                  marginTop: 20,
                  width: 120,
                  height: 180,
                  marginLeft: 10,
                }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={stylesFonts.infos}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <Button title="+ ADD TO WATCHLIST" />
              </View>
            </View>

            {/* -------------------COMMUNITY BLOCK ------------------- */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Image source={require("./assets/star.png")} />
                <Text style={stylesFonts.textcom}>8.6/10</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Image source={require("./assets/blackstar.png")} />
                <Text style={stylesFonts.textcom}>RATE THIS</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Text style={{ backgroundColor: "green" }}>74</Text>
                <Text style={stylesFonts.textcom}>METASCORE</Text>
              </View>
            </View>
          </View>

          {/* -------------------BLOCK ACTORS------------------- */}
          <View style={styles.container2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={stylesFonts.topbilled}>Top Billed Cast</Text>
              <Button title="SEE ALL" />
            </View>

            {/* -------------------PHOTOS ACTORS------------------- */}
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <View style={styles.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/matthew.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={stylesFonts.actortext}
                  >
                    Matthew McConaughey
                  </Text>
                  <Text style={stylesFonts.actorrole}>Cooper</Text>
                </View>
                <View style={styles.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/anne.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={stylesFonts.actortext}
                  >
                    Anne Hathaway
                  </Text>
                  <Text style={stylesFonts.actorrole}>Brand</Text>
                </View>
                <View style={styles.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/jessica.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text style={stylesFonts.actortext}>Jessica Chastain</Text>
                  <Text style={stylesFonts.actorrole}>Murph</Text>
                </View>
                <View style={styles.container3} backgroundColor="#2A2A2A">
                  <Image
                    source={require("./assets/mackenzie.jpg")}
                    style={{ width: 140, height: 220 }}
                    resizeMode="cover"
                  />
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={stylesFonts.actortext}
                  >
                    Mackenzie Foy
                  </Text>
                  <Text style={stylesFonts.actorrole}>Murph</Text>
                </View>
              </View>
            </ScrollView>
            {/* -------------------REALISATORS ------------------- */}

            <View style={{ marginLeft: 10 }}>
              <Text style={stylesFonts.director}>Director</Text>
              <Text style={stylesFonts.infosdir}>Christopher Nolan</Text>
              <Text style={stylesFonts.director}>Writers</Text>
              <Text style={stylesFonts.infosdir}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "red" },
  container2: {
    backgroundColor: "#212121",
    marginTop: 20,
  },
  container3: {
    justifyContent: "flex-start",
    marginRight: 8,
    width: 140,
  },
  card: { maxHeight: 200, maxWidth: 160 },
  image: { resizeMode: "contain" },
});

const stylesFonts = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
  },
  title: {
    marginTop: 10,
    color: "white",
    fontSize: 33,
    marginLeft: 10,
  },
  infos: {
    color: "white",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    width: 240,
  },
  topbilled: {
    marginTop: 15,
    marginBottom: 15,
    color: "white",
    fontSize: 25,
    marginLeft: 10,
  },
  actortext: {
    padding: 2,
    marginTop: 5,
    color: "white",
    ellipsizeMode: "tail",
  },
  actorrole: {
    padding: 2,
    color: "lightgrey",
    fontSize: 12,
    marginBottom: 8,
  },
  director: {
    color: "white",
    marginTop: 16,
    fontSize: 17,
  },
  infosdir: {
    padding: 2,
    color: "lightgrey",
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
  subtitles: {
    color: "grey",
    marginLeft: 10,
    marginTop: 10,
    fontSize: 14,
    justifyContent: "flex-start",
  },
  textcom: {
    fontWeight: "bold",
    color: "white",
  },
});

const stylesNum2 = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
  },
});
