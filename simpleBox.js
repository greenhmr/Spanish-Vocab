	var card = new Array ();
	var pageIndex = 0;
	var correct = 0;
	var wrong = 0;
	var fromLang = "English: &nbsp&nbsp";
	var toLang = "Spanish: ";
	var stateForward = true;
	var showing = false;
	
	function initPage(thisPageIndex) {
		pageIndex = thisPageIndex;
		changeColor("home");
		initAskSpanish();
	}
	
	function changeColor(linkId) {
    var myLink = document.getElementById(linkId);
    myLink.className = 'activeJspeech';
	}

	function resetColor(linkId) {
    var myLink = document.getElementById(linkId);
    myLink.className = 'speech';
	}
	
	function initAskSpanish() {
	
		var whichWay = document.getElementById("switch");
		document.Arrow.src = "rArrow.png";
		
		switch (pageIndex) {
		
			case 1: //colors page
       				card = Array (
                new Array ("red","rojo"),
                new Array ("blue","azul"),
                new Array ("green","verde"),
                new Array ("black","negro"),
                new Array ("brown","marron","café"),
                new Array ("gray","gris"),
                new Array ("white","blanco"),
                new Array ("yellow","amarillo"),
                new Array ("purple","morado"),
                new Array ("pink","rosado"),
                new Array ("orange","anaranjado")
      				);
      		break;
      		
			case 2: //numbers 0-10 page
       				card = Array (
                new Array ("zero","cero"),
                new Array ("one","uno"),
                new Array ("two","dos"),
                new Array ("three","tres"),
                new Array ("four","cuatro"),
                new Array ("five","cinco"),
                new Array ("six","seis"),
                new Array ("seven","siete"),
                new Array ("eight","ocho"),
                new Array ("nine","nueve"),
                new Array ("ten","diez")
      				);
      		break;
      
      case 3: //numbers 11-20 page
      				card = Array (
                new Array ("eleven","once"),
                new Array ("twelve","doce"),
                new Array ("thirteen","trece"),
                new Array ("fourteen","catorce"),
                new Array ("fifteen","quince"),
                new Array ("sixteen","dieciséis","dieciseis"),
                new Array ("seventeen","diecisiete"),
                new Array ("eighteen","dieciocho"),
                new Array ("nineteen","diecinueve"),
                new Array ("twenty","veinte")
      				);
      		break;

      case 4: //numbers 21-29 page
      				card = Array (
                new Array ("twenty one","veintiuno"),
                new Array ("twenty two","veintidos"),
                new Array ("twenty three","veintitrés","veintitres"),
                new Array ("twenty four","veinticuatro"),
                new Array ("twenty five","veinticinco"),
                new Array ("twenty six","veintiséis","veintiseis"),
                new Array ("twenty seven","veintisiete"),
                new Array ("twenty eight","veintiocho"),
                new Array ("twenty nine","veintinueve")
      				);
      		break;      		
      		
      case 5: //numbers 20-100 page
      				card = Array (
                new Array ("twenty","veinte"),
                new Array ("thirty","treinta"),
                new Array ("forty","cuarenta"),
                new Array ("fifty","cincuenta"),
                new Array ("sixty","sesenta"),
                new Array ("seventy","setenta"),
                new Array ("eighty","ochenta"),
                new Array ("ninety","noventa"),
                new Array ("one hundred","cien"),
                new Array ("one hundred eleven","ciento once"),
                new Array ("two hundred","doscientos"),
                new Array ("three hundred","trescientos"),
                new Array ("four hundred","cuatrocientos"),
                new Array ("five hundred","quinientos"),
                new Array ("six hundred","seiscientos"),
                new Array ("seven hundred","setecientos"),
                new Array ("eight hundred","ochocientos"),
                new Array ("nine hundred","novecientos"),
                new Array ("one thousand","mil"),
                new Array ("a million","un millón","un millon")
      				);
      		break;

      case 6: //days of week page
      				card = Array (
                new Array ("monday","lunes"),
                new Array ("tuesday","martes"),
                new Array ("wednesday","miércoles","miercoles"),
                new Array ("thursday","jueves"),
                new Array ("friday","viernes"),
                new Array ("saturday","sábado","sabado"),
                new Array ("sunday","domingo"),
                new Array ("week","la semana")
      				);
      		break;      

      case 7: //months & seasons page
      				card = Array (
                new Array ("january","enero"),
                new Array ("february","febrero"),
                new Array ("march","marzo"),
                new Array ("april","abril"),
                new Array ("may","mayo"),
                new Array ("june","junio"),
                new Array ("july","julio"),
                new Array ("august","agosto"),
                new Array ("september","septiembre"),
                new Array ("october","octubre"),
                new Array ("november","noviembre"),
                new Array ("december","diciembre"),
                new Array ("summer","el verano"),
                new Array ("spring","la primavera"),
                new Array ("fall","el otoño","el otono"),
                new Array ("winter","el invierno")
      				);
      		break;   

      case 8: //question words page
      				card = Array (
                new Array ("what","qué","que"),
                new Array ("when","cuándo","cuando"),
                new Array ("where","dónde","donde"),
                new Array ("who","quién","quien"),
                new Array ("how many","cuántos","cuantos"),
                new Array ("how much","cuánto","cuanto"),
                new Array ("how","cómo","como"),
                new Array ("why","por qué","por que"),
                new Array ("which","cuál","cual"),
                new Array ("whose","de quién","de quien")
      				);
      		break;   

      case 9: //shapes page
      				card = Array (
      					new Array ("line","la línea","la linea"),      //CHECK ACCENTING!
                new Array ("circle","el círculo","el circulo"),
                new Array ("square","el cuadrado"),
                new Array ("rectangle","el rectángulo","el rectangulo"),
                new Array ("triangle","el triángulo","el triangulo"),
                new Array ("oval","el óvalo","el ovalo"),
                new Array ("octagon","el octágono","el octagono"),
                new Array ("rhombus","el rombo"),
                new Array ("star","la estrella"),
                new Array ("cube","el cubo"),
                new Array ("sphere","la esfera"),
                new Array ("pyramid","la pirámide","la piramide")
      				);
      		break;   

      case 10: // plants page
      				card = Array (
                new Array ("tree","el árbol","el arbol"),
                new Array ("leaf","la hoja"),
                new Array ("branch","la rama"),
                new Array ("flower","la flor"),
                new Array ("trunk","el tronco"),
                new Array ("bush","el arbusto"),
                new Array ("grass","el pasto"),
                new Array ("weed","la mala hierba"),
                new Array ("garden","el jardín","el jardin"),
                new Array ("soil","la tierra"),
                new Array ("to bloom","florecer"),
                new Array ("to water","regar"),
                new Array ("to grow","crecer")
      				);
      		break;

      case 11: //animals page
      				card = Array (
                new Array ("cat","el gato"),
                new Array ("dog","el perro"),
                new Array ("fox","el zorro"),
                new Array ("horse","el caballo"),
                new Array ("donkey","el burro"),
                new Array ("fly","la mosca"),
                new Array ("spider","la araña","la arana"),
                new Array ("butterfly","la mariposa"),
                new Array ("ant","la hormiga"),
                new Array ("cockroach","la cucaracha"),
                new Array ("worm","el gusano"),
                new Array ("fish","la pez"),
                new Array ("tuna","el atún","el atun"),
                new Array ("lizard","el lagarto"),
                new Array ("crocodile","el cocodrilo"),
                new Array ("snake","la culebra","la serpiente"),
                new Array ("eagle","el águila","el aguila"),
                new Array ("bird","el pájaro","el pajaro"),
                new Array ("parrot","el loro"),
                new Array ("dove","la paloma"),
                new Array ("duck","el pato"),
                new Array ("chicken","el pollo"),
                new Array ("turkey","el pavo"),
								new Array ("bat","el murciélago","el murcielago"),
                new Array ("shark","el tiburón","el tiburon"),
                new Array ("whale","la ballena"),
								new Array ("dolphin","el delfín","el delfin"),
                new Array ("mouse","el ratón","el raton"),
                new Array ("rat","la rata"),
                new Array ("elephant","el elefante"),
                new Array ("monkey","el mono"),
                new Array ("wolf","el lobo"),
                new Array ("bear","el oso"),
                new Array ("lion","el león","el leon"),
								new Array ("tiger","el tigre"),
                new Array ("pig","el cerdo"),
                new Array ("sheep","la oveja"),
                new Array ("cow","la vaca"),
                new Array ("bull","el toro"),
                new Array ("goat","la cabra"),
                new Array ("rabbit","el conejo"),
                new Array ("turtle","la tortuga"),
                new Array ("frog","la rana"),
                new Array ("snail","el caracol")
      				);
      		break;

      case 12: // bedroom page
      				card = Array (
                new Array ("closet","el ropero","el armario"),
                new Array ("door","la puerta"),
                new Array ("desk","el escritorio"),
                new Array ("chair","la silla"),
                new Array ("shelf","el estante"),
                new Array ("dresser","el tocador"),
                new Array ("cabinet","el armario"),
                new Array ("drawer","el cajón","el cajon"),
                new Array ("bed","la cama"),
                new Array ("pillow","la almohada"),
                new Array ("sheet","la sábana","la sabana"),
                new Array ("window","la ventana"),
                new Array ("curtain","la cortina"),
                new Array ("electric outlet","el enchufe"),
                new Array ("light","la luz")
      				);
      		break;

      case 13: //appliances page
      				card = Array (
                new Array ("toaster","el tostador"),
                new Array ("microwave","el microondas"),
                new Array ("stove","la estufa"),
                new Array ("oven","el horno"),
                new Array ("refrigerator","la nevera","el refrigerador"),
                new Array ("freezer","el congelador"),
                new Array ("television","el televisor"),
                new Array ("computer","la computadora"),
                new Array ("speakers","los parlantes","los altavoces"),
                new Array ("washer","la lavadora"),
                new Array ("dryer","la secadora"),
                new Array ("dishwasher","el lavaplatos"),
                new Array ("fan","el ventilador"),
                new Array ("lamp","la lámpara","la lampara"),
                new Array ("vacuum","la aspiradora")
      				);
      		break;
      
      case 14: //body page
      				card = Array (
                new Array ("toe","el dedo del pie"),
                new Array ("foot","el pie"),
                new Array ("knee","la rodilla"),
                new Array ("leg","la pierna"),
                new Array ("stomach","el estómago","el estomago"),
                new Array ("back","la espalda"),
                new Array ("chest","el pecho"),
                new Array ("shoulder","el hombro"),
                new Array ("arm","el brazo"),
                new Array ("hand","la mano"),
                new Array ("finger","el dedo"),
                new Array ("neck","el cuello"),
                new Array ("head","la cabeza"),
                new Array ("face","la cara"),
                new Array ("nose","la nariz"),
                new Array ("eye","el ojo"),
                new Array ("ear","la oreja"),
                new Array ("mouth","la boca"),
                new Array ("lip","el labio"),
                new Array ("teeth","los dientes"),
                new Array ("tongue","la lengua"),
                new Array ("hair","el pelo","el cabello")
      				);
      		break;

      case 15: //family page
      				card = Array (
                new Array ("mother","la madre"),
                new Array ("father","el padre"),
                new Array ("parents","los padres"),
                new Array ("daughter","la hija"),
                new Array ("son","el hijo"),
                new Array ("children","los hijos"),
                new Array ("brother","el hermano"),
                new Array ("sister","la hermana"),
                new Array ("grandfather","el abuelo"),
                new Array ("grandmother","la abuela"),
                new Array ("great grandfather","el bisabuelo"),
                new Array ("grandchild","el nieto"),
                new Array ("uncle","el tío","el tio"),
                new Array ("aunt","la tía","la tia"),
                new Array ("cousin","el primo"),
                new Array ("husband","el esposo","el marido"),
                new Array ("wife","la esposa"),
                new Array ("baby","el bebé","el bebe"),
                new Array ("child","el niño","el nino"),
                new Array ("teenager","el adolescente"),
                new Array ("adult","el adulto"),
                new Array ("brother in law","el cuñado","el cunado"),
                new Array ("mother in law","la suegra")
      				);
      		break;

      case 16: //health page
      				card = Array (
                new Array ("doctor","el doctor"),
                new Array ("appointment","la cita"),
                new Array ("medicine","la medicina"),
                new Array ("pill","la pastilla"),
                new Array ("bacteria","las bacterias"),
                new Array ("virus","el virus"),
                new Array ("vaccine","la vacuna"),
                new Array ("infection","la infección","la infeccion"),
                new Array ("surgery","la cirugía","la cirugia"),
                new Array ("blood","la sangre"),
                new Array ("immune system","el sistema immunológico","el sistema immunologico"),
                new Array ("AIDS","el SIDA"),
                new Array ("heart attack","el infarto"),
                new Array ("cancer","el cáncer","el cancer"),
                new Array ("flu","la gripe"),
                new Array ("common cold","el resfriado"),
                new Array ("cough","la tos"),
                new Array ("my back hurts","me duele la espalda"),
                new Array ("home remedy","el remedio casero")
      				);
      		break;

      case 17: //professions page
      				card = Array (
                new Array ("doctor","el médico","el medico"),
                new Array ("lawyer","el abogado"),
                new Array ("politician","el político","el politico"),
                new Array ("entrepreneur","el empresario"),
                new Array ("homemaker","la ama de casa"),
                new Array ("teacher","el maestro"),
                new Array ("professor","el profesor"),
                new Array ("engineer","el ingeniero"),
                new Array ("tecnician","el técnico","el tecnico"),
                new Array ("mechanic","el mecánico","el mecanico"),
                new Array ("scientist","el científico","el cientifico"),
                new Array ("businessman","el hombre de negocios"),
                new Array ("manager","el gerente"),
                new Array ("boss","el jefe"),
                new Array ("director","el director"),
                new Array ("administrator","el administrador"),
                new Array ("writer","el escritor"),
                new Array ("author","el autor"),
                new Array ("soldier","soldado"),
                new Array ("pilot","piloto"),
                new Array ("salesman","el vendedor"),
                new Array ("garbage man","el basurero"),
                new Array ("architect","el arquitecto"),
                new Array ("carpenter","el carpintero"),
                new Array ("construction worker","el obrero de la construcción","el obrero de la construccion"),
                new Array ("plumber","el plomero"),
                new Array ("farmer","el agricultor"),
                new Array ("cook","cocinero"),
                new Array ("waiter","el camarero","el mesero"),
                new Array ("waitress","la camarera"),
                new Array ("policeman","el policía"),
                new Array ("actor","el actor"),
                new Array ("actress","la actriz"),
                new Array ("singer","el cantante"),
                new Array ("athlete","el atleta"),
                new Array ("driver","el conductor"),
                new Array ("banker","el banquero"),
                new Array ("accountant","el contador","el contable"),
                new Array ("cashier","el cajero"),
                new Array ("fireman","el bombero"),
                new Array ("volunteer","el voluntario"),
                new Array ("student","el estudiante"),
                new Array ("unemployed","el desemplado"),
                new Array ("beggar","el mendigo"),
                new Array ("homeless","los sin techo"),
                new Array ("barber","el peluquero"),
                new Array ("drug dealer","el traficante"),
                new Array ("artist","el artista"),
                new Array ("musician","el músico","el musico"),
                new Array ("programmer","el programador")
      				);
      		break;

      case 18: //space page
      				card = Array (
                new Array ("space","el espacio"),
                new Array ("sun","el sol"),
                new Array ("sunbeam","el rayo de sol"),
                new Array ("star","la estrella"),
                new Array ("constellation","la constelación","la constelacion"),
                new Array ("sky","el cielo"),
                new Array ("atmosphere","la atmósfera","la atmosfera"),
                new Array ("sunset","la puesta del sol"),
                new Array ("sunrise","la salida del sol"),
                new Array ("moon","la luna"),
                new Array ("full moon","la luna llena"),
                new Array ("new moon","la luna nueva"),
                new Array ("alien","el extraterrestre"),
                new Array ("UFO","el OVNI"),
                new Array ("shooting star","la estrella fugaz"),
                new Array ("orbit","la órbita","la orbita"),
                new Array ("satellite","el satélite","el satelite"),
                new Array ("planet","el planeta"),
                new Array ("Earth","la Tierra"),
                new Array ("world","el mundo"),
                new Array ("solar system","el sistema solar"),
                new Array ("galaxy","la galaxia"),
                new Array ("Mily Way","la Vía Láctea","la Via Lactea"),
                new Array ("universe","el universo"),
                new Array ("black hole","el agujero negro"),
                new Array ("asteroid","el asteroide"),
                new Array ("gravity","la gravedad")
      				);
      		break;

      case 19: //geography page
      				card = Array (
                new Array ("continent","el continente"),
                new Array ("ocean","el océano","el oceano"),
                new Array ("sea","el mar"),
                new Array ("bay","la bahía","la bahia"),
                new Array ("lake","el lago"),
                new Array ("pond","la laguna"),
                new Array ("marsh","el pantano"),
                new Array ("river","el río","el rio"),
                new Array ("shore/bank","la orilla"),
                new Array ("creek","el arroyo"),
								new Array ("stream","el riachuelo"),
                new Array ("peninsula","la península","la peninsula"),
                new Array ("island","la isla"),
                new Array ("waterfall","la catarata"),
                new Array ("hill","la colina"),
                new Array ("valley","el valle"),
                new Array ("canyon","el cañón","el canon"),
                new Array ("mountain","la montaña","la montana"),
                new Array ("plain","la llanura"),
                new Array ("forest","el bosque"),
                new Array ("savanna","la sabana"),
                new Array ("jungle","la selva"),
                new Array ("desert","el desierto"),
                new Array ("equator","el ecuador"),
                new Array ("pole","el polo"),
                new Array ("glacier","el glaciar"),
                new Array ("cave","la cueva"),
                new Array ("spring","el manantial"),
                new Array ("aquifer","el acuífero","el acuifero"),
                new Array ("reef","el arrecife"),
                new Array ("precipice","el precipicio"),
                new Array ("cliff","el acantilado"),
                new Array ("earthquake","el terremoto"),
                new Array ("erosion","la erosión","la erosion")
      				);
      		break;

      case 20: //weather page
      				card = Array (
                new Array ("winter","el invierno"),
                new Array ("fall"," el otoño","el otono"),
                new Array ("spring","la primavera"),
                new Array ("summer","el verano"),
                new Array ("weather","el tiempo"),
                new Array ("rain","la lluvia"),
                new Array ("snow","la nieve"),
                new Array ("fog","la niebla"),
                new Array ("cloud","el nube"),
                new Array ("air","el aire"),
                new Array ("wind","el viento"),
                new Array ("storm","la tormenta"),
                new Array ("rainbow","el arco iris","el arcoiris"),
                new Array ("lightning","el relámpago","el relampago"),
                new Array ("thunder","el trueno"),
                new Array ("hurricane","el huracán","el huracan"),
                new Array ("tornado","el tornado"),
                new Array ("earthquake","el terremoto"),
                new Array ("tsunami","el maremoto"),
                new Array ("sun","el sol"),
                new Array ("shade","la sombra"),
                new Array ("ice","el hielo"),
                new Array ("puddle","el charco"),
                new Array ("humidity","la humedad"),
                new Array ("heat","el calor"),
                new Array ("cold","el frío","el frio"),
                new Array ("how's the weather","qué tiempo hace","que tiempo hace"),
                new Array ("it's hot","hace calor"),
                new Array ("it's cold","hace frío","hace frio"),
                new Array ("it's sunny","hace sol"),
                new Array ("it's windy","hace viento"),
                new Array ("it's brisk","hace fresco"),
                new Array ("it's nice weather","hace buen tiempo"),
                new Array ("it's bad weather","hace mal tiempo"),
                new Array ("it's cloudy","está nublado","esta nublado"),
                new Array ("it's muggy","está bochornoso","esta bochornoso"),
                new Array ("it's mild","está templado","está templado")
      				);
      		break;

      case 21: //fruit page
      				card = Array (
                new Array ("apple","la manzana"),
                new Array ("avocado","el aguacate"),
                new Array ("banana","la banana","el plátano"),
                new Array ("berry","la baya"),
                new Array ("blackberry","la zarzamora"),
                new Array ("cherry","la cereza"),
                new Array ("coconut","el coco"),
                new Array ("cranberry","el arándano","el arandano"),
                new Array ("fig","el higo"),
                new Array ("fruit","la fruta"),
                new Array ("grapefruit","el pomelo","la toronja"),
                new Array ("grapes","las uvas"),
                new Array ("lemon","el limón","el limon"),
                new Array ("lime","la lima"),
                new Array ("melon","el melón","el melon"),
                new Array ("orange","la naranja"),
                new Array ("peach","el durazno","el melocotón"),
                new Array ("pear","la pera"),
                new Array ("pineapple","la piña","la pina"),
                new Array ("plantain","el plátano","el platano"),
                new Array ("plum","la ciruela"),
                new Array ("raisin","la pasa"),
                new Array ("raspberry","la frambuesa"),
                new Array ("strawberry","la fresa"),
                new Array ("watermelon","la sandía","la sandia")
      				);
      		break;

      case 22: //vegetables page
      				card = Array (
                new Array ("asparagus","el espárrago","el esparrago"),
                new Array ("beans","los frijoles"),
                new Array ("broccoli","el brécol","el brecol"),
                new Array ("cabbage","la col"),
                new Array ("carrot","la zanahoria"),
                new Array ("cauliflower","la coliflor"),
                new Array ("celery","el apio"),
                new Array ("corn","el maíz","el maiz"),
                new Array ("cucumber","el pepino"),
                new Array ("eggplant","la berenjena"),
                new Array ("green pepper","el pimiento verde"),
                new Array ("lettuce","la lechuga"),
                new Array ("mushroom","el hongo","el champiñón"),
                new Array ("olive","la aceituna","la oliva"),
                new Array ("onion","la cebolla"),
                new Array ("pea","el guisante"),
                new Array ("potato","la papa","la patata"),
                new Array ("pumpkin","la calabaza"),
                new Array ("spinach","la espinaca"),
                new Array ("tomato","el tomate"),
                new Array ("vegetable","la verdura")
      				);
      		break;

      case 23: //at the table page
      				card = Array (
                new Array ("fork","el tenedor"),
                new Array ("knife","el cuchillo"),
                new Array ("spoon","la cuchara"),
                new Array ("napkin","la servilleta"),
                new Array ("plate","el plato"),
                new Array ("bowl","el cuenco","el bol"),
                new Array ("cup","la taza"),
                new Array ("glass","el vaso"),
                new Array ("place mat","el individual"),
                new Array ("table cloth","el mantel"),
                new Array ("table","la mesa"),
                new Array ("stool","el taburete"),
                new Array ("chair","la silla")
      				);
      		break;

      case 24: //clothes page
      				card = Array (
                new Array ("socks","los calcetines"),
                new Array ("sneakers","las zapatillas de deporte"),
                new Array ("shoes","los zapatos"),
                new Array ("boots","las botas"),
                new Array ("pants","los pantalones"),
                new Array ("jeans","los jeans","los vaqueros"),
                new Array ("shorts","los pantalones cortos"),
                new Array ("skirt","la falda"),
                new Array ("underwear","la ropa interior"),
                new Array ("belt","el cinturón","el cinturon"),
                new Array ("t-shirt","la camiseta"),
                new Array ("shirt","la camisa"),
                new Array ("dress","el vestido"),
                new Array ("suit","el traje"),
                new Array ("tie","la corbata"),
                new Array ("button","el botón","el boton"),
                new Array ("zipper","el cierre"),
                new Array ("hat","el sombrero"),
                new Array ("cap","la gorra"),
                new Array ("gloves","los guantes"),
                new Array ("jacket","la chaqueta"),
                new Array ("sweater","el suéter","el sueter"),
                new Array ("coat","el abrigo"),
                new Array ("raincoat","el impermeable")
      				);
      		break;
      		
      case 25: //hours page
      				card = Array (
                new Array ("one o'clock","la una"),
                new Array ("two o'clock","las dos"),
                new Array ("three ten","las tres y diez"),
                new Array ("four fifteen","las cuatro y cuarto"),
                new Array ("five thirty","las cinco y media"),
                new Array ("quarter til seven","las siete menos cuarto"),
                new Array ("seven fifty","las siete y cincuenta"),
                new Array ("eleven fifty-nine","las once y cincuenta y nueve"),
                new Array ("twelve o'clock","las doce"),
                new Array ("noon","el mediodía","el mediodia"),
                new Array ("midday","la medianoche"),
                new Array ("in the morning","de la mañana","de la manana"),
                new Array ("in the afternoon","de la tarde"),
                new Array ("in the evening","de la noche")
      				);
      		break;

      case 26: //relative time page
      				card = Array (
                new Array ("now","ahora"),
                new Array ("later","luego"),
                new Array ("during","durante"),
                new Array ("when","cuando"),
                new Array ("tomorrow","mañana","manana"),
                new Array ("yesterday","ayer"),
                new Array ("last night","anoche"),
                new Array ("tomorrow morning","mañana por la mañana","manana por la manana"),
                new Array ("last Saturday","el sábado pasado","el sabado pasado"),
                new Array ("this Saturday","éste sábado","este sabado"),
                new Array ("next Saturday","el sábado que viene","el sabado que viene"),
                new Array ("late","tarde"),
                new Array ("early","temprano"),
                new Array ("on time","a tiempo"),
                new Array ("around","alrededor de"),
                new Array ("exactly","en punto"),
                new Array ("often","a menudo"),
                new Array ("sometimes","a veces","algunas veces"),
                new Array ("BC","antes de Cristo"),
                new Array ("AD","después de Cristo","despues de Cristo")
      				);
      		break;
      		
      case 27: // traits
      				card = Array (
      					new Array ("active","activo"),
								new Array ("adaptable","adaptable"),
								new Array ("addict","adicto"),
								new Array ("affectionate","cariñoso","carinoso"),
								new Array ("aggressive","agresivo"),
								new Array ("altruistic","altruista"),
								new Array ("ambitious","ambicioso"),
								new Array ("arrogant","arrogante"),
								new Array ("artistic","artístico","artistico"),
								new Array ("attractive","atractivo"),
								new Array ("greedy","avaricioso"),
								new Array ("mean","malo"),
								new Array ("bold","audaz"),
								new Array ("brash","atrevido"),
								new Array ("brave","valiente"),
								new Array ("brilliant","brillante"),
								new Array ("calm","tranquilo"),
								new Array ("conformist","conformista"),
								new Array ("nonconformist","disidente"),
								new Array ("courteous","cortés"),
								new Array ("crazy","loco"),
								new Array ("creative","creativo"),
								new Array ("critical","crítico","critico"),
								new Array ("cultured","culto"),
								new Array ("curious","curioso"),
								new Array ("diligent","diligente"),
								new Array ("diplomatic","diplomático","diplomatico"),
								new Array ("dishonest","dishonesto"),
								new Array ("honest","honesto"),
								new Array ("dynamic","dinámico","dinamico"),
								new Array ("eccentric","excéntrico","excentrico"),
								new Array ("egoist","egoísta","egoista"),
								new Array ("eloquent","elocuente"),
								new Array ("energetic","BLANK"),
								new Array ("faithful","fiel"),
								new Array ("fascinating","fascinante"),
								new Array ("foolish","tonto"),
								new Array ("friendly","amistoso"),
								new Array ("funny","cómico","comico"),
								new Array ("demanding","exigente"),
								new Array ("generous","generoso"),
								new Array ("good","bueno"),
								new Array ("graceful","gracioso"),     //BLANK  --->Should be funny??
								new Array ("happy","alegre"),
								new Array ("hard working","trabajador"),
								new Array ("content","contento"),
								new Array ("hateful","odioso"),
								new Array ("idealist","idealista"),
								new Array ("imaginative","imaginativo"),
								new Array ("impulsive","impulsivo"),
					//			new Array ("open","abierto"),
					//			new Array ("outdoorsy","BLANK"),
					//			new Array ("competitive","BLANK"),
					//			new Array ("dirty","sucio"),
					//			new Array ("quiet",""),
      					new Array ("likeable","agradable"),
      					new Array ("unpleasant","desagradable"),
								new Array ("nice","simpático","simpatico"),
								new Array ("not nice","antipático","antipatico"),
								new Array ("optimistic","optimista"),
								new Array ("pessimistic","pessimista"),
								new Array ("perfectionist","perfeccionista"),
								new Array ("difficult","difícil","dificil"),
								new Array ("excitable","BLANK"),             //BLANK
								new Array ("gregarious","BLANK"),	           //BLANK
								new Array ("intelligent","inteligente"),
								new Array ("clever","listo"),
								new Array ("tall","alto"),
								new Array ("short","bajo"),
								new Array ("small","pequeño","pequeno"),
								new Array ("skinny","flaco"),  //BLANK
								new Array ("thin","delgado"),	//BLANK
								new Array ("charming","encantador"),
								new Array ("athletic","atlético","atletico"),
								new Array ("boring","aburrido"),
								new Array ("interesting","interesante"),
								new Array ("mischevious","travieso"),
								new Array ("lazy","perezoso"),
								new Array ("naive","ingenio"),
								new Array ("independent","independiente"),
								new Array ("indecisive","indeciso"),
								new Array ("ingenious","ingenio"),
								new Array ("innocent","inocente"),
								new Array ("jealous","celoso"),
								new Array ("liberal","liberal"),
								new Array ("conservative","conservador"),
								new Array ("lively","vivo"),
								new Array ("neat","ordenado"),
								new Array ("sloppy","desorganizado"),
								new Array ("obstinate","obstinado"),
								new Array ("outgoing","extravertido"),
								new Array ("introverted","introvertido"),
								new Array ("shy","tímido","timido"),
								new Array ("patient","paciente"),
								new Array ("impatient","impaciente"),
								new Array ("poor","pobre"),
								new Array ("rich","rico"),
								new Array ("possessive","posesivo"),
								new Array ("proud","orgulloso"),
								new Array ("humble","humilde"),
								new Array ("rebellious","rebelde"),
								new Array ("reserved","reservado"),
								new Array ("romantic","romántico","romantico"),
								new Array ("rude","mal educado"),
								new Array ("sad","triste"),
								new Array ("happy","feliz"),
								new Array ("sensitive","sensible"),
								new Array ("sensible","BLANK"),             //BLANK  ??
								new Array ("sarcastic","sarcástico","sarcastico"),
								new Array ("serious","serio"),
								new Array ("simple","sencillo"),
								new Array ("stingy","tacaño","tacano"),
								new Array ("strong","fuerte"),
								new Array ("weak","débil","debil"),
								new Array ("stubborn","terco"),
								new Array ("stupid","estúpido","estupido"),
								new Array ("supersticious","supersticioso"),
								new Array ("sweet","dulce"),
								new Array ("vain","vanidoso"),
								new Array ("willing","dispuesto"),
								new Array ("wise","sabio")
      				);
      		break;
      		
      case 28: // Classroom
      				card = Array (
                new Array ("students","los estudiantes"),
                new Array ("teacher","el maestro"),
                new Array ("professor","el profesor"),
                new Array ("blackboard","la pizarra"),
                new Array ("chalk","la tiza"),
                new Array ("blackboard eraser","el borrador"),
                new Array ("stapler","el engrapador"),           //check GENDER
                new Array ("pencil","el lápiz","el lapiz"),
                new Array ("pencil eraser","la goma"),
                new Array ("pen","el bolígrafo","el boligrafo"),
                new Array ("paper","el papel"),                
                new Array ("page","la página","la pagina"),
                new Array ("book","el libro"),
                new Array ("notebook","el cuaderno"),
                new Array ("scissors","las tijeras"),
                new Array ("glue","el pegamento"),
                new Array ("student desk","el pupitre"),
                new Array ("office desk","el escritorio"),
                new Array ("classroom","la aula"),
                new Array ("hallway","el pasillo"),
                new Array ("gym","el gimnasio"),
                new Array ("library","la biblioteca"),
                new Array ("office","la oficina"),
                new Array ("laboratory","el laboratorio"),
                new Array ("elementary school","la escuela primaria"),
                new Array ("high school","la escuela secundaria"),
                new Array ("vocational school","la escuela vocacional"),
                new Array ("university","la universidad"),
                new Array ("night school","la escuela nocturna")
      				);
      		break;

      case 29: // Units of Measure
      				card = Array (
                new Array ("miles",""),
                new Array ("kilometers","kilómetros","kilometros"),
                new Array ("meters","metros"),
                new Array ("centimeters","centímetros","centimetros"),
                new Array ("square meters","metros cuadrados"),
                new Array ("meters cubed","metros cúbicos","metros cubicos"),
                new Array ("yards",""),
                new Array ("inches",""),
                new Array ("pounds",""),
                new Array ("kilograms","kilogramos"),
                new Array ("gallons",""),
                new Array ("liters","litros"),
                new Array ("cup",""),
                new Array ("tablespoon",""),
                new Array ("teaspoon",""),
                new Array ("grams","gramos"),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("","")
      				);
      		break;

      case 30: // Subjects
      				card = Array (
                new Array ("subject","la asignatura"),
                new Array ("mathematics","las matemáticas","las matematicas"),
                new Array ("calculus","el cálculo","el calculo"),
                new Array ("statistics","la estadística","la estadistica"),
                new Array ("trigonometry","la trigonometría","la trigonometria"),
                new Array ("geometry","la geometría","la geometria"),
                new Array ("physics","la física","la fisica"),
                new Array ("engineering","ingeniería","ingenieria"),
                new Array ("science","la ciencia"),                
                new Array ("biology","la biología","la biologia"),
                new Array ("chemistry","la química","la quimica"),
                new Array ("medicine","la medicina"),
                new Array ("history","la historia"),
                new Array ("archaeology","arqueología","arqueologia"),
                new Array ("anthropology","la antropología","la antropologia"),
                new Array ("sociology","la sociología","la sociologia"),
                new Array ("languages","las lenguas"),
                new Array ("psychology","psicología","psicologia"),
                new Array ("art","el arte"),
                new Array ("architecture","la arqitectura"),
                new Array ("music","la música","la musica"),
                new Array ("literature","la literatura"),
                new Array ("law","el derecho"),
                new Array ("business","el comercio"),
                new Array ("economics","la economía","la economia")
                //accounting
                //politics
      				);
      		break;
 
      case 31: // new
      				card = Array (
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("",""),
                new Array ("","")
      				);
      		break;

      default: //list for page not found
      		card = Array (
          	new Array ("page not found","página no encontrado","pagina no encontrado")
      		);
      }
	
		buildTable();
	
		correct = 0;
		wrong = 0;
		
		var cardsLeft = document.getElementById("cardsLeft");
		var attempts = document.getElementById("attempts");
		cardsLeft.innerHTML = "Remaining: " + card.length + " ";
		attempts.innerHTML = "Attempts: +" + correct + "/-" + wrong + " ";
		pullCard();
		document.getElementById('userAnswer').focus();
		
	}
	
	function initAskEnglish() {
	
		var whichWay = document.getElementById("switch");
		//whichWay.innerHTML = "&#60&#60--"; //ASCI for "<<"
		document.Arrow.src = "lArrow.png";
  	 for(var i=0; i<card.length; i=i+1) {
  	 	card[i].splice(2,1);
  	 	card[i].reverse();
  	 }
	
		correct = 0;
		wrong = 0;
		
		var cardsLeft = document.getElementById("cardsLeft");
		var attempts = document.getElementById("attempts");
		cardsLeft.innerHTML = "Remaining: " + card.length + " ";
		attempts.innerHTML = "Attempts: +" + correct + "/-" + wrong + " ";
		pullCard();
		document.getElementById('userAnswer').focus();	
	
	}
	
	function flipDeck() {
		showing = false;
		var sideAsked = document.getElementById("userSide");
		var showButton = document.getElementById("showButton");
		if (stateForward) {
			stateForward = false;
			initAskSpanish();  //re-fills the list if already begun
			initAskEnglish();
			sideAsked.innerHTML = "English: &nbsp";
		} else {
			stateForward = true;
			initAskSpanish();
			sideAsked.innerHTML = "Spanish:";
		}
		buildTable();
		showButton.innerHTML = "Show List";
	}
	
	function pullCard() {
	 if (!showing) {	
		var frontSide = document.getElementById("frontSide");
		var flipSide = document.getElementById("flipSide");
		var frontWord = document.getElementById("frontWord");
		var frontAnswer = document.getElementById("frontAnswer");
		var userAnswer = document.getElementById("userAnswer");
		var flipAnswer = document.getElementById("flipAnswer");
	  
	  flipAnswer.innerHTML = "";
	  userAnswer.value = "";
		
		if (card.length > 0) {
		
		  pulledCard = Math.floor(Math.random()*card.length);
  		sideShown = card[pulledCard][0];
  		frontWord.innerHTML = sideShown + " ";
  		
  		flipSide.innerHTML = "Answer:";
  		if (stateForward) {
  			frontSide.innerHTML = "English:";
  		} else {
  			frontSide.innerHTML = "Spanish:";
  		}
		} else {
			frontWord.innerHTML = "All words tested!" + " ";
			flipAnswer.innerHTML = "Type 'reset' &amp; click Check" + " ";
			flipSide.innerHTML = "Reload:" + " ";
			if (stateForward) {
//done english-->spanish   //greenbubble
  		} else {
//done spanish-->english  //yellowbubble
  		} 
			
		}
		
		userAnswer.focus();
	 } else {
		//do nothing, deck is showing
	 }
	 
	}
	
	function checkCard() {
	 if (!showing) {	
		document.getElementById("newWord").focus();
	
		var flipSide = document.getElementById("flipSide");	
		var cardsLeft = document.getElementById("cardsLeft");
		var attempts = document.getElementById("attempts");
		var userAnswer = document.getElementById("userAnswer");
		var flipAnswer = document.getElementById("flipAnswer");
		
		if (flipAnswer.innerHTML == "") {
		
			flipAnswer.innerHTML = card[pulledCard][1] + " ";	
		
			if (userAnswer.value.toLowerCase() == card[pulledCard][1]) {
				card.splice(pulledCard,1);
				correct += 1;
			} else {
				if (userAnswer.value.toLowerCase() == card[pulledCard][2]) {
					card.splice(pulledCard,1);
					correct += 1;
				} else {
					wrong += 1;
				}
			}
			
			cardsLeft.innerHTML = "Remaining: " + card.length + " ";
			attempts.innerHTML = "Attempts: +" + correct + "/-" + wrong + " ";
		
	  }	else {
	  	if (flipSide.innerHTML == "Reload:" + " ") {  //Type reset &amp; Check" + " ") {
	  		if (userAnswer.value == "reset") {
	  			if (stateForward) {
	  				initAskSpanish();
	  			} else {
	  				initAskSpanish(); //fill list, then flip it
	  				initAskEnglish();
	  			}
	  		}
	  	}
	  }
	 } else {
	 	//do nothing, deck is showing
	 }
	}
	
	function buildTable() {
			
			//clear table
		
			for (var i=document.getElementById("answerTable").rows.length - 1; i>=0; i=i-1) {
				document.getElementById("answerTable").deleteRow(i);
			}
			
			 //build table (this is SUPER finnicky between browsers.. don't touch!)

			var answerTable = document.getElementById("answerTable");
      var tBody = answerTable.getElementsByTagName('tbody')[0];

			for (var i=0; i<card.length; i=i+1) {
        var newTR = document.createElement('tr');
        var newTD0 = document.createElement('td');
        var newTD1 = document.createElement('td');
        newTD0.innerHTML = card[i][0];
        newTD1.innerHTML = card[i][1];
        newTR.appendChild (newTD0);
        newTR.appendChild (newTD1);
        tBody.appendChild(newTR);
      }
      
      answerTable.style.display = "none";
      document.getElementById("doneButton").style.display = "none"; 
	
	}
	
	function switchVis() {

		var showButton = document.getElementById("showButton");

//		if (stateForward) {  //repopulate tables? what if user only wants to see words he doesn't know?
//			initAskSpanish();
//		} else {
//			initAskEnglish();
//		}
		
		if (showing) {
			showButton.innerHTML = "Show List";
			document.getElementById("answerTable").style.display = "none";
			document.getElementById("doneButton").style.display = "none";
			showing = false;
			pullCard();
		} else {
			showButton.innerHTML = "Hide List";
			document.getElementById("answerTable").style.display = "block";
			document.getElementById("doneButton").style.display = "block";
			showing = true;
			document.getElementById('doneButton').focus();
		}

	}

	function disableEnterKey(e) {
		var key;
		if (window.event) {
			key = window.event.keyCode; //IE
		} else {
			key = e.which; //firefox
		}
		if (key == 13) {
			return false;
		} else {
			return true;
		}
	}