// form mind flows

var gWords = [];
var parts = [];
var soundtrack = [];
var artistRefHigh = [];
var artistRefLow = [];
var theme = [];
var materials = [];
var cWords = [];
var selected = [];
var quotes = [];

// level game
var level = 1;
var levelGWords = 1;
var levelTheme = 1;
var levelParts = 1;
var levelCWords = 1;
var levelAH = 1;
var levelAL = 1;

//gWords array
var elementArrayGWords = [];
var lastElement = "";

function configArray() {

    // Flow success - Flow Possibilities - Flow Elections



    theme = ["primitivo","animal","Surrealismo", "simbolismo","fantasia", "meditación","amor", "lo organico", "ternura", "debil", "melancolico", "escorso", "sed", "suciedad", "macha", "liquido", "hambre", "locura", "soledad", "deseo", "frio", "religioso", "sexual", "muerte", "filosofico", "tenebrismo", "belleza", "pobreza", "decadentismo", "sufrimiento", "kitch", "drogas", "miedo", "drama", "naturaleza", "caricatura", "desnudo", "autoretrato", "bodegon", "pinturaGenero", "amarillo", "azul", "rojo", "naranja", "verde", "morado", "dia", "noche", "blanco", "negro", "tul", "liensillo", "fique", "cadenas", "gasa", "mesa", "cuerdas", "cabulla", "cruz", "maniqui", "cabeza", "telaPeluche", "brazo", "lenceria", "Perlas", "Telas", "Alambre", "Silla", "Madera", "Uvas", "collarPerlas", "HojasArbol", "FloresSecas", "floresVivas", "PocilloMetal", "Raices", "AlambreDePua", "AnimalesPatasGallinaCarniceria", "Bandeja", "Mascaras", "LibrosViejos", "Bustos", "ElementosDeMedicina", "TelasManchadas", "Cartones", "Imprimir (craneos - bustos  - ojos )", "PiezasMalasCementerioSPedro"];
    parts = ["ojos", "nariz", "manos", "labios", "manos", "oreja", "pies", "espalda", "cabello", "brazo", "cabeza", "genitales", "tul", "liensillo", "fique", "cadenas", "gasa", "mesa", "cuerdas", "cabulla", "cruz", "maniqui", "cabeza", "telaPeluche", "brazo", "lenceria"];
    //pose = [];
    artistRefHigh = ["Velasquez", "DaVinci", "Rubens", "Caravaggio", "Rivera", "Miguelangelo", "Rubens", "Picasso"];
    artistRefLow = ["Aoi", "AnselAddams", "Woodman", "Witkin", "Saudek", "Arbus","Nadar", "DianaHenao"];
    //materials = ["tul", "liensillo", "fique", "cadenas", "gasa", "mesa", "cuerdas", "cabulla", "cruz", "maniqui", "cabeza", "telaPeluche", "brazo", "lenceria"];
    soundtrack = ["tango", "electronic", "blackMetal", "ambient", "rockNRoll", "blues", "deathMetal"];
    cWords = ["agrandar", "disminuir", "suprimirTodo", "suprimirAlgo", "invertirTodo", "invertirAlgo", "AsociarAB", "AsociarBC", "AsociarAC", "sencibilizar", "reordenar", "adaptar", "modificarTodo", "modificarAlgo", "simplificar", "sintetizar", "abstraer", "simetria-asimetria", "simple-complejo", "unidad-fragmentacion", "predectibilidad-expontaneidad", "sutileza-audacia", "neutralidad-acento"];

    // Basic Flow
    gWords = ["punto", "linea", "contorno", "direccion", "tono", "color", "textura", "escala", "dimension", "movimiento"];
    gWordsPoint = ["noEnergia", "mide", "separa", "conecta", "equilibra"];
    gWordsLine = ["eje", "perspectiva", "estructura", "direccion", "dimensionPlana", "espacio", "silueta", "geometria"];
    gWordsContour = ["circulo", "cuadrado", "triangulo" , "atributosSubjetivos", "dimensionPlana", "espacio", "silueta", "geometria"];
    gWordsDiretion = ["patronExploracion", "persistenciaVisual", "movimiento", "diagonales", "composicionAbierta", "composicionCerrada"];
    gWordsTone = ["luz", "Sombra", "gradaciones", "contraste", "rangoDinamico", "esquemaTonal", "claveAlta", "claveBaja"];
    gWordsColor = ["psicologia", "luminosidad", "sensaciones", "aditivo", "sustractivo", "esquemaColor", "primarios", "secundarios" , "terciarios"];
    gWordsTexture = ["mosaico", "visualTactil", "ritmo", "orden", "particion", "musicalidad"];
    gWordsScale = ["proporsiones", "angulo", "canonCabeza", "raizCuadrada", "principioPareto", "enfasis"];
    gWordsDimention = ["fondo", "atenciónLineas", "espacioRelativo", "planosProfundidad", "ubicacionVertical", "lineaHorizonte", "perspectiva", "atmosfera", "puntoFuga"];
    gWordsMove = ["borrosidad", "flujoVisual", "empatiaCinetica", "dinamismo", "altaVelocidad", "sinestisia", "esquemaNarrativo"];

    configureQuotes();

}

