import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

type Props = {
  aoAdicionar: (nome: string, quantidade: number) => void;
};

export default function FormularioItem({ aoAdicionar }: Props) {

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function adicionar() {

    if (nome.trim() === '') {
      return;
    }

    const qtd = Number(quantidade) || 1;

    aoAdicionar(nome, qtd);

    setNome('');
    setQuantidade('');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        Produto
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o produto"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        Quantidade
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Button
        title="Adicionar"
        onPress={adicionar}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 15,
    borderRadius: 10
  },

  label: {
    fontSize: 16,
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  }

});