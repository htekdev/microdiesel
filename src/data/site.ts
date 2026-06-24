export const site = {
  brand: 'Micro Diesel de Mérida',
  short: 'Micro Diesel',
  legalName: 'MICRO DIESEL DE MÉRIDA',
  owner: 'Héctor Armando Rocha Sepúlveda',
  tagline: 'Especialistas en diésel en Mérida',
  phone: '(999) 317-2246',
  phoneE164: '+529993172246',
  mobile: '999 359-7970',
  mobileE164: '+529993597970',
  whatsapp: '+529993597970',
  email: 'contacto@microdisel.mx',
  address: {
    street: 'Circuito Colonias No. 752',
    colonia: 'Col. Castilla Cámara',
    city: 'Mérida',
    region: 'Yucatán',
    postalCode: '97278',
    country: 'MX',
  },
  hours: 'Lun–Vie 8:00–18:00 · Sáb 8:00–14:00',
  hoursSchema: ['Mo-Fr 08:00-18:00', 'Sa 08:00-14:00'],
  geo: {
    // Approximate Mérida centroid; refine after Sofia confirms.
    latitude: 20.9674,
    longitude: -89.5926,
  },
  url: 'https://microdisel.mx',
  social: {
    facebook: '',
  },
} as const;

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export const services = [
  {
    slug: 'diagnostico',
    title: 'Diagnóstico computarizado',
    blurb: 'Escaneo y diagnóstico avanzado para motores diésel, identificando fallas con precisión.',
    icon: 'scan',
  },
  {
    slug: 'inyeccion',
    title: 'Sistemas de inyección diésel',
    blurb: 'Servicio, calibración y reparación de bombas e inyectores común-rail y tradicionales.',
    icon: 'fuel',
  },
  {
    slug: 'turbo',
    title: 'Turbos y sobrealimentación',
    blurb: 'Reparación, balanceo y reemplazo de turbocompresores para máxima potencia y vida útil.',
    icon: 'turbo',
  },
  {
    slug: 'motor',
    title: 'Reparación de motor',
    blurb: 'Mantenimiento mayor y menor: empaques, distribución, rectificación y armado de motor.',
    icon: 'engine',
  },
  {
    slug: 'frenos',
    title: 'Frenos y suspensión',
    blurb: 'Servicio integral de frenos, amortiguadores y suspensión para camiones y camionetas.',
    icon: 'brake',
  },
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento preventivo',
    blurb: 'Servicios programados: aceite, filtros, refrigerante y revisión general para evitar fallas.',
    icon: 'shield',
  },
];

export const stats = [
  { value: '+20', label: 'Años de experiencia', sub: 'al servicio de Mérida' },
  { value: 'Diésel', label: 'Especialistas', sub: 'común-rail y tradicional' },
  { value: 'Mérida', label: 'Yucatán', sub: 'taller local de confianza' },
  { value: '100%', label: 'Garantía', sub: 'en mano de obra' },
];
