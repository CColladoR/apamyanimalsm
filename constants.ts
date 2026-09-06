import { Animal, TeamMember, DonationMethod } from './types';
import { NIKKI_MYSTERY_IMAGE, TOFU_MYSTERY_IMAGE, EVOLE_MYSTERY_IMAGE } from './data/mysteryCat';

export const ANIMALS: Animal[] = [
  {
    id: '1',
    name: 'Maíz',
    species: 'Perro',
    breed: 'Mestizo',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Maiz.jpg',
    description: 'Maíz es un perro súper casero que busca urgentemente un hogar. Ha trabajado mucho sus miedos y es un perro agradecido y listo para aprender.',
    story: 'Maíz es un perro super casero, se fue adoptado con 3 meses (en 2021) y lo devolvieron en otoño de 2023 con un cuadro de ansiedad importante. La familia no supo educarle y en lugar de trabajar con el desde una parte positiva, lo hicieron con castigos, encierros y ansiedad. Eso provocó que Maíz volviera muy vulnerable, sin entender nada y que estuviera varios meses en shock, apático y llorando de pena💔\n\nDesde que nos lo devolvieron, se encuentra en una residencia canina donde hemos trabajado con especialistas sus miedos y su frustración, además de que le han enseñado muchos trucos que le motivan en el día a día y hacen su estancia más amena. De hecho, vuelve a ser el perrito contento que era, pero no deja de estar en una residencia...es decir, como perro que siempre ha vivido en una casa, le esta afectando el vivir en un chenil 😞\n\nSabemos que por tamaño y por no ser "un bebé pequeño" sus solicitudes de adopción o acogida temporal son NULAS. Pero no por ello vamos a dejar de intentarlo, así que: buscamos sacarlo de allí bien como casa de acogida o bien con adopción definitiva 🙏🏻\n\nEsto no es un juego, hablamos de una vida que, a su corta edad, ya ha sido dañada. Los casi de perros devueltos a las protectoras son muy sensibles puesto que el animal es muy consciente del abandono y, siendo totalmente casero, tiene que pasar a vivir en un chenil de una residencia canina donde se pierden todas las comodidades de un hogar, generando en ellos un shock y adaptación brutal. Necesitamos que las personas que estén interesadas en ayudar tengan muy claro que se necesita paciencia y conectar desde el cariño con el animal para poco a poco ir enseñándole que no volverá a pasar por ese shock, que no todos somos malos y que puede llevar de nuevo una vida feliz 🥹',
    status: 'Busca acogida urgente',
    secondaryStatuses: ['En Adopción', 'En residencia'],
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'No',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '2',
    name: 'Brie',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Siamés',
    age: '1.5 años',
    gender: 'Hembra',
    size: '3kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Brie.jpg',
    description: 'Actualmente me encuentro en una casa de acogida en Madrid. ¡Ya estoy lista para encontrar a mi familia definitiva!',
    story: 'Brie llegó a nosotras pesando solamente 1kg (siendo gata adulta) en un estado límite rozando la muerte, de hecho, un día más en la calle y no lo hubiera contado. Fue rociada con veneno/gasolina por todo el cuerpo y eso le causó inflamación y quemaduras en la boca y vías respiratorias causándole muchísima mucosidad y dificultad para respirar😭\n\nHace un mes de su tan sonada operación de boca, donde se removió cielo y tierra para conseguirlo. Y sí, aquí estamos, habiendo dado un paso gigante en su calidad de vida. Después de pasar por la operación de odontología, donde pudieron extraerle todas las piezas y curar las úlceras, Brie a día de hoy, está mucho más tranquila: come que da gusto, no tiene dolor e incluso se le ha bajado un poco la inflamación de las vías altas. \n\nActualmente, gracias a toda vuestra ayuda, hemos recorrido la mitad del camino, solo nos queda el final. Nuestras veterinarias están intentando mantener esos mocos con un tratamiento diario y así intentar que siga ganando peso, pero la realidad es que, en breves, habrá que realizarle un TAC para estudiar la causa que provoca que esos mocos no cesen y encontrar la solución para que pueda respirar con normalidad sin necesidad de aerosoles and humidificador. Asimismo, queremos recordar el hecho de que ella es + inmuno, por lo que sus defensas siempre van a estar más bajitas y el tiempo de recuperación se ralentiza más 🥹.\n\nEsto es un pacto entre ella y Apa Myanimalsm, no vamos a dejarla sola y el reto es terminar encontrándole un hogar cuando esté totalmente recuperada. Seguimos yendo a por todas, gracias infinitas a quienes nos habéis ayudado y pusisteis vuestro granito de arena, esto es una cadena...¡seguimos! ❤️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Positivo (FIV)',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    },
    updates: [
      {
        date: '17/05/2026',
        content: `¡¡¡No os lo vais a creer: Brie ya pesa 3.7kg 🥳🥳🥳y tenemos el visto bueno para esterilizar!!!

Brie llegó a nosotras en el verano 2025, pesando solamente 1kg (siendo gata adulta) en un estado límite rozando la muerte, de hecho, un día más en la calle y no lo hubiera contado. Fue rociada con veneno/gasolina por todo el cuerpo y eso le causó inflamación y quemaduras en la boca y vías respiratorias causándole muchísima mucosidad y dificultad para respirar😭

Tras estabilizar su situación y conseguir una analítica con valores en rango, en noviembre 2025, con la ayuda de todxs vosotrxs, pasó por quirófano de odontología para extraerle todas las piezas y curarle las úlceras ocasionadas en toda la boca ❤️🩹

Actualmente, con mucho esfuerzo, ayuda económica y el amor de su casa de acogida, se han conseguido estabilizar los mocos, las vías altas y la dificultad respiratoria que traía producida por toda la terrible mierd* que vivió en la calle y lo que le hicieron 😡 Parecía casi imposible, pero esto es un paso gigantesco en su calidad de vida (foto 2)🥹❤️🩹 ¿Próxima meta? La esterilización la semana que viene 🤞🏻🤞🏻🤞🏻🤞🏻

Asimismo, queremos recordar el hecho de que ella es + inmuno, por lo que sus defensas siempre van a estar más bajitas y el tiempo de recuperación se ralentiza más 🥹.

Esto es un pacto entre ella y Apa Myanimalsm, no vamos a dejarla sola y el reto es terminar encontrándole un hogar cuando esté totalmente recuperada. Vamos a por todas, gracias infinitas a quienes nos ayudáis, seguimos necesitando granitos de arena, esto es una cadena ❤️❤️❤️`
      }
    ]
  },
  {
    id: '3',
    name: 'Omega',
    species: 'Perro',
    breed: 'Mestizo de Pastor Alemán',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Omega.jpg',
    description: 'Las dos plazas de la residencia nos cuestan 350€ al mes. Necesitamos tu ayuda 🙏',
    story: 'Con 3 mesecitos se fueron adoptados, el que era su dueño pasó todos nuestros procesos de adopción, teníamos un buen seguimiento de como iban evolucionando y creciendo felices en la que parecía que sería su familia definitiva... Un año después nos dimos cuenta de que no fueron más que un capricho.\n\nLos dos hermanos que nos devolverlos al ser descubiertos por la policía porque su dueño los tenían en pésimas condiciones (mintieron lo más grande y los usaban como perros guardianes de una finca). \n\nActualmente se encuentran en una residencia canina especializada y trabajan para mejorar su conducta y comportamiento, ya que arrastras traumas por falta de atención, ansiedad, agresividad con otros animales y muestran indicios de maltrato. Llevan ya 3 años con nosotras y aún falta mucho progreso por delante. \n\nNow solo esperamos que descansen y vuelvan a ser los perros felices y nobles que eran cuando se marcharon. Como decimos y repetiremos siempre, aquí estamos por y para ellos ✨\n\nTiempo, paciencia, trabajo y a buscar lo mejor para ellos siempre... ❤️‍🩹',
    status: 'En residencia'
  },
  {
    id: '4',
    name: 'Delta',
    species: 'Perro',
    breed: 'Mestizo de Pastor Alemán',
    age: '4 años',
    gender: 'Macho',
    size: 'Grande',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Delta.jpg',
    description: 'Las dos plazas de la residencia nos cuestan 350€ al mes. Necesitamos tu ayuda 🙏',
    story: 'Con 3 mesecitos se fueron adoptados, el que era su dueño pasó todos nuestros procesos de adopción, teníamos un buen seguimiento de como iban evolucionando y creciendo felices en la que parecía que sería su familia definitiva... Un año después nos dimos cuenta de que no fueron más que un capricho.\n\nLos dos hermanos que nos devolverlos al ser descubiertos por la policía porque su dueño los tenían en pésimas condiciones (mintieron lo más grande y los usaban como perros guardianes de una finca). \n\nActualmente se encuentran en una residencia canina especializada y trabajan para mejorar su conducta y comportamiento, ya que arrastras traumas por falta de atención, ansiedad, agresividad con otros animales y muestran indicios de maltrato. Llevan ya 3 años con nosotras y aún falta mucho progreso por delante. \n\nNow solo esperamos que descansen y vuelvan a ser los perros felices y nobles que eran cuando se marcharon. Como decimos y repetiremos siempre, aquí estamos por y para ellos ✨\n\nTiempo, paciencia, trabajo y a buscar lo mejor para ellos siempre... ❤️‍🩹',
    status: 'En residencia'
  },
  {
    id: '5',
    name: 'Sidra',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanco y Negro',
    age: '1 año',
    gender: 'Hembra',
    size: '3 kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Sidra.jpg',
    description: 'Actualmente estamos ambas juntas en una casa de acogida en Madrid. Necesitamos recaudar fondos para poder cubrir el protocolo veterinario de ambas.',
    story: 'Hace unos días publicamos la necesidad de una acogida urgente para Cava y Sidra, dos hembras jovenes ultra sociables que vivían en una colonia feral descontrolada en un pueblo de Toledo, comiendo de aquella manera y pasando las noches a la intemperie.\n\nObviamente obra del abandono, es evidente que ambas han convivido antes en un hogar por los comportamientos, mimos, ronroneos y saber estar que tienen a día de hoy en su maravillosa acogida, que no dudo ni un instante en aceptar el caso y darles la bienvenida en su casa\n\nNos propusimos que ambas terminasen el año en un hogar y así ha sido. Ambas han salido de la calle, iniciando su cuarentena para poder hacer después todo el protocolo veterinario. Iremos informando sobre sus avances y en pocas semanas, si todo va bien, esperamos poder anunciar su adopción\n\nA día de hoy, ambas necesitan madrinas y padrinos. Necesitamos cubrir una esterilización urgente para evitar sorpresas. ¿Quién se anima?',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '6',
    name: 'Cava',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanco y Negro',
    age: '1 año',
    gender: 'Hembra',
    size: '3 kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Cava.jpg',
    description: 'Actualmente estamos ambas juntas en una casa de acogida en Madrid. Necesitamos recaudar fondos para poder cubrir el protocolo veterinario de ambas.',
    story: 'Hace unos días publicamos la necesidad de una acogida urgente para Cava y Sidra, dos hembras jovenes ultra sociables que vivían en una colonia feral descontrolada en un pueblo de Toledo, comiendo de aquella manera y pasando las noches a la intemperie.\n\nObviamente obra del abandono, es evidente que ambas han convivido antes en un hogar por los comportamientos, mimos, ronroneos y saber estar que tienen a día de hoy en su maravillosa acogida, que no dudo ni un instante en aceptar el caso y darles la bienvenida en su casa\n\nNos propusimos que ambas terminasen el año en un hogar y así ha sido. Ambas han salido de la calle, iniciando su cuarentena para poder hacer después todo el protocolo veterinario. Iremos informando sobre sus avances y en pocas semanas, si todo va bien, esperamos poder anunciar su adopción\n\nA día de hoy, ambas necesitan madrinas y padrinos. Necesitamos cubrir una esterilización urgente para evitar sorpresas. ¿Quién se anima?',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '7',
    name: 'Jengibre',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Siamés',
    age: '10 meses',
    gender: 'Macho',
    size: '2.8kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Jengibre.jpg',
    description: 'Jengibre se recupera actualmente en una casa de acogida en Toledo. Está en proceso de sociabilización y valoración veterinaria tras ser rescatado de la calle.',
    story: 'Fui rescatado de una zona peligrosa donde corría riesgo de atropello. Vivía con Cava y Sidra, que fueron sacadas de la colonia unos pocos días antes que yo. En cuanto ellas no estuvieron, los vecinos dejaron desatendida la colonia y de repente no tenía comida ni agua. Dormía en la calle y cuando el frío llegó mi estado de salud peoró drásticamente. Además, estoy cojito. Las chicas que me rescataron me llevaron al veterinario y parece que tengo una fractura en la cadera que se está valorando a día de hoy por el equipo de Traumatólogos. \n\nEstoy ubicado en una casa de acogida en Toledo. Están sociabilizando conmigo para que empiece a confiar en las personas y pueda llevar una vida feliz cuando esté totalmente recuperada.',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '8',
    name: 'Ana Mena',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Carey',
    age: '2.5 meses',
    gender: 'Hembra',
    size: '2kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/AnaMena.jpg',
    description: 'Actualmente, las chicas me han trasladado a una casa de acogida estable en Madrid, en la que también tengo otros compañeros gatunos que me están ayudando en todo el proceso de adaptación.\n\n¡La bebé ya ha finalizado todo el protocolo veterinario y está lista! Busco un hogar donde me quieran mucho.',
    story: 'Aparecí una mañana en una colonia controlada en un pueblo de Toledo. Las chicas que alimentaban a todos los compis gatunos que estaban allí me vieron enseguida y supieron que me habían dejado allí, abandonada, a -3º toda la noche.\n\nMe rescataron de inmediato y ahora estoy segura, caliente y en proceso de recuperación. ¡La bebé ha finalizado todo el protocolo veterinario y está lista!',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '9',
    name: 'Romeo',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrado',
    age: '7 meses',
    gender: 'Macho',
    size: '3kg',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/IMG_20260119_190406_308%7E2.jpg',
    description: '',
    story: 'Me llaman Romeo y es un placer conocerte :P\n\nLlevo tan solo unos días en la protectora. Anteriormente, me había tenido una familia durante varias semanas, aparecí en la puerta de su casa, al principio pensaron que podría tener familia pero cuando las horas pasaban y yo no me alejaba de allí, decidieron llevarme al veterinario. No tenía microchip pero estaba muy limpito y sanito y por mi aspecto el veterinario dijo que quizás podría tener familia.\n\nMe publicaron, me difundieron y mi familia nunca apareció, tampoco nadie que me quisiera así que empezaron a contactar con asociaciones para entregarme en una de ellas.\n\nDe casualidad y en el último momento, justo antes de que valorasen el soltarme de nuevo en la calle, aparecieron estos chicos tan majos, con los que vivo actualmente en Toledo. Me están cuidando y dicen que tengo que ir al veterinario pronto y si todo está bien, podré estar oficialmente en adopción.',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '10',
    name: 'Coral',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Tricolor',
    age: '5 años',
    gender: 'Hembra',
    size: 'Mediano',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Coral.jpg',
    description: '¡Coral ha encontrado su hogar definitivo! Después de una larga espera, esta gata dulce y cariñosa ya disfruta de su nueva familia y de muchos ronroneos en su sofá definitivo. 💓',
    story: 'Septiembre de 2020, cuando Apa Myanimalsm se estaba formando, sacamos a la camada de "Las Piedras Preciosas" del patio de un instituto de La Sagra. Las primeras acogidas que confiaron en nosotras aceptaron cuidar a las 5 hermanas hasta salir en adopción, de hecho, ahí fue el momento donde empezamos a hacer equipo y cadena solidaria felina 🥹 Jade y Coral fueron adoptadas juntas a las pocas semanas y fue una gran celebración, ya que era de las primeras adopciones conjuntas que conseguíamos ✨\n\nEn 2023, tres años después de su adopción, la que era su familia, alegando problemas médicos y familiares, recurre a nosotras para devolverlas😡 Llegando Jade y Coral en shock a su nueva acogida, donde estuvieron más de dos meses escondidas debajo de la cama porque no se fiaban de nadie y con mucha pena, puesto que sacar a dos animales del que ha sido su hogar toda su vida también les duele y afecta. Ambas pobres estuvieron con signos de estrés y estereotipias el primer año de vuelta a Apa Myanimalsm 😭\n\nDurante estos 3 años, hemos trabajado muy despacito la adaptación y confianza de ambas. Pero, lamentablemente, la realidad es que ya es difícil una adopción conjunta de dos cachorros, imaginaos la de dos adultas...💔\n\nDespués de mucho valorarlo y ver cómo ellas, a día de hoy, no son dependientes la una de la otra, al revés, se relacionan con todo ser: gatos, perros, humanos, llega el momento de separarlas para buscarles en este 2026 su hogar definitivo, el que tanto se merecen.\n\n¡Y el sueño se ha cumplido! Coral ya ha sido adoptada y vive feliz con su nueva familia. Es el final feliz que tanto esperábamos para ella. 💓',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '11',
    name: 'Jade',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Tricolor',
    age: '5 años',
    gender: 'Hembra',
    size: 'Mediano',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Jade2.jpg',
    description: 'Ella es una gata tímida, pero la más noble y bella del mundo. Actualmente se está recuperando de un pico de estrés para estar pronto en adopción.',
    story: 'Septiembre de 2020, cuando Apa Myanimalsm se estaba formando, sacamos a la camada de "Las Piedras Preciosas" del patio de un instituto de La Sagra. Las primeras acogidas que confiaron en nosotras aceptaron cuidar a las 5 hermanas hasta salir en adopción, de hecho, ahí fue el momento donde empezamos a hacer equipo y cadena solidaria felina 🥹 Jade y Coral fueron adoptadas juntas a las pocas semanas y fue una gran celebración, ya que era de las primeras adopciones conjuntas que conseguíamos ✨\n\nEn 2023, tres años después de su adopción, la que era su familia, alegando problemas médicos y familiares, recurre a nosotras para devolverlas😡 Llegando Jade y Coral en shock a su nueva acogida, donde estuvieron más de dos meses escondidas debajo de la cama porque no se fiaban de nadie y con mucha pena, puesto que sacar a dos animales del que ha sido su hogar toda su vida también les duele y afecta. Ambas estuvieron con signos de estrés y estereotipias el primer año de vuelta a Apa Myanimalsm 😭\n\nDurante estos 3 años, hemos trabajado muy despacito la adaptación y confianza de ambas. Pero, lamentablemente, la realidad es que ya es difícil una adopción conjunta de dos cachorros, imaginaos la de dos adultas...💔\n\nDespués de mucho valorarlo y ver cómo ellas, a día de hoy, no son dependientes la una de la otra, al revés, se relacionan con todo ser: gatos, perros, humanos, llega el momento de separarlas para buscarles en este 2026 su hogar definitivo, el que tanto se merecen.\n\nEn el caso de Jade, después de su cambio de acogida, ha vuelto a tener un pico de estrés. En la analítica salen los valores un poquito alterados, por lo que toca estar un tiempo con inmunoestimuladores hasta estabilizarla. Ella es una gata tímida, pero la más noble y bella del mundo. Sabemos que superará el bache y pronto estará en adopción, iremos informando.',
    status: 'En Adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '12',
    name: 'Matilde',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Negra y Blanca',
    age: '1 año',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG20260407173318.jpg',
    description: 'Matilde es la nueva integrante de la familia. Apareció famélica y con heridas debajo de un coche, pero ya está a salvo iniciando su recuperación en cuarentena.',
    story: 'Bienvenida, Matilde 🥹💕\n\nNo estábamos económicamente bien para aceptar nuevos casos, pero durante un paseo no pudimos mirar hacia otro lado 💔\n\nEsta bebé de unos 7 meses apareció ayer debajo de un coche, al lado de una de nuestras colonias controladas de Toledo, maullando y llamando nuestra atención. Como siempre, nos paramos y ella no dudó ni un instante en acercarse corriendo a saludar y a pedir ayuda. Nos dimos la vuelta a por latita, pero nos siguió hasta la puerta de casa y obviamente no iba a quedarse ahí. \n\nEstá famélica, todo un saquito de huesos, llena de heridas de pulgas y garrapatas y con signos de haber sido maltratada. Tiene gestos y reacciones de no haber sido una gatita querida 😔\n\nOs presentamos a Matilde, la nueva integrante de la familia 🌷\n \n💉 Inicia su protocolo veterinario con una buena desparasitación y queda en cuarentena para su recuperación. \n\n🆘 Necesitamos la ayuda de todxs vosotrxs para su manutención y futuras visitas veterinarias.\n\nPuedes ayudarnos con sus gastos mediante:\n💍PayPal myanimalsm@gmail.com\n💍Bizum: 04872 (sección donativos de la app)\n💍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Pte',
      microchip: 'Sí',
      sterilization: 'Sí'
    }
  },
  {
    id: '13',
    name: 'Susi',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrada',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-06-21-13-55-58-51_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Susi es una de las tres hermanitas rescatadas de una parcela. Una bebé con un carácter muy extrovertido and explorador.',
    story: 'Como sabéis, la época de camadas es el terror para toda protectora. Actualmente, la mayoría de casos no provienen de las propias colonias felinas ferales que controlamos, eso es un mito, los casos que se presentan vienen por la irresponsabilidad de los "propietarios" que NO esterilizan a sus gatas (y encima las dejan salir al exterior). La gran mayoría son camadas no deseadas y su "solución" es la brillante idea de dejarlos debajo de un coche, en una caja o bolsa en la basura o no permiten que la madre de a luz en casa y la dejan a su suerte para que se busque la vida😡. \n\n¿Sabéis cuántos bebés no llegan a contarlo? Muchísimos mueren sin ser rescatados por asfixia, infección, hambre o la propia violencia humana. ¿Sabéis cuál es la solución más sencilla? ESTERILIZAR. Sí, esterilizar es uno de los mayores actos de amor que podrás hacer por tu peludo y para apoyar el cambio.\n\nNow bien, aceptamos hace unas semanas a estos 3 hermanitos que estaban en una parcela solitos: Tomás, Susi y Nora. Tuvimos que hacer malabares porque no es nuestro mejor momento y tampoco contábamos con casas de acogida con experiencia en bebés. Finalmente, gracias a las que siempre están ahí, se pudo aceptar el caso y actuar de inmediato porque venían muy muy débiles y Tomas casi no lo cuenta.\n\nDespués de unas semanas de cuarentena, con hidratación, suplementos para coger peso y comida apta para babycat, podemos decir que hemos superado la primera etapa de estos bebés 🎉 Susi tiene un carácter muy extrovertido y explorador, la hermana más fuerte de la camada💪🏻 En cuanto cumplan los 2.5 meses, empezarán su protocolo veterinario para buscar su posterior adopción 💗 \n\nPor favor, tenemos dos camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏\n\n🌸PayPal myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '14',
    name: 'Tomás',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Negra',
    age: '2 meses',
    gender: 'Macho',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-06-21-13-56-40-20_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Tomás es uno de los tres hermanitos rescatados de una parcela. Un bebé luchador, travieso y con muchísima fuerza.',
    story: 'Como sabéis, la época de camadas es el terror para toda protectora. Actualmente, la mayoría de casos no provienen de las propias colonias felinas ferales que controlamos, eso es un mito, los casos que se presentan vienen por la irresponsabilidad de los "propietarios" que NO esterilizan a sus gatas (y encima las dejan salir al exterior). La gran mayoría son camadas no deseadas y su "solución" es la brillante idea de dejarlos debajo de un coche, en una caja o bolsa en la basura o no permiten que la madre de a luz en casa y la dejan a su suerte para que se busque la vida😡. \n\n¿Sabéis cuántos bebés no llegan a contarlo? Muchísimos mueren sin ser rescatados por asfixia, infección, hambre o la propia violencia humana. ¿Sabéis cuál es la solución más sencilla? ESTERILIZAR. Sí, esterilizar es uno de los mayores actos de amor que podrás hacer por tu peludo y para apoyar el cambio.\n\nNow bien, aceptamos hace unas semanas a estos 3 hermanitos que estaban en una parcela solitos: Tomás, Susi y Nora. Tuvimos que hacer malabares porque no es nuestro mejor momento y tampoco contábamos con casas de acogida con experiencia en bebés. Finalmente, gracias a las que siempre están ahí, se pudo aceptar el caso y actuar de inmediato porque venían muy muy débiles y Tomas casi no lo cuenta.\n\nDespués de unas semanas de cuarentena, con hidratación, suplementos para coger peso y comida apta para babycat, podemos decir que hemos superado la primera etapa de estos bebés 🎉 Aunque Tomás sigue yendo más despacio que sus hermanas, tiene muchísima fuerza y lo vamos a conseguir 💪🏻 En cuanto cumplan los 2.5 meses, empezarán su protocolo veterinario para buscar su posterior adopción 💗 \n\nPor favor, tenemos dos camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏\n\n🌸PayPal myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '15',
    name: 'Nora',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrada',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-06-21-13-56-27-79_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Nora es una de las tres hermanitas rescatadas de una parcela. Una auténtica personaja, muy alegre y juguetona.',
    story: 'Como sabéis, la época de camadas es el terror para toda protectora. Actualmente, la mayoría de casos no provienen de las propias colonias felinas ferales que controlamos, eso es un mito, los casos que se presentan vienen por la irresponsabilidad de los "propietarios" que NO esterilizan a sus gatas (y encima las dejan salir al exterior). La gran mayoría son camadas no deseadas y su "solución" es la brillante idea de dejarlos debajo de un coche, en una caja o bolsa en la basura o no permiten que la madre de a luz en casa y la dejan a su suerte para que se busque la vida😡. \n\n¿Sabéis cuántos bebés no llegan a contarlo? Muchísimos mueren sin ser rescatados por asfixia, infección, hambre o la propia violencia humana. ¿Sabéis cuál es la solución más sencilla? ESTERILIZAR. Sí, esterilizar es uno de los mayores actos de amor que podrás hacer por tu peludo y para apoyar el cambio.\n\nNow bien, aceptamos hace unas semanas a estos 3 hermanitos que estaban en una parcela solitos: Tomás, Susi y Nora. Tuvimos que hacer malabares porque no es nuestro mejor momento y tampoco contábamos con casas de acogida con experiencia en bebés. Finalmente, gracias a las que siempre están ahí, se pudo aceptar el caso y actuar de inmediato porque venían muy muy débiles y Tomas casi no lo cuenta.\n\nDespués de unas semanas de cuarentena, con hidratación, suplementos para coger peso y comida apta para babycat, podemos decir que hemos superado la primera etapa de estos bebés 🎉 Como veís, Nora es una auténtica personaja, una bebé muy alegre 💪🏻 En cuanto cumplan los 2.5 meses, empezarán su protocolo veterinario para buscar su posterior adopción 💗 \n\nPor favor, tenemos dos camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏\n\n🌸PayPal myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '16',
    name: 'Selva',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Gris',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20260618-WA0019.jpg',
    description: 'Selva es una adorable bebé sobreviviente rescatada de debajo de un coche. Muy extrovertida, activa y juguetona. Únicamente se irá en adopción conjunta con su hermana Irati.',
    story: 'Aceptamos hace unas semanas a estas 2 hermanitas que aparecieron junto a sus otros 4 hermanos debajo de un coche en un pueblo de Toledo. El resto también fueron rescatados por otros medios y estás dos bebés, casualmente las que estaban en peores condiciones, se quedaban allí a su suerte. En cuanto recibimos el aviso abrimos nuestras puertas para ellas. \n\nEn el caso de Selva, su ojito llegó con una cicatriz en la córnea, valorado por nuestra oftalmologa como una antigua úlcera. Ha tenido tratamiento durante unas semanas y ya le han dado el alta! \n\nDespués de unas semanas de cuarentena, con hidratación, suplementos para coger peso, comida específica para babycat y una buena desparasitación podemos decir que hemos superado la primera etapa y ambas están a salvo. \n\nSelva tiene un carácter muy extrovertido, es muy activa y juguetona. Tolera cualquier tipo de presencia, incluso de otros gatos adultos y su evolución está siendo buenísima.\nEn cuanto cumplan los 2.5 meses, continuarán su protocolo veterinario para buscar su posterior adopción 💗 \n\nPor favor, tenemos dos camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏\n\n🌸PayPal myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '17',
    name: 'Irati',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrada',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20260618-WA0016.jpg',
    description: 'Irati es una hermosa bebé sobreviviente rescatada de debajo de un coche. Una pequeña muy calmada e introvertida. Únicamente se irá en adopción conjunta con su hermana Selva.',
    story: 'Aceptamos hace unas semanas a estas 2 hermanitas que aparecieron junto a sus otros 4 hermanos debajo de un coche en un pueblo de Toledo. El resto también fueron rescatados por otros medios y estás dos bebés, casualmente las que estaban en peores conditions, se quedaban allí a su suerte. En cuanto recibimos el aviso abrimos nuestras puertas para ellas. \n\nEn el caso de Irati, su ojito llegó con una infección e inflamación que le ha producido una perforación. ⚠️En las imágenes podéis ver todo el proceso que ha llevado en su recuperación y aunque obviamente con ese ojito no tendrá nada de visión, tras la visita en oftalmología, nos han confirmado que no tendrá complicaciones futuras y podrá vivir con total normalidad sin necesidad de enuclearlo. A día de hoy el ojito ha creado un tapón de fbrina y la córnea ha epitelizado por encima.\n\nDespués de unas semanas de cuarentena, con hidratación, suplementos para coger peso, comida específica para babycat y una buena desparasitación podemos decir que hemos superado la primera etapa y están a salvo. \n\nIrati tiene un carácter muy calmado e introvertido. Dado que es la que más ha sufrido, aún se encuentra constantemente alerta y le cuesta confiar. Poquito a poco los avances son excelentes 💪🏻 En cuanto cumplan los 2.5 meses, continuarán su protocolo veterinario para buscar su posterior adopción 💗 \n\nPor favor, tenemos dos camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏\n\n🌸PayPal myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '18',
    name: 'Ona',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '3 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/P1490534.jpg',
    description: 'Hace casi tres meses, Ona y su hermana aparecieron abandonadas en una caja de cartón con tan solo 5 días de vida. Ahora están sanas, fuertes y en adopción.',
    story: 'Ona en adopción 🐾🤍\n\nHace casi tres meses, Ona y su hermana, aparecieron junto a sus dos hermanos con tan solo 5 días de vida en una caja de cartón, abandonados 💔. La que ha sido su familia de acogida se ha pegado el currazo de sacarlos adelante a todos ellos y adoptar a sus hermanos 😍 ellos han hecho todo lo difícil y ahora estas dos han pasado a formar parte de nuestra familia para encontrar a la mejor de las familias. Están sanas, han pasado por el veterinario para hacer todo el protocolo básico y están EN ADOPCIÓN. \n\nSexo: hembras ♀️\nEdad: 3 meses\nTest FELV/FIV: negativas\nDesparasitación: completa\nChip: sí \nVacunas: trivalente \n\nPor favor, tenemos tres camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏 \n\n🤍PayPal: myanimalsm@gmail.com \n🤍Bizum: 04872 (sección donativos de la app) \n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064 \n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '19',
    name: 'Brisa',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '3 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/P1490559.jpg',
    description: 'Hace casi tres meses, Brisa y su hermana Ona aparecieron abandonadas en una caja de cartón con tan solo 5 días de vida. Ahora están sanas, fuertes y en adopción.',
    story: 'Brisa en adopción 💕 \n\nHace casi tres meses, Brisa y su hermana Ona, aparecieron junto a sus dos hermanos con tan solo 5 días de vida en una caja de cartón, abandonados 💔. La que ha sido su familia de acogida se ha pegado el currazo de sacarlos adelante a todos ellos y adoptar a sus hermanos 😍 ellos han hecho todo lo difícil y ahora estas dos han pasado a formar parte de nuestra familia para encontrar a la mejor de las familias. Están sanas, han pasado por el veterinario para hacer todo el protocolo básico y están EN ADOPCIÓN. \n\nSexo: hembras ♀️\nEdad: 3 meses\nTest FELV/FIV: negativas\nDesparasitación: completa\nChip: sí \nVacunas: trivalente \n\nPor favor, tenemos tres camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏 \n\n🤍PayPal: myanimalsm@gmail.com \n🤍Bizum: 04872 (sección donativos de la app) \n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064 \n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '20',
    name: 'Lorca',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '4.5 meses',
    gender: 'Macho',
    size: '2.5 kg',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-09-06-16-26-16-60_1c337646f29875672b5a61192b9010f9%7E3.jpg',
    description: 'Lorca es un bebechín de 4.5 meses rescatado en una colonia de Toledo. Altamente sociable y juguetón, busca un hogar definitivo con más compis felinos.',
    story: 'Lorca es un bebechín que nos dejaron/apareció en una de nuestras colonias controladas de Toledo solito 🥹 Llegó fastidiado de la barriguita y con parásitos internos, nada que con una buena pauta de desparasitación y probióticos no se pudiera solucionar 🤞🏻 Además, continúa aprendiendo a autorregularse con la comida, porque venía con mucha ansiedad por comer (típico de gatos que han vivido en la calle)💔\n\nDurante su estancia en la casa de acogida, nos hemos dado cuenta de que es un gato altamente sociable y juguetón, busca muchísimo el contacto felino y no le gusta estar solito 🥲 Así pues, en su futuro hogar deberá haber más compis gatunos para que pueda relacionarse y crecer equilibradamente, se lo hemos prometido ❤️\n\nHoy hemos tenido la última revisión y celebramos que todo ha salido genial 🥳🥳 es negativo a leucemia e inmunodeficiencia, tiene un peso correcto y se le ha vacunado, solo falta encontrar su hogar definitivo 🤭 ¿Te animas?\n\nSexo: macho ♂️\nEdad: 4.5 meses\nDesparasitación: completa \nTest FELV/FIV: negativo \nVacuna: trivalente \nChip: si\n\nPuedes ayudarnos con sus gastos mediante:\n\n💕PayPal myanimalsm@gmail.com\n💕Bizum: 04872 (sección donativos de la app)\n💕Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Adoptado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '21',
    name: 'Luci',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '2.5 meses',
    gender: 'Hembra',
    size: '1.3 kg',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-09-06-16-37-05-56_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Dentro de nada se cumple un mes desde la llegada de Luci y podremos continuar su protocolo veterinario antes de su puesta en adopción. Es increíblemente sociable, ronroneadora y cariñosa.',
    story: 'Dentro de nada se cumple un mes desde la llegada de Luci Lucifer y podremos continuar su protocolo veterinario antes de una puesta en adopción 💉🩸\n\nLa bebe llegó plagada de parásitos internos y externos que han sido complicados de erradicar, incluso ahora seguimos haciendo tiempo para poder hacer su último análisis coprológico y verificar que no queda nada más ahí dentro, esperemos 🤞\n\nEs una gata increíblemente sociable, ronroneadora, cariñosa... estamos seguras de que también lo será con el resto de gatos, a los que está deseando de conocer en cuanto finalice la cuarentena y el protocolo veterinario 😍\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️\n\nNecesitamos ayuda para cubrir sus gastos veterinarios, ¿quieres amadrinarla? Escríbenos 💌\n\n🌞PayPal myanimalsm@gmail.com\n🌞Bizum: 04872 (sección donativos de la app)\n🌞Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Pronto en adopción',
    secondaryStatuses: ['En Adopción'],
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '22',
    name: 'Nikki',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '1 mes',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: NIKKI_MYSTERY_IMAGE,
    description: 'Nikki es una preciosa gatita de 1 mes. Ya no es lactante, come sólida y crece llena de energía. La presentaremos próximamente con todas sus fotos.',
    story: 'Nikki es una preciosa gatita de 1 mes de vida que se encuentra bajo la protección y el cariño de APA Myanimalsm 🐾✨\n\n¡Buenas noticias! Nikki come su comida sólida de cachorrito con un apetito estupendo, es muy curiosa y juguetona, y disfruta de los mimos en su casa de acogida temporal.\n\n🩺 Estado veterinario:\nActualmente está desparasitada y el resto de pautas (vacunas, test FeLV/FIV, chip y esterilización) quedan pendientes para cuando complete su desarrollo y alcance la edad y peso adecuados.\n\n🤫 ¡Presentación próximamente!\nAún no está abierta su adopción oficial ni disponemos de su reportaje de fotos para que disfrutéis de la intriga mientras sigue creciendo sana y fuerte. Muy pronto os la presentaremos con su reportaje fotográfico al completo.\n\nPuedes seguir sus avances o colaborar apadrinándola para ayudar con su alimentación de crecimiento y cuidados ❤️',
    status: 'Pronto en adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '23',
    name: 'Tofu',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: TOFU_MYSTERY_IMAGE,
    description: 'Tofu es una adorable gatita hembra de 2 meses. Aún no está en adopción y la presentaremos próximamente en cuanto complete su protocolo.',
    story: 'Tofu es una dulce gatita de apenas 2 meses de edad que se encuentra bajo la tutela y los mimos de APA Myanimalsm 🐾✨\n\nActualmente está feliz y cuidada con todo el cariño en una casa de acogida temporal, creciendo día a día con mucha vitalidad y dulzura.\n\n🩺 Estado veterinario:\nPor el momento únicamente está desparasitada y el resto de pautas quedan pendientes para cuando crezca. En cuanto tenga el peso y la edad adecuados por protocolo, se programarán sus vacunas, test de leucemia e inmunodeficiencia, microchip y esterilización.\n\n🤫 ¡Presentación próximamente!\nAún no está abierta su adopción oficial ni disponemos de su reportaje de fotos para que disfrutéis de la intriga mientras crece sanita. Muy pronto os la presentaremos con su reportaje fotográfico completo.\n\n¡Puedes seguir sus progresos o apadrinarla para colaborar con su manutención y cuidados! ❤️',
    status: 'Pronto en adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '24',
    name: 'Évole',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: EVOLE_MYSTERY_IMAGE,
    description: 'Évole es una preciosa gatita hembra de 2 meses. Aún no está en adopción y la presentaremos próximamente en cuanto complete su protocolo.',
    story: 'Évole es una entrañable gatita de apenas 2 meses de vida que acaba de llegar bajo el cuidado y la protección de APA Myanimalsm 🐾✨\n\nSe encuentra en una casa de acogida temporal donde recibe todo el cariño, calor y bienestar necesarios para crecer alegre, sana y juguetona.\n\n🩺 Estado veterinario:\nActualmente cuenta con su pauta de desparasitación al día, quedando pendientes (Pte) sus vacunas, microchip, test FeLV/FIV y esterilización para cuando alcance la edad y desarrollo pertinentes.\n\n🤫 ¡Presentación próximamente!\nAl igual que Nikki y Tofu, aún no la vamos a presentar oficialmente ni disponemos de sesión de fotos pública para mantener la intriga mientras crece y se pone a punto. ¡Muy pronto os la mostraremos con su reportaje fotográfico completo!\n\nPuedes seguir sus avances o colaborar apadrinándola para ayudar con sus cuidados diarios ❤️',
    status: 'Pronto en adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Laura',
    role: 'Presidenta y Fundadora',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/1775758808391%7E2.png',
    bio: 'Apasionada por los animales desde niña, fundé APA Myanimalsm a los 23 años tras años de experiencia en rescates y gestión de colonias. Hoy, junto a un equipo que comparte mis ideales, trabajamos cada día para superar retos y recompensar nuestro esfuerzo salvando vidas. Mi misión es dar una segunda oportunidad a todo aquel animalito que lo necesite.'
  },
  {
    id: '2',
    name: 'Reyes',
    role: 'Vicepresidenta',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Reyes.jpg',
    bio: 'No concibo un hogar sin un gato ronroneando cerca. Mi labor en la asociación me permite dar todo de mí por ellos, encontrando en la protección animal un refugio frente a lo peor de la sociedad. Estoy orgullosa de formar parte de este equipo imparable que salva cada vez más vidas.'
  },
  {
    id: '3',
    name: 'Angelines',
    role: 'Secretaria',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Angelines.jpg',
    bio: 'Especialista en rescates complejos, desde alcantarillas hasta ríos, mi pasión por los animales es mi motor diario. He dedicado años a aprender sobre capturas y socialización porque mi compromiso con ellos no tiene límites. Siempre digo lo mismo: aunque yo trabaje para salvarlos, al final son ellos quienes siempre me salvan a mí.'
  },
  {
    id: '4',
    name: 'Christian',
    role: 'Tesorero',
    imageUrl: 'https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris.jpg',
    bio: 'La gestión de la burocracia, gestión económica y la administración de la asociación, es ayuda que quizás no se ve desde fuera. Además, me considero una pieza fundamental de nuestra red de casas de acogida, ofrezco mi hogar como refugio seguro, demostrando que el trabajo de protección animal se hace tanto detrás de una pantalla, en la calle y desde el salón de mi casa.'
  }
];

