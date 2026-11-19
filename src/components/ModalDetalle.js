import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../App.styles';

export default function ModalDetalle({ tarea, onClose }) {
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

  return (
    <Modal
      visible={tarea !== null}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeaderRow}>
            <Text style={styles.modalLabel}>Detalle de la Tarea</Text>
          </View>

          <Text style={styles.modalTitulo}>{tarea?.titulo}</Text>

          {tarea && (
            <View style={{ alignItems: 'center', marginTop: 8 }}>
              <View style={[styles.prioridadBadge, getBadgeStyle(tarea.prioridad).container]}>
                <Text style={[styles.prioridadBadgeText, getBadgeStyle(tarea.prioridad).text]}>
                  Prioridad {tarea.prioridad}
                </Text>
              </View>
            </View>
          )}

          {tarea?.fotoUri && (
            <Image
              source={{ uri: tarea.fotoUri }}
              style={styles.modalPhoto}
              resizeMode="cover"
              accessibilityLabel={`Fotografía de ${tarea.titulo}`}
            />
          )}

          <View style={styles.modalDivider} />

          <Text style={styles.modalDescripcion}>{tarea?.descripcion}</Text>

          <TouchableOpacity style={styles.buttonCerrarModal} onPress={onClose}>
            <Text style={styles.buttonCerrarModalText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