function configureQuotes()
{
    quotes.push("No es de dónde sacas las cosas, sino adónde las llevas");
    quotes.push("Alguien podria decir de mi que me he limitado a hacer un ramillete de flores ajenas,  cuando yo solo he aportado el cordel que las ata");
    quotes.push("La creatividad consiste en saber ocultar tus fuentes - Einstein");
    quotes.push("Si he podido ver más allá¡ es por que me he subido sobre hombros de gigantes - Newton");
    quotes.push("La originalidad no es sino imitación juiciosa");
    quotes.push("Empiezo con una  idea que luego se convierte en otra cosa - Picasso");
    quotes.push("ArmasCarvaggio:Pasión, Interés, Curiosidad, Inspiración, Experimentación, Innovación, Realización");
    quotes.push("1. Do one thing at a time- 2. Know the problem - 3. Learn to listen - 4. Learn to ask questions - 5. Distinguish sense from no sense - 6. Accept change as inevitable - 7. Admit mistakes - 8. Say it simple - 9. Be calm - 10. Smile");
    quotes.push("Si no triunfas en un primer momento, no intentes hacer exactamente lo mismo de nuevo. Volverás a no triunfar. En lugar reflexiona, evalÃºa , corrige, modifica y solo entonces vuelve q intentarlo. La creatividad es un proceso interactivo. ");
    quotes.push("I am happy to have a boring job on the side and keep my art as a passionate hobby");
    quotes.push("La composición es un juego con los espaciones negativos");
    quotes.push("composicion juego de adicion y substracción");
    quotes.push("Composicion El orden juega con los modelos de lectura visual de las imagenes");
    quotes.push("Cada elemento apoya la idea principal, de manera directa o indirecta. Se relaciona por lineas visuales que dirigen o complementan, agregan relaciones respecto al formato y al tamaño. Todo nos remite a la totalidad de manera conciente e inconciente, todo es un juego con la idea principal.");
    quotes.push("En el modo cotidiano hay que identificar de manera inmediata, en el modo estetico... es un juego menta");
    quotes.push("Crear un conflicto en lo representado, tensión.");
    quotes.push("El inconciente un lugar donde juega las ideas más profundamente originales");
    quotes.push("El inconciente sede de los miedos,  las emociones y la creatividad");
    quotes.push(" En determinados estados de conciencia como el consumo de determinadas drogas o el sueños somos mas creativos");
    quotes.push("Si sigues haciendo lo mismo de siempre pero repitiendo una y otra vez el ciclo de experimentación, evaluación y corrección, hay muchas posibilidades de que todo encaje.");
    quotes.push("No perder el foco. La disciplina de mantener una sola idea.");
    quotes.push("Porqué No mirar los contornos no mirar los bordes?");
    quotes.push("Pensar en muchas cosas y no mantener la imagen limpia, limpiar lo que no aporta valor");

    quotes.push("Mirar siempre las notas. Analizarlas y modificarlas.");
    quotes.push("Seguir un orden de montaje. Paso a paso de organización, para luego desorganizar.");
    quotes.push("No Lo facil - No Lo obvio - No Lo bello sin constraste - No El glamoour - No El lujo - No El consumismo ni las modas");
    quotes.push("Lo libre, lo salvaje, sin recetas, sin dioses");
    quotes.push("Un lugar donde la miseria, la pobreza, lo organico, habita en un espacio primitivo y animal.");
    quotes.push(" Mirar desde diferentes puntos de vista el mismo objeto");
    quotes.push("El principal enemigo de la creatividad es el buen gusto");
    quotes.push("Realizar sketches de una idea hasta destruirla");
    quotes.push("Creatividad vs Productividad");
    quotes.push("Pausa, tiempo, tranquilidad");
    quotes.push("La soledad, la introspección y la meditación nos permite abrir las puertas a nostros mismos.");
    quotes.push("Prestar atención: En general, prestamos muy poca atención a las cosas cotidianas, debido al uso de la nueva tecnología. Además intentamos realizar muchas cosas a la vez, pero eso no nos asegura que todo lo que hacemos se hará correctamente. Es realmente importante recordar las cosas que se hacen en un mundo que transcurre cada vez más rápido.");
    quotes.push("Si cambiamos el entorno cambiamos nuestros habitos");
    quotes.push("Tomar notas: Debemos portar siempre una libreta para anotar las cosas que vemos, oÃ­mos y nos llaman la atención. La mayor parte del tiempo estamos distraÃ­dos y el resto del tiempo actuamos como genios. SegÃºn Hurson, la mayor parte de la gente dice que ha generado buenas ideas en distintas actividades diarias: estando en la ducha, en el baño y en la cama. QuizÃ¡s es difÃ­cil anotar nuestras ideas en esos espacios, pero es necesario tenerlas presentes y apuntar lo antes posible.");
    quotes.push("Responder preguntas: Una de las mejores formas de tener ideas es hacerse preguntas que estimulen nuestro cerebro, y de la misma forma para poder seguir estimulando nuestro cerebro es necesario responder preguntas continuamente. Debemos realizar preguntas que nos aclaren algo que no conocemos, porque las preguntas con respuestas obvias no nos ayudarÃ¡n en el desarrollo de nuestras actividades. Hurson aclaró: las preguntas con respuestas que ya conoces sólo te llevarÃ¡n a lo que ya conoces");
    quotes.push("Alcanzar ideas: Las ideas en ocasiones son rechazadas porque parecen ser muy locas en un comienzo, sin embargo, se debe insistir en los proyectos que estimamos interesantes. Hay que buscar ideas entretenidas y perseverar en lo que creemos que serÃ¡ una gran idea.");
    quotes.push("Incubar, esperar: Se debe esperar el momento preciso para realizar el proyecto y avanzar en las ideas. Hay que buscar y otorgar un tiempo para incubar las ideas, por ejemplo, realizando actividades diferentes para encontrar ahÃ­ las respuestas.");
    quotes.push("Aplazar el juicio: Existe una gran diferencia entre generar una idea y evaluar una idea. Muchas veces debemos generar una idea sin evaluarla. Hurson explica, es usual que al tratar de generar ideas y luego juzgarlas, no nos resulten. Es por eso que al momento de generar ideas no se realice un juicio apresurado, porque esto puede afectar el progreso final de nuestro proyecto.");
    quotes.push("Evaluar generalidades: Quizá podemos mejorar las ideas si evaluamos constantemente, pensamos que todo es posible y cruzamos la barrera de lo imposible. La clave para fortalecer estas acciones es la palabra poder (Power). En este sentido, el consultor realizó un acróstico con esta palabra en la que señala los principales atributos que deberÃ­an tener nuestras evaluaciones.");
    quotes.push("No tener solo una idea, ya que nos genera un encariñamiento y nos limita la posibilidad de tener multiples opciones de trabajo, con las ideas que constantemente cruzan por nuestra cabeza, ir anotando el resto de pensamientos pero no descartarlos de entrada");
    quotes.push("El arte permite que exista mas de una solución a un mismo problema");
    quotes.push("Deja de seguir lo que demas buscan y crea una moral nueva");
    quotes.push("Cuando algo no funciona a la primera, el normal de las personas buscan el exito en cualquier otro lado.");
    quotes.push("La tarea del arte es transformar los sentimientos en simbolos. Borges");
    quotes.push("When you look at a work of art, the first question to ask is, what is it about?");
    quotes.push("It is a game between positive forms and negative space");
    quotes.push("Relationship-space and form-balance-rhytm");
    quotes.push("Surrealismo: es tomar cada vez conciencia mas clara y al mismo tiempo creciente y apasionada del mundo sensible");
    quotes.push("El objeto plasmado es ahora un sentimiento, es el sentimiento lo que ahora se plasma");

    quotes.push("Acepta el fracaso como parte misma del exito que se busca");
    quotes.push("Explora tus recursos, pasa tiempo inventando nuevas formas de ordenarlos. como descontextualizarlos.");
    quotes.push("Realiza cambios y evita el habito");
    quotes.push("Conecta cosas");
    quotes.push("Sintetizar la idea");
    quotes.push("Empezar por la idea basica");
    quotes.push("Observar desde diferentes sombreros la idea");
    quotes.push("Tomar la idea de un artista y reinventarla esteticamente, resguardando su sentimiento inicial.");
    quotes.push("Tomar la idea de un artista y reinventarla emocionalmente, resguardando sus elementos esteticos.");
    quotes.push("Arte no es lo que vemos...");
    quotes.push("");
    
}

