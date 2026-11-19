import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../App.styles';

export default function TarjetaTarea({ item, onSelect, onEdit, onDelete }) {
  const getCardStyle = (nivel) => {
    switch (nivel) {
      case 'Alta':
        return styles.cardAlta;
      case 'Media':
        return styles.cardMedia;
      default:
        return styles.cardBaja;
    }
  };

  const getBadgeStyle = (nivel) => {
    switch (nivel) {
      case 'Alta':
        return { container: styles.badgeAlta, text: styles.badgeTextAlta };
      case 'Media':
        return { container: styles.badgeMedia, text: styles.badgeTextMedia };
      default:
        return { container: styles.badgeBaja, text: styles.badgeTextBaja };
    }
  };

  const cardStyle = getCardStyle(item.prioridad);
  const badgeStyle = getBadgeStyle(item.prioridad);

  return (
    <View style={[styles.cardTarea, cardStyle]}>
      <TouchableOpacity
        style={styles.infoTarea}
        onPress={() => onSelect(item)}
        activeOpacity={0.6}
      >
        <View style={styles.tituloHeaderRow}>
          <Text style={styles.tituloTarea} numberOfLines={1}>{item.titulo}</Text>
          <View style={[styles.prioridadBadge, badgeStyle.container]}>
            <Text style={[styles.prioridadBadgeText, badgeStyle.text]}>
              {item.prioridad}
            </Text>
          </View>
        </View>
        <Text style={styles.descripcionTarea} numberOfLines={1}>{item.descripcion}</Text>
      </TouchableOpacity>

      <View style={styles.accionesContainer}>
        <TouchableOpacity style={styles.buttonEditar} onPress={() => onEdit(item)}>
          <Text style={styles.buttonEditarText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEliminar} onPress={() => onDelete(item.id)}>
          <Text style={styles.buttonEliminarText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}