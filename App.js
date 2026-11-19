import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { styles } from './App.styles';
import FormularioTarea from './src/components/FormularioTarea';
import BuscadorFiltros from './src/components/BuscadorFiltros';
import TarjetaTarea from './src/components/TarjetaTarea';
import ModalDetalle from './src/components/ModalDetalle';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('Baja');
  const [fotoUri, setFotoUri] = useState(null);
  const [tareas, setTareas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const [busqueda, setBusqueda] = useState('');
  const [filtroPrioridad, setFiltroPrioridad] = useState('Todas');

  const seleccionarFotografia = async (usarCamara) => {
    try {
      if (Platform.OS !== 'web') {
        const permiso = usarCamara
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permiso.granted) {
          const recurso = usarCamara ? 'la cámara' : 'las fotos';
          Alert.alert(
            permiso.canAskAgain ? 'Permiso requerido' : 'Permiso bloqueado',
            permiso.canAskAgain
              ? `Permite el acceso a ${recurso} para añadir una fotografía a la tarea.`
              : `El acceso a ${recurso} está bloqueado. Actívalo en la configuración de la aplicación.`,
          );
          return;
        }
      }

      const opciones = {
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      };
      const resultado = usarCamara
        ? await ImagePicker.launchCameraAsync(opciones)
        : await ImagePicker.launchImageLibraryAsync(opciones);

      if (!resultado.canceled && resultado.assets?.[0]?.uri) {
        setFotoUri(resultado.assets[0].uri);
      }
    } catch {
      Alert.alert('No se pudo abrir', 'Inténtalo nuevamente para añadir una fotografía.');
    }
  };

  const guardarTarea = () => {
    if (titulo.trim() === '' || descripcion.trim() === '') {
      Alert.alert('Atención', 'Ingresa un título y una descripción para continuar.');
      return;
    }

    if (editandoId !== null) {
      const tareasActualizadas = tareas.map((tarea) => {
        if (tarea.id === editandoId) {
          return { ...tarea, titulo, descripcion, prioridad, fotoUri };
        }
        return tarea;
      });
      setTareas(tareasActualizadas);
      setEditandoId(null);
    } else {
      const nuevaTarea = {
        id: Date.now().toString(),
        titulo,
        descripcion,
        prioridad,
        fotoUri,
      };
      setTareas([...tareas, nuevaTarea]);
    }

    setTitulo('');
    setDescripcion('');
    setPrioridad('Baja');
    setFotoUri(null);
  };

  const iniciarEdicion = (tarea) => {
    setTitulo(tarea.titulo);
    setDescripcion(tarea.descripcion);
    setPrioridad(tarea.prioridad || 'Baja');
    setFotoUri(tarea.fotoUri || null);
    setEditandoId(tarea.id);
  };

  const cancelarEdicion = () => {
    setTitulo('');
    setDescripcion('');
    setPrioridad('Baja');
    setFotoUri(null);
    setEditandoId(null);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
    if (editandoId === id) cancelarEdicion();
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    const coincideTitulo = tarea.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincidePrioridad = filtroPrioridad === 'Todas' || tarea.prioridad === filtroPrioridad;
    return coincideTitulo && coincidePrioridad;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Mis Tareas</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{tareas.length} pendientes</Text>
        </View>
      </View>

      <FormularioTarea
        titulo={titulo}
        setTitulo={setTitulo}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        prioridad={prioridad}
        setPrioridad={setPrioridad}
        fotoUri={fotoUri}
        tomarFotografia={() => seleccionarFotografia(true)}
        elegirFotografia={() => seleccionarFotografia(false)}
        quitarFotografia={() => setFotoUri(null)}
        guardarTarea={guardarTarea}
        editandoId={editandoId}
        cancelarEdicion={cancelarEdicion}
      />

      <BuscadorFiltros
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        filtroPrioridad={filtroPrioridad}
        setFiltroPrioridad={setFiltroPrioridad}
      />

      <FlatList
        data={tareasFiltradas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              {tareas.length === 0
                ? 'No tienes tareas pendientes'
                : 'No hay coincidencias con la búsqueda'}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TarjetaTarea
            item={item}
            onSelect={setTareaSeleccionada}
            onEdit={iniciarEdicion}
            onDelete={eliminarTarea}
          />
        )}
      />

      <ModalDetalle
        tarea={tareaSeleccionada}
        onClose={() => setTareaSeleccionada(null)}
      />
    </SafeAreaView>
  );
}