function setLevel(level) {

    switch (level) {
        case ("1"):
            levelGWords = 1;
            levelTheme = 2;
            levelAH = 0;
            levelAL = 0;
            break;
        case ("2"):
            levelGWords = 2;
            levelTheme = 3;
            levelAH = 0;
            levelAL = 0;
            break;
        case ("3"):
            levelGWords = 3;
            levelTheme = 4;
            levelAH = 0;
            levelAL = 0;
            break;
        case ("4"):
            levelGWords = 2;
            levelTheme = 3;
            levelAH = 1;
            levelAL = 0;
            break;
        case ("5"):
            levelGWords = 2;
            levelTheme = 3;
            levelAH = 0;
            levelAL = 1;
            break;
        default:
            alert("level default");

    }
}

function randomInteger(sizeAux) {
    var randomAux = Math.floor((Math.random() * (sizeAux - 1)) + 1);
    return randomAux;
}

/// Dado un tipo retorna elemento del arreglo aleatoriamente
function selectArrayElement(elementChoose) {

    var elementArray;
    switch (elementChoose) {
        case ("wv"):
            elementArray = gWords;
            break;
        case ("qv"):
            elementArray = quotes;
            break;
        case ("tv"):
            elementArray = theme;
            break;
        case ("cwv"):
            elementArray = cWords;
            break;
        case ("pv"):
            elementArray = parts;
            break;
        case ("ahv"):
            elementArray = artistRefHigh;
            break;
        case ("alv"):
            elementArray = artistRefLow;
            break;
        case ("sv"):
            elementArray = soundtrack;
            break;
        default:
            alert("default");
    }

    var randomValue = randomInteger(elementArray.length);
    return elementArray[randomValue];

}

