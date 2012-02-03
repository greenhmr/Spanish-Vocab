
	var card = new Array ();
	var pageIndex = 0;
	var correct = 0;
	var wrong = 0;
	var fromLang = "English: &nbsp&nbsp";
	var toLang = "Spanish: ";
	var stateForward = true;
	var showing = false;
	var adjDone = false;
	var nDone = false;
	var vrbDone = false;
	var speechPart = 1;
	
	function initPage(thisPageIndex) {
		pageIndex = thisPageIndex;
		changeColor("home");
		initAskSpanish();
	}
	
	function goSpeech(type) {
	
		if (showing) {
			switchVis();
		}
	
		if (speechPart != type) {
  		speechPart = type;
  		initAskSpanish();
  		if (!stateForward) {
  			initAskEnglish();
  		}
  	} else {
  	// do nothing, already on Nouns
  	}
  	
  	buildTable();
  	
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
		
			case 1: //foods page
      		switch (speechPart) {
      			case 2: //adj
       				card = Array (
                new Array ("spicy","picante"),
                new Array ("hot","caliente"),
                new Array ("cold","frío","frio"),
                new Array ("juicy","jugoso"),
                new Array ("tender","tierno"),
                new Array ("tough","duro"),
                new Array ("rare","poco cocido"),
                new Array ("medium well","a término medio","a termino medio"),
                new Array ("well done","bien cocido"),
                new Array ("burnt","quemado"),
                new Array ("ripe","maduro"),
                new Array ("unripe","inmaduro","verde"),
                new Array ("mushy","blando"),
                new Array ("crunchy","crujiente"),
                new Array ("fresh","fresco"),
                new Array ("healthy","sano"),
                new Array ("satisfied","satisfecho"),
                new Array ("sour","agrio"),
                new Array ("bitter","amargo"),
                new Array ("sweet","dulce"),
                new Array ("salty","salado"),
                new Array ("baked","asado"),
                new Array ("fried","frito"),
                new Array ("broiled","a la parrilla"),
                new Array ("boiled","guisado"),
                new Array ("tasty","sabroso")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("cook","cocinar"),
                new Array ("order","pedir"),
                new Array ("eat","comer"),
                new Array ("mix","mezclar"),
                new Array ("add","añadir","anadir"),
                new Array ("measure","medir"),
                new Array ("serve","servir"),
                new Array ("bake","hornear"),
                new Array ("boil","hervir"),
                new Array ("fry","freir"),
                new Array ("cut","cortar"),
                new Array ("chop","picar"),
                new Array ("chew","mascar"),
                new Array ("drink","beber","tomar"),
                new Array ("choke on","atragantarse con"),
                new Array ("ripen","madurar"),
                new Array ("taste","probar"),
                new Array ("season","sazonar"),
                new Array ("smell","oler"),
                new Array ("tastes like","saber a"),
                new Array ("snack","merendar"),
                new Array ("heat","calentar"),
                new Array ("pour","verter"),
                new Array ("peel","pelar"),
                new Array ("slice","rebanar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("bread","el pan"),
                new Array ("rice","el arroz"),
                new Array ("beans","los frijoles"),
                new Array ("seafood","el marisco"),
                new Array ("cheese","el queso"),
                new Array ("butter","la mantequilla"),
                new Array ("yogurt","el yogur"),
                new Array ("biscuit","el bizcocho"),
                new Array ("oat","la avena"),
                new Array ("onion","la cebolla"),
                new Array ("tomato","el tomate"),
                new Array ("lettuce","la lechuga"),
                new Array ("olive","la aceituna","la oliva"),
                new Array ("cucumber","el pepino"),
                new Array ("green pepper","el pimiento verde"),
                new Array ("carrot","la zanahoria"),
                new Array ("potato","la papa","la patata"),
                new Array ("sweet potato","el camote","la batata"),
                new Array ("broccoli","el brécol","el brecol"),
                new Array ("mushroom","el champiñón","el champinion"),
                new Array ("spinach","la espinaca"),
                new Array ("corn","el maíz","el maiz"),
                new Array ("garden","el huerto"),
                new Array ("farm","la granja","la hacienda"),
                new Array ("vegetable","la verdura"),
                new Array ("soy","la soya","la soja"),
                new Array ("meat","la carne"),
                new Array ("chicken","el pollo"),
                new Array ("beef","el bistec"),
                new Array ("bacon","el tocino"),
                new Array ("pork","cerdo"),
                new Array ("pork chops","chuletas de cerdo"),
                new Array ("fish","el pescado"),
                new Array ("fat","la grasa"),
                new Array ("sugar","el azúcar","el azucar"),
                new Array ("salt","la sal"),
                new Array ("pepper","el pimiento"),
                new Array ("water","el agua"),
                new Array ("wine","el vino"),
                new Array ("beer","la cerveza"),
                new Array ("coffee","el café","el cafe"),
                new Array ("vitamin","la vitamina"),
                new Array ("fruit","la fruta"),
                new Array ("orange","la naranja"),
                new Array ("apple","la manzana"),
                new Array ("banana","la banana","el plátano"),
                new Array ("pineapple","la piña","la pina"),
                new Array ("raisin","la pasa"),
                new Array ("strawberry","la fresa"),
                new Array ("fig","el higo"),
                new Array ("cherry","la cereza"),
                new Array ("lemon","el limón","el limon"),
                new Array ("lime","la lima"),
                new Array ("grapefruit","el pomelo","la toronja"),
                new Array ("grapes","las uvas"),
                new Array ("watermelon","la sandía","la sandia"),
                new Array ("coconut","el coco"),
                new Array ("juice","el jugo","el zumo"),
                new Array ("milk","la leche"),
                new Array ("tea","el té","el te"),
                new Array ("chocolate","el chocolate"),
                new Array ("plate","el plato"),
                new Array ("bowl","el tazón","el tazon"),
                new Array ("cup","la taza"),
                new Array ("glass","el vaso"),
                new Array ("fork","el tenedor"),
                new Array ("knife","el cuchillo"),
                new Array ("spoon","la cuchara"),
                new Array ("bottle","la botella"),
                new Array ("napkin","la servilleta"),
                new Array ("dinner","la cena"),
                new Array ("lunch","el almuerzo"),
                new Array ("breakfast","el desayuno"),
                new Array ("meal","la comida"),
                new Array ("leftovers","las sobras"),
                new Array ("soup","la sopa"),
                new Array ("broth","el caldo"),
                new Array ("food","la comida"),
                new Array ("snack","el bocadillo","la merienda"),
                new Array ("dessert","el postre"),
                new Array ("salad","la ensalada"),
                new Array ("cookie","la galleta"),
                new Array ("cake","el pastel"),
                new Array ("ice cream","el helado"),
                new Array ("nut","la nuez"),
                new Array ("peanut","el cacahuete","el maní"),
                new Array ("honey","la miel"),
                new Array ("pasta","la pasta"),
                new Array ("sauce","la salsa"),
                new Array ("avocado","el aguacate"),
                new Array ("egg","el huevo"),
                new Array ("herb","la hierba"),
                new Array ("spice","la especia"),
                new Array ("cinnamon","la canela"),
                new Array ("garlic","el ajo"),
                new Array ("flavor","el sabor"),
                new Array ("hunger","el hambre"),
                new Array ("manners","los modales"),
                new Array ("sandwich","el sanguche","el sándwich"),
                new Array ("server","el mesero","el camarero"),
                new Array ("tip","la propina"),
                new Array ("check","la cuenta"),
                new Array ("table","la mesa"),
                new Array ("menu","el menú","el menu"),
                new Array ("reservation","la reservación","la reservacion"),
                new Array ("smell","el olor"),
                new Array ("soda","el refresco")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      		
			case 2: //house page
      		switch (speechPart) {
      			case 2: //adj
       				card = Array (
                new Array ("at home","en casa"),
                new Array ("outside","afuera"),
                new Array ("modern","moderno"),
                new Array ("comfortable","cómodo","comodo"),
                new Array ("clean","limpio"),
                new Array ("dirty","sucio")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("set the table","poner la mesa"),
                new Array ("clear the table","quitar la mesa"),
                new Array ("sweep the floor","barrer el piso"),
                new Array ("mow the lawn","cortar el césped","cortar el cesped"),
                new Array ("take out trash","sacar la basura"),
                new Array ("wash the dishes","lavar los platos"),
                new Array ("water the plants","regar las plantas"),
                new Array ("make the bed","hacer la cama"),
                new Array ("turn on","encender"),
                new Array ("turn off","apagar"),
                new Array ("unplug","desconectar","desenchufar"),
                new Array ("plug in","enchufar"),
                new Array ("paint","pintar"),
                new Array ("clean","limpiar"),
                new Array ("organize","organizar"),
                new Array ("decorate","decorar"),
                new Array ("sweep","barrer"),
                new Array ("vacuum","pasar la aspiradora"),
                new Array ("wash the clothes","lavar la ropa"),
                new Array ("dry the clothes","secar la ropa"),
                new Array ("iron the clothes","planchar la ropa"),
                new Array ("fold the clothes","arreglar la ropa"),
                new Array ("clean the room","arreglar el cuarto")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
              new Array ("house","la casa"),
              new Array ("garage","el garaje"),
              new Array ("roof","el tejado"),
              new Array ("ceiling","el techo"),
              new Array ("attic","el ático","el atico"),
              new Array ("basement","el sótano","el sotano"),
              new Array ("door","la puerta"),
              new Array ("air conditioning","el aire acondicionado"),
              new Array ("pipe","la tubería","el tubo"),
              new Array ("floor","el suelo","el piso"),
              new Array ("room","el cuarto","la habitación"),
              new Array ("wall","la pared"),
              new Array ("painting","la pintura","el cuadro"),
              new Array ("yard","el patio"),
              new Array ("fence","la cerca"),
              new Array ("pool","la piscina","la pileta"),
              new Array ("mailbox","el buzón","el buzon"),
              new Array ("window","la ventana"),
              new Array ("pantry","la dispensa"),
              new Array ("closet","el ropero","el armario"),
              new Array ("bathroom","el baño"),
              new Array ("kitchen","la cocina"),
              new Array ("dining room","el comedor"),
              new Array ("living room","la sala"),
              new Array ("bedroom","el dormitorio"),
              new Array ("bed","la cama"),
              new Array ("pillow","la almohada"),
              new Array ("sheet","la sábana","la sabana"),
              new Array ("carpet","la alfombra"),
              new Array ("stairs","las escaleras"),
              new Array ("chimney","la chiminea"),
              new Array ("hallway","el pasillo"),
              new Array ("corner","el rincón","el rincon"),
              new Array ("faucet","el grifo","la llave"),
              new Array ("sink","el lavabo","el lavamanos"),
              new Array ("bathtub","la bañera","la banera"),
              new Array ("shower","la ducha"),
              new Array ("mirror","el espejo"),
              new Array ("toilet","el retrete","el inodoro"),
              new Array ("kitchen sink","el fregadero","el lavaplatos"),
              new Array ("refrigerator","la nevera","el refrigerador"),
              new Array ("freezer","el congelador"),
              new Array ("microwave","el microondas"),
              new Array ("oven","el horno"),
              new Array ("stove","la estufa"),
              new Array ("pot","la olla"),
              new Array ("pan","la sartén","la sarten"),
              new Array ("television","el televisor"),
              new Array ("speakers","los parlantes","los altavoces"),
              new Array ("doorknob","el pomo"),
              new Array ("key","la llave"),
              new Array ("shelf","el estante"),
              new Array ("furniture","los muebles"),
              new Array ("desk","el escritorio"),
              new Array ("table","la mesa"),
              new Array ("chair","la silla"),
              new Array ("couch","el sofá","el sofa"),
              new Array ("cushion","el cojín","el cojin"),
              new Array ("armchair","el sillón","el sillon"),
              new Array ("doorbell","el timbre"),
              new Array ("switch","el interruptor"),
              new Array ("cabinet","el armario"),
              new Array ("dresser","el tocador"),
              new Array ("drawer","el cajón","el cajon"),
              new Array ("chores","las tareas"),
              new Array ("curtain","la cortina"),
              new Array ("fan","el ventilador"),
              new Array ("lamp","la lámpara","la lampara"),
              new Array ("light","la luz"),
              new Array ("electric outlet","el enchufe"),
              new Array ("computer","la computadora"),
              new Array ("dust","el polvo"),
              new Array ("vacuum","la aspiradora"),
              new Array ("washer","la lavadora"),
              new Array ("dryer","la secadora"),
              new Array ("dishwasher","el lavaplatos"),
              new Array ("iron","la plancha"),
              new Array ("garbage","la basura")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;

			case 3: //time page
      		switch (speechPart) {
      			case 2: //adj
       				card = Array (
                new Array ("now","ahora"),
                new Array ("later","luego"),
                new Array ("currently","actualmente"),
                new Array ("during","durante"),
                new Array ("when","cuando"),
                new Array ("tomorrow","mañana","manana"),
                new Array ("yesterday","ayer"),
                new Array ("last night","anoche"),
                new Array ("tomorrow morning","mañana por la mañana","manana por la manana"),
                new Array ("last year","el año pasado","el ano pasado"),
                new Array ("this year","éste año","este ano"),
                new Array ("next year","el año que viene","el ano que viene"),
                new Array ("late","tarde"),
                new Array ("early","temprano"),
                new Array ("on time","a tiempo"),
                new Array ("around","alrededor de"),
                new Array ("exactly","en punto"),
                new Array ("BC","antes de Cristo"),
                new Array ("AD","después de Cristo","despues de Cristo"),
                new Array ("continuous","continuo"),
                new Array ("intermittent","intermitente"),
                new Array ("often","a menudo"),
                new Array ("sometimes","a veces","algunas veces"),
                new Array ("quickly","rápidamente","rapidamente"),
                new Array ("slowly","lentamente"),
                new Array ("fast","rápido","rapido"),
                new Array ("slow","despacio"),
                new Array ("previous","anterior"),
                new Array ("last","el último","el ultimo")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("hurry up","apurarse"),
                new Array ("wait","esperar"),
                new Array ("pause","hacer una pausa"),
                new Array ("rewind","rebobinar"),
                new Array ("stop","parar"),
                new Array ("fast forward","adelantar"),
                new Array ("continue","continuar"),
                new Array ("follow","seguir"),
                new Array ("prepare","preparar"),
                new Array ("take (time)","tardar"),
                new Array ("tell time","decir la hora"),
                new Array ("predict","predecir"),
                new Array ("last","durar"),
                new Array ("begin","empezar"),
                new Array ("interrupt","interrumpir"),
                new Array ("end","terminar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("time","el tiempo"),
                new Array ("moment","el momento"),
                new Array ("second","el segundo"),
                new Array ("minute","el minuto"),
                new Array ("hour","la hora"),
                new Array ("half hour","la media hora"),
                new Array ("day","el día","el dia"),
                new Array ("week","la semana"),
                new Array ("month","el mes"),
                new Array ("season","la estación","la estacion"),
                new Array ("year","el año","el ano"),
                new Array ("decade","la década","la decada"),
                new Array ("century","el siglo"),
                new Array ("time period","la época","la epoca"),
                new Array ("schedule","el horario"),
                new Array ("sequence","el orden"),
                new Array ("memory","la memoria"),
                new Array ("past","el pasado"),
                new Array ("present","el presente"),
                new Array ("future","el futuro"),
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
                new Array ("winter","el invierno"),
                new Array ("monday","lunes"),
                new Array ("tuesday","martes"),
                new Array ("wednesday","miércoles","miercoles"),
                new Array ("thursday","jueves"),
                new Array ("friday","viernes"),
                new Array ("saturday","sábado","sabado"),
                new Array ("sunday","domingo"),
                new Array ("week","la semana"),
                new Array ("one forty","la una y cuarenta"),
                new Array ("two thirty","las dos y media"),
                new Array ("three ten","las tres y diez"),
                new Array ("four fifteen","las cuatro y cuarto"),
                new Array ("five twenty-five","las cinco y veinticinco"),
                new Array ("quarter til seven","las siete menos cuarto"),
                new Array ("seven o'clock","las siete"),
                new Array ("eleven forty-seven","las once y cuarenta y siete"),
                new Array ("twelve o'clock","las doce"),
                new Array ("noon","el mediodía","el mediodia"),
                new Array ("midday","la medianoche"),
                new Array ("in the morning","de la mañana","de la manana"),
                new Array ("in the afternoon","de la tarde"),
                new Array ("in the evening","de la noche"),
                new Array ("pause","la pausa"),
                new Array ("hurry","la prisa")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      		
      					case 4: //family & body page --> Change to include all "People" lists
      		switch (speechPart) {
      			case 2: //adj
       				card = Array (
								new Array ("tired","cansado"),
								new Array ("pregnant","emarazada"),
								new Array ("sick","enfermo"),
								new Array ("blind","ciego"),
								new Array ("old","viejo"),
								new Array ("young","joven"),
								new Array ("dead","muerto"),
								new Array ("alive","vivo"),
								new Array ("active","activo"),
								new Array ("healthy","sano"),
								new Array ("strong","fuerte"),
								new Array ("weak","débil","debil"),
								new Array ("blonde","rubio"),
								new Array ("brown hair","pelo castaño","pelo castano"),
								new Array ("redhead","pelirrojo"),
								new Array ("tall","alto"),
								new Array ("short","bajo"),
								new Array ("big","grande"),
								new Array ("small","pequeño","pequeno"),
								new Array ("thin","delgado","flaco"),
								new Array ("fat","gordo"),
								new Array ("tanned","bronceado")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
       					new Array ("watch","mirar"),
       					new Array ("see","ver"),
       					new Array ("listen","escuchar"),
       					new Array ("hear","oir"),
       					new Array ("touch","tocar"),
       					new Array ("chew","BLANK"),
       					new Array ("bite","BLANK"),
       					new Array ("taste","probar"),
       					new Array ("feel","sentir"),
       					new Array ("think","pensar"),
       					new Array ("hug","abrazar"),
       					new Array ("kiss","besar"),
       					new Array ("make love","hacer el amor"),
       					new Array ("read","leer"),
       					new Array ("squeeze","BLANK"),
       					new Array ("hold","BLANK"),
       					new Array ("grab","BLANK"),
       					new Array ("catch","BLANK"),
       					new Array ("throw","BLANK"),
       					new Array ("kick","BLANK"),
								new Array ("divorce","divorciarse"),
								new Array ("exercise","hacer el ejercicio"),
								new Array ("give birth","dar la luz"),
								new Array ("marry","casarse"),
								new Array ("stretch","estirar"),
								new Array ("recover","recuperar"),
								new Array ("lift","levantar"),
								new Array ("jump","saltar"),
								new Array ("pull","tirar","jalar"),
								new Array ("push","empujar"),
								new Array ("run","correr"),
								new Array ("walk","caminar"),
								new Array ("swim","nadar"),
								new Array ("trip","tropezar"),
								new Array ("miss","extrañar","echar de menos"),
								new Array ("bleed","sangrar"),
								new Array ("rest","descansar"),
								new Array ("sleep","dormir"),
								new Array ("live","vivir"),
								new Array ("die","morir"),
								new Array ("injure","herir"),
								new Array ("sneeze","estornudar"),
								new Array ("cough","toser"),
								new Array ("smile","sonreír","sonreir"),
								new Array ("laugh","reir"),
								new Array ("heal","curar"),
								new Array ("hurts","doler")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
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
                new Array ("mother in law","la suegra"),
                new Array ("friend","el amigo"),
                new Array ("friend with benefits","el amigovio"),
                new Array ("girlfriend","la novia"),
                new Array ("boyfriend","el novio"),
                new Array ("couple","la pareja"),
                new Array ("enemy","el enemigo"),
                new Array ("roommate","el compañero de cuarto","el companero de cuarto"),
                new Array ("classmate","el compañero de clase","el companero de clase"),
                new Array ("colleague","la colega"),
                new Array ("teammate","el compañero de equipo","el companero de equipo"),
                new Array ("toe","el dedo del pie"),
                new Array ("foot","el pie"),
                new Array ("ankle","el tobillo"),
                new Array ("calf","la pantorilla"),
                new Array ("knee","la rodilla"),
                new Array ("thigh","el muslo"),
                new Array ("leg","la pierna"),
                new Array ("hip","la cadera"),
                new Array ("buttocks","el trasero"),
                new Array ("belly","el vientre"),
                new Array ("stomach","el estómago","el estomago"),
                new Array ("back","la espalda"),
                new Array ("chest","el pecho"),
                new Array ("shoulder","el hombro"),
                new Array ("arm","el brazo"),
                new Array ("elbow","el codo"),
                new Array ("wrist","la muñeca","la muneca"),
                new Array ("vein","la vena"),
                new Array ("artery","la arteria"),
                new Array ("blood","la sangre"),
                new Array ("hand","la mano"),
                new Array ("finger","el dedo"),
                new Array ("fingernail","la uña","la una"),
                new Array ("knuckle","el nudillo"),
                new Array ("bone","el hueso"),
                new Array ("neck","el cuello"),
                new Array ("chin","la barbilla"),
                new Array ("beard","la barba"),
                new Array ("moustache","el bigote"),
                new Array ("lip","el labio"),
                new Array ("teeth","los dientes"),
                new Array ("tongue","la lengua"),
                new Array ("mouth","la boca"),
                new Array ("face","la cara"),
                new Array ("head","la cabeza"),
                new Array ("nose","la nariz"),
                new Array ("eye","el ojo"),
                new Array ("eyelash","la pestaña","la pestana"),
                new Array ("eyebrow","la ceja"),
                new Array ("pupil","la pupila"),
                new Array ("zit","el grano"),
                new Array ("freckle","la peca"),
                new Array ("ear","la oreja"),
                new Array ("hair","el pelo","el cabello"),
                new Array ("lung","el pulmón","el pulmon"),
                new Array ("heart","el corazón","el corazon"),
                new Array ("brain","el cerebro"),
                new Array ("muscle","el músculo","el musculo"),
                new Array ("sweat","el sudor","la transpiración"),
                new Array ("tears","las lágrimas","las lagrimas"),
                new Array ("doctor","el médico","el medico"),
                new Array ("lawyer","el abogado"),
                new Array ("politician","el político","el politico"),
                new Array ("entrepreneur","el empresario"),
                new Array ("homemaker","la ama de casa"),
                new Array ("teacher","el maestro"),
                new Array ("professor","el profesor"),
                new Array ("boss","el jefe"),
                new Array ("writer","el escritor"),
                new Array ("soldier","soldado"),
                new Array ("salesman","el vendedor"),
                new Array ("waiter","el camarero","el mesero"),
                new Array ("waitress","la camarera"),
                new Array ("policeman","el policía"),
                new Array ("actor","el actor"),
                new Array ("actress","la actriz"),
                new Array ("singer","el cantante"),
                new Array ("athlete","el atleta"),
                new Array ("driver","el conductor"),
                new Array ("cashier","el cajero"),
                new Array ("student","el estudiante"),
                new Array ("beggar","el mendigo"),
                new Array ("homeless","los sin techo"),
                new Array ("barber","el peluquero"),
                new Array ("artist","el artista"),
                new Array ("musician","el músico","el musico"),
                new Array ("socks","los calcetines"),
                new Array ("shoes","los zapatos"),
                new Array ("pants","los pantalones"),
                new Array ("shorts","los pantalones cortos"),
                new Array ("t-shirt","la camiseta"),
                new Array ("shirt","la camisa"),
                new Array ("dress","el vestido"),
                new Array ("hat","el sombrero"),
                new Array ("cap","la gorra"),
                new Array ("jacket","la chaqueta")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
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
  			switch (speechPart) {
  				case 2: //adj
  					document.adjBubble.src = "greenBubble.png";
  					adjDone = true;
  					break;
  				case 3: //vrb
  					document.vrbBubble.src = "greenBubble.png";
  					vrbDone = true;
  					break;
  				default: //nouns or other
  					document.nBubble.src = "greenBubble.png";
  					nDone = true;
  					break;
  			}
  		} else {
  			switch (speechPart) {
  				case 2: //adj
  					if (!adjDone) {
  						document.adjBubble.src = "yellowBubble.png";
  					} break;
  				case 3: //vrb
  					if (!vrbDone) {
  						document.vrbBubble.src = "yellowBubble.png";
  					}	break;
  				default: //nouns or other
  					if (!nDone) {
  						document.nBubble.src = "yellowBubble.png";
  					}	break;
  			}
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
//					document.feedback.src = "equals.png";
				} else {
					wrong += 1;
//					document.feedback.src = "notequal.png";
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