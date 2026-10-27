import { Animal, TeamMember, DonationMethod } from './types';
import { RATONA_MYSTERY_IMAGE } from './data/mysteryCat';

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
    description: 'Susi es una de las tres hermanitas rescatadas de una parcela. Una bebé con un carácter muy extrovertido y explorador. ¡Felizmente adoptada! ❤️',
    story: 'Como sabéis, la época de camadas es el terror para toda protectora. Actualmente, la mayoría de casos no provienen de las propias colonias felinas ferales que controlamos, eso es un mito, los casos que se presentan vienen por la irresponsabilidad de los "propietarios" que NO esterilizan a sus gatas (y encima las dejan salir al exterior). La gran mayoría son camadas no deseadas y su "solución" es la brillante idea de dejarlos debajo de un coche, en una caja o bolsa en la basura o no permiten que la madre de a luz en casa y la dejan a su suerte para que se busque la vida😡. \n\n¿Sabéis cuántos bebés no llegan a contarlo? Muchísimos mueren sin ser rescatados por asfixia, infección, hambre o la propia violencia humana. ¿Sabéis cuál es la solución más sencilla? ESTERILIZAR. Sí, esterilizar es uno de los mayores actos de amor que podrás hacer por tu peludo y para apoyar el cambio.\n\nNow bien, aceptamos hace unas semanas a estos 3 hermanitos que estaban en una parcela solitos: Tomás, Susi y Nora. Tuvimos que hacer malabares porque no es nuestro mejor momento y tampoco contábamos con casas de acogida con experiencia en bebés. Finalmente, gracias a las que siempre están ahí, se pudo aceptar el caso y actuar de inmediato porque venían muy muy débiles y Tomas casi no lo cuenta.\n\nDespués de unas semanas de cuarentena, con hidratación, suplementos para coger peso y comida apta para babycat, podemos decir que hemos superado la primera etapa de estos bebés 🎉 Susi tiene un carácter muy extrovertido y explorador, la hermana más fuerte de la camada💪🏻 En cuanto cumplan los 2.5 meses, empezarán su protocolo veterinario para buscar su posterior adopción 💗\n\n🎉 ¡ADOPTADA!\nSusi ya ha encontrado a su familia definitiva y disfruta de su merecido final feliz ❤️\n\nPor favor, tenemos dos camadas bajo nuestra tutela, te necesitamos para poder sacarlos adelante, echanos una patita 🙏\n\n🌸PayPal myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️',
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
    breed: 'Común Europeo / Capa: Tricolor',
    age: '2.5 meses',
    gender: 'Hembra',
    size: '1.3 kg',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-09-06-16-37-05-56_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Luci es una gatita increíblemente sociable, ronroneadora y cariñosa. ¡Tiene todo su protocolo veterinario al día y ya está felizmente adoptada! ❤️',
    story: 'Luci Lucifer es una bebé todoterreno: sociable, súper ronroneadora, cariñosa y muy juguetona 😍\n\nLlegó con parásitos internos y externos, pero tras su cuarentena y cuidados en casa de acogida lo ha superado todo con sobresaliente. ¡Ya tiene todo su protocolo veterinario al día (desparasitada, test FeLV/FIV negativo, vacunada y con microchip)! Únicamente queda pendiente su esterilización cuando cumpla la edad recomendada.\n\n🎉 ¡ADOPTADA!\nLuci Lucifer ya disfruta de su final feliz junto a su familia definitiva ❤️\n\nPuedes seguir colaborando con el resto de nuestros casos mediante donativo o apadrinamiento 💌\n\n🌞PayPal myanimalsm@gmail.com\n🌞Bizum: 04872 (sección donativos de la app)\n🌞Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
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
    id: '22',
    name: 'Nikki',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Siamés',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20260907-WA0007.jpg',
    description: 'Nuestra ratona siamesa de 2 meses rescatada en Toledo. ¡Adoptada y felizmente en su nuevo hogar!',
    story: 'Nuestra ratona apareció a finales de agosto en un pueblo de Toledo sola, sin mami ni hermanos y, por su estado físico y comportamiento con nosotras desde el primer momento, todo apunta a un abandono más. Esta gata había estado en un hogar tan solo unas horas antes de encontrarla 💔.\n\nLlegó siendo una bebita pachucha con mucho susto y, después de todo este tiempo en su acogida, se ha convertido en una belleza sanita que está a punto de finalizar su protocolo veterinario. En cuanto esté lista, valoraremos todas las solicitudes para dar con la mejor de las familias 😻 Es una gatita súper loquita, muy demandante de la compañía felina y altamente mimosa y sociable: un bollito de crema pa comérsela a besos ☺️🥐\n\nDesde su bienvenida a la protectora, hemos recibido más de 40 solicitudes de adopción para ella, ojalá que todxs aquellxs que estáis interesadxs en ella no lo sea porque es una bebé siamesa. Asimismo, esperamos que tengáis las mismas ganas de adoptar a cualquier otro bebé que tengamos si no sois elegidos como hogar para Nikki😅\n\nAprovechamos este post para agradecer enormemente a las nuevas casas de acogida que abren sus hogares a esta experiencia, como la de Nikki ❤️🩹 Sin vosotrxs nada de esto sería posible. Gracias por vuestro amor, cariño y cuidado incondicional hacia ellos 🫂\n\nNikki es una gata sana y, aunque ha salido + a inmunodeficiencia felina, eso no impide que tenga una vida totalmente plena, normal y acompañada de otros gatos❤️🩹\n\nSexo: hembra ♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativa a leucemia y + a inmunodeficiencia felina\nVacunas: trivalente\nChip: sí\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️\n\nPuedes ayudarnos con sus gastos mediante:\n🌸PayPal: myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Adoptada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Positivo (FIV)',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '24',
    name: 'Marimar',
    species: 'Gato',
    breed: 'Común Europeo (Carey)',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-09-09-18-43-09-42_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Esta salerosa carey sevillana que se roba el show allá por donde va ya tiene su protocolo veterinario al día y ¡ha sido felizmente adoptada! ❤️',
    story: 'Teníamos muchísimas ganas de presentaros a esta carey sevillana que se roba el show allá por donde va🤭🤭 \n\nMarimar (en Sevilla la llamaban Évole) fue un golpe de suerte: apareció con 10 dias de vida tirada al lado de una piscina, ni rastro de mamá o hermanos, solo ella siendo una lactante con los ojitos aún sin abrir 💔 Sin embargo, allí estaba @noacow yendo sin pensárselo a recogerla. Gracias a ella y a su red de acogidas, Marimar tuvo una segunda oportunidad, siendo una bebé criada con mucho amor y con muchas ganas de vivir ✨ *podéis ver el inicio de su historia en el perfil de @noacow y echarle una patita para los otros casos que lleva sola*\n\nAhora que ha cumplido los 2 meses, Marimar ha viajado como una señorita carey desde Sevilla a Madrid para encontrar a su familia ideal. Desde ahora, pasa a formar parte de Apa Myanimalsm donde nos está deleitando con su arte y chispa (es una gata muuuu salá) mientras completaba su protocolo veterinario ❣️\n\nYa sabéis que las gatas careys son mágicas, traen suerte y esta niña la va repartiendo allá por donde va 🧡 Es un rayito de sol, super juguetona, activa y apta con gatos y perros, no te la puedes perder 😂\n\n🎉 ¡ADOPTADA!\nMarimar ya disfruta de su final feliz junto a su familia definitiva ❤️\n\nEdad: 2 meses\nSexo: hembra ♀️\nDesparasitación: completa (al día) \nTest FELV/FIV: negativo \nVacunas: al día \nChip: sí \nEsterilización: pendiente (se realizará a los 6 meses)\n\nPuedes ayudarnos con el resto de nuestros casos mediante:\n💌PayPal myanimalsm@gmail.com\n💌Bizum: 04872 (sección donativos de la app)\n💌Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
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
    id: '25',
    name: 'Tom Holland',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrada',
    age: '2 años',
    gender: 'Macho',
    size: 'Mediano',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG20261003150322.jpg',
    description: 'Tom Holland apareció en una piscina municipal escalando como un spidercat en busca de mimos. Es un gato joven de 2 años, mansísimo, calmado y ¡oficialmente en adopción!',
    story: 'Vamos a poneros en situación: finales de agosto, en las instalaciones de la piscina municipal, aparece con su personalidad arrolladora un gato CASERO llorando suplicando atención. Aunque estaba desnutrido, no quería comer ni beber, solo caricias y ronronear bien fuerte 😭\n\nNo hace falta ser muy experto para saber que los gatos con ese comportamiento tienen un pasado hogareño. ¿Fue un abandono aprovechando el momento? ¿Se escapó? ¿Era gato paseante? Nunca lo sabremos puesto que nadie lo ha reclamado, tampoco tenía chip, aunque no nos sorprende... Lo que sí es evidente es que llevaba bastante fuera de su casa y que se moría de ganas por una buena ración de mimos. El pobre estaba tan loco por conseguir contacto humano que se dedicaba a trepar y escalar como un spidercat los accesos a la piscina 💔 Y con motivo de esa hazaña, entra a Apa Myanimalsm llamándose Tom Holland 🤭\n\nDespués de finalizar su cuarentena en una acogida temporal, ha pasado hoy por el vet para una última revisión y es que el tío está perfecto ❤️❤️❤️ Por cómo tiene de bien la boquita y su tamaño, le calculan unos 2 años aproximadamente, es un gato joven. Además, es mansísimo, calmado, apto con otros gatos y perros (con buenas presentaciones) y con muchísimas ganas de seguir disfrutando de una familia😸\n\n⚠️ Sabemos que con tanto michi bebe de por medio será un poquito difícil que te fijes en el, pero, de verdad, dale una oportunidad a un gato adulto y tanto él como tú lo agradeceréis toda la vida ❤️🩹 ¡ESCRÍBENOS, CORRE!\n\nSexo: macho ♂️\nEdad: 2 años \nDesparasitación: completa \nTest FELV FIV: negativo \nEsterilización: sí \nVacuna: trivalente \nChip: sí \n\nPuedes ayudarnos con sus gastos mediante:\n🥐PayPal myanimalsm@gmail.com\n🥐Bizum: 04872 (sección donativos de la app)\n🥐Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
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
    id: '26',
    name: 'Mariah Carey',
    species: 'Gato',
    breed: 'Común Europeo (Carey)',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-04-15-33-02-19_1c337646f29875672b5a61192b9010f9%7E2.jpg',
    description: 'Mariah Carey es una hermosa y cariñosa gatita carey de 2 meses rescatada en Ciudad Real. ¡Sanísima y oficialmente en adopción!',
    story: 'Parece que la suerte y la magia de las gatas careys está de nuestro lado💫\n\nEsta bolita con ojazos viene de un CES (control de colonias felinas) de Ciudad Real. La persona que dió el aviso se encargó de esterilizar a su mamá y los gatos de la zona, pero quedaba esta bebita con un alto potencial para ser sociable y futura gata manta🥹. De modo que, gracias a las adopciones recientes, pudimos hacer hueco y traerla directamente con nosotras ❣️\n\nLa micha ya está más que adaptada a la vida en un hogar. Disfruta muchísimo de la compañía felina, le encanta jugar con otros gatos, dormir hecha un burrito las siestas otoñales y se deja mimar de lo lindo por su acogida ❤️🩹\n\nMariah Carey ha tenido su última revisión hoy, después de finalizar su cuarentena y nos confirman que: ¡¡está saniiiiiisima!! Esto significa que ya está oficialmente en adopción 🎉🎉 (aunque no se irá a su casa definitiva hasta que finalice Halloween...). ¿Te has enamorado? ¡Escríbenos! 💌\n\nSexo: hembra ♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: sí, negativo\nVacuna: sí\nChip: sí\n\n⚠️ IMPORTANTE: se dará primerísima prioridad a aquellas familias que opten por la adopción conjunta y, en segundo lugar, las adopciones individuales siempre que en casa haya otro compi felino⚠️\n\nPuedes ayudarnos con sus gastos mediante:\n🎀PayPal: myanimalsm@gmail.com\n🎀Bizum: 04872 (sección donativos de la app)\n🎀Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'En Adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '27',
    name: 'Cheddar',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrado Naranja',
    age: '2 meses',
    gender: 'Macho',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20261002-WA0093%7E3.jpg',
    description: 'Cheddar y Bambi se dan en adopción conjunta. Dos preciosos bebitos inseparables que se adoran y buscan un hogar definitivo juntos.',
    story: 'Cheddar y Bambi en adopción conjunta 🧀🥥✨\n\nCheddar (de la camada "Tres salsas") y el pequeño Bambi han creado un vínculo súper especial e inseparable. Duermen abrazados, juegan todo el día y se dan una seguridad inmensa el uno al otro ❤️‍🩹\n\nPor este motivo, se entregarán juntos en adopción conjunta obligatoria para que crezcan felices y acompañados toda la vida.\n\nCheddar es un machito de 2 meses, atigrado naranja, con su protocolo veterinario completo y test FELV/FIV negativo. Es un gatito cariñoso, noble y muy juguetón. ¡Junto a Bambi forman un dúo lleno de ternura y alegría!\n\nSexo: macho ♂️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacunas: sí\nChip: sí\n\nPuedes ayudarnos con sus gastos mediante:\n🍟PayPal: myanimalsm@gmail.com\n🍟Bizum: 04872 (sección donativos de la app)\n🍟Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n¡Escríbenos para darles un hogar a este par de bombones! 💌',
    status: 'En Adopción',
    bondedWithId: '37',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '28',
    name: 'Brava',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-25-13-07-07-99_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Brava es la princesa de la camada "Tres salsas" (2 meses). ¡Reservada y con su protocolo veterinario completo y negativo!',
    story: 'Brava reservada 🔥\n\nContactaron con nosotras a finales de septiembre porque habían atrop3llado a una mamá gata 💔 y esta había dejado a sus tres retoños viviendo entre escondites y rodeados de peligros 🥹 Los tres bebés estaban bastante desnutridos, con un miedo horrible a las personas y con los ojitos bastante pochos.\n\nLlegamos a tiempo y los tres se reubicaron de inmediato en una de nuestras acogidas aprendiendo a perder el miedo y animándose, cada día a más, a jugar y a vivir tranquilos 😍 Han finalizado su tratamiento y tienen todo su protocolo veterinario al día, con test FELV/FIV negativo. ¡Brava ya está reservada!\n\n💗 Les hemos prometido una vida llena de amor, con muchísimas latitas y churus para que no pasen hambre nunca más, ¡ayúdanos a conseguirlo!\n\nSexo: hembra ♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacunas: sí\nChip: Sí\n\nPuedes ayudarnos con sus gastos mediante:\n🍟PayPal: myanimalsm@gmail.com\n🍟Bizum: 04872 (sección donativos de la app)\n🍟Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Reservada',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '29',
    name: 'Alioli',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Atigrada',
    age: '2 meses',
    gender: 'Macho',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-25-12-54-17-36_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Alioli forma parte de la camada "Tres salsas" (2 meses). ¡Reservado y con su protocolo veterinario completo y negativo!',
    story: 'Alioli reservado 🍟\n\nContactaron con nosotras a finales de septiembre porque habían atrop3llado a una mamá gata 💔 y esta había dejado a sus tres retoños viviendo entre escondites y rodeados de peligros 🥹 Los tres bebés estaban bastante desnutridos, con un miedo horrible a las personas y con los ojitos bastante pochos.\n\nLlegamos a tiempo y los tres se reubicaron de inmediato en una de nuestras acogidas aprendiendo a perder el miedo y animándose, cada día a más, a jugar y a vivir tranquilos 😍 Han finalizado su tratamiento y tienen todo su protocolo veterinario al día, con test FELV/FIV negativo. ¡Alioli ya está reservado!\n\n💗 Les hemos prometido una vida llena de amor, con muchísimas latitas y churus para que no pasen hambre nunca más, ¡ayúdanos a conseguirlo!\n\nSexo: macho ♂️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacunas: sí\nChip: Sí\n\nPuedes ayudarnos con sus gastos mediante:\n🍟PayPal: myanimalsm@gmail.com\n🍟Bizum: 04872 (sección donativos de la app)\n🍟Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Reservado',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '30',
    name: 'Daiquiri',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanca (Sordo)',
    age: '2 meses',
    gender: 'Macho',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-25-12-47-55-14_965bbf4d18d205f782c6b8409c5773a4.jpg',
    description: 'Daiquiri y Ron están en adopción conjunta. Dos preciosos hermanitos blancos (sordos) de 2 meses rescatados en Toledo, sanitos y negativos.',
    story: 'Esta camada de 6 fue rescatada de una parcela en un pueblo de Toledo. Se hizo CES con su mami y los bebés fueron sociabilizados y estabilizados para abandonar una vida de peligros en la calle y pasar a ser los bebés mimados de sus nuevas casas.\n\nSe repartieron 3 y 3 en dos familias de acogida. Por un lado el príncipe y princesas Disney 👑 y por otro lado los aquí presentes en el post ☝️😻\n\nTras varias semanas de manoseos, tiempo y dedicación ya podemos decir que todos han pasado de ser unos mini leoncitos feralitos 🦁 a unos mimosos y tiernos gatitos, sociabilizados por completo y disfrutando de lo que es una vida de verdad, sin miedos, sin traumas ❤️🩹\n\n¡Han finalizado su cuarentena y protocolo veterinario con éxito y son totalmente negativos a FELV/FIV! Ya están oficialmente EN ADOPCIÓN 🎉🐾\n\nRon y Daiquiri son totalmente sordos, así que se marcharán en adopción conjunta inseparable ya que se apoyan mutuamente en el día a día y no entienden los límites que pueden marcar otros gatos.\n\nSexo: macho ♂️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacunas: sí\nChip: sí\n\nPuedes ayudarnos con sus gastos mediante:\n🤍PayPal: myanimalsm@gmail.com\n🤍Bizum: 04872 (sección donativos de la app)\n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n¡Escríbenos para darles el hogar de sus vidas! 💌',
    status: 'En Adopción',
    bondedWithId: '31',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '31',
    name: 'Ron',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanca (Sordo)',
    age: '2 meses',
    gender: 'Macho',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-05-21-36-02-83_965bbf4d18d205f782c6b8409c5773a4.jpg',
    description: 'Ron y Daiquiri están en adopción conjunta. Dos preciosos hermanitos blancos (sordos) de 2 meses rescatados en Toledo, sanitos y negativos.',
    story: 'Esta camada de 6 fue rescatada de una parcela en un pueblo de Toledo. Se hizo CES con su mami y los bebés fueron sociabilizados y estabilizados para abandonar una vida de peligros en la calle y pasar a ser los bebés mimados de sus nuevas casas.\n\nSe repartieron 3 y 3 en dos familias de acogida. Por un lado el príncipe y princesas Disney 👑 y por otro lado los aquí presentes en el post ☝️😻\n\nTras varias semanas de manoseos, tiempo y dedicación ya podemos decir que todos han pasado de ser unos mini leoncitos feralitos 🦁 a unos mimosos y tiernos gatitos, sociabilizados por completo y disfrutando de lo que es una vida de verdad, sin miedos, sin traumas ❤️🩹\n\n¡Han finalizado su cuarentena y protocolo veterinario con éxito y son totalmente negativos a FELV/FIV! Ya están oficialmente EN ADOPCIÓN 🎉🐾\n\nRon y Daiquiri son totalmente sordos, así que se marcharán en adopción conjunta inseparable ya que se apoyan mutuamente en el día a día y no entienden los límites que pueden marcar otros gatos.\n\nSexo: macho ♂️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacunas: sí\nChip: sí\n\nPuedes ayudarnos con sus gastos mediante:\n🤍PayPal: myanimalsm@gmail.com\n🤍Bizum: 04872 (sección donativos de la app)\n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n¡Escríbenos para darles el hogar de sus vidas! 💌',
    status: 'En Adopción',
    bondedWithId: '30',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '32',
    name: 'Malibú',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanca',
    age: '2 meses',
    gender: 'Macho',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-05-21-36-50-25_965bbf4d18d205f782c6b8409c5773a4.jpg',
    description: 'Malibú es una bolita blanca de 2 meses rescatada en Toledo. Un cachito de pan super mimoso, oficialmente en adopción.',
    story: 'Malibú en adopción 🍹\n\nEsta otra bolita blanca obviamente también pertenece a la camada de 6 bebés que capturamos de entre los escombros de una parcela en un pueblo de Toledo. Con la mamá, como era feral, hicimos CES para que pueda vivir tranquila y sin más camadas. Asimismo, a los pequeños los dividimos en dos familias de acogida: por un lado Ariel, Aurora y Bambi y por otro lado Daiquiri, Ron y Malibú 🤍🖤\n\nDurante toda su cuarentena hemos estado trabajando en su sociabilización y confianza, con mucha paciencia, calma y mimos porque venían con mucho rechazo hacia el ser humano 💔 Y, aunque algunos hermanos eran más extrovertidos que otros, ha llegado el momento de decir que lo hemos conseguido, son 6 bebés buenísimos, ultra sociables, mimosos y cariñosos 😻\n\nMalibú llegó siendo uno de esos bebés más tímidos y feralitos de la camada pero hoy en día es un cachito de pan. Adora estar encima de tí, los mimos y caricias y es increíble la paz que trasmite este gato ❤️🩹 Le encanta la convivencia con otros y como buen bebé que necesita referentes felinos, daremos máxima prioridad a familias que opten por la adopción conjunta con otro bebé o aquellos que ya tengan otros gatos en casa 🏡\n\nEn unos días finalizan su protocolo veterinario, ¿te animas a darle un hogar? ¡Escríbenos!💌\n\nPuedes ayudarnos con sus gastos mediante:\n🤍PayPal: myanimalsm@gmail.com\n🤍Bizum: 04872 (sección donativos de la app)\n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'En Adopción',
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '33',
    name: 'Tulipán',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Naranja',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20260920-WA0038.jpg',
    description: 'Amapola y Tulipán se dan en adopción conjunta. Dos preciosas hermanitas rescatadas de 2 meses, inseparables y llenas de amor.',
    story: 'Amapola y Tulipán en adopción conjunta 💐\n\n¡Son dos gatas de anuncio, no podíamos evitar el subir otro post de ellas! 💖\n\nNuestras dos flores son el último caso que hemos aceptado este mes. A ambas hermanitas las encontraron en una finca solitas rozando el mes de vida, se esperó el tiempo prudencial, pero la mamá no aparecía 💔 Al ser una zona con perros sueltos y ver que sus ojitos estaban bastante malitos, se decidió sacarlas de ahí y cuidarlas en un lugar seguro.\n\nHasta ahora, su rescatista se ha desvivido por estas dos flores 😍 Con ella, durante la cuarentena, han sanado, han crecido, han cogido peso y han sociabilizado de lo lindo ❤️🩹 Gracias siempre a esas personas que no miran hacia otro lado y rescatan cueste lo que cueste🙏🏻❤️\n\nAhora que ya tienen los dos mesecitos, pasan a formar parte de Apa Myanimalsm donde nos encargaremos de finalizar sus protocolos veterinarios y de buscar a una familia perfecta que apueste por la adopción conjunta 💗\n\nQueremos intentarlo, son dos hermanitas super unidas, dos flores que se merecen una vida juntas 💐 ¿Te animas a dar el paso y comértelas a besos? ¡Escríbenos!💌\n\nSexo: hembra ♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacuna: sí\nChip: sí\n\nPuedes ayudarnos con sus gastos mediante:\n🌷PayPal: myanimalsm@gmail.com\n🌷Bizum: 04872 (sección donativos de la app)\n🌷Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Reservada',
    bondedWithId: '34',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '34',
    name: 'Amapola',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Carey',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://github.com/myanimalsm-apa/APA.-Myanimalsm-/blob/main/IMG-20261002-WA0087.jpg?raw=true',
    description: 'Amapola y Tulipán se dan en adopción conjunta. Dos preciosas hermanitas rescatadas de 2 meses, inseparables y llenas de amor.',
    story: 'Amapola y Tulipán en adopción conjunta 💐\n\n¡Son dos gatas de anuncio, no podíamos evitar el subir otro post de ellas! 💖\n\nNuestras dos flores son el último caso que hemos aceptado este mes. A ambas hermanitas las encontraron en una finca solitas rozando el mes de vida, se esperó el tiempo prudencial, pero la mamá no aparecía 💔 Al ser una zona con perros sueltos y ver que sus ojitos estaban bastante malitos, se decidió sacarlas de ahí y cuidarlas en un lugar seguro.\n\nHasta ahora, su rescatista se ha desvivido por estas dos flores 😍 Con ella, durante la cuarentena, han sanado, han crecido, han cogido peso y han sociabilizado de lo lindo ❤️🩹 Gracias siempre a esas personas que no miran hacia otro lado y rescatan cueste lo que cueste🙏🏻❤️\n\nAhora que ya tienen los dos mesecitos, pasan a formar parte de Apa Myanimalsm donde nos encargaremos de finalizar sus protocolos veterinarios y de buscar a una familia perfecta que apueste por la adopción conjunta 💗\n\nQueremos intentarlo, son dos hermanitas super unidas, dos flores que se merecen una vida juntas 💐 ¿Te animas a dar el paso y comértelas a besos? ¡Escríbenos!💌\n\nSexo: hembra ♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: negativo\nVacuna: sí\nChip: sí\n\nPuedes ayudarnos con sus gastos mediante:\n🌷PayPal: myanimalsm@gmail.com\n🌷Bizum: 04872 (sección donativos de la app)\n🌷Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Reservada',
    bondedWithId: '33',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Negativo',
      vaccination: 'Sí',
      microchip: 'Sí',
      sterilization: 'Pte'
    }
  },
  {
    id: '35',
    name: 'Aurora',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanca (Sorda)',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20261009-WA0051.jpg',
    description: 'Aurora se da en adopción conjunta inseparable con su hermanita Ariel. Una preciosa gatita blanca (sorda) de 2 meses rescatada en Toledo.',
    story: 'Ariel próximamente en adopción junto con Aurora🧜🏻♀️💗\n\nAriel pertenece a la camada de 6 bebés que capturamos de entre los escombros de una parcela en un pueblo de Toledo. Con la mamá, como era feral, hicimos CES para que pueda vivir tranquila y sin más camadas. Asimismo, a los pequeños los dividimos en dos familias de acogida: por un lado Ariel, Aurora y Bambi y por otro lado Daiquiri, Malibú y Ron🤍🖤\n\nDurante toda su cuarentena hemos estado trabajando en su sociabilización y confianza, con mucha paciencia, calma y mimos porque venían con mucho rechazo hacia el ser humano 💔 Y, aunque hay unos hermanos más extrovertidos que otros, ha llegado el momento de decir que lo hemos conseguido, son 6 bebés buenísimos 🥹😍\n\nAriel está muy unida a su hermanita Aurora que, como buena gata blanca, es sorda, por lo que se buscan muchísimo y se apoyan en el día a día. Por este motivo, queremos que estén juntas toda la vida 💖 Ariel es una sirenita felina bellísima con un pelaje muy particular, es capa humo 🖤 Ella es tímida de primeras, pero un terremotillo en cuanto coge confianza. Se vuelve loca jugando con la cañita de plumas y se relaja muchísimo cuando Aurora empieza a ronronear, contagiándose así ambas de tanto amor😍\n\nEn unos días finalizan su protocolo veterinario, ¿te animas a adoptar a estas dos princesas? ¡Escríbenos!💌\n\nSexo: hembra♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: pte.\nVacuna: pte\nChip: pte.\n\nPuedes ayudarnos con sus gastos mediante:\n🤍PayPal: myanimalsm@gmail.com\n🤍Bizum: 04872 (sección donativos de la app)\n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Pronto en adopción',
    bondedWithId: '36',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '36',
    name: 'Ariel',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Humo',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/Screenshot_2026-10-25-12-33-22-65_1c337646f29875672b5a61192b9010f9.jpg',
    description: 'Ariel se da en adopción conjunta inseparable con su hermanita Aurora. Una preciosa sirenita felina de capa humo de 2 meses rescatada en Toledo.',
    story: 'Ariel próximamente en adopción junto con Aurora🧜🏻♀️💗\n\nAriel pertenece a la camada de 6 bebés que capturamos de entre los escombros de una parcela en un pueblo de Toledo. Con la mamá, como era feral, hicimos CES para que pueda vivir tranquila y sin más camadas. Asimismo, a los pequeños los dividimos en dos familias de acogida: por un lado Ariel, Aurora y Bambi y por otro lado Daiquiri, Malibú y Ron🤍🖤\n\nDurante toda su cuarentena hemos estado trabajando en su sociabilización y confianza, con mucha paciencia, calma y mimos porque venían con mucho rechazo hacia el ser humano 💔 Y, aunque hay unos hermanos más extrovertidos que otros, ha llegado el momento de decir que lo hemos conseguido, son 6 bebés buenísimos 🥹😍\n\nAriel está muy unida a su hermanita Aurora que, como buena gata blanca, es sorda, por lo que se buscan muchísimo y se apoyan en el día a día. Por este motivo, queremos que estén juntas toda la vida 💖 Ariel es una sirenita felina bellísima con un pelaje muy particular, es capa humo 🖤 Ella es tímida de primeras, pero un terremotillo en cuanto coge confianza. Se vuelve loca jugando con la cañita de plumas y se relaja muchísimo cuando Aurora empieza a ronronear, contagiándose así ambas de tanto amor😍\n\nEn unos días finalizan su protocolo veterinario, ¿te animas a adoptar a estas dos princesas? ¡Escríbenos!💌\n\nSexo: hembra♀️\nEdad: 2 meses\nDesparasitación: completa\nTest FELV FIV: pte.\nVacuna: pte\nChip: pte.\n\nPuedes ayudarnos con sus gastos mediante:\n🤍PayPal: myanimalsm@gmail.com\n🤍Bizum: 04872 (sección donativos de la app)\n🤍Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
    status: 'Pronto en adopción',
    bondedWithId: '35',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '37',
    name: 'Bambi',
    species: 'Gato',
    breed: 'Común Europeo / Capa: Blanca',
    age: '1.5 meses',
    gender: 'Macho',
    size: 'Cachorro',
    imageUrl: 'https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/refs/heads/main/IMG-20261009-WA0052.jpg',
    description: 'Bambi y Cheddar se dan en adopción conjunta. Dos preciosos bebitos inseparables que se adoran y buscan un hogar definitivo juntos.',
    story: '¡Bambi y Cheddar en adopción conjunta! 🥥🧀✨\n\nEl pequeño Bambi (capa blanca) ha encontrado en Cheddar a su hermano y compañero de juegos y mimos inseparable. Ambos se han adaptado de maravilla juntos en su casa de acogida, donde comparten siestas, carreras y cuidados mutuos ❤️\n\nPara garantizar su estabilidad y bienestar emocional, saldrán en adopción conjunta obligatoria 🐾\n\nBambi es un gatito dulce y tierno que ya roba corazones. ¡Junto con Cheddar llenarán de risas, ronroneos y amor cualquier hogar!\n\nSexo: macho ♂️\nEdad: 1.5 meses\nDesparasitación: completa\nTest FELV FIV: pte.\nVacuna: pte\nChip: pte.\n\nPuedes ayudarnos con sus cuidados mediante apadrinamiento o donativo:\n🌸PayPal: myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064\n\n¿Te animas a abrirles las puertas de tu casa a este dúo? ¡Escríbenos! 💌',
    status: 'En Adopción',
    bondedWithId: '27',
    isJointAdoption: true,
    medicalStatus: {
      deworming: 'Sí',
      felvFiv: 'Pte',
      vaccination: 'Pte',
      microchip: 'Pte',
      sterilization: 'Pte'
    }
  },
  {
    id: '38',
    name: 'Ratona',
    species: 'Gato',
    breed: 'Común Europeo',
    age: '1 mes',
    gender: 'Hembra',
    size: 'Cachorro',
    imageUrl: RATONA_MYSTERY_IMAGE,
    description: 'Ratona es una cachorrita de 1 mes desparasitada, rescatada con los ojitos en estado muy grave y totalmente ciega. Trabajamos en su recuperación y seguimiento oftalmológico.',
    story: '¡Os presentamos a la pequeña Ratona! 🐭✨\n\nRatona es una adorable gatita de tan solo 1 mesecito de vida que acaba de llegar bajo la tutela y el cariño de APA Myanimalsm 🐾\n\nLlegó con unos ojitos en un estado lamentable y totalmente ciega 💔 A día de hoy trabajamos en su recuperación para intentar conseguir que tenga la mejor vida posible dada su condición. Próximamente tendremos visita en consulta de especialización de oftalmología para continuar con su tratamiento.\n\nAl ser tan chiquitita, actualmente se encuentra en una casa de acogida temporal donde recibe todos los cuidados especializados, tomas, calor y atención constante las 24 horas para salir adelante fuerte y sana ❤️🩹\n\n🩺 Estado veterinario:\nPor el momento ya se encuentra desparasitada y recibiendo sus primeros cuidados esenciales junto a su tratamiento oftalmológico. En cuanto alcance la edad y el peso adecuados, se completará el resto de su protocolo veterinario (test FELV/FIV, vacunas, microchip y futura esterilización).\n\n🤫 ¡Próximamente en adopción!\nAún no está abierta su adopción oficial mientras continúa recuperándose y desarrollándose en su hogar de acogida. ¡Iremos actualizando todas sus novedades e historias en redes y muy pronto abriremos su proceso!\n\n¿Quieres colaborar con sus cuidados, visitas de oftalmología y etapa de crecimiento? Puedes ayudarnos amadrinándola o con un donativo para sus gastos veterinarios ❤️\n\n🌸PayPal: myanimalsm@gmail.com\n🌸Bizum: 04872 (sección donativos de la app)\n🌸Openbank: APA. Myanimalsm | ES69 0073 0100 5205 0607 9064',
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