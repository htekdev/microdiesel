export const site = {
  brand: 'Micro Diesel de Mérida',
  short: 'Micro Diesel',
  legalName: 'MICRO DIESEL DE MÉRIDA',
  owner: 'Héctor Armando Rocha Sepúlveda',
  tagline: 'Mantenemos tu flotilla rodando',
  phone: '(999) 317-2246',
  phoneE164: '+529993172246',
  mobile: '999 359-7970',
  mobileE164: '+529993597970',
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
  // Lun–Vie 9:00–18:00 (cierre puede extenderse a 18:30). Sábado por confirmar.
  hours: 'Lun–Vie 9:00–18:00 · Sáb (consultar)',
  hoursSchema: ['Mo-Fr 09:00-18:00'],
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
    slug: 'diagnostico',
    title: 'Diagnóstico y sensores',
    blurb: 'Escaneo computarizado y revisión de sensores para localizar fallas con precisión antes de tocar el motor.',
    icon: 'scan',
  },
  {
    slug: 'motor',
    title: 'Reparación de motor',
    blurb: 'Mantenimiento mayor y menor: empaques, distribución, rectificación y armado completo de motor diésel.',
    icon: 'engine',
  },
  {
    slug: 'frenos',
    title: 'Frenos y suspensión',
    blurb: 'Servicio integral de frenos y suspensión para camiones, camionetas y vehículos de carga.',
    icon: 'brake',
  },
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento preventivo',
    blurb: 'Servicios programados — aceite, filtros, refrigerante y revisión general — para evitar paros costosos.',
    icon: 'shield',
  },
  {
    slug: 'hidraulico',
    title: 'Sistemas hidráulicos',
    blurb: 'Reparación de bombas, mangueras y cilindros hidráulicos para maquinaria pesada y de construcción.',
    icon: 'fuel',
  },
  {
    slug: 'maquinaria',
    title: 'Maquinaria y construcción',
    blurb: 'Servicio especializado para volquetes, grúas y equipo pesado de obra.',
    icon: 'turbo',
  },
];

export const stats = [
  { value: '+35', label: 'Años de oficio', sub: 'Don Héctor Rocha' },
  { value: '13', label: 'Años en Mérida', sub: 'al servicio de la región' },
  { value: 'Flotillas', label: 'Especialidad', sub: 'transporte y obra' },
  { value: 'Diésel', label: 'Foco total', sub: 'motores pesados y ligeros' },
];

export const fleetPoints = [
  {
    title: 'Entendemos el costo del paro',
    body: 'Un vehículo detenido no solo es una reparación pendiente: es ingreso que tu empresa deja de generar. Por eso priorizamos diagnósticos rápidos y reparaciones bien hechas a la primera.',
  },
  {
    title: 'Diagnóstico antes de cobrar',
    body: 'Te decimos qué tiene la unidad antes de meterle mano. Sin sorpresas, sin servicios que no necesitas.',
  },
  {
    title: 'Camiones, volquetes y grúas',
    body: 'Atendemos flotillas de transporte y maquinaria de construcción — volquetes, grúas y equipo pesado de obra.',
  },
  {
    title: 'Comunicación directa con tu operador',
    body: 'Tratas con el dueño y el equipo del taller. Sin intermediarios ni cadenas largas de mensajes.',
  },
];
