import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../App.styles';
import { OPCIONES_FILTRO } from '../constants/prioridades';

export default function BuscadorFiltros({
  busqueda,
  setBusqueda,
  filtroPrioridad,
  setFiltroPrioridad,
}) {
  return (
    <View style={styles.searchFilterContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por título..."
        placeholderTextColor="#94A3B8"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <View style={styles.filterPillsContainer}>
        {OPCIONES_FILTRO.map((opcion) => {
          const activo = filtroPrioridad === opcion;
          return (
            <TouchableOpacity
              key={opcion}
              style={[styles.filterPill, activo && styles.filterPillActive]}
              onPress={() => setFiltroPrioridad(opcion)}
            >
              <Text style={[styles.filterPillText, activo && styles.filterPillTextActive]}>
                {opcion}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}