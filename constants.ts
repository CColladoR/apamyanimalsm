import { Animal, TeamMember, DonationMethod } from './types';

export const ANIMALS: Animal[] = [
  {
    id: '7',
    name: 'Nuevo Rescate (Instagram)',
    species: 'Perro', // Cambiar si es Gato u Otro
    breed: 'Mestizo',
    age: 'Consultar ficha',
    gender: 'Macho',
    size: 'Mediano',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop', // Sustituir por la foto real
    description: 'Recién llegado a la familia APA Myanimalsm. Estamos actualizando su ficha con los datos del post.',
    story: 'Este animal acaba de ser publicado en nuestras redes sociales. Para más información inmediata visita el post original: https://www.instagram.com/p/DS42kTGDB_M/',
    status: 'En Adopción'
  },
  {
    id: '1',
    name: 'Toby',
    species: 'Perro',
    breed: 'Mestizo de Labrador',
    age: '2 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?q=80&w=1000&auto=format&fit=crop',
    description: 'Toby es un perro lleno de energía y amor para dar. Le encantan los paseos largos.',
    story: 'Toby fue encontrado vagando cerca de una carretera. Estaba desnutrido y asustado. Después de meses de recuperación, ha demostrado ser un compañero leal y juguetón. Se lleva bien con otros perros, pero prefiere no convivir con gatos. Necesita una familia activa que pueda seguir su ritmo.',
    status: 'En Adopción'
  },
  {
    id: '2',
    name: 'Luna',
    species: 'Gato',
    breed: 'Europeo Común',
    age: '8 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: 'Luna es una gatita curiosa y muy cariñosa. El motor de su ronroneo nunca se apaga.',
    story: 'Luna y sus hermanos fueron dejados en una caja en la puerta del refugio. Es la única que queda por adoptar de su camada. Es muy sociable, le encanta dormir al sol y jugar con cualquier cosa que se mueva.',
    status: 'En Adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'No', // Negativo en tests
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte' // Pendiente por edad
    }
  },
  {
    id: '3',
    name: 'Max',
    species: 'Perro',
    breed: 'Pastor Alemán',
    age: '5 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=1000&auto=format&fit=crop',
    description: 'Max es un perro noble, obediente y protector. Ideal para casas con jardín.',
    story: 'Su anterior dueño falleció y la familia no pudo hacerse cargo. Max es un perro muy educado, sabe sentarse y dar la pata. Es tranquilo en casa pero necesita su dosis diaria de ejercicio. Sería el compañero perfecto para una persona mayor activa o una familia tranquila.',
    status: 'Urgente'
  },
  {
    id: '4',
    name: 'Coco',
    species: 'Perro',
    breed: 'Podenco',
    age: '3 años',
    gender: 'Macho',
    size: 'Mediano',
    imageUrl: 'https://images.unsplash.com/photo-1625316708582-7c38734c3121?q=80&w=1000&auto=format&fit=crop',
    description: 'Coco es un poco tímido al principio, pero un amor cuando coge confianza.',
    story: 'Rescatado de una situación de maltrato, a Coco le cuesta un poco confiar en los extraños. Sin embargo, una vez que te conoce, es la sombra más dulce que podrías tener. Busca un hogar tranquilo y paciente que le de el amor que nunca tuvo.',
    status: 'En Adopción'
  },
  {
    id: '5',
    name: 'Mia',
    species: 'Gato',
    breed: 'Siamés',
    age: '4 años',
    gender: 'Hembra',
    size: 'Mediano',
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1000&auto=format&fit=crop',
    description: 'Elegante y vocal. Mia siempre tendrá algo que contarte.',
    story: 'Mia es una gata con mucha personalidad. Le gusta ser el centro de atención y no duda en pedir mimos cuando los quiere. Convive bien con otros gatos si se hacen las presentaciones adecuadas.',
    status: 'Reservado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'No',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
    {
    id: '6',
    name: 'Bimba',
    species: 'Perro',
    breed: 'Bodeguero',
    age: '1 año',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop',
    description: 'Pura alegría en formato pequeño. Bimba es saltarina y muy lista.',
    story: 'Apareció vagando por el campo. Es una perra muy inteligente, aprende trucos con facilidad y le encanta jugar a la pelota. Es ideal para familias con niños porque nunca se cansa de jugar.',
    status: 'En Adopción'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Laura',
    role: 'Presidenta y Fundadora',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    bio: 'Desde muy joven comencé como particular en la alimentación, rescate y gestión de colonias. Fui voluntaria en varias organizaciones, pero nunca pensé que mi sueño se llegaría a cumplir tan pronto. Con 23 años tenía mi propia asociación, encontré a un equipo con mis mismos ideales. Desde entonces he crecido junto a ellas, he aprendido cada día, hemos caído y nos hemos levantado juntas, superamos todo lo duro de este mundo y por supuesto lo recompensamos con todo lo bueno que nos da. Eso es APA. Myanimalsm, enfocado siempre en salvar la vida a todo aquel animalito que lo necesite.'
  },
  {
    id: '2',
    name: 'Reyes',
    role: 'Vicepresidenta',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    bio: 'Mi ropa ha estado siempre marcada por pelitos de gato, soy de las que piensa que "hogar" significa abrir la puerta y ver que un lindo gatito te está esperando. No concibo el día a día sin tener a un michi ronroneando en mi pecho y me es imposible mirar hacia otro lado cuando hay algún caso que necesita de nuestra ayuda. Estar en Apa Myanimalsm me ha salvado de lo peor de la sociedad y me permite volar muy alto sin poner límites a lo que más quiero: dar todo de mí por los gatos. Cada día conseguimos abarcar más casos y todo es gracias al gran equipo que formamos.'
  },
  {
    id: '3',
    name: 'Angelines',
    role: 'Secretaria',
    imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=400&auto=format&fit=crop',
    bio: 'Empecé en el mundo de la protección animal siendo rescatista de casos imposibles, metiéndome en alcantarillas para sacar a camadas atrapadas, he pasado horas en el Manzanares para rescatar a un gato que se había precipitado y he formado parte de varios grupos de rescate animal donde he aprendido muchísimo sobre capturas y socialización. Mi pasión por los animales es tan fuerte que mis días deberían tener más de 24h para que me diese tiempo a abarcar todo lo que me gustaría. Cuando recibo halagos por salvar a tantos peludos suelo contestar lo mismo: son ellos los que siempre me salvan a mí.'
  },
  {
    id: '4',
    name: 'Christian',
    role: 'Tesorero',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'La gestión de la burocracia, gestión económica y la administración de la asociación, es ayuda que quizás no se ve desde fuera. En lo personal, ha derribado mis propios mitos, pasando de ser exclusivamente una persona "de perros" a entender y compartir el amor por los gatos con esa misma intensidad. Además, me considero una pieza fundamental de nuestra red de casas de acogida, ofrezco mi hogar como refugio seguro, demostrando que el trabajo de protección animal se hace tanto detrás de una pantalla, en la calle y desde el salón de mi casa.'
  }
];

export const DONATION_METHODS: DonationMethod[] = [
  {
    id: 'teaming',
    name: 'Teaming',
    description: 'Dona 1€ al mes. Un pequeño gesto que suma mucho.',
    iconName: 'Users',
    actionUrl: 'https://www.teaming.net/',
    color: 'bg-blue-500'
  },
  {
    id: 'bizum',
    name: 'Bizum',
    description: 'Donación rápida y sencilla desde tu móvil.',
    iconName: 'Smartphone',
    details: 'Código de envío: 04872 (Concepto: Donación)',
    color: 'bg-teal-600'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Dona de forma segura con tu cuenta PayPal o tarjeta.',
    iconName: 'CreditCard',
    actionUrl: 'https://www.paypal.com/',
    details: 'Cuenta: myanimalsm@gmail.com',
    color: 'bg-indigo-600'
  },
  {
    id: 'transfer',
    name: 'Transferencia',
    description: 'Transferencia bancaria directa a nuestra cuenta.',
    iconName: 'Landmark',
    details: 'IBAN: ES69 0073 0100 5205 0607 9064',
    color: 'bg-stone-600'
  }
];