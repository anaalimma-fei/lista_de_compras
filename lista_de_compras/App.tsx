
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import FormularioItem from './components/FormularioItem';
import ListaCompras from './components/ListaCompras';

import type { ItemDeCompra } from './types';

export default function App() {

  const [itens, setItens] = useState<ItemDeCompra[]>([
    {
      id: '1',
      nome: 'Arroz',
      quantidade: 2
    },
    {
      id: '2',
      nome: 'Feijão',
      quantidade: 1
    },
    {
      id: '3',
      nome: 'Leite',
      quantidade: 3
    }
  ]);

  // ADICIONAR ITEM
  function adicionarItem(nome: string, quantidade: number) {

    const novoItem: ItemDeCompra = {
      id: Date.now().toString(),
      nome: nome,
      quantidade: quantidade
    };

    setItens([...itens, novoItem]);
  }

  // REMOVER ITEM
  function removerItem(id: string) {

    const novaLista = itens.filter(
      item => item.id !== id
    );

    setItens(novaLista);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        🛒 Lista de Compras
      </Text>

      <FormularioItem
        aoAdicionar={adicionarItem}
      />

      <ListaCompras
        itens={itens}
        aoRemover={removerItem}
      />

      <View style={styles.rodape}>
        <Text>
          {itens.length} itens na lista
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },

  rodape: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white'
  }

});
