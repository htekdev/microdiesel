export const site = {
  brand: 'Micro Diesel de Mérida',
  short: 'Micro Diesel',
  legalName: 'MICRO DIESEL DE MÉRIDA',
  owner: 'Héctor Rocha',
  tagline: 'Mantenemos tu flotilla rodando',
  phone: '+52 999 359 7970',
  phoneE164: '+529993597970',
  whatsapp: '+529993597970',
  email: 'Mdieselmerida@hotmail.com',
  address: {
    street: 'Circuito Colonias No. 752',
    colonia: 'Col. Castilla Cámara',
    city: 'Mérida',
    region: 'Yucatán',
    postalCode: '97278',
    country: 'MX',
  },
  // Lun–Vie 9:00–18:00 · Sáb 9:00–14:00 (confirmado por Don Héctor 2026-06-24)
  hours: 'Lun–Vie 9:00–18:00 · Sáb 9:00–14:00',
  hoursSchema: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],
  geo: {
    // Approximate Mérida centroid; refine after Sofia confirms exact coords.
    latitude: 20.9674,
    longitude: -89.5926,
  },
  url: 'https://microdisel.mx',
  social: {
    facebook: '', // por confirmar — Sofia indicó que sí tienen Facebook
    instagram: '',
  },
} as const;

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Flotillas', href: '/#flotillas' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export const services = [
  {
    slug: 'preventivo',
    title: 'Servicios preventivos',
    blurb: 'Mantenimiento programado para evitar fallas — aceite, filtros, refrigerante, revisión general y diagnóstico para mantener tus unidades rodando.',
    icon: 'shield',
  },
  {
    slug: 'motor',
    title: 'Reparación de motor',
    blurb: 'Mecánica general de motor diésel — mantenimiento mayor y menor, empaques, distribución, rectificación y armado completo.',
    icon: 'engine',
  },
  {
    slug: 'suspension',
    title: 'Suspensión',
    blurb: 'Servicio y reparación de suspensión para camiones, camionetas y maquinaria — soporte para cargas pesadas y caminos exigentes.',
    icon: 'turbo',
  },
  {
    slug: 'frenos',
    title: 'Frenos',
    blurb: 'Servicio integral de frenos para vehículos diésel y unidades de carga — revisión, ajuste y reparación completa.',
    icon: 'brake',
  },
];

export const stats = [
  { value: '+35', label: 'Años de oficio', sub: 'Don Héctor Rocha' },
  { value: '13', label: 'Años en Mérida', sub: 'al servicio de la región' },
  { value: 'Diésel', label: 'Foco total', sub: 'mecánica general especializada' },
  { value: '1–30+', label: 'Unidades', sub: 'desde un vehículo hasta flotillas' },
];

export const fleetPoints = [
  {
    title: 'Desde una sola unidad hasta 30+',
    body: 'Atendemos a propietarios particulares de vehículos diésel y a empresas con flotillas de 3, 5, 10 y hasta 30 o más unidades.',
  },
  {
    title: 'Entendemos el costo del paro',
    body: 'Una unidad detenida no solo es una reparación pendiente: es ingreso que tu empresa deja de generar. Por eso priorizamos diagnósticos rápidos y reparaciones bien hechas a la primera.',
  },
  {
    title: 'Preventivo y correctivo',
    body: 'Programamos mantenimientos preventivos para evitar paros y resolvemos correctivos — motor, suspensión y frenos — cuando se necesitan.',
  },
  {
    title: 'Comunicación directa',
    body: 'Tratas con el dueño y el equipo del taller. Sin intermediarios ni cadenas largas de mensajes.',
  },
];
