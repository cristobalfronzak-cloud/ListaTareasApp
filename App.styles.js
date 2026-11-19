import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  badge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },

  formContainer: {
    backgroundColor: '#F1F5F9',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
    textTransform: 'uppercase',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: '#1E293B',
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top',
  },

  prioridadesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  prioridadOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    gap: 6,
  },
  radioOuter: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#94A3B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: '#1E293B',
  },
  prioridadTextOption: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },

  prioridadSelectedBaja: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  prioridadSelectedMedia: {
    backgroundColor: '#FEF3C7',
    borderColor: '#D97706',
  },
  prioridadSelectedAlta: {
    backgroundColor: '#FEE2E2',
    borderColor: '#DC2626',
  },

  photoActionsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  photoActionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  photoActionText: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '700',
  },
  photoPreviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
  },
  photoThumbnail: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
  },
  removePhotoText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '600',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },

  buttonAgregar: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonEditarModo: {
    backgroundColor: '#16A34A',
    shadowColor: '#16A34A',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  buttonCancelar: {
    marginTop: 8,
    paddingVertical: 6,
    alignItems: 'center',
  },
  buttonCancelarText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 13,
  },

  searchFilterContainer: {
    marginBottom: 14,
    gap: 8,
  },
  searchInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: '#0F172A',
  },
  filterPillsContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filterPillActive: {
    backgroundColor: '#0F172A',
    borderColor: '#0F172A',
  },
  filterPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  filterPillTextActive: {
    color: '#FFFFFF',
  },

  cardTarea: {
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  cardBaja: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
    borderLeftWidth: 6,
    borderLeftColor: '#16A34A',
  },
  cardMedia: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
    borderLeftWidth: 6,
    borderLeftColor: '#D97706',
  },
  cardAlta: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
    borderLeftWidth: 6,
    borderLeftColor: '#DC2626',
  },

  infoTarea: {
    flex: 1,
    paddingRight: 10,
  },
  tituloHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tituloTarea: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    flexShrink: 1,
  },
  descripcionTarea: {
    fontSize: 13,
    color: '#475569',
    marginTop: 2,
    lineHeight: 18,
  },

  prioridadBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  prioridadBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  badgeBaja: {
    backgroundColor: '#DCFCE7',
  },
  badgeTextBaja: {
    color: '#15803D',
  },
  badgeMedia: {
    backgroundColor: '#FEF3C7',
  },
  badgeTextMedia: {
    color: '#B45309',
  },
  badgeAlta: {
    backgroundColor: '#FEE2E2',
  },
  badgeTextAlta: {
    color: '#B91C1C',
  },

  accionesContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  buttonEditar: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonEditarText: {
    color: '#334155',
    fontWeight: '700',
    fontSize: 11,
  },
  buttonEliminar: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonEliminarText: {
    color: '#DC2626',
    fontWeight: '700',
    fontSize: 11,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#94A3B8',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  modalHeaderRow: {
    alignItems: 'center',
    marginBottom: 8,
  },
  modalLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2563EB',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
  },
  modalDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },
  modalDescripcion: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 20,
  },
  modalPhoto: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginTop: 12,
  },
  buttonCerrarModal: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonCerrarModalText: {
    color: '#475569',
    fontWeight: '700',
    fontSize: 14,
  },
});
