
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
		
			case 1: //vegetables page
      		switch (speechPart) {
      			case 2: //adj
       				card = Array (
          			new Array ("mushy","blando"),
      					new Array ("ripe","maduro"),
      					new Array ("unripe","verde"),
      					new Array ("fresh","fresco"),
      					new Array ("juicy","jugoso"),
          			new Array ("healthy","sano")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
          			new Array ("eat","comer"),
          			new Array ("chop","picar"),
          			new Array ("ripen", "madurar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
          			new Array ("broccoli","el brécol","el brecol"),
          			new Array ("carrot","la zanahoria"),
          			new Array ("corn","el maíz","el maiz"),
          			new Array ("garlic","el ajo"),
          			new Array ("garden","el huerto"),
          			new Array ("green pepper","el pimiento verde"),
          			new Array ("onion","la cebolla"),
          			new Array ("potato","la papa","la patata"),
          			new Array ("tomato","el tomate"),
          			new Array ("vegetable","la verdura")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      		
			case 2: //supermarket page
      		switch (speechPart) {
      			case 2: //adj
       				card = Array (
          			new Array ("wet","mojado"),
          			new Array ("dairy","lácteo"),
          			new Array ("frozen","congelado"),
      					new Array ("clean","limpio")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
          			new Array ("choose","escoger"),
          			new Array ("save","ahorrar"),
          			new Array ("grab", "agarrar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
          			new Array ("aisle","el pasillo"),
          			new Array ("cart","carrito"),
          			new Array ("bag","la bolsa"),
          			new Array ("meat","la carne"),
								new Array ("spice","la especia"),
          			new Array ("bread","el pan")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      
      case 3: //A cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("abnormal","abnormal"),
                new Array ("abominable","abominable"),
                new Array ("absolutely","absolutamente"),
                new Array ("absurd","absurdo"),
                new Array ("active","activo"),
                new Array ("admirable","admirable"),
                new Array ("adult","adulto"),
                new Array ("aesthetic","estético"),
                new Array ("agressive","agresivo"),
                new Array ("agile","ágil","agil"),
                new Array ("agreeable","agradable"),
                new Array ("alternately","alternativamente"),
                new Array ("ambitious","ambicioso"),
                new Array ("american","americano"),
                new Array ("amicable","amigable"),
                new Array ("annual","anual"),
                new Array ("anonymous","anónimo","anonimo"),
                new Array ("anterior","anterior"),
                new Array ("arid","árido","arido"),
                new Array ("arrogant","arrogante"),
                new Array ("artificial","artificial"),
                new Array ("artistic","artístico","artistico"),
                new Array ("athletic","atlético","atletico"),
                new Array ("attentive","atento"),
                new Array ("attractive","atractivo"),
                new Array ("audacious","audaz"),
                new Array ("authentic","auténtico","autentico"),
                new Array ("automatic","automático","automatico")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("abandon","abandonar"),
                new Array ("absorb","absorber"),
                new Array ("abuse","abusar"),
                new Array ("accelerate","acelerar"),
                new Array ("accompany","acompañar","acompanar"),
                new Array ("accumulate","acumular"),
                new Array ("accuse","acusar"),
                new Array ("accustom","acostumbrar"),
                new Array ("act","actuar"),
                new Array ("adapt","adaptar"),
                new Array ("adjust","ajustar"),
                new Array ("admire","admirar"),
                new Array ("admit","admitir"),
                new Array ("adopt","adoptar"),
                new Array ("advance","avanzar"),
                new Array ("affect","afectar"),
                new Array ("aggregate","agregar"),
                new Array ("alternate","alternar"),
                new Array ("amplify","amplificar"),
                new Array ("analyze","analizar"),
                new Array ("announce","anunciar"),
                new Array ("anticipate","anticipar"),
                new Array ("appear","aparecer"),
                new Array ("asphyxiate","asfixiar"),
                new Array ("assimilate","asimilar"),
                new Array ("attack","atacar"),
                new Array ("augment","aumentar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("abuse","el abuso"),
                new Array ("accent","el acento"),
                new Array ("access","el acceso"),
                new Array ("accident","el accidente"),
                new Array ("accord","el acuerdo"),
                new Array ("acid","el ácido","el acido"),
                new Array ("act","el acto"),
                new Array ("action","acción","accion"),
                new Array ("activity","la actividad"),
                new Array ("actor","el actor"),
                new Array ("actress","la actriz"),
                new Array ("addition","la adición","la adicion"),
                new Array ("administration","la administración","la administracion"),
                new Array ("adventure","la aventura"),
                new Array ("adventurer","el aventurero"),
                new Array ("adverb","el adverbio"),
                new Array ("agent","el agente"),
                new Array ("agriculture","la agricultura"),
                new Array ("air","el aire"),
                new Array ("alcohol","el alcohol"),
                new Array ("alcoholic","el alcohólico","el alcoholico"),
                new Array ("alliance","la alianza"),
                new Array ("ambition","ambición","ambicion"),
                new Array ("ambulance","la ambulancia"),
                new Array ("analogy","la analogía","la analogia"),
                new Array ("analysis","el análisis","el analisis"),
                new Array ("anarchy","la anarquía","la anarquia"),
                new Array ("angel","el ángel","el angel"),
                new Array ("angle","el ángulo","el angulo"),
                new Array ("anniversary","el aniversario"),
                new Array ("apparatus","el aparato"),
                new Array ("appendix","el apéndice","el apendice"),
                new Array ("appetite","el apetito"),
                new Array ("applause","el aplauso"),
                new Array ("architect","el arquitecto"),
                new Array ("architecture","la arquitectura"),
                new Array ("argument","el argumento"),
                new Array ("aroma","el aroma"),
                new Array ("art","el arte"),
                new Array ("aticle","el artículo","el articulo"),
                new Array ("artist","el artista"),
                new Array ("assailant","el asaltante"),
                new Array ("association","la asociación","la asociacion"),
                new Array ("athlete","el atleta"),
                new Array ("atmosphere","la atmósfera","la atmosphera"),
                new Array ("atom","el átomo","el atomo"),
                new Array ("attack","el ataque"),
                new Array ("attention","la atención","la atencion"),
                new Array ("attic","el ático","el atico"),
                new Array ("attitude","la actitud"),
                new Array ("attraction","la atracción","la atraccion"),
                new Array ("audience","la audiencia"),
                new Array ("author","el autor"),
                new Array ("authority","la autoridad"),
                new Array ("automobile","el automóvil"),
                new Array ("avenue","la avenida")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      
      case 4: //B cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("brilliant","brillante"),
                new Array ("bronzed","bronceado"),
                new Array ("brutal","brutal"),
                new Array ("bravo","bravo")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("balance","balancear"),
                new Array ("benefit","beneficiar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("balance","la balanza"),
                new Array ("balloon","el balón","el balon"),
                new Array ("bandit","el bandido"),
                new Array ("bank","el banco"),
                new Array ("banker","el banquero"),
                new Array ("barbarity","la barbaridad"),
                new Array ("barber","el barbero"),
                new Array ("base","la base"),
                new Array ("battery","la batería","la bateria"),
                new Array ("battle","la batalla"),
                new Array ("benefit","el beneficio"),
                new Array ("bicycle","la bicicleta"),
                new Array ("biography","la biografía","la biografia"),
                new Array ("boat","el bote"),
                new Array ("bomb","la bomba")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;

      case 5: //C cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                  new Array ("catholic","católico","catolico"),
                  new Array ("central","central"),
                  new Array ("chaotic","caótico","caotico"),
                  new Array ("characteristic","característico","caracteristico"),
                  new Array ("christian","cristiano"),
                  new Array ("classic","clásico","clasico"),
                  new Array ("comical","cómico","comico"),
                  new Array ("common","común","comun"),
                  new Array ("complete","completo"),
                  new Array ("completely","completamente"),
                  new Array ("complex","complejo"),
                  new Array ("confident","confidente"),
                  new Array ("constant","constante"),
                  new Array ("contagious","contagioso"),
                  new Array ("continual","continuo"),
                  new Array ("correct","correcto"),
                  new Array ("correctly","correctamente"),
                  new Array ("criminal","criminal"),
                  new Array ("cruel","cruel"),
                  new Array ("curious","curioso")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("calculate","calcular"),
                new Array ("calm","calmar"),
                new Array ("capture","capturar"),
                new Array ("cause","causar"),
                new Array ("celebrate","celebrar"),
                new Array ("classify","clasificar"),
                new Array ("collaborate","colaborar"),
                new Array ("combine","combinar"),
                new Array ("commence","comenzar"),
                new Array ("communicate","comunicar"),
                new Array ("compare","comparar"),
                new Array ("complete","completar"),
                new Array ("complicate","complicar"),
                new Array ("comprehend","comprender"),
                new Array ("concentrate","concentrar"),
                new Array ("conclude","concluir"),
                new Array ("confess","confesar"),
                new Array ("confirm","confirmar"),
                new Array ("conquer","conquistar"),
                new Array ("conserve","conservar"),
                new Array ("consider","considerar"),
                new Array ("construct","construir"),
                new Array ("consult","consultar"),
                new Array ("contain","contener"),
                new Array ("continue","continuar"),
                new Array ("contribute","contribuir"),
                new Array ("control","controlar"),
                new Array ("convert","convertir"),
                new Array ("convince","convencer"),
                new Array ("cooperate","cooperar"),
                new Array ("copy","copiar"),
                new Array ("cost","costar"),
                new Array ("count","contar"),
                new Array ("create","crear"),
                new Array ("cultivate","cultivar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("cable","el cable"),
                new Array ("cafe","el café","el cafe"),
                new Array ("calendar","el calendario"),
                new Array ("candidate","el candidato"),
                new Array ("capacity","la capacidad"),
                new Array ("capital","la capital"),
                new Array ("captain","el capitán","el capitan"),
                new Array ("career","la carrera"),
                new Array ("carpenter","el carpintero"),
                new Array ("category","la categoría","la categoria"),
                new Array ("cathedral","la catedral"),
                new Array ("cause","la causa"),
                new Array ("cement","el cemento"),
                new Array ("center","el centro"),
                new Array ("ceremony","la ceremonia"),
                new Array ("champagne","la champaña","la champana"),
                new Array ("champion","el campeón","el campeon"),
                new Array ("chaos","el caos"),
                new Array ("characteristic","la característica","la caracteristica"),
                new Array ("check","el cheque"),
                new Array ("chimney","la chimenea"),
                new Array ("chocolate","el chocolate"),
                new Array ("cigar","el cigarro"),
                new Array ("cigarette","el cigarillo"),
                new Array ("cinema","el cine"),
                new Array ("circle","el círculo","el circulo"),
                new Array ("circumstance","la circumstancia"),
                new Array ("circus","el circo"),
                new Array ("civilization","la civilización","la civilizacion"),
                new Array ("class","la clase"),
                new Array ("client","el cliente"),
                new Array ("climate","el clima"),
                new Array ("club","el club"),
                new Array ("code","el código","el codigo"),
                new Array ("coincidence","la coincidencia"),
                new Array ("colony","la colonia"),
                new Array ("color","el color"),
                new Array ("combination","la combinación","la combinacion"),
                new Array ("community","la comunidad"),
                new Array ("company","la compañía","la compania"),
                new Array ("comparison","la comparación","la comparacion"),
                new Array ("compromise","el compromiso"),
                new Array ("concept","el concepto"),
                new Array ("conclusion","la conclusión","la conclusion"),
                new Array ("concrete","el concreto"),
                new Array ("condition","la condición","la condicion"),
                new Array ("confidence","la confianza"),
                new Array ("confirmation","la confirmación","la confirmacion"),
                new Array ("conflict","el conflicto"),
                new Array ("confusion","la confusión","la confusion"),
                new Array ("congress","el congreso"),
                new Array ("conscience","la conciencia"),
                new Array ("consequence","la consecuencia"),
                new Array ("constitution","la constitución","la constitucion"),
                new Array ("construction","la construcción"),
                new Array ("contact","el contacto"),
                new Array ("continent","el continente"),
                new Array ("contract","el contrato"),
                new Array ("contradiction","la contradicción","la contradiccion"),
                new Array ("control","el control"),
                new Array ("conversation","la conversación","la conversacion"),
                new Array ("copy","la copia"),
                new Array ("coral","el coral"),
                new Array ("corruption","la corrupción","la corrupcion"),
                new Array ("cost","el costo"),
                new Array ("course","el curso"),
                new Array ("courtesy","la cortesía","la cortesia"),
                new Array ("cream","la crema"),
                new Array ("creation","la creación","la creacion"),
                new Array ("creature","la criatura"),
                new Array ("credit","el crédito","el credito"),
                new Array ("crime","el crimen"),
                new Array ("criminal","el criminal"),
                new Array ("crisis","la crisis"),
                new Array ("crystal","el cristal"),
                new Array ("cube","el cubo"),
                new Array ("culture","la cultura"),
                new Array ("curiosity","la curiosidad"),
                new Array ("cylinder","el cilindro")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;      

      case 6: //D cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("decent","decente"),
                new Array ("delicious","delicioso"),
                new Array ("democratic","democrático","democratico"),
                new Array ("different","diferente"),
                new Array ("difficult","difícil","dificil"),
                new Array ("direct","directo"),
                new Array ("disagreeable","desagradable"),
                new Array ("distant","distante"),
                new Array ("distinct","distinto"),
                new Array ("double","doble"),
                new Array ("dramatic","dramático","dramatico")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("decide","decidir"),
                new Array ("decorate","decorar"),
                new Array ("dedicate","dedicar"),
                new Array ("defend","defender"),
                new Array ("define","definir"),
                new Array ("demonstrate","demostrar"),
                new Array ("deposit","depositar"),
                new Array ("descend","descender"),
                new Array ("describe","describir"),
                new Array ("desire","desear"),
                new Array ("determine","determinar"),
                new Array ("devour","devorar"),
                new Array ("dissolve","disolver"),
                new Array ("distinguish","distinguir"),
                new Array ("distribute","distribuir"),
                new Array ("divide","dividir"),
                new Array ("divine","adivinar"),
                new Array ("divorce","divorciar"),
                new Array ("double","doblar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("debate","el debate"),
                new Array ("decision","la decisión","la decision"),
                new Array ("declaration","la declaración","la declaracion"),
                new Array ("decoration","la decoración","la decoracion"),
                new Array ("defect","el defecto"),
                new Array ("defense","la defensa"),
                new Array ("definition","la definición","la definicion"),
                new Array ("democracy","la democracia"),
                new Array ("desert","el desierto"),
                new Array ("destination","la destinación","la destinacion"),
                new Array ("destiny","el destino"),
                new Array ("detail","el detalle"),
                new Array ("diamond","el diamante"),
                new Array ("dictionary","el diccionario"),
                new Array ("difference","la diferencia"),
                new Array ("difficulty","la dificultad"),
                new Array ("dignity","la dignidad"),
                new Array ("direction","la dirección","la direccion"),
                new Array ("disaster","el desastre"),
                new Array ("disc","el disco"),
                new Array ("discipline","la disciplina"),
                new Array ("distance","la distancia"),
                new Array ("distraction","la distracción","la distraccion"),
                new Array ("division","la división","la division"),
                new Array ("doctor","el doctor"),
                new Array ("document","el documento"),
                new Array ("dragon","el dragón","el dragon")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      		
      case 7: //E cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("eccentric","excéntrico"),
                new Array ("electric","eléctrico","electrico"),
                new Array ("electronic","electrónico","electronico"),
                new Array ("elocuent","elocuente"),
                new Array ("enormous","enorme"),
                new Array ("equivalent","equivalente"),
                new Array ("especially","especialmente"),
                new Array ("essential","esencial"),
                new Array ("eternal","eterno"),
                new Array ("exact","exacto"),
                new Array ("exactly","exactamente"),
                new Array ("excellent","excelente"),
                new Array ("except","excepto"),
                new Array ("exclusive","exclusivo"),
                new Array ("expressive","expresivo"),
                new Array ("extra","extra"),
                new Array ("extraordinary","extraordinario"),
                new Array ("extraterrestrial","extraterrestre"),
                new Array ("extreme","extremo")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("eliminate","eliminar"),
                new Array ("enter","entrar"),
                new Array ("establish","establecer"),
                new Array ("evacuate","evacuar"),
                new Array ("evaluate","evaluar"),
                new Array ("exaggerate","exagerar"),
                new Array ("examin","examinar"),
                new Array ("exclude","excluir"),
                new Array ("exist","existir"),
                new Array ("exploit","explotar"),
                new Array ("explore","explorar"),
                new Array ("express","expresar"),
                new Array ("extinguish","extinguir")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("echo","el eco"),
                new Array ("economy","la economía","la economia"),
                new Array ("education","la educación","la educacion"),
                new Array ("effect","el efecto"),
                new Array ("egoist","el egoísta","el egoista"),
                new Array ("election","la elección","la eleccion"),
                new Array ("electricity","la electricidad"),
                new Array ("element","el elemento"),
                new Array ("elevation","la elevación","la elevacion"),
                new Array ("emotion","la emoción","la emocion"),
                new Array ("emphasis","el énfasis","el enfasis"),
                new Array ("enemy","el enemigo"),
                new Array ("energy","la energía","la energia"),
                new Array ("enigma","el enigma"),
                new Array ("enthusiasm","el entusiasmo"),
                new Array ("episode","el episodio"),
                new Array ("error","el error"),
                new Array ("eternity","la eternidad"),
                new Array ("evidence","la evidencia"),
                new Array ("evolution","la evolución","la evolucion"),
                new Array ("exaggeration","la exageración","la exageracion"),
                new Array ("examination","el examen"),
                new Array ("exception","la excepción","la excepcion"),
                new Array ("excess","el exceso"),
                new Array ("excuse","la excusa"),
                new Array ("expedition","la expedición","la expedicion"),
                new Array ("experience","la experiencia"),
                new Array ("expert","el experto"),
                new Array ("explosion","la explosión","la explosion")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break; 

      case 7: //F cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("false","falso"),
                new Array ("famous","famoso"),
                new Array ("fantastic","fantástico","fantastico"),
                new Array ("favorable","favorable"),
                new Array ("favorite","favorito"),
                new Array ("feminine","femenino"),
                new Array ("final","final"),
                new Array ("finally","finalmente"),
                new Array ("firm","firme"),
                new Array ("fortunate","afortunado"),
                new Array ("fragile","frágil","fragil"),
                new Array ("frequent","frecuente"),
                new Array ("fresh","fresco")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("fascinate","fascinar"),
                new Array ("float","flotar"),
                new Array ("force","forzar"),
                new Array ("form","formar"),
                new Array ("fortify","fortificar"),
                new Array ("function","funcionar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("factor","el factor"),
                new Array ("faculty","la facultad"),
                new Array ("family","la familia"),
                new Array ("fantasy","la fantasía","la fantasia"),
                new Array ("favorite","el favorito"),
                new Array ("fiction","la ficción","la ficcion"),
                new Array ("figure","la figura"),
                new Array ("finances","la finanzas"),
                new Array ("flexibility","la flexibilidad"),
                new Array ("flower","la flor"),
                new Array ("fluid","el flúido","el fluido"),
                new Array ("form","la forma"),
                new Array ("formula","la fórmula","la formula"),
                new Array ("fortune","la fortuna"),
                new Array ("fraction","la fracción","la fraccion"),
                new Array ("fragrance","la fragancía"),
                new Array ("fruit","la fruta"),
                new Array ("function","la función","la funcion"),
                new Array ("funeral","el funeral")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break; 

      case 8: //G cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("general","general"),
                new Array ("generally","generalmente"),
                new Array ("generous","generoso"),
                new Array ("giant","gigante"),
                new Array ("gigantic","gigantesco"),
                new Array ("glorious","glorioso"),
                new Array ("gradual","gradual"),
                new Array ("graphic","gráfico","grafico"),
                new Array ("grave","grave")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("graduate","graduar"),
                new Array ("guarantee","garantizar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("gardener","el jardinero"),
                new Array ("gas","el gas"),
                new Array ("gasoline","la gasolina"),
                new Array ("generation","la generación","la generacion"),
                new Array ("generosity","la generosidad"),
                new Array ("genius","el genio"),
                new Array ("geography","la geografía","la geografia"),
                new Array ("globe","el globo"),
                new Array ("golf","el golf"),
                new Array ("grammar","la gramática","la gramatica"),
                new Array ("grupo","el grupo"),
                new Array ("guarantee","la garantía","la garantia"),
                new Array ("guillotine","la guillotina"),
                new Array ("guitar","la guitarra"),
                new Array ("gymnasium","el gimnasio")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break; 

      case 9: //H cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("heroic","heróico","heroico"),
                new Array ("historic","histórico","historico"),
                new Array ("homogenous","homogéneo","homogeneo"),
                new Array ("honest","honesto"),
                new Array ("horizontal","horizontal"),
                new Array ("horrible","horrible"),
                new Array ("humid","húmedo","humedo")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
//***
//..none.. remove button in XHTML???
//***
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("habit","el hábito","el habito"),
                new Array ("harmony","la armonía","la armonia"),
                new Array ("herb","la hierba"),
                new Array ("hero","el héroe","el heroe"),
                new Array ("historian","el historiador"),
                new Array ("history","la historia"),
                new Array ("honesty","la honestidad"),
                new Array ("honor","el honor"),
                new Array ("horizon","el horizonte"),
                new Array ("horror","el horror"),
                new Array ("hospital","el hospital"),
                new Array ("hospitality","la hospitalidad"),
                new Array ("hotel","el hotel"),
                new Array ("human","el humano"),
                new Array ("humor","el humor"),
                new Array ("hurricane","el huracán","el huracan"),
                new Array ("hydrogen","el hidrógeno","el hidrogeno")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break; 

      case 10: //I cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("ideal","ideal"),
                new Array ("indentical","idéntico","identico"),
                new Array ("ignorant","ignorante"),
                new Array ("imaginary","imaginario"),
                new Array ("imaginative","imaginativo"),
                new Array ("immediately","inmediatamente"),
                new Array ("immortal","inmortal"),
                new Array ("impartial","imparcial"),
                new Array ("important","importante"),
                new Array ("impossible","imposible"),
                new Array ("incompatible","incompatible"),
                new Array ("incomprehensible","incomprehensible"),
                new Array ("inconvenient","inconveniente"),
                new Array ("incredible","increíble","increible"),
                new Array ("independent","independiente"),
                new Array ("indigenous","indígena","indigena"),
                new Array ("individual","individual"),
                new Array ("industrial","industrial"),
                new Array ("inevitable","inevitable"),
                new Array ("inferior","inferior"),
                new Array ("influential","influente"),
                new Array ("initial","inicial"),
                new Array ("innocent","inocente"),
                new Array ("intellectual","intelectual"),
                new Array ("intelligent","inteligente"),
                new Array ("intense","intenso"),
                new Array ("international","internacional"),
                new Array ("intimate","íntimo","intimo"),
                new Array ("invisible","invisible"),
                new Array ("ironic","irónico","ironico"),
                new Array ("irresistible","irresistible")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("illuminate","iluminar"),
                new Array ("imagine","imaginar"),
                new Array ("imitate","imitar"),
                new Array ("import","importar"),
                new Array ("impregnate","impregnar"),
                new Array ("improvise","improvisar"),
                new Array ("indicate","indicar"),
                new Array ("influence","influir"),
                new Array ("inform","informar"),
                new Array ("insist","insistir"),
                new Array ("inspire","inspirar"),
                new Array ("install","instalar"),
                new Array ("institute","instituir"),
                new Array ("insulate","insular"),
                new Array ("insult","insultar"),
                new Array ("interpret","interpretar"),
                new Array ("interrupt","interrumpir"),
                new Array ("intimidate","intimidar"),
                new Array ("inundate","inundar"),
                new Array ("invade","invadir"),
                new Array ("invent","inventir"),
                new Array ("investigate","investigar"),
                new Array ("invite","invitar"),
                new Array ("irritate","irritar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("idea","la idea"),
                new Array ("identity","la identidad"),
                new Array ("idiot","el idiota"),
                new Array ("ilusion","la ilusión","la ilusion"),
                new Array ("illustration","la ilustración","la ilustracion"),
                new Array ("image","la imagen"),
                new Array ("imagination","la imaginación","la imaginacion"),
                new Array ("imitation","la imitación","la imitacion"),
                new Array ("importance","la importancia"),
                new Array ("impression","la impresión","la impresion"),
                new Array ("independence","la independencia"),
                new Array ("indication","la indicación","la indicacion"),
                new Array ("indifference","la indiferencia"),
                new Array ("industry","la industria"),
                new Array ("infinity","infinidad"),
                new Array ("influence","la influencia"),
                new Array ("information","la información","la informacion"),
                new Array ("injury","la injuria"),
                new Array ("injustice","la injusticia"),
                new Array ("innocence","la innocencia"),
                new Array ("insect","el insecto"),
                new Array ("inspection","la inspección","la inspeccion"),
                new Array ("inspector","el inspector"),
                new Array ("inspiration","la inspiración","la inspiracion"),
                new Array ("instability","la inestabilidad"),
                new Array ("instinct","el instinto"),
                new Array ("institute","el instituto"),
                new Array ("instruction","la instrucción","la instruccion"),
                new Array ("instrument","el instrumento"),
                new Array ("insult","el insulto"),
                new Array ("intelligence","la inteligencia"),
                new Array ("intention","la intención","la intencion"),
                new Array ("interest","el interés","el interes"),
                new Array ("interior","el interior"),
                new Array ("interpreter","el intérprete","el interprete"),
                new Array ("interruption","la interrupción","la interrupcion"),
                new Array ("intuition","la intuición","la intuicion"),
                new Array ("invasion","la invasión","la invasion"),
                new Array ("invention","la invención","la invencion"),
                new Array ("invitation","la invitación","la invitacion"),
                new Array ("iris","el iris"),
                new Array ("irony","la ironía","la ironia"),
                new Array ("isle","la isla")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break; 

      case 11: //JKL cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("just","justo"),
                new Array ("laudable","laudable"),
                new Array ("legal","legal"),
                new Array ("legitimate","legítimo","legitimo"),
                new Array ("liberal","liberal"),
                new Array ("liquid","líquido","liquido"),
                new Array ("logical","lógico","logico")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("justify","justificar"),
                new Array ("liberate","liberar"),
                new Array ("limit","limitar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("jurisdiction","la jurisdicción","la jurisdiccion"),
                new Array ("justice","la justicia"),
                new Array ("kilogram","el kilogramo"),
                new Array ("kilometer","el kilómetro","el kilometro"),
                new Array ("laboratory","el laboratorio"),
                new Array ("labyrinth","el laberinto"),
                new Array ("lamp","la lámpara","la lampara"),
                new Array ("language","el lenguaje","el idioma"),
                new Array ("latitude","la latitud"),
                new Array ("liberation","la liberación","la liberacion"),
                new Array ("liberty","la libertad"),
                new Array ("limitation","la limitación","la limitacion"),
                new Array ("line","la línea","la linea"),
                new Array ("liquid","el líquido","el liquido"),
                new Array ("list","la lista"),
                new Array ("literature","la literatura")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;
      
      case 12: //MNO cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("magnetic","magnético","magnetico"),
                new Array ("magnificent","magnífico","magnifico"),
                new Array ("manual","manual"),
                new Array ("marvelous","maravilloso"),
                new Array ("maximum","máximo","maximo"),
                new Array ("mechanical","mecánico","mecanico"),
                new Array ("melancholic","melancólico","melancolico"),
                new Array ("memorable","memorable"),
                new Array ("metal","metal"),
                new Array ("methodical","metódico","metodico"),
                new Array ("meticulous","meticuloso"),
                new Array ("military","militar"),
                new Array ("mineral","mineral"),
                new Array ("miniature","miniatura"),
                new Array ("miserable","miserable"),
                new Array ("modern","moderno"),
                new Array ("modest","modesto"),
                new Array ("monotonous","monótono","monotono"),
                new Array ("moral","moral"),
                new Array ("mortal","mortal"),
                new Array ("mutual","mutuo"),
                new Array ("mysterious","misterioso"),
                new Array ("national","nacional"),
                new Array ("native","nativo"),
                new Array ("natural","natural"),
                new Array ("naturally","naturalmente"),
                new Array ("necessary","necesario"),
                new Array ("negative","negativo"),
                new Array ("nervous","nervioso"),
                new Array ("neutral","neutral","neutro"),
                new Array ("no","no"),
                new Array ("noble","noble"),
                new Array ("nocturnal","nocturno"),
                new Array ("normal","normal"),
                new Array ("obedient","obediente"),
                new Array ("obscure","obscuro"),
                new Array ("officially","oficialmente"),
                new Array ("optimistic","optimista"),
                new Array ("ordinary","ordinario"),
                new Array ("organic","orgánico","organico"),
                new Array ("original","original")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("mark","marcar"),
                new Array ("meditate","meditar"),
                new Array ("mention","mencionar"),
                new Array ("moderate","moderar"),
                new Array ("modify","modificar"),
                new Array ("monopolize","monopolizar"),
                new Array ("motivate","motivar"),
                new Array ("move","mover"),
                new Array ("multiply","multiplicar"),
                new Array ("murmur","murmurar"),
                new Array ("narrate","narrar"),
                new Array ("note","notar"),
                new Array ("notify","notificar"),
                new Array ("observe","observar"),
                new Array ("obtain","obtener"),
                new Array ("occur","ocurrir"),
                new Array ("offend","ofender"),
                new Array ("operate","operar"),
                new Array ("organize","organizar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("magic","el mágico","el magico"),
                new Array ("mansion","la mansión","la mansion"),
                new Array ("map","el mapa"),
                new Array ("margin","el margen"),
                new Array ("mark","la marca"),
                new Array ("mask","la máscara","la mascara"),
                new Array ("mass","la masa"),
                new Array ("mathematics","las matemáticas","las matematicas"),
                new Array ("matrimony","el matrimonio"),
                new Array ("maximum","el máximo","el maximo"),
                new Array ("medicine","la medicina"),
                new Array ("melody","la melodía","la melodia"),
                new Array ("melon","el melón","el melon"),
                new Array ("member","el miembro"),
                new Array ("memory","la memoria"),
                new Array ("menu","el menú","el menu"),
                new Array ("merit","el mérito","el merito"),
                new Array ("meteor","el meteoro"),
                new Array ("meter","el metro"),
                new Array ("million","el millón","el millon"),
                new Array ("mine","la mina"),
                new Array ("miner","el minero"),
                new Array ("minimum","el mínimo","el minimo"),
                new Array ("minute","el minuto"),
                new Array ("mission","la misión","la mision"),
                new Array ("mobility","la movilidad"),
                new Array ("model","el modelo"),
                new Array ("moderation","la moderación","la moderacion"),
                new Array ("modification","la modificación","la modificacion"),
                new Array ("mold","el molde"),
                new Array ("moment","el momento"),
                new Array ("monopoly","el monopolio"),
                new Array ("monster","el monstruo"),
                new Array ("monument","el monumento"),
                new Array ("motive","el motivo"),
                new Array ("motor","el motor"),
                new Array ("mountain","la montaña","la montana"),
                new Array ("movement","el movimiento"),
                new Array ("muscle","el músculo","el musculo"),
                new Array ("museum","el museo"),
                new Array ("music","la música","la musica"),
                new Array ("mystery","el mistério","el misterio"),
                new Array ("nation","la nación","la nacion"),
                new Array ("nationality","la nacionalidad"),
                new Array ("navigation","la navegación","la navegacion"),
                new Array ("necessity","la necesidad"),
                new Array ("negotiation","la negociación","la negociacion"),
                new Array ("north","el norte"),
                new Array ("note","la nota"),
                new Array ("novel","la novela"),
                new Array ("novelist","la novelista"),
                new Array ("nucleus","el núcleo","el nucleo"),
                new Array ("number","el número","el numero"),
                new Array ("nutrition","la nutrición","la nutricion"),
                new Array ("oasis","el oasis"),
                new Array ("object","el objeto"),
                new Array ("objective","el objetivo"),
                new Array ("obstacle","el obstáculo","el obstaculo"),
                new Array ("occasion","la ocasión","la ocasion"),
                new Array ("occupation","la ocupación","la ocupacion"),
                new Array ("ocean","el océano","el oceano"),
                new Array ("olive","la oliva"),
                new Array ("operation","la operación","la operacion"),
                new Array ("opinion","la opinión","la opinion"),
                new Array ("opportunity","la oportunidad"),
                new Array ("optimism","el optimismo"),
                new Array ("optimist","el optimista"),
                new Array ("orator","el orador"),
                new Array ("orchestra","la orquesta"),
                new Array ("organism","el organismo"),
                new Array ("organization","la organización","la organizacion"),
                new Array ("origin","el origen"),
                new Array ("ornament","el ornamento"),
                new Array ("oxygen","el oxígeno","el oxigeno")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;

      case 13: //P cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("pacific","pacífico","pacifico"),
                new Array ("pallid","pálido","palido"),
                new Array ("parallel","paralelo"),
                new Array ("partial","parcial"),
                new Array ("particular","particular"),
                new Array ("passive","pasivo"),
                new Array ("pathetic","patético","patetico"),
                new Array ("patriotic","patriotico"),
                new Array ("perceptible","perceptible"),
                new Array ("periodic","periódico","periodico"),
                new Array ("permanent","permanente"),
                new Array ("personal","personal"),
                new Array ("personally","personalmente"),
                new Array ("philosophical","filisófico","filosofico"),
                new Array ("physical","físico","fisico"),
                new Array ("poetic","poético","poetico"),
                new Array ("political","political"),
                new Array ("popular","popular"),
                new Array ("positive","positivo"),
                new Array ("possible","posible"),
                new Array ("practical","práctico","practico"),
                new Array ("precious","precioso"),
                new Array ("precisely","precisamente"),
                new Array ("principal","principal"),
                new Array ("probable","probable"),
                new Array ("probably","probablemente"),
                new Array ("professional","profesional"),
                new Array ("profound","profundo"),
                new Array ("progressive","progresivo"),
                new Array ("public","público","publico"),
                new Array ("pure","puro")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("paralyze","paralizar"),
                new Array ("participate","participar"),
                new Array ("pass","pasar"),
                new Array ("pause","pausar"),
                new Array ("penetrate","penetrar"),
                new Array ("perfect","perfeccionar"),
                new Array ("persevere","perseverar"),
                new Array ("persist","persistir"),
                new Array ("persuade","persuadir"),
                new Array ("plant","plantar"),
                new Array ("practice","practicar"),
                new Array ("precipitate","precipitar"),
                new Array ("prefer","preferir"),
                new Array ("prepare","preparar"),
                new Array ("preserve","preservar"),
                new Array ("prolong","prolongar"),
                new Array ("pronounce","pronunciar"),
                new Array ("protest","protestar"),
                new Array ("provoke","provocar"),
                new Array ("publish","publicar"),
                new Array ("purify","purificar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("page","la página","la pagina"),
                new Array ("palace","el palacio"),
                new Array ("palm","la palma"),
                new Array ("panic","el pánico","el panico"),
                new Array ("panorama","el panorama"),
                new Array ("paradise","el paraíso","el paraiso"),
                new Array ("part","la parte"),
                new Array ("passion","la pasión","la pasion"),
                new Array ("past","el pasado"),
                new Array ("pasta","la pasta"),
                new Array ("pastor","el pastor"),
                new Array ("patience","la paciencia"),
                new Array ("pearl","la perla"),
                new Array ("peninsula","la península","la peninsula"),
                new Array ("pension","la pensión","la pension"),
                new Array ("perfection","la perfección","la perfeccion"),
                new Array ("perfume","el perfume"),
                new Array ("period","el período","el periodo"),
                new Array ("permission","el permiso"),
                new Array ("person","la persona"),
                new Array ("personality","la personalidad"),
                new Array ("perspective","la perspectiva"),
                new Array ("petal","el pétalo","el petalo"),
                new Array ("petition","la petición","la peticion"),
                new Array ("petroleum","el petróleo","el petroleo"),
                new Array ("pharmacy","la farmacia"),
                new Array ("philosopher","el filósofo","el filosofo"),
                new Array ("philosophy","la filosofía","la filosofia"),
                new Array ("photo","la foto"),
                new Array ("photograph","la fotografía","la photografia"),
                new Array ("phrase","la frase"),
                new Array ("piano","el piano"),
                new Array ("pilot","el piloto"),
                new Array ("pine","el pino"),
                new Array ("pirate","el pirata"),
                new Array ("pistol","la pistola"),
                new Array ("plan","el plan"),
                new Array ("planet","el planeta"),
                new Array ("plant","la planta"),
                new Array ("plastic","el plástico","el plastico"),
                new Array ("plate","el plato"),
                new Array ("poem","el poema"),
                new Array ("poet","el poeta"),
                new Array ("poetry","la poesía","la poesia"),
                new Array ("point","el punto"),
                new Array ("police","la policía","la policia"),
                new Array ("popularity","la popularidad"),
                new Array ("port","el puerto"),
                new Array ("portion","la porción","la porcion"),
                new Array ("position","la posición","la posicion"),
                new Array ("posession","la posesión","la posesion"),
                new Array ("possibility","la posibilidad"),
                new Array ("practice","la práctica","la practica"),
                new Array ("precedent","el precedente"),
                new Array ("precipice","el precipicio"),
                new Array ("precipitation","la precipitación","la precipitacion"),
                new Array ("precision","la precisión","la precision"),
                new Array ("preposition","la preposición","la preposicion"),
                new Array ("presence","la presencia"),
                new Array ("presentation","la presentación","la presentacion"),
                new Array ("president","el presidente"),
                new Array ("prevention","la prevención","la prevencion"),
                new Array ("princess","la princesa"),
                new Array ("prism","el prisma"),
                new Array ("prison","la prisión","la prision"),
                new Array ("prisoner","el prisionero"),
                new Array ("privilege","el privilegio"),
                new Array ("probability","la probabilidad"),
                new Array ("problem","el problema"),
                new Array ("product","el producto"),
                new Array ("production","la producción","la produccion"),
                new Array ("profession","la profesión","la profesion"),
                new Array ("professor","el profesor"),
                new Array ("program","el programa"),
                new Array ("progress","el progreso"),
                new Array ("prohibition","la prohibición","la prohibicion"),
                new Array ("promise","la promesa"),
                new Array ("propaganda","la propaganda"),
                new Array ("prophet","el profeta"),
                new Array ("proposition","la proposición","la proposicion"),
                new Array ("protection","la protección","la proteccion"),
                new Array ("protestant","el protestante"),
                new Array ("proverb","el proverbio"),
                new Array ("physchology","la psicología","la psicologia"),
                new Array ("pulse","el pulso"),
                new Array ("pyramid","la pirámide","la piramide")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;

      case 14: //QR cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("radical","radical"),
                new Array ("rapid","rápido","rapido"),
                new Array ("rare","raro"),
                new Array ("rational","racional"),
                new Array ("reasonable","razonable"),
                new Array ("rebel","rebelde"),
                new Array ("recent","recientemente"),
                new Array ("regularly","regularmente"),
                new Array ("relative","relativo"),
                new Array ("religious","religioso"),
                new Array ("respectable","respetable"),
                new Array ("respectful","respetuoso"),
                new Array ("responsible","responsable"),
                new Array ("revolutionary","revolucionario"),
                new Array ("rich","rico"),
                new Array ("ridiculous","ridículo","ridiculo"),
                new Array ("rigorous","riguroso"),
                new Array ("robust","robusto"),
                new Array ("romantic","romántico","romantico"),
                new Array ("rural","rural"),
                new Array ("rustic","rústico","rustico")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("receive","recibir"),
                new Array ("recommend","recomendar"),
                new Array ("reconcile","reconciliar"),
                new Array ("recover","recuperar"),
                new Array ("recruit","reclutar"),
                new Array ("reduce","reducir"),
                new Array ("refine","refinar"),
                new Array ("reflect","reflejar"),
                new Array ("reform","reformar"),
                new Array ("reiterate","reiterar"),
                new Array ("rejuvenate","rejuvenecer"),
                new Array ("relate","relatar"),
                new Array ("repair","reparar"),
                new Array ("represent","representar"),
                new Array ("reproduce","reproducir"),
                new Array ("require","requerir"),
                new Array ("reserve","reservar"),
                new Array ("resist","resistir"),
                new Array ("respect","respetar"),
                new Array ("respire","respirar"),
                new Array ("respond","responder"),
                new Array ("reunite","reunir"),
                new Array ("ruin","arruinar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("quality","la calidad"),
                new Array ("rat","la rata"),
                new Array ("ray","el rayo"),
                new Array ("reaction","la reacción","la reaccion"),
                new Array ("reality","la realidad"),
                new Array ("reason","la razón","la razon"),
                new Array ("rebel","el rebelde"),
                new Array ("rebellion","la rebelión","la rebelion"),
                new Array ("recommendation","la recomendación","la recomendacion"),
                new Array ("recreation","la recreación","la recreacion"),
                new Array ("rectangle","el rectángulo","el rectangulo"),
                new Array ("reduction","la reducción","la reduccion"),
                new Array ("reference","la referencia"),
                new Array ("reflection","la reflexión","la reflexion"),
                new Array ("refuge","el refugio"),
                new Array ("region","la región","la region"),
                new Array ("religion","la religión","la religion"),
                new Array ("remedy","el remedio"),
                new Array ("renovation","la renovación","la renovacion"),
                new Array ("representative","el representante"),
                new Array ("repression","la represión","la represion"),
                new Array ("reptile","el reptil"),
                new Array ("republican","el republicano"),
                new Array ("reputation","la reputación","la reputacion"),
                new Array ("residence","la residencia"),
                new Array ("resistance","la resistencia"),
                new Array ("resolution","la resolución","la resolucion"),
                new Array ("responsibility","la responsibilidad"),
                new Array ("result","el resultado"),
                new Array ("reunion","la reunión","la reunion"),
                new Array ("revelation","la revelación","la revelacion"),
                new Array ("rhyth","el ritmo"),
                new Array ("rite","el rito"),
                new Array ("rival","el rival"),
                new Array ("rock","la roca"),
                new Array ("rose","la rosa"),
                new Array ("route","la ruta"),
                new Array ("ruin","la ruina")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;

      case 15: //S cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("sane","sano"),
                new Array ("satanical","satánico","satanico"),
                new Array ("satisfactory","satisfactorio"),
                new Array ("satisfied","satisfecho"),
                new Array ("scandalous","escandaloso"),
                new Array ("scientific","cientifico"),
                new Array ("secret","secreto"),
                new Array ("secretly","secretamente"),
                new Array ("secular","secular"),
                new Array ("sensual","sensual"),
                new Array ("sentimental","sentimental"),
                new Array ("serene","sereno"),
                new Array ("serious","serio"),
                new Array ("severe","severo"),
                new Array ("silent","silencioso"),
                new Array ("silently","silenciosamente"),
                new Array ("sincere","sincero"),
                new Array ("sicerely","sinceramente"),
                new Array ("singular","singular"),
                new Array ("sinister","siniestro"),
                new Array ("sober","sobrio"),
                new Array ("social","social"),
                new Array ("socialist","socialista"),
                new Array ("solemn","solemne"),
                new Array ("solid","sólido","solido"),
                new Array ("solitary","solitario"),
                new Array ("soluble","soluble"),
                new Array ("special","especial"),
                new Array ("spiritual","espiritual"),
                new Array ("splendid","espléndido","esplendido"),
                new Array ("spontaneous","espontáneo","espontaneo"),
                new Array ("spontaneously","espontáneamente","espontaneamente"),
                new Array ("sterile","estéril","esteril"),
                new Array ("strict","estricto"),
                new Array ("stupid","estúpido","estupido"),
                new Array ("subterranean","subterraneo"),
                new Array ("sufficient","suficiente"),
                new Array ("sufficiently","suficientemente"),
                new Array ("superficial","superficial"),
                new Array ("superfluous","superfluo"),
                new Array ("superhuman","sobrehumano"),
                new Array ("superior","superior"),
                new Array ("supernatural","sobrenatural"),
                new Array ("supreme","supremo"),
                new Array ("synthetic","sintético","sintetico"),
                new Array ("systematic","sistemático","sistematico")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("sacrifice","sacrificar"),
                new Array ("scandalize","escandalizar"),
                new Array ("season","sazonar"),
                new Array ("seduce","seducir"),
                new Array ("separate","separar"),
                new Array ("serve","servir"),
                new Array ("signify","significar"),
                new Array ("simplify","simplificar"),
                new Array ("solicit","solicitar"),
                new Array ("sterilize","esterilizar"),
                new Array ("strangle","estrangular"),
                new Array ("submerge","sumergir"),
                new Array ("subscribe","subscribir"),
                new Array ("substitute","substituir"),
                new Array ("succumb","sucumbir"),
                new Array ("suffer","sufrir"),
                new Array ("suprise","sorprender")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("sacrifice","el sacrificio"),
                new Array ("salad","la ensalada"),
                new Array ("salary","el salario"),
                new Array ("salmon","el salmón"),
                new Array ("sarcasm","el sarcasmo"),
                new Array ("satisfaction","la satisfacción","la satisfaccion"),
                new Array ("scandal","el escándalo","el escandalo"),
                new Array ("scene","la escena"),
                new Array ("skeptic","el escéptico","el esceptico"),
                new Array ("sculpture","la esculptura"),
                new Array ("second","el segundo"),
                new Array ("secret","el secreto"),
                new Array ("secretary","la secretaría","la secretaria"),
                new Array ("sect","la secta"),
                new Array ("section","la sección","la seccion"),
                new Array ("security","la seguridad"),
                new Array ("senate","el senado"),
                new Array ("senator","el senador"),
                new Array ("sensation","la sensación","la sensacion"),
                new Array ("sensibility","la sensibilidad"),
                new Array ("separation","la separación","la separacion"),
                new Array ("serenity","la serenidad"),
                new Array ("sermon","el sermón","el sermon"),
                new Array ("serpent","la serpiente"),
                new Array ("service","el servicio"),
                new Array ("session","la sesión","la sesion"),
                new Array ("severity","la severidad"),
                new Array ("sex","el sexo"),
                new Array ("signification","la significación","la significacion"),
                new Array ("silence","el silencio"),
                new Array ("silhouette","la silueta"),
                new Array ("simplicity","la simplicidad"),
                new Array ("sincerity","la sinceridad"),
                new Array ("siren","la sirena"),
                new Array ("situation","la situación","la situacion"),
                new Array ("socialist","el socialista"),
                new Array ("solidarity","la solidaridad"),
                new Array ("solution","la solución","la solucion"),
                new Array ("space","el espacio"),
                new Array ("spiral","la espiral"),
                new Array ("station","la estación","la estacion"),
                new Array ("statue","la estatua"),
                new Array ("stomach","el estómago","el estomago"),
                new Array ("structure","la estructura"),
                new Array ("stupor","el estupor"),
                new Array ("style","el estilo"),
                new Array ("submarine","el submarino"),
                new Array ("substance","la substancia"),
                new Array ("substitute","el substituto"),
                new Array ("substitution","la substitución","la substitucion"),
                new Array ("suicide","suicidio"),
                new Array ("sum","la suma"),
                new Array ("superiority","la superioridad"),
                new Array ("superstition","la superstición","la supersticion"),
                new Array ("surprise","la sorpresa"),
                new Array ("suspense","suspenso"),
                new Array ("syllable","la sílaba","la silaba"),
                new Array ("symbol","el símbolo","el simbolo"),
                new Array ("system","el sistema")
      				);
          		resetColor("verb");
      				resetColor("adjective");
      				changeColor("noun");
      		}
      		break;

      case 16: //TUVZ cognates page
      		switch (speechPart) {
      			case 2: //otr
       				card = Array (
                new Array ("tardy","tarde"),
                new Array ("terrible","terrible"),
                new Array ("theoretically","teóricamente","teoricamente"),
                new Array ("timidly","tímidamente","timidamente"),
                new Array ("totally","totalmente"),
                new Array ("traditional","tradicional"),
                new Array ("tragic","trágico","tragico"),
                new Array ("tranquil","tranquilo"),
                new Array ("transparent","transparente"),
                new Array ("triple","triple"),
                new Array ("triumphant","triunfante"),
                new Array ("turbulent","turbulento"),
                new Array ("typical","típico","tipico"),
                new Array ("ulterior","ulterior"),
                new Array ("ultimate","último","ultimo"),
                new Array ("unanimous","unánime","unanime"),
                new Array ("uniform","uniforme"),
                new Array ("united","unido"),
                new Array ("universal","universal"),
                new Array ("university","universitario"),
                new Array ("unjust","injusto"),
                new Array ("unstable","inestable"),
                new Array ("urgent","urgente"),
                new Array ("usual","usual"),
                new Array ("vague","vago"),
                new Array ("vaguely","vagamente"),
                new Array ("valiant","valiente"),
                new Array ("vast","vasto"),
                new Array ("venemous","venenoso"),
                new Array ("verbal","verbal"),
                new Array ("vertical","vertical"),
                new Array ("vicious","vicioso"),
                new Array ("vigorous","vigoroso"),
                new Array ("violent","violento"),
                new Array ("violet","violeta"),
                new Array ("virgin","virgen"),
                new Array ("virtuous","virtuoso"),
                new Array ("visible","visible"),
                new Array ("visibly","visiblemente"),
                new Array ("vitamin","la vitamina"),
                new Array ("voluntarily","voluntariamente"),
                new Array ("voluntary","voluntario")
      				);
      				resetColor("noun");
      				resetColor("verb");
      				changeColor("adjective");
        			break;
      			case 3: //verbs
       				card = Array (
                new Array ("tolerate","tolerar"),
                new Array ("torture","torturar"),
                new Array ("transform","transformar"),
                new Array ("transmit","transmitir"),
                new Array ("triumph","triunfar"),
                new Array ("use","usar"),
                new Array ("vary","variar"),
                new Array ("verify","verificar"),
                new Array ("vibrate","vibrar"),
                new Array ("visit","visitar"),
                new Array ("vomit","vomitar"),
                new Array ("vote","votar")
      				);
          		resetColor("noun");
      				resetColor("adjective");
      				changeColor("verb");
       				break;
      			default:  //nouns, case 1 and other
       			  card = Array (
                new Array ("tact","el tacto"),
                new Array ("tactic","la táctica","la tactica"),
                new Array ("talent","el talento"),
                new Array ("tea","el té","el te"),
                new Array ("technique","la técnica","la tecnica"),
                new Array ("telephone","el teléfono","el telephono"),
                new Array ("telescope","el telescopio"),
                new Array ("temperature","la temperatura"),
                new Array ("tempest","la tempestad"),
                new Array ("temple","el templo"),
                new Array ("tendency","la tendencia"),
                new Array ("tension","la tensión","la tension"),
                new Array ("terrain","el terreno"),
                new Array ("territory","el territorio"),
                new Array ("terror","terror"),
                new Array ("testament","el testamento"),
                new Array ("testimony","el testimonio"),
                new Array ("text","el texto"),
                new Array ("theater","el teatro"),
                new Array ("theme","el tema"),
                new Array ("theory","la teoría","la teoria"),
                new Array ("thermometer","el termómetro","el termometro"),
                new Array ("thesis","la tesis"),
                new Array ("tiger","el tigre"),
                new Array ("timidity","la timidez"),
                new Array ("tobacco","el tabaco"),
                new Array ("tolerance","la tolerancia"),
                new Array ("tone","el tono"),
                new Array ("torrent","el torrente"),
                new Array ("torture","la tortura"),
                new Array ("tourist","el turista"),
                new Array ("tradition","la tradición","la tradicion"),
                new Array ("traffic","el tráfico","el trafico"),
                new Array ("tragedy","la tragedia"),
                new Array ("train","el tren"),
                new Array ("transformation","la transformación","la transformacion"),
                new Array ("transition","la transición","la transicion"),
                new Array ("transport","la transporte"),
                new Array ("triangle","el triángulo","el triangulo"),
                new Array ("tribe","la tribu"),
                new Array ("trophy","el trofeo"),
                new Array ("trumpet","la trompeta"),
                new Array ("tube","el tubo"),
                new Array ("tunnel","el túnel","el tunel"),
                new Array ("type","tipo"),
                new Array ("tyranny","la tiranía","la tirania"),
                new Array ("unity","la unidad"),
                new Array ("universe","el universo"),
                new Array ("university","la universidad"),
                new Array ("urgency","la urgencia"),
                new Array ("utility","la utilidad"),
                new Array ("vacation","las vacaciones"),
                new Array ("vagabond","el vagabundo"),
                new Array ("vanguard","la vanguardia"),
                new Array ("vapor","el vapor"),
                new Array ("variable","la variable"),
                new Array ("variation","la variación","la variacion"),
                new Array ("variety","la variedad"),
                new Array ("vehicle","el vehículo","el vehiculo"),
                new Array ("vein","la vena"),
                new Array ("velocity","la velocidad"),
                new Array ("vendor","el vendedor"),
                new Array ("vengeance","la venganza"),
                new Array ("venom","el veneno"),
                new Array ("verb","el verbo"),
                new Array ("verse","el verso"),
                new Array ("version","la versión","la version"),
                new Array ("veteran","el veterano"),
                new Array ("vice","el vicio"),
                new Array ("victim","la víctima","la victima"),
                new Array ("victory","la victoria"),
                new Array ("vigilance","la vigilancia"),
                new Array ("vigor","vigor"),
                new Array ("villain","el villano"),
                new Array ("vinegar","el vinagre"),
                new Array ("violation","la violación","la violacion"),
                new Array ("violence","la violencia"),
                new Array ("violet","la violeta"),
                new Array ("violin","el violín","el violin"),
                new Array ("virgin","la virgen"),
                new Array ("virtue","la virtud"),
                new Array ("vision","la visión","la vision"),
                new Array ("visit","la visita"),
                new Array ("visitor","el visitante"),
                new Array ("vocation","la vocación","la vocacion"),
                new Array ("volcano","el volcán","el volcan"),
                new Array ("volt","el voltio"),
                new Array ("volume","el volumen"),
                new Array ("vote","el voto"),
                new Array ("zone","la zona")
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
