import React from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Repositorio } from "@/interfaces/Repositorio";

interface ModalNovoRepoProps {
  visible: boolean;
  onClose: () => void;
  repositorio: Repositorio;
  onChange: (campo: string, valor: string) => void;
  onSalvar: () => void;
}

function ModalNovoRepo({ visible, onClose, repositorio, onChange, onSalvar}: ModalNovoRepoProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Busca de repositório</Text>
          <TextInput
            placeholder="Dono do repositório"
            placeholderTextColor="#888"  // cor cinza claro
            value={repositorio.ownerid}
            onChangeText={(text) => onChange("ownerid", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Nome do repositório"
            placeholderTextColor="#888"  // mesma cor
            value={repositorio.repoid}
            onChangeText={(text) => onChange("repoid", text)}
            style={styles.input}
          />
          <View style={styles.botoes}>
            <Button color="#61eb2b" title="Salvar" onPress={onSalvar} />
            <View style={{ width: 10 }} />
            <Button color="#ff0000" title="Cancelar" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // ou sem isso, se não quiser escurecer
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: "100%",
    color: "#000", // texto digitado,
  },
  botoes: {
    flexDirection: "row",
    marginTop: 5,
    color: "#000",
  },
});

export default ModalNovoRepo;
