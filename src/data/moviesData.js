const moviesData = [
    {
        title: 'El club de la pelea',
        overallRating: 8.8,
        featuredUserRating: 10,
        image: '/public/moviesImages/el-club-de-la-pelea.jpg',
        releaseYear: 1999,
        featuredUserReview:
            'El Club de la pelea hace justo lo que las películas deberían hacer: volarnos la cabeza, hacernos cuestionar sobre nosotros mismos y nuestra sociedad, y al mismo tiempo entretenernos por completo. Edward Norton y Brad Pitt están en su mejor momento.',
        featuredUsername: 'Lk1990',
        reviewDate: '15 sep 2023',
        duration: "2h 19min"
    },
    {
        title: 'El origen',
        overallRating: 8.8,
        featuredUserRating: 8,
        image: '/public/moviesImages/elorigen.jpg',
        releaseYear: 2010,
        featuredUserReview:
            'El siglo XX tuvo Casablanca, Star Wars, El Padrino, Blade Runner y otras; esta es la primera de las obras maestras del siglo XXI. Estoy realmente asombrado por lo increíble que es esta película, una muestra asombrosa de todos los aspectos del cine. Una historia y una cinematografía asombrosas, acompañadas por actores dignos de contar la historia. Extraordinaria e impresionante.',
        featuredUsername: 'mrmocun',
        reviewDate: '10 jun 2022',
        duration: "2h 28min"
    },
    {
        title: 'Atrápame si puedes',
        overallRating: 8.1,
        featuredUserRating: 7,
        image: '/public/moviesImages/atrapame-si-puedes.jpg',
        releaseYear: 2002,
        featuredUserReview:
            'Una película muy buena. La actuación fue regular por parte de la mayoría de los actores, excepto por Leonardo DiCaprio, cuya actuación fue impresionante, y Tom Hanks no fue un buen personaje. La historia fue buena e interesante. Disfruté viéndola y la recomiendo.',
        featuredUsername: 'auuwws',
        reviewDate: '20 ene 2023',
        duration: "2h 21min"
    },
    {
        title: 'Interestelar',
        overallRating: 8,
        featuredUserRating: 10,
        image: '/public/moviesImages/interestelar.jpg',
        releaseYear: 2014,
        featuredUserReview:
            'Una de las mejores películas de todos los tiempos. La historia, la actuación, el guion, la fotografía, los efectos, el sonido y la producción en general son un 10/10.',
        featuredUsername: 'e-jackson1985',
        reviewDate: '18 feb 2024',
        duration: "2h 49min"
    },
    {
        title: 'Volver al futuro',
        overallRating: 8.5,
        featuredUserRating: 8,
        image: '/public/moviesImages/volver-al-futuro.jpg',
        releaseYear: 1985,
        featuredUserReview:
            'No es de extrañar que esta película sea tan elogiada. Es muy emocionante y de ritmo rápido. Marty no tarda mucho en viajar de 1985 a 1950. La aventura de Marty para regresar a su época es entretenida y te mantiene en vilo. La película también es muy divertida. A lo largo de toda la película, la historia nunca se vuelve pesada, salvo en un momento intermedio.',
        featuredUsername: 'davidstewart-70200',
        reviewDate: '12 may 2023',
        duration: "1h 56min"
    },
    {
        title: 'La La Land',
        overallRating: 8.0,
        featuredUserRating: 4,
        image: '/public/moviesImages/la-la-land.jpg',
        releaseYear: 2016,
        featuredUserReview:
            'La La Land decepciona con un elenco que no canta ni baila bien, poca química entre protagonistas y una trama débil. Aunque visualmente homenajea a Hollywood clásico, el desarrollo es lento y poco convincente. Solo el número final destaca, pero no salva una película olvidable. Mejor sáltatela.',
        featuredUsername: 'akaplan716',
        reviewDate: '27 ago 2017',
        duration: "2h 8min"
    },
    {
        title: 'WALL-E',
        overallRating: 8.4,
        featuredUserRating: 9,
        image: '/public/moviesImages/wall-e.jpg',
        releaseYear: 2008,
        featuredUserReview:
            'Hasta el día de hoy, esta sigue siendo mi película favorita de Pixar. La animación es estelar, conmovedora, divertida y demuestra que las películas de Pixar siempre son geniales (excepto Cars 2, pero esa es otra historia).',
        featuredUsername: '0U',
        reviewDate: '9 dic 2022',
        duration: "1h 38min"
    },
    {
        title: 'Avengers: Endgame',
        overallRating: 8.4,
        featuredUserRating: 10,
        image: '/public/moviesImages/avengers-endgame.jpg',
        releaseYear: 2019,
        featuredUserReview:
            'Esta película es una montaña rusa de emociones con algunas de las tramas de superhéroes más geniales jamás creadas. Es, sin duda, la película más épica de Marvel que probablemente se creará jamás. No veo cómo Marvel podría superarla, pero poder ver a estos personajes juntos al menos una última vez fue una recompensa en sí misma.',
        featuredUsername: 'ritchiep-56574',
        reviewDate: '1 mar 2023',
        duration: "3h 1min"
    },
    {
        title: 'Toy Story',
        overallRating: 8.3,
        featuredUserRating: 1,
        image: '/public/moviesImages/toy-story.jpg',
        releaseYear: 1995,
        featuredUserReview:
            'Esta película es puro marketing disfrazado de cine infantil. La historia aburre, los diálogos son clichés y los personajes vacíos. Solo busca vender productos, sin imaginación ni alma. Un derroche de CGI sin encanto, más pensado para el consumo masivo que para contar algo con valor.',
        featuredUsername: 'ganador55',
        reviewDate: '4 jul 2023',
        duration: "1h 21min"
    },
    {
        title: 'Jurassic Park',
        overallRating: 8.2,
        featuredUserRating: 10,
        image: '/public/moviesImages/jurassic-park.jpg',
        releaseYear: 1993,
        featuredUserReview:
            'Una adaptación impresionante del libro, esta película destaca por su dirección de Spielberg, efectos especiales innovadores, gran banda sonora de John Williams y escenas inolvidables como los encuentros con dinosaurios. Aunque no sigue fielmente el libro, es un clásico del cine de ciencia ficción que siempre estará entre mis favoritos.',
        featuredUsername: 'STACorpus',
        reviewDate: '3 oct 2005',
        duration: "2h 7min"
    },
    {
        title: 'Relatos Salvajes',
        overallRating: 8.1,
        featuredUserRating: 6,
        image: '/public/moviesImages/relatos-salvajes.jpg',
        releaseYear: 2014,
        featuredUserReview:
            'Una película con cinco historias, de las cuales solo tres me gustaron. Nada sorprendente ni innovador; algunas tramas podrían pasar en la vida real. Aunque es creíble, eso la hizo menos impactante. Poca comedia, más drama. No está mal, pero no entiendo tanto entusiasmo.',
        featuredUsername: 'nyncik',
        reviewDate: '12 ene 2024',
        duration: "2h 2min"
    },

    {
        title: 'El Padrino',
        overallRating: 9.2,
        featuredUserRating: 10,
        image: '/public/moviesImages/el-padrino.jpg',
        releaseYear: 1972,
        featuredUserReview:
            'Esto no es solo una película de gánsteres bellamente realizada. Ni tampoco un retrato familiar excepcional. Es una obra maestra de época. Un estudio de personajes. Una lección de cine y una inspiración para generaciones de actores, directores, guionistas y productores. Para mí, es más que eso: es la película definitiva.',
        featuredUsername: 'gogoschka-1',
        reviewDate: '30 abr 2022',
        duration: "2h 55min"
    },
    {
        title: 'Batman: El Caballero de la Noche',
        overallRating: 9.0,
        featuredUserRating: 5,
        image: '/public/moviesImages/batman-el-caballero-de-la-noche.jpg',
        releaseYear: 2008,
        featuredUserReview:
            'Esta película no es la obra maestra que FilmRush parece atribuirle. Sin duda es buena, sobre todo por la tensión y la actuación de Heath Ledger, pero nunca me pareció tan buena. Es demasiado larga y tiene huecos argumentales tan grandes que podrían atravesarlos un autobús escolar.',
        featuredUsername: 'briancham1994',
        reviewDate: '8 nov 2023',
        duration: "2h 32min"
    },
    {
        title: 'El Padrino (Parte 2)',
        overallRating: 9.0,
        featuredUserRating: 10,
        image: '/public/moviesImages/el-padrino-parte-2.jpg',
        releaseYear: 1974,
        featuredUserReview:
            'Llamarla secuela es un pecado. De Niro y Pacino están brillantes; De Niro como Vito Corleone es impecable, y Pacino supera su actuación anterior. Todo en esta película es perfecto: guion, dirección, elenco, actuaciones. Sus tres horas valen la pena. No tiene fallos. Es una obra maestra absoluta.',
        featuredUsername: 'AgustinCesaratti ',
        reviewDate: '3 abr 2023',
        duration: "3h 22min"
    },
    {
        title: 'Matrix',
        overallRating: 8.7,
        featuredUserRating: 8,
        image: '/public/moviesImages/matrix.jpg',
        releaseYear: 1999,
        featuredUserReview:
            'Estuvo muy adelantada a su época. Aún se mantiene vigente. En cuanto a las secuelas, no puedo decir lo mismo.',
        featuredUsername: 'jimmydennis00',
        reviewDate: '1 dic 2023',
        duration: "2h 16min"
    },
    {
        title: '12 hombres en pugna',
        overallRating: 9.0,
        featuredUserRating: 8,
        image: '/public/moviesImages/12-hombres-en-pugna.jpg',
        releaseYear: 1957,
        featuredUserReview:
            'Esta es una película increíble, y lo que la gente suele pasar por alto es que es el debut cinematográfico de Lumet. Un comienzo impresionante para la carrera de uno de los mejores directores de la industria.',
        featuredUsername: 'tonosov-51238',
        reviewDate: '28 sep 2023',
        duration: "1h 36min"
    },
    {
        title: 'El señor de los anillos: El retorno del rey',
        overallRating: 9.0,
        featuredUserRating: 9,
        image: '/public/moviesImages/el-senor-de-los-anillos-el-retorno-del-rey.jpg',
        releaseYear: 2003,
        featuredUserReview:
            'Esta película, y la trilogía en general, es una obra maestra del cine (y la literatura) que simplemente no envejece. Amo tanto esta película que se ha vuelto una tradición ver El Señor de los Anillos al menos una vez al año. ¡Es tan buena como la Navidad!',
        featuredUsername: 'venividiamavi-v',
        reviewDate: '5 may 2024',
        duration: "3h 21min"
    },
    {
        title: 'La Lista de Schindler',
        overallRating: 9.0,
        featuredUserRating: 10,
        image: '/public/moviesImages/la-lista-de-schindler.jpg',
        releaseYear: 1993,
        featuredUserReview:
            'Solo he visto esta película una vez, solo quiero verla una vez y solo necesitaré verla una vez. Está grabada en mi mente. Yo, como muchos otros, salí en silencio. No puedo imaginar hacer un análisis crítico de esta película, señalar pequeños detalles o estilos, o incluso criticar al director. Se sostiene por sí sola como una obra monumental del cine, un logro magnífico.',
        featuredUsername: 'vtburns',
        reviewDate: '10 dic 2000',
        duration: "3h 15min"
    },
    {
        title: 'El señor de los anillos: La comunidad del anillo',
        overallRating: 8.9,
        featuredUserRating: 7,
        image: '/public/moviesImages/el-senor-de-los-anillos-la-comunidad-del-anillo.jpg',
        releaseYear: 2001,
        featuredUserReview:
            'El libro me pareció más interesante que la película. Aunque visualmente impactante y con buena música, le falta alma. El Hobbit es esencial porque aporta humanidad a una historia que, sin él, se siente vacía. La película prioriza el espectáculo sobre la profundidad, lo cual funciona más con públicos jóvenes que adultos.',
        featuredUsername: 'arthur_tafero',
        reviewDate: '17 feb 2023',
        duration: "2h 58min"
    },
    {
        title: 'Forrest Gump',
        overallRating: 8.8,
        featuredUserRating: 10,
        image: '/public/moviesImages/forrest-gump.jpg',
        releaseYear: 1994,
        featuredUserReview:
            'He visto esta película al menos unas seis veces, y lo que más me impresiona es cómo Forrest Gump comparte su inocencia con los demás y logra conservarla incluso en tiempos difíciles. Como veterano de Vietnam y graduado en los años 60, me identifiqué con muchas etapas. La música, la acción y el vestuario están integrados de forma magistral pero sutil. Más allá de la famosa frase sobre los chocolates, la idea de que "tonto es el que hace tonterías" me parece aún más aplicable a la vida.',
        featuredUsername: 'kenhe',
        reviewDate: '30 may 2004',
        duration: "2h 22min"
    },
];

export default moviesData;
