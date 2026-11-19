import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../App.styles';
import { OPCIONES_PRIORIDAD } from '../constants/prioridades';

export default function FormularioTarea({
  titulo,
  setTitulo,
  descripcion,
  setDescripcion,
  prioridad,
  setPrioridad,
  fotoUri,
  tomarFotografia,
  elegirFotografia,
  quitarFotografia,
  guardarTarea,
  editandoId,
  cancelarEdicion,
}) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Comprar materiales"
          placeholderTextColor="#94A3B8"
          value={titulo}
          onChangeText={setTitulo}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Detalles de la tarea..."
          placeholderTextColor="#94A3B8"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Prioridad</Text>
        <View style={styles.prioridadesContainer}>
          {OPCIONES_PRIORIDAD.map((opcion) => {
            const selected = prioridad === opcion;
            let selectedStyle = {};
            if (selected) {
              if (opcion === 'Baja') selectedStyle = styles.prioridadSelectedBaja;
              if (opcion === 'Media') selectedStyle = styles.prioridadSelectedMedia;
              if (opcion === 'Alta') selectedStyle = styles.prioridadSelectedAlta;
            }

            return (
              <TouchableOpacity
                key={opcion}
                style={[styles.prioridadOption, selectedStyle]}
                onPress={() => setPrioridad(opcion)}
                activeOpacity={0.7}
              >
                <View style={[styles.radioOuter, selected && { borderColor: '#1E293B' }]}>
                  {selected && <View style={styles.radioInner} />}
                </View>
                <Text style={[styles.prioridadTextOption, selected && { color: '#0F172A', fontWeight: '700' }]}>
                  {opcion}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fotografía (opcional)</Text>
        <View style={styles.photoActionsContainer}>
          <TouchableOpacity
            style={styles.photoActionButton}
            onPress={tomarFotografia}
            activeOpacity={0.7}
          >
            <Text style={styles.photoActionText}>Tomar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.photoActionButton}
            onPress={elegirFotografia}
            activeOpacity={0.7}
          >
            <Text style={styles.photoActionText}>Elegir de galería</Text>
          </TouchableOpacity>
        </View>
        {fotoUri && (
          <View style={styles.photoPreviewRow}>
            <Image source={{ uri: fotoUri }} style={styles.photoThumbnail} />
            <TouchableOpacity onPress={quitarFotografia} activeOpacity={0.7}>
              <Text style={styles.removePhotoText}>Quitar foto</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[styles.buttonAgregar, editandoId && styles.buttonEditarModo]}
        onPress={guardarTarea}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {editandoId ? 'Actualizar Tarea' : '+ Agregar Tarea'}
        </Text>
      </TouchableOpacity>

      {editandoId && (
        <TouchableOpacity style={styles.buttonCancelar} onPress={cancelarEdicion}>
          <Text style={styles.buttonCancelarText}>Cancelar edición</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
