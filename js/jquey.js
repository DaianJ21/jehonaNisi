
 /*!
 * Biblioteca JavaScript jQuery v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation y otros contribuyentes
 * Publicado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2023-08-28T13:37Z
 */
(función(global, fábrica) {

	"uso estricto";

	if (tipo de módulo === "objeto" && tipo de módulo.exportaciones === "objeto") {

		// Para entornos CommonJS y similares a CommonJS donde hay una "ventana" adecuada
		// está presente, ejecuta la fábrica y obtén jQuery.
		// Para entornos que no tienen una `ventana` con un `documento`
		// (como Node.js), expone una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una "ventana" real.
		// por ejemplo, var jQuery = require("jquery")(ventana);
		// Consulte el ticket trac-14549 para obtener más información.
		módulo.exportaciones = global.documento?
			fábrica (global, verdadero):
			función (w) {
				si (!w.documento) {
					arrojar un nuevo error ("jQuery requiere una ventana con un documento");
				}
				devolver fábrica (w);
			};
	} demás {
		fábrica (global);
	}

// Pasa esto si la ventana aún no está definida
} )( tipo de ventana !== "indefinido" ? ventana: esta, función (ventana, noGlobal) {

// Borde <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanza excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// argumentos.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// suficiente para que todos esos intentos estén protegidos en un bloque de prueba.
"uso estricto";

vararr = [];

var getProto = Object.getPrototypeOf;

var sector = arr.slice;

var plano = arr.plano? función (matriz) {
	devolver arr.plano.call (matriz);
}: función (matriz) {
	return arr.concat.apply( [], matriz);
};


var empujar = arr.push;

var indexOf = arr.indexOf;

var clase2tipo = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Objeto );

soporte var = {};

var esFunción = función esFunción( obj ) {

		// Soporte: Chrome <=57, Firefox <=52
		// En algunos navegadores, typeof devuelve "función" para elementos <objeto> HTML
		// (es decir, `tipo de documento.createElement( "objeto") === "función"`).
		// No queremos clasificar *ningún* nodo DOM como una función.
		// Soporte: QtWeb <=3.8.5, WebKit <=534.34, herramienta wkhtmltopdf <=0.12.5
		// Además, para WebKit antiguo, typeof devuelve "función" para colecciones HTML
		// (por ejemplo, `tipo de documento.getElementsByTagName("div") === "función"`). (gh-4756)
		tipo de retorno de obj === "función" && tipo de obj.nodeType! == "número" &&
			tipo de obj.item! == "función";
	};


var esVentana = función esVentana( obj ) {
		devolver obj! = nulo && obj === obj.window;
	};


var documento = ventana.documento;



	var atributos de script preservados = {
		tipo: verdadero,
		fuente: cierto,
		nonce: cierto,
		noModule: verdadero
	};

	función DOMEval(código, nodo, doc) {
		documento = documento || documento;

		var i, val,
			guión = doc.createElement( "guión" );

		script.text = código;
		si (nodo) {
			para (yo en atributos de script conservados) {

				// Soporte: Firefox 64+, Edge 18+
				// Algunos navegadores no admiten la propiedad "nonce" en los scripts.
				// Por otro lado, simplemente usar `getAttribute` no es suficiente ya que
				// el atributo `nonce` se restablece a una cadena vacía cada vez que
				// se conecta al contexto de navegación.
				// Ver https://github.com/whatwg/html/issues/2369
				// Ver https://html.spec.whatwg.org/#nonce-attributes
				// La verificación `node.getAttribute` se agregó por el bien de
				// `jQuery.globalEval` para que pueda falsificar un nodo que no contiene
				// a través de un objeto.
				val = nodo[ i ] || nodo.getAttribute && nodo.getAttribute(yo);
				si (valor) {
					script.setAttribute(i, val);
				}
			}
		}
		doc.head.appendChild( guión ).parentNode.removeChild( guión );
	}


función toType (obj) {
	si (obj == nulo) {
		devolver objeto + "";
	}

	// Soporte: Android <= 2.3 solamente (RegExp funcional)
	tipo de retorno de obj === "objeto" || tipo de obj === "función"?
		tipo2clase[ toString.call( obj ) ] || "objeto" :
		tipo de objeto;
}
/* Símbolo global */
// Definir este global en .eslintrc.json crearía el peligro de usar el global
// no protegido en otro lugar, parece más seguro definir global solo para este módulo



versión var = "3.7.1",

	rhtmlSufijo = /HTML$/i,

	// Definir una copia local de jQuery
	jQuery = función (selector, contexto) {

		// El objeto jQuery es en realidad sólo el constructor init 'mejorado'
		// Necesita init si se llama a jQuery (solo permita que se genere un error si no se incluye)
		devolver nuevo jQuery.fn.init (selector, contexto);
	};

jQuery.fn = jQuery.prototipo = {

	// La versión actual de jQuery que se está utilizando
	jquery: versión,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: función() {
		devolver segmento.call (esto);
	},

	// Obtener el enésimo elemento en el conjunto de elementos coincidentes O
	// Obtiene todo el conjunto de elementos coincidentes como una matriz limpia
	obtener: función (núm) {

		// Devuelve todos los elementos en una matriz limpia
		si (núm == nulo) {
			devolver segmento.call (esto);
		}

		// Devuelve sólo un elemento del conjunto
		devolver número <0? este[ número + esta.longitud ] : este[ número ];
	},

	// Toma una serie de elementos y empújalos hacia la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: función (elementos) {

		// Construye un nuevo conjunto de elementos jQuery coincidentes
		var ret = jQuery.merge( this.constructor(), elems );

		// Agrega el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		volver atrás;
	},

	// Ejecutar una devolución de llamada para cada elemento del conjunto coincidente.
	cada uno: función (devolución de llamada) {
		devolver jQuery.each (esto, devolución de llamada);
	},

	mapa: función (devolución de llamada) {
		devolver this.pushStack( jQuery.map( this, function( elem, i ) {
			devolver callback.call( elem, i, elem );
		} ) );
	},

	rebanada: función() {
		devolver this.pushStack (slice.apply (esto, argumentos));
	},

	primero: función() {
		devolver this.eq( 0 );
	},

	último: función() {
		devolver this.eq(-1);
	},

	incluso: función() {
		devolver this.pushStack( jQuery.grep( this, function( _elem, i ) {
			devolver (yo + 1) % 2;
		} ) );
	},

	Función impar() {
		devolver this.pushStack( jQuery.grep( this, function( _elem, i ) {
			devolver yo % 2;
		} ) );
	},

	ecuación: función (yo) {
		var len = esta.longitud,
			j = +i + (i < 0? len: 0);
		devolver this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fin: función() {
		devolver this.prevObject || this.constructor();
	},

	// Sólo para uso interno.
	// Se comporta como un método de Array, no como un método jQuery.
	empuja empuja,
	ordenar: ordenar.ordenar,
	empalme: arr.splice
};

jQuery.extend = jQuery.fn.extend = función() {
	opciones var, nombre, src, copiar, copyIsArray, clonar,
		objetivo = argumentos[ 0 ] || {},
		yo = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	if (tipo de objetivo === "booleano") {
		profundo = objetivo;

		// Saltamos el booleano y el objetivo
		objetivo = argumentos[ i ] || {};
		yo ++;
	}

	// Manejar mayúsculas y minúsculas cuando el objetivo es una cadena o algo así (posible en copia profunda)
	if (tipo de objetivo! == "objeto" &&! isFunction (destino)) {
		objetivo = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	si (yo === longitud) {
		objetivo = esto;
		i--;
	}

	para (; i < longitud; i++) {

		// Sólo tratamos con valores no nulos/indefinidos
		si ((opciones = argumentos [i])! = nulo) {

			// Extender el objeto base
			para (nombre en opciones) {
				copiar = opciones [nombre];

				// Prevenir la contaminación de Object.prototype
				// Evitar un bucle sin fin
				if (nombre === "__proto__" || destino === copiar) {
					continuar;
				}

				// Recurre si estamos fusionando objetos simples o matrices
				if (profundo && copia && (jQuery.isPlainObject(copia) ||
					(copiarIsArray = Array.isArray(copiar))))) {
					src = objetivo[ nombre ];

					// Garantizar el tipo adecuado para el valor fuente
					si (copiarIsArray &&! Array.isArray (src)) {
						clonar = [];
					} else if (!copyIsArray &&!jQuery.isPlainObject(src)) {
						clon = {};
					} demás {
						clon = origen;
					}
					copyIsArray = falso;

					// Nunca muevas objetos originales, clonalos
					objetivo[nombre] = jQuery.extend(profundo, clonar, copiar);

				// No introduzcas valores indefinidos
				} más si (copiar! == indefinido) {
					destino[ nombre ] = copiar;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de retorno;
};

jQuery.extender ({

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + ( versión + Math.random() ).replace( /\D/g, "" ),

	// Suponemos que jQuery está listo sin el módulo listo
	está listo: verdadero,

	error: función (mensaje) {
		lanzar un nuevo error (mensaje);
	},

	noop: función() {},

	isPlainObject: función (obj) {
		var proto, director;

		// Detectar negativos obvios
		// Usa toString en lugar de jQuery.type para capturar objetos del host
		if (!obj || toString.call(obj)!== "[objeto Objeto]") {
			falso retorno;
		}

		proto = obtenerProto(obj);

		// Los objetos sin prototipo (por ejemplo, `Object.create( null )`) son simples
		si (!proto) {
			devolver verdadero;
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call( proto, "constructor") && proto.constructor;
		tipo de retorno de Ctor === "función" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: función (obj) {
		nombre de la variable;

		para (nombre en obj) {
			falso retorno;
		}
		devolver verdadero;
	},

	// Evalúa un script en un contexto proporcionado; vuelve al global
	// si no se especifica.
	globalEval: función (código, opciones, documento) {
		DOMEval(código, {nonce: opciones && opciones.nonce}, doc);
	},

	cada uno: función (obj, devolución de llamada) {
		longitud var, i = 0;

		si (isArrayLike (obj)) {
			longitud = longitud obj;
			para (; i < longitud; i++) {
				si (devolución de llamada.llamada (obj[i], yo, obj[i]) === falso) {
					romper;
				}
			}
		} demás {
			para (yo en obj) {
				si (devolución de llamada.llamada (obj[i], yo, obj[i]) === falso) {
					romper;
				}
			}
		}

		objeto de retorno;
	},


	// Recupera el valor de texto de una matriz de nodos DOM
	texto: función (elemento) {
		nodo var,
			retiro = "",
			yo = 0,
			tipo de nodo = elem.tipo de nodo;

		si (! tipo de nodo) {

			// Si no hay ningún tipo de nodo, se espera que sea una matriz
			mientras ((nodo = elemento[i++])) {

				// No atravesar nodos de comentarios
				ret += jQuery.text(nodo);
			}
		}
		if (tipo de nodo === 1 || tipo de nodo === 11) {
			devolver elem.textContent;
		}
		si (tipo de nodo === 9) {
			devolver elem.documentElement.textContent;
		}
		if (tipo de nodo === 3 || tipo de nodo === 4) {
			devolver elem.nodeValue;
		}

		// No incluir nodos de comentarios o instrucciones de procesamiento

		volver atrás;
	},

	// los resultados son sólo para uso interno
	makeArray: función (arr, resultados) {
		var ret = resultados || [];

		si (arr! = nulo) {
			si (isArrayLike( Objeto( arr ) ) ) {
				jQuery.merge(ret,
					tipo de arr === "cadena"?
						[arr] :arr
				);
			} demás {
				push.call(ret, arr);
			}
		}

		volver atrás;
	},

	inArray: función (elem, arr, i) {
		devolver arreglo == nulo? -1: indexOf.call(arr, elem, i);
	},

	isXMLDoc: función (elemento) {
		var espacio de nombres = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Asumimos HTML cuando documentElement aún no existe, como en el interior
		// fragmentos de documentos.
		return !rhtmlSuffix.test( espacio de nombres || docElem && docElem.nodeName || "HTML" );
	},

	// Soporte: Android <=4.0 únicamente, PhantomJS 1 únicamente
	// push.apply(_, arraylike) lanza el antiguo WebKit
	fusionar: función (primero, segundo) {
		var len = +segundo.longitud,
			j = 0,
			i = primera.longitud;

		para (; j < len; j++) {
			primero[ i++ ] = segundo[ j ];
		}

		primera.longitud = i;

		regresar primero;
	},

	grep: función (elementos, devolución de llamada, invertir) {
		var callbackInverse,
			coincidencias = [],
			yo = 0,
			longitud = elementos.longitud,
			devolución de llamadaExpect = !invertir;

		//Recorre la matriz, guardando solo los elementos
		// que pasan la función de validación
		para (; i < longitud; i++) {
			callbackInverse = !callback( elems[ i ], i );
			if (callbackInverse! == callbackExpect) {
				coincidencias.push(elementos[i]);
			}
		}

		partidos de vuelta;
	},

	//arg es sólo para uso interno
	mapa: función (elementos, devolución de llamada, argumento) {
		longitud var, valor,
			yo = 0,
			retiro = [];

		// Revisa la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		si (isArrayLike (elementos)) {
			longitud = elementos.longitud;
			para (; i < longitud; i++) {
				valor = devolución de llamada (elementos [i], i, arg);

				si (valor! = nulo) {
					ret.push( valor );
				}
			}

		// Revisa cada clave del objeto,
		} demás {
			para (yo en elementos) {
				valor = devolución de llamada (elementos [i], i, arg);

				si (valor! = nulo) {
					ret.push( valor );
				}
			}
		}

		// Aplana cualquier matriz anidada
		volver plano(ret);
	},

	// Un contador GUID global para objetos
	guía: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan sus
	// propiedades para que tenga que existir.
	soporte soporte
} );

if (tipo de símbolo === "función") {
	jQuery.fn[ Símbolo.iterador ] = arr[ Símbolo.iterador ];
}

// Completa el mapa class2type
jQuery.each( "Número booleano Cadena Función Matriz Fecha RegExp Objeto Error Símbolo".split( " " ),
	función (_i, nombre) {
		class2type[ "[objeto " + nombre + "]" ] = nombre.toLowerCase();
	} );

función esArrayLike (obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en el simulador)
	// verificación `in` utilizada para evitar el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de la lista de nodos en IE
	var longitud = !!obj && "longitud" en obj && obj.longitud,
		tipo = toType( obj );

	si (isFunction( obj ) || isWindow( obj ) ) {
		falso retorno;
	}

	tipo de retorno === "matriz" || longitud === 0 ||
		tipo de longitud === "número" && longitud > 0 && (longitud - 1) en obj;
}


función nombrenodo(elem, nombre) {

	return elem.nodeName && elem.nodeName.toLowerCase() === nombre.toLowerCase();

}
var pop = arr.pop;


var ordenar = arr.ordenar;


var empalme = arr.empalme;


var espacio en blanco = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = nueva expresión regular (
	"^" + espacio en blanco + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espacio en blanco + "+$",
	"gramo"
);




// Nota: un elemento no se contiene a sí mismo
jQuery.contiene = función (a, b) {
	var bup = b && b.parentNode;

	devolver un === bup || !!( bup && bup.tipodenodo === 1 && (

		// Soporte: IE 9 - 11+
		// IE no tiene "contiene" en SVG.
		a.contiene?
			a.contiene(bup):
			a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
	) );
};




// serialización de identificador/cadena CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

función fcssescape(ch, asCodePoint) {
	si (asCodePoint) {

		// U+0000 NULL se convierte en U+FFFD CARÁCTER DE REEMPLAZO
		si (ch === "\0") {
			devolver "\uFFFD";
		}

		// Los caracteres de control y (dependiendo de la posición) los números se escapan como puntos de código
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Se evita la barra invertida de otros caracteres ASCII potencialmente especiales
	devolver "\\" + canal;
}

jQuery.escapeSelector = función (sel) {
	return (sel + "" ).reemplazar (rcssescape, fcssescape);
};




var preferidoDoc = documento,
	empujarNativo = empujar;

( función() {

var i,
	expr,
	contexto más externo,
	ordenar entrada,
	tiene duplicado,
	empujar = empujarNativo,

	// variables de documentos locales
	documento,
	elemento de documento,
	documentoEsHTML,
	rbuggyQSA,
	partidos,

	// datos específicos de la instancia
	expando=jQuery.expando,
	sucios = 0,
	hecho = 0,
	classCache = crearCache(),
	tokenCache = crearCache(),
	compiladorCache = crearCache(),
	nonativeSelectorCache = createCache(),
	ordenarOrden = función (a, b) {
		si (a === b) {
			tieneDuplicate = verdadero;
		}
		devolver 0;
	},

	booleanos = "marcado|seleccionado|async|autofocus|autoplay|controles|aplazar|deshabilitado|oculto|ismap|" +
		"bucle|múltiple|abierto|solo lectura|obligatorio|alcance",

	// Expresiones regulares

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espacio en blanco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Selectores de atributos: https://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espacios en blanco + "*(" + identificador + ")(?:" + espacios en blanco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espacio en blanco +

		// "Los valores de los atributos deben ser identificadores CSS [captura 5] o cadenas [captura 3 o captura 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identificador + "))|)" +
		espacio en blanco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reducir la cantidad de selectores que necesitan tokenizar en el prefiltro, prefiera los argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simple (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. cualquier otra cosa (captura 2)
		".*" +
		")\\)|)",

	// Espacios en blanco iniciales y finales sin escape, capturando algunos caracteres que no son espacios en blanco antes de este último
	rwhitespace = nueva RegExp(espacio en blanco + "+", "g"),

	rcomma = nueva RegExp( "^" + espacios en blanco + "*," + espacios en blanco + "*" ),
	rleadingCombinator = new RegExp( "^" + espacios en blanco + "*([>+~]|" + espacios en blanco + ")" +
		espacio en blanco + "*" ),
	rdescend = nueva expresión regular (espacio en blanco + "|>"),

	rpseudo = nueva expresión regular (pseudos),
	identificador = nueva RegExp( "^" + identificador + "$"),

	coincidenciaExpr = {
		ID: nueva expresión regular ("^#(" + identificador + ")" ),
		CLASE: nueva RegExp( "^\\.(" + identificador + ")" ),
		ETIQUETA: nueva RegExp( "^(" + identificador + "|[*])" ),
		ATTR: nueva RegExp( "^" + atributos ),
		PSEUDO: nueva RegExp( "^" + pseudos ),
		NIÑO: nueva RegExp(
			"^:(solo|primero|último|enésimo|enésimo-último)-(secundario|de-tipo)(?:\\(" +
				espacios en blanco + "*(par|impar|(([+-]|)(\\d*)n|)" + espacios en blanco + "*(?:([+-]|)" +
				espacios en blanco + "*(\\d+)|))" + espacios en blanco + "*\\)|)", "i" ),
		bool: nueva expresión regular ("^(?:" + booleanos + ")$", "i"),

		// Para uso en bibliotecas que implementan .is()
		// Usamos esto para comparar POS en `select`
		needContext: nueva expresión regular ("^" + espacios en blanco +
			"*[>+~]|:(par|impar|eq|gt|lt|nésimo|primero|último)(?:\\(" + espacios en blanco +
			"*((?:-\\d)?\\d*)" + espacio en blanco + "*\\)|)(?=[^-]|$)", "i" )
	},

	entradas = /^(?:entrada|seleccionar|área de texto|botón)$/i,
	encabezado = /^h\d$/i,

	// Selectores de ID o TAG o CLASE fácilmente analizables/recuperables
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	r hermano = /[+~]/,

	// CSS escapa
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = nueva expresión regular ("\\\\[\\da-fA-F]{1,6}" + espacios en blanco +
		"?|\\\\([^\\r\\n\\f])", "g"),
	funescape = función (escape, no hexadecimal) {
		var alto = "0x" + escape.slice( 1 ) - 0x10000;

		si (no hexadecimal) {

			// Elimina el prefijo de barra invertida de una secuencia de escape no hexadecimal
			devolver no hexadecimal;
		}

		// Reemplazar una secuencia de escape hexadecimal con el punto de código Unicode codificado
		// Soporte: IE <=11+
		// Para valores fuera del plano multilingüe básico (BMP), construya manualmente un
		// par sustituto
		devolver alto <0?
			String.fromCharCode (alto + 0x10000):
			String.fromCharCode( alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00 );
	},

	// Usado para iframes; consulte `setDocument`.
	// Soporte: IE 9 - 11+, Edge 12 - 18+
	// Eliminar el contenedor de funciones provoca un "Permiso denegado"
	// error en IE/Edge.
	descargarHandler = función() {
		setDocumento();
	},

	inDisabledFieldset = addCombinator(
		función (elemento) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", siguiente: "leyenda" }
	);

// Soporte: IE <=9 solamente
// Acceder a document.activeElement puede generar resultados inesperados
// https://bugs.jquery.com/ticket/13393
función safeActiveElement() {
	intentar {
		devolver documento.activeElement;
	} atrapar (errar) { }
}

// Optimizar para push.apply( _, NodeList )
intentar {
	empujar.aplicar(
		(arr = segmento.call(preferidoDoc.childNodes)),
		preferidoDoc.childNodes
	);

	// Soporte: Android <=4.0
	// Detecta push.apply que falla silenciosamente
	// eslint-deshabilitar-siguiente-línea sin expresiones-no utilizadas
	arr[preferidoDoc.childNodes.length].nodeType;
} atrapar (e) {
	empujar = {
		aplicar: función (objetivo, els) {
			pushNative.apply(destino, segmento.call(els));
		},
		llamada: función (objetivo) {
			pushNative.apply(destino, segmento.call(argumentos, 1));
		}
	};
}

función buscar (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, match, grupos, newSelector,
		newContext = contexto && contexto.ownerDocument,

		// nodeType por defecto es 9, ya que el contexto por defecto es document
		tipo de nodo = contexto? contexto.nodeType: 9;

	resultados = resultados || [];

	// Regresar temprano de llamadas con selector o contexto no válido
	if ( tipo de selector !== "cadena" || !selector ||
		tipo de nodo! == 1 && tipo de nodo! == 9 && tipo de nodo! == 11) {

		devolver resultados;
	}

	// Intenta utilizar atajos para operaciones de búsqueda (a diferencia de filtros) en documentos HTML
	si (! semilla) {
		establecerDocumento( contexto );
		contexto = contexto || documento;

		si (documentoEsHTML) {

			// Si el selector es lo suficientemente simple, intenta usar un método DOM "get*By*"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			if ( tipo de nodo ! == 11 && ( partido = rquickExpr.exec ( selector ) ) ) {

				//selector de ID
				si (( m = partido [ 1 ] ) ) {

					// contexto del documento
					si (tipo de nodo === 9) {
						si (( elem = contexto.getElementById( m ) ) ) {

							// Soporte: IE 9 solamente
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							si (elem.id === m) {
								push.call(resultados, elemento);
								devolver resultados;
							}
						} demás {
							devolver resultados;
						}

					// contexto del elemento
					} demás {

						// Soporte: IE 9 solamente
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						si ( nuevoContexto && ( elem = nuevoContexto.getElementById( m ) ) &&
							buscar.contiene (contexto, elemento) &&
							elemento.id === m ) {

							push.call(resultados, elemento);
							devolver resultados;
						}
					}

				// selector de tipo
				} más si (coincide [2]) {
					push.apply(resultados, context.getElementsByTagName(selector));
					devolver resultados;

				// selector de clase
				} else if ( ( m = match[ 3 ] ) && contexto.getElementsByClassName ) {
					push.apply(resultados, contexto.getElementsByClassName( m ) );
					devolver resultados;
				}
			}

			// Aprovecha querySelectorAll
			if (!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				nuevoSelector = selector;
				nuevoContexto = contexto;

				// qSA considera elementos fuera de una raíz de alcance al evaluar elementos secundarios o
				// combinadores descendientes, que no es lo que queremos.
				// En tales casos, solucionamos el comportamiento anteponiendo cada selector en el
				// lista con un selector de ID que hace referencia al contexto del alcance.
				// La técnica también debe usarse cuando se usa un combinador principal
				// ya que querySelectorAll no reconoce dichos selectores.
				// Gracias a Andrew Dupont por esta técnica.
				si (tipo de nodo === 1 &&
					(rdescend.test(selector) || rleadingCombinator.test(selector))) {

					// Ampliar contexto para selectores hermanos
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						contexto;

					// Podemos usar :scope en lugar del hack de ID si el navegador
					// lo admite & si no cambiamos el contexto.
					// Soporte: IE 11+, Edge 17 - 18+
					// IE/Edge a veces arroja un error de "Permiso denegado" cuando
					// comparación estricta de dos documentos; Las comparaciones superficiales funcionan.
					// eslint-deshabilitar-siguiente-línea eqeqeq
					if (nuevoContexto!= contexto ||!support.scope) {

						// Capture el ID de contexto, configurándolo primero si es necesario
						si ((nid = contexto.getAttribute( "id") ) ) {
							nid = jQuery.escapeSelector (nid);
						} demás {
							context.setAttribute( "id", (nid = expando) );
						}
					}

					// Prefija cada selector en la lista
					grupos = tokenizar (selector);
					i = grupos.longitud;
					mientras yo-- ) {
						grupos[i] = (nid? "#" + nid: ":alcance") + " " +
							toSelector(grupos[i]);
					}
					nuevoSelector = grupos.join( "," );
				}

				intentar {
					push.apply(resultados,
						nuevoContext.querySelectorAll( nuevoSelector )
					);
					devolver resultados;
				} captura (qsaError) {
					nonativeSelectorCache(selector, verdadero);
				} finalmente {
					si (nid === expando) {
						contexto.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos los otros
	return select(selector.replace(rtrimCSS, "$1"), contexto, resultados, semilla);
}

/**
 * Crear cachés de valores clave de tamaño limitado
 * @returns {función(cadena, objeto)} Devuelve los datos del Objeto después de almacenarlos en sí mismo con
 * nombre de la propiedad la cadena (con sufijo de espacio) y (si el caché es mayor que Expr.cacheLength)
 * eliminar la entrada más antigua
 */
función crearCache() {
	claves var = [];

	caché de función (clave, valor) {

		// Utilice (tecla + " ") para evitar colisiones con las propiedades del prototipo nativo
		// (ver https://github.com/jquery/sizzle/issues/157)
		if (keys.push(key + " " ) > Expr.cacheLength ) {

			// Conserva solo las entradas más recientes
			eliminar caché [keys.shift()];
		}
		retorno (caché [clave + " " ] = valor);
	}
	devolver caché;
}

/**
 * Marcar una función para uso especial del módulo selector jQuery
 * @param {Función} fn La función a marcar
 */
función marcaFunción( fn ) {
	fn[ expando ] = verdadero;
	devolver fn;
}

/**
 * Soporte de pruebas usando un elemento.
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 */
función afirmar (fn) {
	var el = document.createElement( "conjunto de campos" );

	intentar {
		retorno !!fn( el );
	} atrapar (e) {
		falso retorno;
	} finalmente {

		// Eliminar de su padre por defecto
		si (el.parentNode) {
			el.parentNode.removeChild( el );
		}

		//liberar memoria en IE
		el = nulo;
	}
}

/**
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {Cadena} tipo
 */
función crearInputPseudo(tipo) {
	función de retorno (elemento) {
		return nodeName( elem, "entrada") && elem.type === tipo;
	};
}

/**
 * Devuelve una función para usar en pseudos para botones
 * @param {Cadena} tipo
 */
función crearBotónPseudo(tipo) {
	función de retorno (elemento) {
		return (nombrenodo( elem, "entrada") || nombrenodo( elem, "botón") ) &&
			elem.tipo === tipo;
	};
}

/**
 * Devuelve una función para usar en pseudos para :enabled/:disabled
 * @param {Boolean} deshabilitado verdadero para :disabled; falso para: habilitado
 */
función createDisabledPseudo (deshabilitado) {

	// Conocido: falsos positivos deshabilitados: conjunto de campos[deshabilitado] > leyenda: enésimo tipo (n+2): can-disable
	función de retorno (elemento) {

		// Sólo ciertos elementos pueden coincidir con :enabled o :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		si ("forma" en elem) {

			// Verifica la discapacidad heredada en elementos relevantes no deshabilitados:
			// * elementos enumerados asociados al formulario en un conjunto de campos deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un grupo de opciones deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad "formulario".
			si (elem.parentNode && elem.disabled === falso) {

				// Los elementos de opción se remiten a un grupo de opción principal si está presente
				si ("etiqueta" en elem) {
					if ( "etiqueta" en elem.parentNode ) {
						return elem.parentNode.disabled === deshabilitado;
					} demás {
						return elem.disabled === discapacitado;
					}
				}

				// Soporte: IE 6 - 11+
				// Utilice la propiedad de acceso directo isDisabled para comprobar si hay ancestros del conjunto de campos deshabilitados
				devolver elem.isDisabled === deshabilitado ||

					// Donde no hay isDisabled, verifique manualmente
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === deshabilitado;
			}

			return elem.disabled === discapacitado;

		// Intente eliminar los elementos que no se pueden deshabilitar antes de confiar en la propiedad deshabilitada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería ser así
		// incluso existir en ellos, y mucho menos tener un valor booleano.
		} else if ("etiqueta" en elem) {
			return elem.disabled === discapacitado;
		}

		// Los elementos restantes no están ni :enabled ni :disabled
		falso retorno;
	};
}

/**
 * Devuelve una función para usar en pseudos para posicionales
 * @param {Función} fn
 */
función crearPseudoPosicional( fn ) {
	devolver función de marca (función (argumento) {
		argumento = +argumento;
		return markFunction( función( semilla, coincidencias ) {
			varj,
				matchIndexes = fn( [], semilla.longitud, argumento),
				i = matchIndexes.length;

			// Coincidir con los elementos encontrados en los índices especificados
			mientras yo-- ) {
				if ( semilla [ ( j = matchIndexes [ i ] ) ] ) {
					semilla[ j ] = !( coincide[ j ] = semilla[ j ] );
				}
			}
		} );
	} );
}

/**
 * Comprueba la validez de un nodo como contexto del selector jQuery
 * @param {Elemento|Objeto=} contexto
 * @returns {Elemento|Objeto|Booleano} El nodo de entrada si es aceptable, de lo contrario es un valor falso
 */
función testContext( contexto ) {
	devolver contexto && tipo de contexto.getElementsByTagName!== "indefinido" && contexto;
}

/**
 * Establece variables relacionadas con el documento una vez según el documento actual
 * @param {Elemento|Objeto} [nodo] Un elemento u objeto de documento que se utilizará para configurar el documento
 * @returns {Objeto} Devuelve el documento actual
 */
función establecerDocumento (nodo) {
	subventana var,
		doc = nodo? nodo.propietarioDocumento || nodo: Doc preferido;

	// Regresar temprano si el documento no es válido o ya está seleccionado
	// Soporte: IE 11+, Edge 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
	// dos documentos; Las comparaciones superficiales funcionan.
	// eslint-deshabilitar-siguiente-línea eqeqeq
	if (doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de devolución;
	}

	// Actualizar variables globales
	documento = documento;
	documentElement = documento.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( documento );

	// Soporte: iOS 7 solamente, IE 9 - 11+
	// Los navegadores más antiguos no admitían "coincidencias" sin prefijo.
	coincidencias = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Soporte: IE 9 - 11+, Edge 12 - 18+
	// El acceso a documentos iframe después de la descarga arroja errores de "permiso denegado"
	// (ver trac-13936).
	// Limitar la solución a IE y Edge Legacy; a pesar de que Edge 15+ implementa "coincidencias",
	// todas las versiones de IE 9+ y Edge Legacy también implementan `msMatchesSelector`.
	si (documentElement.msMatchesSelector &&

		// Soporte: IE 11+, Edge 17 - 18+
		// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
		// dos documentos; Las comparaciones superficiales funcionan.
		// eslint-deshabilitar-siguiente-línea eqeqeq
		documentopreferido != documento &&
		( subventana = document.defaultView ) && subventana.top !== subventana ) {

		// Soporte: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener ("descargar", descargarHandler);
	}

	// Soporte: IE <10
	// Comprobar si getElementById devuelve elementos por nombre
	// Los métodos getElementById rotos no seleccionan nombres establecidos mediante programación,
	// entonces usa una prueba indirecta getElementsByName
	support.getById = afirmar (función (el) {
		documentElement.appendChild( el ).id = jQuery.expando;
		devolver !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Soporte: IE 9 solamente
	// Comprueba si es posible hacer coincidenciasSelector
	// en un nodo desconectado.
	support.disconnectedMatch = afirmar (función (el) {
		return coincidencias.call( el, "*" );
	} );

	// Soporte: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge no admite la pseudoclase :scope.
	soporte.alcance = afirmar (función() {
		devolver document.querySelectorAll( ":alcance" );
	} );

	// Soporte: solo Chrome 105 - 111, solo Safari 15.4 - 16.3
	// Asegúrese de que el argumento `:has()` se analice implacablemente.
	// Incluimos `*` en la prueba para detectar implementaciones con errores que son
	// indulgente _selectivamente_ (específicamente cuando la lista incluye al menos
	// un selector válido).
	// Tenga en cuenta que tratamos la falta total de soporte para `:has()` como si lo fuera
	// soporte compatible con especificaciones, lo cual está bien porque el uso de `:has()` en tales
	// los entornos fallarán en la ruta qSA y recurrirán al recorrido de jQuery
	// de todos modos.
	support.cssHas = afirmar (función() {
		intentar {
			document.querySelector( ":has(*,:jqfake)" );
			falso retorno;
		} atrapar (e) {
			devolver verdadero;
		}
	} );

	// Filtrar ID y buscar
	si (soporte.getById) {
		Expr.filtro.ID = función (identificación) {
			var attrId = id.replace(runescape, funescape);
			función de retorno (elemento) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = función (id, contexto) {
			if (tipo de contexto.getElementById! == "indefinido" && documentIsHTML) {
				var elem = contexto.getElementById( identificación );
				elemento de retorno? [elemento]: [];
			}
		};
	} demás {
		Expr.filtro.ID = función (identificación) {
			var attrId = id.replace(runescape, funescape);
			función de retorno (elemento) {
				var nodo = tipo de elem.getAttributeNode! == "indefinido" &&
					elem.getAttributeNode( "identificación" );
				devolver nodo && node.value === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como acceso directo de búsqueda
		Expr.find.ID = función (id, contexto) {
			if (tipo de contexto.getElementById! == "indefinido" && documentIsHTML) {
				nodo var, i, elems,
					elem = contexto.getElementById( identificación );

				si (elemento) {

					// Verifica el atributo de identificación
					nodo = elem.getAttributeNode( "id" );
					if (nodo && nodo.valor === id) {
						devolver [elemento];
					}

					// Recurrir a getElementsByName
					elementos = contexto.getElementsByName( identificación );
					yo = 0;
					mientras ((elem = elems[i++])) {
						nodo = elem.getAttributeNode( "id" );
						if (nodo && nodo.valor === id) {
							devolver [elemento];
						}
					}
				}

				devolver [];
			}
		};
	}

	// Etiqueta
	Expr.find.TAG = función (etiqueta, contexto) {
		if (tipo de contexto.getElementsByTagName! == "indefinido") {
			devolver contexto.getElementsByTagName (etiqueta);

		// Los nodos DocumentFragment no tienen gEBTN
		} demás {
			devolver contexto.querySelectorAll(etiqueta);
		}
	};

	// Clase
	Expr.find.CLASS = función (nombre de clase, contexto) {
		if (tipo de contexto.getElementsByClassName! == "indefinido" && documentIsHTML) {
			devolver contexto.getElementsByClassName (nombre de clase);
		}
	};

	/* QSA/Selector de coincidencias
	-------------------------------------------------- -------------------- */

	// Soporte QSA y MatchSelector

	rbuggyQSA = [];

	// Construye expresiones regulares QSA
	// Estrategia Regex adoptada de Diego Perini
	afirmar (función (el) {

		entrada var;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<seleccionar id='" + expando + "-\r\\' deshabilitado='deshabilitado'>" +
			"<opción seleccionada=''></option></select>";

		// Soporte: iOS <=7 - 8 solamente
		// Los atributos booleanos y el "valor" no se tratan correctamente en algunos documentos XML
		if (!el.querySelectorAll( "[seleccionado]").length) {
			rbuggyQSA.push( "\\[" + espacios en blanco + "*(?:valor|" + booleanos + ")" );
		}

		// Soporte: iOS <=7 - 8 solamente
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Soporte: iOS 8 solamente
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// El `selector#id selector-combinador de hermanos` en la página falla
		if (!el.querySelectorAll( "a#" + expando + "+*").length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Soporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// En algunos tipos de documentos, estos selectores no funcionarían de forma nativa.
		// Probablemente esto esté bien, pero por compatibilidad con versiones anteriores queremos mantener
		// manejándolos a través del recorrido de jQuery en jQuery 3.x.
		if (!el.querySelectorAll( ":marcado").length) {
			rbuggyQSA.push( ":marcado" );
		}

		// Soporte: Aplicaciones nativas de Windows 8
		// Los atributos de tipo y nombre están restringidos durante la asignación .innerHTML
		entrada = document.createElement ("entrada");
		input.setAttribute( "tipo", "oculto");
		el.appendChild(entrada).setAttribute("nombre", "D");

		// Soporte: IE 9 - 11+
		// El selector :disabled de IE no selecciona los elementos secundarios de los conjuntos de campos deshabilitados
		// Soporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// En algunos tipos de documentos, estos selectores no funcionarían de forma nativa.
		// Probablemente esto esté bien, pero por compatibilidad con versiones anteriores queremos mantener
		// manejándolos a través del recorrido de jQuery en jQuery 3.x.
		documentElement.appendChild( el ).disabled = verdadero;
		if ( el.querySelectorAll( ":disabled").length !== 2 ) {
			rbuggyQSA.push( ":habilitado", ":deshabilitado" );
		}

		// Soporte: IE 11+, Edge 15 - 18+
		// IE 11/Edge no encuentra elementos en una consulta `[name='']` en algunos casos.
		// Agregar un atributo temporal al documento antes de que funcione la selección
		// en torno al tema.
		// Curiosamente, IE 10 y versiones anteriores no parecen tener el problema.
		entrada = document.createElement ("entrada");
		input.setAttribute( "nombre", "" );
		el.appendChild(entrada);
		if (!el.querySelectorAll( "[nombre='']").length) {
			rbuggyQSA.push( "\\[" + espacios en blanco + "*nombre" + espacios en blanco + "*=" +
				espacios en blanco + "*(?:''|\"\")" );
		}
	} );

	si (!support.cssHas) {

		// Soporte: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Nuestro mecanismo habitual `try-catch` no detecta archivos no compatibles de forma nativa
		// pseudoclases dentro de `:has()` (como `:has(:contains("Foo"))`)
		// en navegadores que analizan el argumento `:has()` como una lista de selección indulgente.
		// https://drafts.csswg.org/selectors/#relational ahora requiere el argumento
		// debe analizarse sin piedad, pero los navegadores aún no se han adaptado por completo.
		rbuggyQSA.push( ":tiene" );
	}

	rbuggyQSA = rbuggyQSA.length && nueva expresión regular (rbuggyQSA.join( "|" ));

	/* Ordenando
	-------------------------------------------------- -------------------- */

	// Ordenación de documentos
	ordenarOrden = función (a, b) {

		// Marcar para eliminación de duplicados
		si (a === b) {
			tieneDuplicate = verdadero;
			devolver 0;
		}

		// Ordenar según la existencia del método si solo una entrada tiene compareDocumentPosition
		var comparar = !a.compareDocumentPosition - !b.compareDocumentPosition;
		si ( comparar ) {
			comparación de retorno;
		}

		// Calcular posición si ambas entradas pertenecen al mismo documento
		// Soporte: IE 11+, Edge 17 - 18+
		// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
		// dos documentos; Las comparaciones superficiales funcionan.
		// eslint-deshabilitar-siguiente-línea eqeqeq
		comparar = (a.ownerDocument || a) == (b.ownerDocument || b)?
			a.compareDocumentPosition(b):

			// De lo contrario sabemos que están desconectados
			1;

		// Nodos desconectados
		si ( comparar & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparar ) ) {

			//Elegimos el primer elemento que esté relacionado con nuestro documento preferido
			// Soporte: IE 11+, Edge 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
			// dos documentos; Las comparaciones superficiales funcionan.
			// eslint-deshabilitar-siguiente-línea eqeqeq
			if ( a === documento || a.ownerDocument == documento preferido &&
				find.contains(Docpreferido, a) ) {
				devolver -1;
			}

			// Soporte: IE 11+, Edge 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
			// dos documentos; Las comparaciones superficiales funcionan.
			// eslint-deshabilitar-siguiente-línea eqeqeq
			if ( b === documento || b.ownerDocument == documento preferido &&
				find.contains (Doc preferido, b)) {
				devolver 1;
			}

			// Mantener el orden original
			devolver ordenarEntrada?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		volver comparar y 4? -1: 1;
	};

	documento de devolución;
}

buscar.coincidencias = función (expr, elementos) {
	devolver buscar (expr, nulo, nulo, elementos);
};

find.matchesSelector = función (elem, expr) {
	setDocumento(elem);

	si (documentoEsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.prueba( expr ) ) ) {

		intentar {
			var ret = coincidencias.call( elem, expr );

			// MatchSelector de IE 9 devuelve falso en nodos desconectados
			if ( ret || soporte.disconnectedMatch ||

					// Además, se dice que los nodos desconectados están en un documento
					// fragmento en IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				volver atrás;
			}
		} atrapar (e) {
			nonativeSelectorCache( expr, verdadero );
		}
	}

	return buscar (expr, documento, nulo, [elem]). Longitud > 0;
};

buscar.contiene = función (contexto, elemento) {

	// Establece las variables del documento si es necesario
	// Soporte: IE 11+, Edge 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
	// dos documentos; Las comparaciones superficiales funcionan.
	// eslint-deshabilitar-siguiente-línea eqeqeq
	if ((contexto.propietarioDocumento || contexto)!= documento) {
		establecerDocumento( contexto );
	}
	devolver jQuery.contains (contexto, elemento);
};


buscar.attr = función (elemento, nombre) {

	// Establece las variables del documento si es necesario
	// Soporte: IE 11+, Edge 17 - 18+
	// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
	// dos documentos; Las comparaciones superficiales funcionan.
	// eslint-deshabilitar-siguiente-línea eqeqeq
	if (( elem.ownerDocument || elem ) != documento ) {
		setDocumento(elem);
	}

	var fn = Expr.attrHandle[ nombre.toLowerCase() ],

		// No te dejes engañar por las propiedades de Object.prototype (ver trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, nombre.toLowerCase() )?
			fn(elem, nombre,!documentIsHTML):
			indefinido;

	si (val! == indefinido) {
		valor de retorno;
	}

	devolver elem.getAttribute (nombre);
};

encontrar.error = función (mensaje) {
	throw new Error( "Error de sintaxis, expresión no reconocida: " + msg );
};

/**
 * Clasificación de documentos y eliminación de duplicados.
 * @param {ArrayLike} resultados
 */
jQuery.uniqueSort = función (resultados) {
	elemento var,
		duplicados = [],
		j = 0,
		yo = 0;

	// A menos que *sepamos* que podemos detectar duplicados, asumimos su presencia
	//
	// Soporte: Android <=4.0+
	// Las pruebas para detectar duplicados son impredecibles, por lo que suponemos que no podemos
	// depende de la detección de duplicados en todos los navegadores sin una clasificación estable.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( resultados, 0 );
	sort.call(resultados, sortOrder);

	si (tiene Duplicado) {
		mientras ((elem = resultados[i++])) {
			si (elem === resultados [i]) {
				j = duplicados.push(i);
			}
		}
		mientras (j--) {
			empalme.call (resultados, duplicados [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	ordenarEntrada = nulo;

	devolver resultados;
};

jQuery.fn.uniqueSort = función() {
	devolver this.pushStack (jQuery.uniqueSort (slice.apply (esto)));
};

Expr = jQuery.expr = {

	// Puede ser ajustado por el usuario
	cachéLongitud: 50,

	crearPseudo: marcarFunción,

	coincidencia: coincidenciaExpr,

	mango de atributo: {},

	encontrar: {},

	relativo: {
		">": { dir: "parentNode", primero: verdadero },
		" ": {dir: "parentNode" },
		"+": { dir: "anteriorSibling", primero: verdadero },
		"~": { dir: "anteriorSibling" }
	},

	prefiltro: {
		ATTR: función (coincidencia) {
			coincidir[ 1 ] = coincidir[ 1 ].reemplazar( runescape, funescape );

			// Mueve el valor dado para que coincida con [3] ya sea entre comillas o sin comillas
			coincidir[ 3 ] = ( coincidir[ 3 ] || coincidir[ 4 ] || coincidir[ 5 ] || "" )
				.reemplazar (runescape, funescape);

			si (coincidencia[ 2 ] === "~=" ) {
				coincidir[ 3 ] = " " + coincidir[ 3 ] + " ";
			}

			devolver partido.slice( 0, 4 );
		},

		NIÑO: función (coincidencia) {

			/* coincidencias de matchExpr["NIÑO"]
				1 tipo (solo|nésimo|...)
				2 qué (niño|de tipo)
				3 argumento (par|impar|\d*|\d*n([+-]\d+)?|...)
				4 componente xn del argumento xn+y ([+-]?\d*n|)
				5 signo del componente xn
				6 x de componente xn
				7 signo del componente y
				8 y del componente y
			*/
			coincidir[ 1 ] = coincidir[ 1 ].toLowerCase();

			if (coincidencia[ 1 ].slice( 0, 3 ) === "enésima") {

				// nth-* requiere argumento
				si (!partido[ 3 ] ) {
					encontrar.error(coincidencia[0]);
				}

				// parámetros numéricos xey para Expr.filter.CHILD
				// recuerda que falso/verdadero se convierte respectivamente en 0/1
				coincidir[ 4 ] = +( coincidir[ 4 ] ?
					coincidir[ 5 ] + ( coincidir[ 6 ] || 1 ) :
					2 * (coincidencia[ 3 ] === "par" || coincidencia[ 3 ] === "impar" )
				);
				coincidir[ 5 ] = +( ( coincidir[ 7 ] + coincidir[ 8 ] ) || coincidir[ 3 ] === "impar" );

			// otros tipos prohíben argumentos
			} más si (coincide [3]) {
				encontrar.error(coincidencia[0]);
			}

			partido de vuelta;
		},

		PSEUDO: función (coincidencia) {
			exceso de var,
				sin comillas = !coincidencia[ 6 ] && coincidencia[ 2 ];

			if (partidoExpr.CHILD.test(partido[ 0 ] ) ) {
				devolver nulo;
			}

			// Acepta los argumentos citados tal cual
			si (coincidencia[ 3 ] ) {
				coincidir[ 2 ] = coincidir[ 4 ] || coincidencia[ 5 ] || "";

			// Elimina los caracteres sobrantes de los argumentos sin comillas
			} más si (sin comillas && rpseudo.test (sin comillas) &&

				// Obtener el exceso de tokenize (recursivamente)
				(exceso = tokenize(sin comillas, verdadero)) &&

				// avanza al siguiente paréntesis de cierre
				(exceso = sin comillas.indexOf( ")", longitud sin comillas - exceso) - longitud sin comillas)) {

				// el exceso es un índice negativo
				coincidencia[ 0 ] = coincidencia[ 0 ].slice( 0, exceso );
				partido[ 2 ] = sin comillas.slice( 0, exceso );
			}

			// Devuelve sólo las capturas necesarias para el método de pseudofiltro (tipo y argumento)
			devolver partido.slice( 0, 3 );
		}
	},

	filtro: {

		ETIQUETA: función (nodeNameSelector) {
			var esperadoNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			devolver nodoNameSelector === "*"?
				función() {
					devolver verdadero;
				} :
				función (elemento) {
					devolver nombredenodo( elem, nombredenodo esperado );
				};
		},

		CLASE: función (nombre de clase) {
			patrón var = classCache[ nombre de clase + " " ];

			patrón de retorno ||
				(patrón = nueva expresión regular ("(^|" + espacios en blanco + ")" + nombre de clase +
					"(" + espacios en blanco + "|$)" ) ) &&
				classCache (nombre de clase, función (elem) {
					devolver patrón.prueba(
						tipo de elem.className === "cadena" && elem.className ||
							tipo de elem.getAttribute! == "indefinido" &&
								elem.getAttribute( "clase") ||
							""
					);
				} );
		},

		ATTR: función (nombre, operador, verificación) {
			función de retorno (elemento) {
				var resultado = find.attr(elem, nombre);

				si (resultado == nulo) {
					operador de retorno === "!=";
				}
				si (! operador) {
					devolver verdadero;
				}

				resultado += "";

				si (operador === "=") {
					resultado de devolución === comprobar;
				}
				si (operador === "!=") {
					devolver resultado! == comprobar;
				}
				si (operador === "^=") {
					devolver cheque && result.indexOf(verificar) === 0;
				}
				si (operador === "*=") {
					devolver cheque && result.indexOf(verificar) > -1;
				}
				si (operador === "$=") {
					devolver cheque && resultado.slice( -check.length ) === cheque;
				}
				si (operador === "~=") {
					retorno ( " " + resultado.reemplazar (respacio en blanco, " " ) + " " )
						.indexOf(verificar) > -1;
				}
				si (operador === "|=") {
					resultado devuelto === comprobar || resultado.slice( 0, check.length + 1 ) === check + "-";
				}

				falso retorno;
			};
		},

		NIÑO: función (tipo, qué, _argumento, primero, último) {
			var simple = tipo.slice( 0, 3 ) !== "enésimo",
				adelante = tipo.slice( -4 ) !== "último",
				deTipo = qué === "de tipo";

			devolver primero === 1 && último === 0?

				// Acceso directo para :nth-*(n)
				función (elemento) {
					retorno !!elem.parentNode;
				} :

				función (elemento, _context, xml) {
					var cache, externalCache, nodo, nodeIndex, inicio,
						dir = simple! == adelante? "nextSibling": "anteriorSibling",
						padre = elem.parentNode,
						nombre = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diferencia = falso;

					si (padre) {

						// :(primero|último|solo)-(secundario|de-tipo)
						si (simple) {
							mientras (dir) {
								nodo = elem;
								mientras ((nodo = nodo[dir])) {
									si (de tipo?
										nombrenodo(nodo, nombre):
										nodo.tipodenodo === 1 ) {

										falso retorno;
									}
								}

								// Invertir dirección para :only-* (si aún no lo hemos hecho)
								inicio = dir = tipo === "solo" && !inicio && "nextSibling";
							}
							devolver verdadero;
						}

						inicio = [adelante? padre.primer hijo: padre.último hijo];

						// no xml :nth-child(...) almacena datos de caché en `parent`
						si (reenviar && useCache) {

							// Busca `elem` de un índice previamente almacenado en caché
							externalCache = padre[ expando ] || ( padre[ expando ] = {} );
							caché = caché exterior[ tipo ] || [];
							nodeIndex = caché[ 0 ] === dirruns && caché[ 1 ];
							diff = nodeIndex && caché[ 2 ];
							nodo = índicenodo && parent.childNodes[ índicenodo ];

							while ( ( nodo = ++nodeIndex && nodo && nodo[ dir ] ||

								// Volver a buscar `elem` desde el principio
								( diferencia = índice de nodo = 0 ) || inicio.pop() ) ) {

								// Cuando se encuentra, almacena en caché los índices en `parent` y los rompe
								if (nodo.nodeType === 1 && ++diff && nodo === elem) {
									externalCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									romper;
								}
							}

						} demás {

							// Utilice el índice de elementos previamente almacenado en caché si está disponible
							si (useCache) {
								externalCache = elem[ expando ] || ( elemento[ expando ] = {} );
								caché = caché exterior[ tipo ] || [];
								nodeIndex = caché[ 0 ] === dirruns && caché[ 1 ];
								diferencia = índice de nodo;
							}

							// xml :nésimo-niño(...)
							// o :nésimo-último-hijo(...) o :nésimo(-último)?-de-tipo(...)
							si (diferencia === falso) {

								// Usa el mismo bucle que el anterior para buscar `elem` desde el principio
								while ( ( nodo = ++nodeIndex && nodo && nodo[ dir ] ||
									( diferencia = índice de nodo = 0 ) || inicio.pop() ) ) {

									si ((deTipo?
										nombrenodo(nodo, nombre):
										nodo.tipodenodo === 1 ) &&
										++ diferencia ) {

										// Almacenar en caché el índice de cada elemento encontrado
										si (useCache) {
											externalCache = nodo[ expando ] ||
												( nodo[ expando ] = {} );
											externalCache[ tipo ] = [ dirruns, diff ];
										}

										si (nodo === elem) {
											romper;
										}
									}
								}
							}
						}

						// Incorporamos el desplazamiento y luego lo comparamos con el tamaño del ciclo.
						diferencia -= último;
						devolver diferencia === primero || ( diferencia % primero === 0 && diferencia / primero >= 0 );
					}
				};
		},

		PSEUDO: función (pseudo, argumento) {

			// los nombres de pseudoclases no distinguen entre mayúsculas y minúsculas
			// https://www.w3.org/TR/selectores/#pseudo-clases
			// Priorizar por distinción entre mayúsculas y minúsculas en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			argumentos var,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "pseudo no admitido: " + pseudo );

			// El usuario puede utilizar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// tal como lo hace jQuery
			si ( fn[ expando ] ) {
				devolver fn(argumento);
			}

			// Pero mantenemos el soporte para firmas antiguas
			si (fn.longitud > 1) {
				args = [pseudo, pseudo, "", argumento];
				devolver Expr.setFilters.hasOwnProperty (pseudo.toLowerCase())?
					markFunction( función( semilla, coincidencias ) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = longitud.coincidente;
						mientras yo-- ) {
							idx = indexOf.call (semilla, coincidente [i]);
							semilla[ idx ] = !( coincidencias [ idx ] = coincidente [ i ] );
						}
					} ):
					función (elemento) {
						devolver fn(elem, 0, argumentos);
					};
			}

			devolver fn;
		}
	},

	pseudos: {

		// pseudos potencialmente complejos
		no: markFunction( función( selector ) {

			// Recorta el selector pasado para compilar
			// para evitar tratar el principio y el final
			// espacios como combinadores
			entrada var = [],
				resultados = [],
				comparador = compilar (selector.reemplazar (rtrimCSS, "$1"));

			¿Devuelve el comparador[ expando ]?
				markFunction( función( semilla, coincidencias, _context, xml ) {
					elemento var,
						inigualable = comparador (semilla, nulo, xml, []),
						i = longitud.semilla;

					// Empareja elementos que no coinciden con `matcher`
					mientras yo-- ) {
						si ((elem = no coincidente [i])) {
							semilla[ i ] = !( coincide [ i ] = elem );
						}
					}
				} ):
				función (elemento, _context, xml) {
					entrada[ 0 ] = elemento;
					comparador (entrada, nulo, xml, resultados);

					// No conservar el elemento
					// (ver https://github.com/jquery/sizzle/issues/299)
					entrada[ 0 ] = nulo;
					return !resultados.pop();
				};
		} ),

		tiene: markFunction( función( selector ) {
			función de retorno (elemento) {
				devolver buscar (selector, elemento). longitud > 0;
			};
		} ),

		contiene: markFunction( función( texto ) {
			texto = texto.reemplazar (runescape, funescape);
			función de retorno (elemento) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( texto ) > -1;
			};
		} ),

		// "Si un elemento está representado por un selector :lang()
		// se basa únicamente en el valor del idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C seguido inmediatamente de "-".
		// La comparación de C con el valor de idioma del elemento se realiza sin distinguir entre mayúsculas y minúsculas.
		// El identificador C no tiene por qué ser un nombre de idioma válido."
		// https://www.w3.org/TR/selectores/#lang-pseudo
		idioma: markFunction( función( idioma ) {

			// el valor de idioma debe ser un identificador válido
			if (!ridentificador.prueba(lang || "")) {
				find.error( "idioma no admitido: " + idioma );
			}
			idioma = idioma.replace( runescape, funescape ).toLowerCase();
			función de retorno (elemento) {
				var elemLang;
				hacer {
					if (( elemLang = documentIsHTML ?
						elem.lang:
						elem.getAttribute( "xml:lang") || elem.getAttribute( "idioma") ) ) {

						elemLang = elemLang.toLowerCase();
						devolver elemLang === idioma || elemLang.indexOf( idioma + "-" ) === 0;
					}
				} mientras (( elem = elem.parentNode ) && elem.nodeType === 1 );
				falso retorno;
			};
		} ),

		// Misceláneas
		objetivo: función (elemento) {
			var hash = ventana.ubicación && ventana.ubicación.hash;
			devolver hash && hash.slice( 1 ) === elem.id;
		},

		raíz: función (elemento) {
			devolver elemento === documentElement;
		},

		foco: función (elemento) {
			elemento de retorno === safeActiveElement() &&
				documento.hasFocus() &&
				!!( elem.tipo || elem.href || ~elem.tabIndex );
		},

		// propiedades booleanas
		habilitado: createDisabledPseudo(falso),
		deshabilitado: createDisabledPseudo (verdadero),

		marcado: función (elemento) {

			// En CSS3, :checked debería devolver tanto los elementos marcados como los seleccionados
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nombrenodo( elem, "entrada") && !!elem.checked ) ||
				( nombrenodo( elem, "opción" ) && !!elem.selected );
		},

		seleccionado: función (elemento) {

			// Soporte: IE <=11+
			// Accediendo a la propiedad selectedIndex
			// obliga al navegador a tratar la opción predeterminada como
			// seleccionado cuando está en un grupo de opciones.
			si (elem.parentNode) {
				// eslint-deshabilitar-siguiente-línea sin expresiones-no utilizadas
				elem.parentNode.selectedIndex;
			}

			devolver elem.seleccionado === verdadero;
		},

		// Contenidos
		vacío: función (elemento) {

			// https://www.w3.org/TR/selectores/#empty-pseudo
			// :empty es negado por el elemento (1) o los nodos de contenido (texto: 3; cdata: 4; entidad ref: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType < 6 funciona porque los atributos (2) no aparecen como hijos
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				si (elem.nodeType <6) {
					falso retorno;
				}
			}
			devolver verdadero;
		},

		padre: función (elemento) {
			return !Expr.pseudos.empty( elem );
		},

		// Tipos de elemento/entrada
		encabezado: función (elemento) {
			return rheader.test( elem.nodeName );
		},

		entrada: función (elemento) {
			return rinputs.test( elem.nodeName );
		},

		botón: función (elemento) {
			return nodeName( elem, "entrada") && elem.type === "botón" ||
				nombrenodo( elem, "botón" );
		},

		texto: función (elemento) {
			atributo var;
			devolver nombredenodo( elem, "entrada") && elem.tipo === "texto" &&

				// Soporte: IE <10 solamente
				// Aparecen nuevos valores de atributos HTML5 (por ejemplo, "buscar")
				// con elem.type === "texto"
				( ( attr = elem.getAttribute( "tipo") ) == nulo ||
					attr.toLowerCase() === "texto");
		},

		// Posición en colección
		primero: crearPseudoPosicional( función() {
			devolver [0];
		} ),

		último: createPositionalPseudo( función( _matchIndexes, longitud ) {
			retorno [longitud - 1];
		} ),

		eq: createPositionalPseudo( función( _matchIndexes, longitud, argumento ) {
			devolver [argumento <0? argumento + longitud: argumento ];
		} ),

		incluso: createPositionalPseudo( función( matchIndexes, longitud ) {
			var i = 0;
			para (; yo < longitud; yo += 2 ) {
				matchIndexes.push(yo);
			}
			devolver índices de coincidencia;
		} ),

		impar: createPositionalPseudo (función (matchIndexes, longitud) {
			var i = 1;
			para (; yo < longitud; yo += 2 ) {
				matchIndexes.push(yo);
			}
			devolver índices de coincidencia;
		} ),

		lt: createPositionalPseudo( función( matchIndexes, longitud, argumento ) {
			var i;

			si (argumento < 0) {
				i = argumento + longitud;
			} más si (argumento > longitud) {
				yo = longitud;
			} demás {
				yo = argumento;
			}

			para ( ; --i >= 0; ) {
				matchIndexes.push(yo);
			}
			devolver índices de coincidencia;
		} ),

		gt: createPositionalPseudo( función( matchIndexes, longitud, argumento ) {
			var i = argumento < 0? argumento + longitud: argumento;
			para (; ++i < longitud;) {
				matchIndexes.push(yo);
			}
			devolver índices de coincidencia;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Agregar pseudos de tipo botón/entrada
for (i en {radio: verdadero, casilla de verificación: verdadero, archivo: verdadero, contraseña: verdadero, imagen: verdadero}) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
para (yo en {enviar: verdadero, restablecer: verdadero}) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API sencilla para crear nuevos setFilters
función setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = nuevos setFilters();

función tokenize (selector, parseOnly) {
	var coincidente, coincidencia, tokens, tipo,
		hasta ahora, grupos, prefiltros,
		almacenado en caché = tokenCache[ selector + " " ];

	si (en caché) {
		devolver solo análisis? 0: caché.slice( 0 );
	}

	hasta ahora = selector;
	grupos = [];
	preFilters = Expr.preFilter;

	mientras (hasta ahora) {

		// Coma y primera ejecución
		if (! Matched || (match = rcomma.exec (hasta ahora))) {
			si (coincide) {

				// No consumir comas finales como válidas
				hasta ahora = hasta ahora.slice( partido[ 0 ].longitud ) || hasta ahora;
			}
			grupos.push((tokens = []) );
		}

		coincidente = falso;

		// Combinadores
		if ((partido = rleadingCombinator.exec(hasta ahora))) {
			coincidente = match.shift();
			fichas.push( {
				valor: emparejado,

				// Lanzar combinadores descendientes al espacio
				tipo: coincidencia[ 0 ].reemplazar( rtrimCSS, " " )
			} );
			hasta ahora = hasta ahora.slice( longitud.coincidente );
		}

		// Filtros
		para (escriba Expr.filter) {
			if ((match = matchExpr[ tipo ].exec( hasta ahora ) ) && ( !preFilters[ tipo ] ||
				(coincidencia = preFilters[ tipo ]( coincidencia ) ) ) ) {
				coincidente = match.shift();
				fichas.push( {
					valor: emparejado,
					tipo: tipo,
					partidos: partido
				} );
				hasta ahora = hasta ahora.slice( longitud.coincidente );
			}
		}

		si (! coincide) {
			romper;
		}
	}

	// Devuelve la longitud del exceso no válido
	// si solo estamos analizando
	// De lo contrario, arroja un error o devuelve tokens
	si (sólo análisis) {
		volver hasta ahora.longitud;
	}

	¿Regresar hasta ahora?
		encontrar.error (selector):

		// Almacenar en caché los tokens
		tokenCache( selector, grupos ).slice( 0 );
}

función toSelector (tokens) {
	var i = 0,
		len = tokens.longitud,
		selector = "";
	para (; yo < len; yo++) {
		selector += tokens[ i ].valor;
	}
	selector de retorno;
}

función addCombinator( emparejador, combinador, base ) {
	var dir = combinador.dir,
		saltar = combinador.siguiente,
		tecla = saltar || directorio,
		checkNonElements = base && clave === "parentNode",
		hechoNombre = hecho++;

	devolver combinador.primero?

		// Comprobar con el ancestro más cercano/elemento anterior
		función (elemento, contexto, xml) {
			mientras ((elem = elem[dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					comparador de retorno (elem, contexto, xml);
				}
			}
			falso retorno;
		} :

		// Comprobar con todos los elementos ancestros/precedentes
		función (elemento, contexto, xml) {
			var oldCache, externalCache,
				newCache = [ dirruns, doneName ];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			si (xml) {
				mientras ((elem = elem[dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						si (matcher(elem, contexto, xml)) {
							devolver verdadero;
						}
					}
				}
			} demás {
				mientras ((elem = elem[dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						externalCache = elem[ expando ] || ( elemento[ expando ] = {} );

						if (omitir && nombrenodo(elem, omitir)) {
							elem = elem[dir] || elemento;
						} else if (( oldCache = externalCache[ clave ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Asignar a newCache para que los resultados se propaguen a elementos anteriores
							return (newCache[ 2 ] = oldCache[ 2 ] );
						} demás {

							// Reutilizar newcache para que los resultados se propaguen hacia atrás a elementos anteriores
							externalCache[ clave ] = newCache;

							// Una coincidencia significa que hemos terminado; un fallo significa que tenemos que seguir comprobando
							if (( newCache[ 2 ] = matcher( elem, contexto, xml ) ) ) {
								devolver verdadero;
							}
						}
					}
				}
			}
			falso retorno;
		};
}

función elementMatcher( coincidencias ) {
	devolver coincidencias.longitud> 1?
		función (elemento, contexto, xml) {
			var i = coincidencias.longitud;
			mientras yo-- ) {
				if (!matchers[ i]( elem, contexto, xml ) ) {
					falso retorno;
				}
			}
			devolver verdadero;
		} :
		emparejadores[ 0 ];
}

función múltiplesContextos (selector, contextos, resultados) {
	var i = 0,
		len = contextos.longitud;
	para (; yo < len; yo++) {
		buscar (selector, contextos [i], resultados);
	}
	devolver resultados;
}

función condensar (incomparable, mapa, filtro, contexto, xml) {
	elemento var,
		nuevoIncomparable = [],
		yo = 0,
		len = longitud.inigualable,
		mapeado = mapa! = nulo;

	para (; yo < len; yo++) {
		si ((elem = no coincidente [i])) {
			if (!filtro || filtro(elem, contexto, xml)) {
				nuevoUnmatched.push( elem );
				si (mapeado) {
					mapa.push(i);
				}
			}
		}
	}

	devolver nuevoIncomparable;
}

función setMatcher (prefiltro, selector, comparador, postfiltro, postFinder, postSelector) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( función( semilla, resultados, contexto, xml ) {
		var temp, i, elem, matcherOut,
			preMapa = [],
			postMap = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de la semilla o contexto
			elems = semilla ||
				contextos múltiples (selector || "*",
					contexto.tipo de nodo? [contexto]: contexto, []),

			// Prefiltro para obtener entradas del comparador, preservando un mapa para la sincronización de resultados iniciales
			matcherIn = prefiltro && (semilla ||!selector)?
				condensar (elementos, preMap, preFilter, contexto, xml):
				elementos;

		si (igualador) {

			// Si tenemos un postFinder, o una semilla filtrada, o un postFilter sin semilla
			// o resultados preexistentes,
			matcherOut = postFinder || (semilla? preFilter: preexistente || postFilter)?

				// ...es necesario un procesamiento intermedio
				[] :

				// ...de lo contrario usaremos los resultados directamente
				resultados;

			// Encuentra coincidencias primarias
			emparejador( emparejadorIn, emparejadorOut, contexto, xml);
		} demás {
			emparejadorOut = emparejadorIn;
		}

		// Aplicar postFilter
		si (postfiltro) {
			temp = condensar (matcherOut, postMap);
			postFilter(temp, [], contexto, xml);

			// Elimina la coincidencia de elementos defectuosos moviéndolos de nuevo a matcherIn
			i = longitud temp.;
			mientras yo-- ) {
				si ((elem = temp[i])) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		si (semilla) {
			si (postFinder || prefiltro) {
				si (postFinder) {

					// Obtenga el matcherOut final condensando este intermedio en contextos postFinder
					temperatura = [];
					i = matcherOut.longitud;
					mientras yo-- ) {
						si (( elem = matcherOut[ i ] ) ) {

							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push((matcherIn[i] = elem));
						}
					}
					postFinder(nulo, (matcherOut = []), temporal, xml);
				}

				// Mueve elementos coincidentes desde la semilla a los resultados para mantenerlos sincronizados
				i = matcherOut.longitud;
				mientras yo-- ) {
					si (( elem = matcherOut[ i ] ) &&
						(temp = postFinder? indexOf.call (semilla, elem): preMap [i])> -1) {

						semilla[temp] =!(resultados[temp] = elem);
					}
				}
			}

		// Agregar elementos a los resultados, a través de postFinder si está definido
		} demás {
			matcherOut = condensar(
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					emparejadorFuera
			);
			si (postFinder) {
				postFinder(nulo, resultados, matcherOut, xml);
			} demás {
				push.apply(resultados, matcherOut);
			}
		}
	} );
}

función matcherFromTokens (tokens) {
	var checkContext, comparador, j,
		len = tokens.longitud,
		líderRelativo = Expr.relativo[ tokens[ 0 ].tipo ],
		Relativo implícito = Relativo principal || Expr.relativa[ " " ],
		i = relativo principal? 1: 0,

		// El comparador fundamental garantiza que se pueda acceder a los elementos desde contextos de nivel superior
		matchContext = addCombinator (función (elem) {
			devolver elemento === checkContext;
		}, implícitoRelativo, verdadero),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call(checkContext, elem) > -1;
		}, implícitoRelativo, verdadero),
		coincidencias = [ función (elem, contexto, xml) {

			// Soporte: IE 11+, Edge 17 - 18+
			// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
			// dos documentos; Las comparaciones superficiales funcionan.
			// eslint-deshabilitar-siguiente-línea eqeqeq
			var ret = ( !leadingRelative && ( xml || contexto != contextoexterno ) ) || (
				(checkContext = contexto).nodeType?
					matchContext(elem, contexto, xml):
					matchAnyContext(elem, contexto, xml));

			// Evite colgarse del elemento
			// (ver https://github.com/jquery/sizzle/issues/299)
			comprobarContexto = nulo;
			volver atrás;
		} ];

	para (; yo < len; yo++) {
		if ((matcher = Expr.relative[tokens[i].tipo])) {
			emparejadores = [ addCombinator( elementMatcher( emparejadores ), emparejador ) ];
		} demás {
			matcher = Expr.filter[ tokens[ i ].tipo ].apply( null, tokens[ i ].matches );

			// Devolución especial al ver un comparador posicional
			if ( igualador[ expando ] ) {

				// Encuentra el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++yo;
				para (; j < len; j++) {
					if ( Expr.relative[ tokens[ j ].tipo ] ) {
						romper;
					}
				}
				devolver setMatcher(
					i > 1 && elementoMatcher( coincidencias ),
					i > 1 && alSelector(

						// Si el token anterior era un combinador descendiente, inserta un elemento implícito `*`
						tokens.slice( 0, i - 1 )
							.concat( { valor: tokens[ i - 2 ].tipo === " " ? "*" : "" } )
					).reemplazar( rtrimCSS, "$1" ),
					igualador,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			emparejadores.push( emparejador );
		}
	}

	devolver elementMatcher( coincidencias );
}

función matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		porElement = elementMatchers.length > 0,
		superMatcher = función (semilla, contexto, xml, resultados, más externo) {
			var elem, j, igualador,
				recuento coincidente = 0,
				yo = "0",
				inigualable = semilla && [],
				setMatched = [],
				contextoBackup = contextoexterno,

				// Siempre debemos tener elementos semilla o contexto más externo
				elems = semilla || porElement && Expr.find.TAG( "*", más externo),

				// Utilice dirruns enteros si este es el comparador más externo
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.longitud;

			si (más externo) {

				// Soporte: IE 11+, Edge 17 - 18+
				// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
				// dos documentos; Las comparaciones superficiales funcionan.
				// eslint-deshabilitar-siguiente-línea eqeqeq
				contextomásexterno = contexto == documento || contexto || más exterior;
			}

			// Agregar elementos pasando elementMatchers directamente a los resultados
			// Soporte: iOS <=7 - 9 solamente
			// Tolera la coincidencia de propiedades de NodeList (IE: "longitud"; Safari: <número>)
			// elementos por id. (ver trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				si (porElemento && elem) {
					j = 0;

					// Soporte: IE 11+, Edge 17 - 18+
					// IE/Edge a veces arroja un error de "Permiso denegado" al realizar una comparación estricta
					// dos documentos; Las comparaciones superficiales funcionan.
					// eslint-deshabilitar-siguiente-línea eqeqeq
					if (!context && elem.ownerDocument!= documento) {
						setDocumento(elem);
						xml = !documentIsHTML;
					}
					while ((matcher = elementosMatchers[j++])) {
						if (matcher(elem, contexto || documento, xml)) {
							push.call(resultados, elemento);
							romper;
						}
					}
					si (más externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos no coincidentes para filtros establecidos
				si (porConjunto) {

					// Habrán pasado por todos los posibles matchers
					si ((elem =! Matcher && elem)) {
						MatchedCount--;
					}

					// Alarga la matriz para cada elemento, coincida o no
					si (semilla) {
						inigualable.push( elem );
					}
				}
			}

			// `i` es ahora el recuento de elementos visitados anteriormente y se agrega a `matchedCount`
			// hace que este último no sea negativo.
			cuenta emparejada += i;

			// Aplicar filtros establecidos a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado _ningún_ elemento en el bucle anterior porque tenemos
			// sin coincidencias de elementos ni semillas.
			// Incrementar una cadena inicial "0" `i` permite que `i` siga siendo una cadena solo en ese
			// caso, lo que dará como resultado un "00" `matchedCount` que difiere de `i` pero que también es
			// numéricamente cero.
			if (porSet && i! == matchedCount) {
				j = 0;
				mientras (( emparejador = setMatchers[ j++ ] ) ) {
					comparador (no coincidente, setMatched, contexto, xml);
				}

				si (semilla) {

					// Reintegrar coincidencias de elementos para eliminar la necesidad de ordenar
					si (cuenta coincidente > 0) {
						mientras yo-- ) {
							if ( !( no coincidente[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( resultados );
							}
						}
					}

					// Descarta los valores del marcador de posición del índice para obtener solo coincidencias reales
					setMatched = condensar( setMatched );
				}

				// Agregar coincidencias a los resultados
				push.apply(resultados, setMatched);

				// Las coincidencias de conjuntos sin semillas posteriores a múltiples coincidencias exitosas estipulan la clasificación
				if (más externo && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {

					jQuery.uniqueSort(resultados);
				}
			}

			// Anula la manipulación de globales por parte de comparadores anidados
			si (más externo) {
				dirruns = dirrunsUnique;
				contextomásexterno = contexto de copia de seguridad;
			}

			retorno inigualable;
		};

	¿volver por Set?
		marcaFunción(superMatcher):
		superMatcher;
}

función compilar (selector, coincidencia /* Solo uso interno */) {
	var i,
		setMatchers = [],
		elementosMatchers = [],
		almacenado en caché = compiladorCache[selector + " " ];

	si (! almacenado en caché) {

		// Genera una función de funciones recursivas que se pueden usar para verificar cada elemento.
		si (!partido) {
			partido = tokenizar (selector);
		}
		i = coincidencia.longitud;
		mientras yo-- ) {
			en caché = matcherFromTokens (coincidencia [i]);
			if (en caché[ expando ] ) {
				setMatchers.push(en caché);
			} demás {
				elementMatchers.push(en caché);
			}
		}

		// Almacenar en caché la función compilada
		almacenado en caché = compiladorCache(selector,
			matcherFromGroupMatchers (elementoMatchers, setMatchers));

		// Guardar selector y tokenización
		caché.selector = selector;
	}
	devolver en caché;
}

/**
 * Una función de selección de bajo nivel que funciona con el compilado de jQuery.
 * funciones selectoras
 * @param {String|Function} selector Un selector o un precompilado
 * función selectora construida con la compilación del selector jQuery
 * @param {Elemento} contexto
 * @param {Matriz} [resultados]
 * @param {Array} [seed] Un conjunto de elementos con los que comparar
 */
función seleccionar (selector, contexto, resultados, semilla) {
	var i, tokens, token, tipo, buscar,
		compilado = tipo de selector === "función" && selector,
		match = !seed && tokenize( ( selector = compilado.selector || selector ) );

	resultados = resultados || [];

	// Intenta minimizar las operaciones si solo hay un selector en la lista y no hay semilla
	// (el último de los cuales nos garantiza el contexto)
	si (coincidencia.longitud === 1) {

		// Reducir el contexto si el selector compuesto principal es un ID
		fichas = coincidencia[ 0 ] = coincidencia[ 0 ].slice( 0 );
		if (tokens.length > 2 && (token = tokens[ 0 ] ).tipo === "ID" &&
				contexto.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].tipo ] ) {

			contexto = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				contexto
			) || [] )[ 0 ];
			si (! contexto) {
				devolver resultados;

			// Los comparadores precompilados seguirán verificando la ascendencia, así que sube un nivel
			} más si (compilado) {
				contexto = contexto.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Obtener un conjunto de semillas para hacer coincidir de derecha a izquierda
		i = matchExpr.needsContext.test(selector)? 0: tokens.longitud;
		mientras yo-- ) {
			token = tokens[i];

			// Abortar si llegamos a un combinador
			if ( Expr.relativa[ ( tipo = token.tipo ) ] ) {
				romper;
			}
			if ((buscar = Expr.buscar[ tipo ] ) ) {

				// Búsqueda, contexto en expansión para los principales combinadores de hermanos
				si (( semilla = encontrar (
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].tipo ) &&
						testContext( contexto.parentNode ) || contexto
				) ) ) {

					// Si la semilla está vacía o no quedan tokens, podemos regresar temprano
					tokens.splice(i, 1);
					selector = semilla.longitud && toSelector(tokens);
					si (!selector) {
						push.apply(resultados, semilla);
						devolver resultados;
					}

					romper;
				}
			}
		}
	}

	// Compile y ejecute una función de filtrado si no se proporciona ninguna
	// Proporcionar `match` para evitar la retokenización si modificamos el selector anterior
	(compilado || compilar (selector, coincidir)) (
		semilla,
		contexto,
		!documentIsHTML,
		resultados,
		!contexto || rsibling.test( selector ) && testContext( contexto.parentNode ) || contexto
	);
	devolver resultados;
}

// Asignaciones únicas

// Soporte: Android <=4.0 - 4.1+
// Ordenar estabilidad
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Inicializar contra el documento predeterminado
setDocumento();

// Soporte: Android <=4.0 - 4.1+
// Los nodos separados se siguen *entre sí* de manera confusa
support.sortDetached = afirmar (función (el) {

	// Debería devolver 1, pero devuelve 4 (siguiente)
	devolver el.compareDocumentPosition( document.createElement( "conjunto de campos") ) & 1;
} );

jQuery.find = buscar;

// Obsoleto
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Estos siempre han sido privados, pero solían estar documentados como parte de
// Chisporrotea, así que mantengámoslos por ahora por motivos de compatibilidad con versiones anteriores.
buscar.compile = compilar;
buscar.select = seleccionar;
buscar.setDocument = setDocument;
find.tokenize = tokenizar;

buscar.escape = jQuery.escapeSelector;
buscar.getText = jQuery.text;
buscar.isXML = jQuery.isXMLDoc;
buscar.selectores = jQuery.expr;
encontrar.soporte = jQuery.soporte;
encontrar.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = función (elem, dir, hasta) {
	var coincidente = [],
		truncar = hasta! == indefinido;

	mientras (( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		si (elem.nodeType === 1) {
			if (truncar && jQuery (elem). Es (hasta)) {
				romper;
			}
			emparejado.push(elem);
		}
	}
	retorno igualado;
};


var hermanos = función (n, elem) {
	var coincidente = [];

	para (; n; n = n.siguienteHermano) {
		si (n.nodeType === 1 && n!== elem) {
			emparejado.push( n );
		}
	}

	retorno igualado;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implementar la misma funcionalidad para filtro y no
función winnow (elementos, calificador, no) {
	si (isFunction(calificador)) {
		return jQuery.grep( elementos, función( elemento, i ) {
			return !!calificador.call( elem, i, elem ) !== no;
		} );
	}

	// elemento único
	if (calificador.tipodenodo) {
		devolver jQuery.grep(elementos, función(elem) {
			return ( elem === calificador ) !== no;
		} );
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (tipo de calificador! == "cadena") {
		devolver jQuery.grep(elementos, función(elem) {
			return ( indexOf.call( calificador, elem ) > -1 ) !== no;
		} );
	}

	// Filtrado directamente para selectores simples y complejos
	devolver jQuery.filter (calificador, elementos, no);
}

jQuery.filter = función (expr, elementos, no) {
	var elem = elementos[ 0 ];

	si no ) {
		expr = ":no(" + expr + ")";
	}

	si (elems.length === 1 && elem.nodeType === 1) {
		devolver jQuery.find.matchesSelector( elem, expr )? [elemento]: [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		devolver elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend({
	buscar: función (selector) {
		var i, ret,
			len = esta.longitud,
			yo = esto;

		if (tipo de selector! == "cadena") {
			devolver this.pushStack (jQuery (selector). Filtro (función () {
				para (i = 0; i < len; i++) {
					if (jQuery.contains(self[i], esto)) {
						devolver verdadero;
					}
				}
			} ) );
		}

		ret = this.pushStack ([]);

		para (i = 0; i < len; i++) {
			jQuery.find(selector, self[i], ret);
		}

		longitud de retorno > 1? jQuery.uniqueSort(ret): ret;
	},
	filtro: función (selector) {
		devuelve this.pushStack( winnow( this, selector || [], false ) );
	},
	no: función (selector) {
		devuelve this.pushStack( winnow( this, selector || [], true ) );
	},
	es: función (selector) {
		regresar !! aventar (
			este,

			// Si se trata de un selector posicional/relativo, comprueba la pertenencia al conjunto devuelto
			// entonces $("p:first").is("p:last") no devolverá verdadero para un documento con dos "p".
			tipo de selector === "cadena" && rneedsContext.test(selector)?
				jQuery(selector):
				seleccionador || [],
			FALSO
		).longitud;
	}
} );


// Inicializa un objeto jQuery


// Una referencia central a la raíz jQuery(documento)
var raízjQuery,

	// Una forma sencilla de comprobar cadenas HTML
	// Prioriza #id sobre <tag> para evitar XSS a través de location.hash (trac-9521)
	// Reconocimiento HTML estricto (trac-11290: debe comenzar con <)
	// Atajo simple #id mayúscula para velocidad
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = función (selector, contexto, raíz) {
		coincidencia de var, elem;

		// MANEJAR: $(""), $(nulo), $(indefinido), $(falso)
		si (!selector) {
			devolver esto;
		}

		// El método init() acepta un rootjQuery alternativo
		// entonces migrar puede soportar jQuery.sub (gh-2101)
		raíz = raíz || raízjQuery;

		// Manejar cadenas HTML
		if (tipo de selector === "cadena") {
			si (selector[ 0 ] === "<" &&
				selector[ selector.longitud - 1 ] === ">" &&
				selector.longitud >= 3 ) {

				// Suponemos que las cadenas que comienzan y terminan con <> son HTML y omiten la verificación de expresiones regulares
				partido = [nulo, selector, nulo];

			} demás {
				partido = rquickExpr.exec (selector);
			}

			// Haga coincidir html o asegúrese de que no se especifique ningún contexto para #id
			if (coincidencia && (coincidencia[ 1 ] || !context ) ) {

				// MANEJAR: $(html) -> $(matriz)
				si (coincidencia[ 1 ] ) {
					contexto = contexto instancia de jQuery? contexto[ 0 ] : contexto;

					// La opción para ejecutar scripts es verdadera para la compatibilidad con versiones anteriores
					// Permitir intencionalmente que se genere el error si parseHTML no está presente
					jQuery.merge( esto, jQuery.parseHTML(
						partido [1],
						contexto && contexto.nodeType? contexto.propietarioDocumento || contexto: documento,
						verdadero
					) );

					// MANEJAR: $(html, accesorios)
					if (rsingleTag.test(coincidencia[1]) && jQuery.isPlainObject(contexto)) {
						para (coincidencia en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							if (isFunction(este[partido])) {
								this[ coincidencia ]( contexto[ coincidencia ] );

							// ...y de lo contrario establecer como atributos
							} demás {
								this.attr(coincidencia, contexto[coincidencia]);
							}
						}
					}

					devolver esto;

				// MANEJAR: $(#id)
				} demás {
					elem = document.getElementById(coincidencia[ 2 ] );

					si (elemento) {

						// Inyecta el elemento directamente en el objeto jQuery
						esto[ 0 ] = elemento;
						esta.longitud = 1;
					}
					devolver esto;
				}

			// MANEJAR: $(expr, $(...))
			} más si (! contexto || contexto.jquery) {
				retorno (contexto || raíz). Buscar (selector);

			// MANEJAR: $(expr, contexto)
			// (que es equivalente a: $(context).find(expr)
			} demás {
				devolver this.constructor( contexto ).find( selector );
			}

		// MANEJAR: $(DOMElement)
		} más si (selector.tiponodo) {
			esto[ 0 ] = selector;
			esta.longitud = 1;
			devolver esto;

		// MANEJAR: $(función)
		// Acceso directo para documento listo
		} más si (isFunction(selector)) {
			devolver root.ready! == indefinido?
				raíz.listo (selector):

				// Ejecutar inmediatamente si listo no está presente
				selector(jQuery);
		}

		devolver jQuery.makeArray (selector, esto);
	};

// Da a la función init el prototipo jQuery para su posterior creación de instancias
init.prototipo = jQuery.fn;

// Inicializa la referencia central
rootjQuery = jQuery( documento );


var rparentsprev = /^(?:padres|prev(?:Hasta|Todos))/,

	// Métodos garantizados para producir un conjunto único al partir de un conjunto único
	garantizadoÚnico = {
		niños: cierto,
		contenido: verdadero,
		siguiente: cierto,
		anterior: verdadero
	};

jQuery.fn.extend({
	tiene: función (objetivo) {
		var objetivos = jQuery (objetivo, este),
			l = objetivos.longitud;

		devolver this.filter( función() {
			var i = 0;
			para (; yo < l; yo++) {
				if ( jQuery.contains (esto, objetivos [i])) {
					devolver verdadero;
				}
			}
		} );
	},

	más cercano: función (selectores, contexto) {
		var cur,
			yo = 0,
			l = esta.longitud,
			coincidente = [],
			objetivos = tipo de selectores! == "cadena" && jQuery (selectores);

		// Los selectores posicionales nunca coinciden, ya que no hay contexto de _selección_
		if (!rneedsContext.test(selectores)) {
			para (; yo < l; yo++) {
				for ( cur = this[ i ]; cur && cur !== contexto; cur = cur.parentNode ) {

					// Omitir siempre fragmentos de documentos
					if (cur.nodeType < 11 && (objetivos?
						objetivos.index( cur ) > -1 :

						// No pasar elementos que no sean a jQuery#find
						cur.tipodenodo === 1 &&
							jQuery.find.matchesSelector( cur, selectores ) ) ) {

						emparejado.push( cur );
						romper;
					}
				}
			}
		}

		devolver this.pushStack(matched.length > 1? jQuery.uniqueSort(matched): matched);
	},

	// Determinar la posición de un elemento dentro del conjunto.
	índice: función (elemento) {

		// Sin argumento, devuelve el índice en el padre
		si (!elem) {
			return (este[0] && este[0].parentNode)? this.first().prevAll().length : -1;
		}

		// Índice en el selector
		si (tipo de elemento === "cadena") {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Ubica la posición del elemento deseado
		devolver indexOf.call (esto,

			// Si recibe un objeto jQuery, se utiliza el primer elemento
			elem.jquery? elemento[ 0 ] : elemento
		);
	},

	agregar: función (selector, contexto) {
		devolver this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge (this.get(), jQuery (selector, contexto))
			)
		);
	},

	agregarBack: función (selector) {
		devolver this.add(selector == nulo?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
} );

función hermano( cur, dir ) {
	mientras (( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	devolver cur;
}

jQuery.cada uno ({
	padre: función (elemento) {
		var padre = elem.parentNode;
		devolver padre && parent.nodeType! == 11? padre: nulo;
	},
	padres: función (elemento) {
		return dir(elem, "parentNode");
	},
	padresHasta: función (elem, _i, hasta) {
		return dir( elem, "parentNode", hasta);
	},
	siguiente: función (elemento) {
		devolver hermano( elem, "nextSibling" );
	},
	anterior: función (elemento) {
		devolver hermano( elem, "hermanoanterior");
	},
	siguienteTodos: función(elem) {
		return dir(elem, "siguienteHermano");
	},
	prevAll: función (elemento) {
		return dir( elem, "hermanoanterior");
	},
	siguienteHasta: función( elem, _i, hasta ) {
		return dir( elem, "nextSibling", hasta);
	},
	prevHasta: función (elem, _i, hasta) {
		return dir( elem, "hermanoanterior", hasta);
	},
	hermanos: función (elem) {
		devolver hermanos ((elem.parentNode || {}).firstChild, elem);
	},
	hijos: función (elemento) {
		devolver hermanos (elem.firstChild);
	},
	contenido: función (elemento) {
		si (elem.contentDocument! = nulo &&

			// Soporte: IE 11+
			// los elementos <objeto> sin atributo `datos` tienen un objeto
			// `contentDocument` con un prototipo `nulo`.
			getProto( elem.contentDocument ) ) {

			devolver elem.contentDocument;
		}

		// Compatibilidad: solo IE 9 - 11, solo iOS 7, solo navegador Android <= 4.3
		// Trata el elemento de plantilla como uno normal en navegadores que
		// no lo apoyo.
		if (nombrenodo(elem, "plantilla")) {
			elem = elem.content || elemento;
		}

		devolver jQuery.merge( [], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn[nombre] = función(hasta, selector) {
		var coincidente = jQuery.map (esto, fn, hasta);

		if (nombre.slice(-5)!== "Hasta") {
			selector = hasta;
		}

		if (selector && tipo de selector === "cadena") {
			coincidente = jQuery.filter (selector, coincidente);
		}

		si (esta.longitud > 1) {

			// Eliminar duplicados
			if (! garantizadoUnico[ nombre ] ) {
				jQuery.uniqueSort(coincidente);
			}

			// Orden inverso para padres* y derivados anteriores
			si (rparentsprev.test(nombre)) {
				coincidente.reverse();
			}
		}

		devolver this.pushStack (coincidente);
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convertir opciones con formato de cadena en opciones con formato de objeto
función crearOpciones (opciones) {
	objeto var = {};
	jQuery.each( opciones.match( rnothtmlwhite ) || [], función( _, bandera ) {
		objeto[bandera] = verdadero;
	} );
	objeto de retorno;
}

/*
 * Cree una lista de devolución de llamadas utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán la forma
 * la lista de devolución de llamada se comporta como un objeto de opción más tradicional
 *
 * De forma predeterminada, una lista de devolución de llamadas actuará como una lista de devolución de llamadas de eventos y se puede
 * "despedido" varias veces.
 *
 * Posibles opciones:
 *
 * una vez: garantizará que la lista de devolución de llamadas solo se pueda activar una vez (como un Diferido)
 *
 * memoria: realizará un seguimiento de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista se haya despedido inmediatamente con los últimos "memorizados"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );