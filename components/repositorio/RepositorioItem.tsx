import { Repositorio } from "@/interfaces/Repositorio";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RepositorioItemProps {
  repositorio: Repositorio;
}

function RepositorioItem({ repositorio }: RepositorioItemProps) {
  return (
    <View style={styles.repositorioItem}>
      <Text style={styles.repoNome}>Nome do repositório: <Text style={styles.repColorName}>{repositorio.repoid}</Text></Text>
      <Text style={styles.repoNome}>Dono do repositório: <Text style={styles.repColorName}>{repositorio.ownerid}</Text></Text>
      <Text style={styles.repoNome}>Node_id: <Text style={styles.repColorName}>{repositorio.node_id}</Text></Text>
      <Text style={styles.repoNome}>Visibility: <Text style={styles.repColorName}>{repositorio.visibility}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  repositorioItem: {
    width: 315,
    padding: 10,
    marginTop: 7,
    marginBottom: 3,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "flex-start",  // Alinha os textos à esquerda
    backgroundColor: "#1fba48",
  },
  repoNome: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  camposRepo: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  repColorName:{
    color:'white'
  }
});

export default RepositorioItem;