function cleanGWordsElements() {
    $("#divGWordsElements").empty();
    //elementArrayGWords.length = 0;
}

/// Muestra los elementos  en el div oculto para el gWords
function setGWordsElements(elementChoose) {

    switch (elementChoose) {
        case ("punto"):
            elementArrayGWords = gWordsPoint;
            break;
        case ("linea"):
            elementArrayGWords = gWordsLine;
            break;
        case ("contorno"):
            elementArrayGWords = gWordsContour;
            break;
        case ("direccion"):
            elementArrayGWords = gWordsDiretion;
            break;
        case ("tono"):
            elementArrayGWords = gWordsTone;
            break;
        case ("color"):
            elementArrayGWords = gWordsColor;
            break;
        case ("textura"):
            elementArrayGWords = gWordsTexture;
            break;
        case ("escala"):
            elementArrayGWords = gWordsScale;
            break;
        case ("dimension"):
            elementArrayGWords = gWordsDimention;
            break;
        case ("movimiento"):
            elementArrayGWords = gWordsMove;
            break;
        default:
            alert("default");
    }

    //for (i = 0; i < elementArrayGWords.length ; i++)
    //{
    //    $("#divGWordsElements").append('<div><label>' + elementArrayGWords[i] + '</label></div>');
    //}

    var randomValue = randomInteger(elementArrayGWords.length);
    $("#divGWordsElements").append('<div><label>' + elementArrayGWords[randomValue] + '</label></div>');

}


function cleanOptions() {
    $("#uwv").empty();
    $("#utv").empty();
    $("#usv").empty();
    $("#divwv").empty();
    $("#divtv").empty();
    $("#ucwv").empty();
    $("#upv").empty();
    $("#uahv").empty();
    $("#divalv").empty();
    $("#divsv").empty();
    $("#divqv").empty();
    cleanGWordsElements();
}

function cleanOption(option) {
    switch (option) {
        case ("cw"):
            $("#ucwv").empty();
            break;
        case ("p"):
            $("#upv").empty();
            break;
        case ("ah"):
            $("#uahv").empty();
            break;
        case ("al"):
            $("#divalv").empty();
            break;
        case ("s"):
            $("#divsv").empty();
            break;
        default:
            alert("clean option default");
    }
}

function searchElement(element) {
    var existElement = false;

    for (x = 0; x < selected.length ; x++) {
        if (selected[x] == element) {
            existElement = true;
        }
    }

    return existElement;
}

