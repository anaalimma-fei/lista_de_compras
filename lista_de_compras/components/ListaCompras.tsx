import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet
} from 'react-native';

import type { ItemDeCompra } from '../types';

type Props = {
  itens: ItemDeCompra[];
  aoRemover: (id: string) => void;
};

export default function ListaCompras({
  itens,
  aoRemover
}: Props) {

  return (

    <FlatList

      data={itens}

      keyExtractor={(item) => item.id}

      renderItem={({ item }) => (

        <View style={styles.item}>

          <View>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              Quantidade: {item.quantidade}
            </Text>

          </View>

          <Button
            title="Remover"
            onPress={() => aoRemover(item.id)}
          />

        </View>

      )}

      ListEmptyComponent={
        <Text style={styles.vazio}>
          Lista vazia
        </Text>
      }

    />

  );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  vazio: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18
  }

});