export const DONATION_METHODS: DonationMethod[] = [
  {
    id: '2',
    name: 'Bizum',
    description: 'Donación inmediata y sencilla desde tu móvil.',
    iconName: 'Smartphone',
    details: 'Código de envío: 04872',
    color: 'bg-blue-500'
  },
  {
    id: '3',
    name: 'Transferencia',
    description: 'Realiza una transferencia bancaria directa a nuestra cuenta.',
    iconName: 'Landmark',
    details: 'IBAN: ES69 0073 0100 5205 0607 9064',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'PayPal',
    description: 'Dona de forma segura a través de PayPal, con tarjeta o saldo.',
    iconName: 'CreditCard',
    actionUrl: 'https://paypal.me/myanimalsm',
    details: 'myanimalsm@gmail.com',
    color: 'bg-indigo-500',
    note: 'Marcar el envío como Amigos y Familiares para recibir el importe íntegro, sin retenciones'
  },
  {
    id: '5',
    name: 'Coral',
    description: 'Colabora de forma sencilla a través de Coral.',
    iconName: 'Heart',
    actionUrl: 'https://coral.to/apa-myanimalsm',
    color: 'bg-rose-400'
  },
  {
    id: '1',
    name: 'Teaming',
    description: 'Ayúdanos con solo 1€ al mes. Una pequeña aportación que hace una gran diferencia.',
    iconName: 'Users',
    actionUrl: 'https://www.teaming.net/asociacionmyanimalsm',
    color: 'bg-teal-500'
  }
];