//Crea un elemento dado un tipo de elemento y la cantidad de elementos solicidatos
function createOptions(element, lengthOptions) {
    for (var i = 0; i < lengthOptions; i++) {

        do {
            elementSelection = selectArrayElement(element);
        } while (searchElement(elementSelection));

        selected.push(elementSelection);

        switch (element) {
            case "qv":
                $("#divqv").append('<div id="divElement"><label>' + elementSelection + '</label></div>');
                break;
            case "wv":
                $("#uwv").append('<li class="list-group-item"><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "tv":
                $("#utv").append('<li><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "cwv":
                $("#ucwv").append('<li><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "sv":
                $("#usv").append('<li><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "pv":
                $("#upv").append('<li><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "ahv":
                $("#uahv").append('<li><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "alv":
                $("#ualv").append('<li><label onclick="expandGWords(\''+ elementSelection +'\')">'+ elementSelection +"</label></li>");
                break;
            case "gWordsPoint":
                $("#divgWords").append('<div id="divElement"><label>' + elementSelection + '</label></div>');
                break;

            default:
                alert("default");
        }

    }
    selected.length = 0;
}

function StartGame() {
    configArray();

    cleanOptions();
    cleanGWordsElements();

    level = $('#lInit').val();
    setLevel(level);

    var wInit = levelGWords;
    var tInit = levelTheme;
    var ahInit = levelAH;
    var alInit = levelAL;

    //var wInit = $('#wInit').val();
    //var tInit = $('#tInit').val();

    if (wInit != 0) {
        createOptions("wv", wInit);
    }

    if (tInit != 0) {
        createOptions("tv", tInit);
    }

    if (tInit != 0) {
        createOptions("ahv", ahInit);
    }

    if (tInit != 0) {
        createOptions("alv", alInit);
    }

    createOptions("qv", 1);  //Solo 1 frase
    createOptions("sv", 1);  //Solo 1 genero


}

function StartLevel2() {
    cleanOption("p");

    var cwInit = $('#pInit').val();

    if (cwInit != 0) { 
        //createOptions("pv", pInit);
        createOptions("pv", 1);
    }
}

function StartLevel3() {
    cleanOption("cw");

    var cwInit = $('#cwInit').val();

    if (cwInit != 0) {
        //createOptions("cwv", cwInit);
        createOptions("cwv", 1);
    }
}

function StartLevel4() {
    cleanOption("ah");

    var cwInit = $('#ahInit').val();

    if (cwInit != 0) {
        //createOptions("cwv", cwInit);
        createOptions("ahv", 1);
    }
}

function StartLevel5() {
    cleanOption("al");

    var cwInit = $('#alInit').val();

    if (cwInit != 0) {
        //createOptions("cwv", cwInit);
        createOptions("alv", 1);
    }
}

function expandGWords(element) {

    var gwordElementText = document.getElementById("divGWordsElements");
    var text = document.getElementById("displayText");

    if ((lastElement == element) || (element != ""))
    {
        cleanGWordsElements();
        gwordElementText.style.display = "none";
    }

    if (gwordElementText.style.display == "block") {

        cleanGWordsElements();

        gwordElementText.style.display = "none";
        //text.innerHTML = "show";
    }
    else {

        setGWordsElements(element);

        gwordElementText.style.display = "block";
        //text.innerHTML = "hide";
    }

    lastElement = element;
}

$(document).ready(function () {

    var holaMundo = document.getElementById('headerprincipal');

    var dbRef = firebase.database().ref().child('texto');
    dbRef.on('value', snap=> holaMundo.innerText = snap.val());
    //document.getElementById("headerprincipal").innerText(dbRef);

    //var refFirebase = new firebase("https://dmgomezm-2ffb8.firebaseio.com");
    var obj = {name:"david", email:"email"};
    //var dbRef = firebase.database().ref().child('texto2');
    dbRef.set({"texto2":"ok2"});
    
    console.log("Ready!");
    document.getElementById("btnStartGame").addEventListener("click", StartGame, false);
    document.getElementById("btnStartGame2").addEventListener("click", StartLevel2, false);
    document.getElementById("btnStartGame3").addEventListener("click", StartLevel3, false);
    document.getElementById("btnStartGame4").addEventListener("click", StartLevel4, false);
    document.getElementById("btnStartGame5").addEventListener("click", StartLevel5, false);
    document.getElementById("btnReset").addEventListener("click", cleanOptions, false);
    
    //document.getElementById("btnStartGame").click("StartGame");

});

