import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{T as s,U as I,J as p,V as o,K as d}from"../chunks/DwB3qp1y.js";import{t as b,a as r,b as a}from"../chunks/DhYkO-ht.js";import{O as $}from"../chunks/DKnAL-hi.js";import{C as _}from"../chunks/CGardy9S.js";var H=b('<h1 class="svelte-c0j5xz">Работа с JSON в PHP</h1> <p class="svelte-c0j5xz">В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.</p> <h2 id="encoding" class="svelte-c0j5xz">1. Кодирование</h2> <p class="svelte-c0j5xz"><!> – кодирует массив или объект в JSON.</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Как видно кириллица кодируется, исправляется это добавлением опции <span style="color: var(--cds-support-03)">JSON_UNESCAPED_UNICODE.</span></p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Далее такую строку можно сохранить в файл, или отдать в браузер, например при AJAX запросах.</p> <!> <h2 id="decoding" class="svelte-c0j5xz">2. Декодирование</h2> <p class="svelte-c0j5xz">Функция <!> преобразует строку в объект:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Если добавить вторым аргументом true, то произойдёт преобразование в массив:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <h2 id="errors" class="svelte-c0j5xz">3. Получение ошибок и их исправление</h2> <p class="svelte-c0j5xz"><span style="color: var(--cds-support-03)">json_decode()</span> возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции <span style="color: var(--cds-support-03)">json_last_error():</span></p> <!> <p class="svelte-c0j5xz">Посмотреть значения констант JSON:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут <!> или BOM. Удалить их можно следующим образом:</p> <!> <h2 id="http" class="svelte-c0j5xz">4. HTTP-запросы в формате JSON</h2> <p class="svelte-c0j5xz">Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:</p> <!> <p class="svelte-c0j5xz">А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса.</p> <!>',1);function B(y){var R=H(),n=s(I(R),6),m=p(n);$(m,{visited:!0,href:"https://www.php.net/manual/ru/function.json-encode.php",children:(t,l)=>{o();var e=a("json_encode($value, $options)");r(t,e)},$$slots:{default:!0}}),o(),d(n);var O=s(n,2);_(O,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$array = array(
	'1' => 'Значение 1', 
	'2' => 'Значение 2', 
	'3' => 'Значение 3', 
	'4' => 'Значение 4', 
	'5' => 'Значение 5'
);
			 
$json = json_encode($array);
echo $json;`,r(t,e)},$$slots:{default:!0}});var i=s(O,4);_(i,{code:'{"1":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 1","2":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 2","3":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 3","4":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 4","5":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 5"}',hideCopyButton:!0});var h=s(i,4);_(h,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
`,r(t,e)},$$slots:{default:!0}});var N=s(h,4);_(N,{code:'{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}',hideCopyButton:!0});var v=s(N,4);_(v,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`header('Content-Type: application/json');
echo $json;
exit();
`,r(t,e)},$$slots:{default:!0}});var u=s(v,4),A=s(p(u));$(A,{visited:!0,href:"https://www.php.net/manual/ru/function.json-decode.php",children:(t,l)=>{o();var e=a("json_decode($json)");r(t,e)},$$slots:{default:!0}}),o(),d(u);var S=s(u,2);_(S,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json);
print_r($array);
`,r(t,e)},$$slots:{default:!0}});var E=s(S,4);_(E,{type:"multi",hideCopyButton:!0,children:(t,l)=>{o();var e=a();e.nodeValue=`stdClass Object
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,r(t,e)},$$slots:{default:!0}});var j=s(E,4);_(j,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json, true);
print_r($array);
`,r(t,e)},$$slots:{default:!0}});var T=s(j,4);_(T,{type:"multi",hideCopyButton:!0,children:(t,l)=>{o();var e=a();e.nodeValue=`Array
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,r(t,e)},$$slots:{default:!0}});var P=s(T,6);_(P,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$json = '{"1:"Значение 1"}';
$array = json_decode($json, true);
			 
switch (json_last_error()) {
	case JSON_ERROR_NONE:
		echo 'Ошибок нет';
	break;
	case JSON_ERROR_DEPTH:
		echo 'Достигнута максимальная глубина стека';
	break;
	case JSON_ERROR_STATE_MISMATCH:
		echo 'Некорректные разряды или несоответствие режимов';
	break;
	case JSON_ERROR_CTRL_CHAR:
		echo 'Некорректный управляющий символ';
	break;
	case JSON_ERROR_SYNTAX:
		echo 'Синтаксическая ошибка, некорректный JSON';
	break;
	case JSON_ERROR_UTF8:
		echo 'Некорректные символы UTF-8, возможно неверно закодирован';
	break;
	default:
		echo 'Неизвестная ошибка';
	break;
}
`,r(t,e)},$$slots:{default:!0}});var J=s(P,4);_(J,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$constants = get_defined_constants(true);
foreach ($constants['json'] as $name => $value) {
	echo $name . ': ' . $value . '<br>';
}
`,r(t,e)},$$slots:{default:!0}});var x=s(J,4);_(x,{type:"multi",hideCopyButton:!0,children:(t,l)=>{o();var e=a();e.nodeValue=`JSON_HEX_TAG: 1
JSON_HEX_AMP: 2
JSON_HEX_APOS: 4
JSON_HEX_QUOT: 8
JSON_FORCE_OBJECT: 16
JSON_NUMERIC_CHECK: 32
JSON_UNESCAPED_SLASHES: 64
JSON_PRETTY_PRINT: 128
JSON_UNESCAPED_UNICODE: 256
JSON_PARTIAL_OUTPUT_ON_ERROR: 512
JSON_PRESERVE_ZERO_FRACTION: 1024
JSON_UNESCAPED_LINE_TERMINATORS: 2048
JSON_OBJECT_AS_ARRAY: 1
JSON_BIGINT_AS_STRING: 2
JSON_ERROR_NONE: 0
JSON_ERROR_DEPTH: 1
JSON_ERROR_STATE_MISMATCH: 2
JSON_ERROR_CTRL_CHAR: 3
JSON_ERROR_SYNTAX: 4
JSON_ERROR_UTF8: 5
JSON_ERROR_RECURSION: 6
JSON_ERROR_INF_OR_NAN: 7
JSON_ERROR_UNSUPPORTED_TYPE: 8
JSON_ERROR_INVALID_PROPERTY_NAME: 9
JSON_ERROR_UTF16: 10
`,r(t,e)},$$slots:{default:!0}});var c=s(x,2),U=s(p(c));$(U,{visited:!0,href:"https://snipp.ru/handbk/table-ascii#link-upravlyayuschie-simvoly",children:(t,l)=>{o();var e=a("управляющие символы");r(t,e)},$$slots:{default:!0}}),o(),d(c);var C=s(c,2);_(C,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$json = '{...}';

// Удаление управляющих символов
for ($i = 0; $i <= 31; ++$i) { 
	$json = str_replace(chr($i), '', $json); 
}
			 
// Удаление символа Delete
$json = str_replace(chr(127), '', $json);
			 
// Удаление BOM
if (0 === strpos(bin2hex($json), 'efbbbf')) {
	$json = substr($json, 3);
}
			 
$res = json_decode($json, true);
print_r($res);
`,r(t,e)},$$slots:{default:!0}});var f=s(C,6);_(f,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$data = array(
	'name' => 'snipp.ru'
	'text' => 'Отправка сообщения',
);
			 
$ch = curl_init('https://example.com');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 	
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
$res = curl_exec($ch);
curl_close($ch);
`,r(t,e)},$$slots:{default:!0}});var z=s(f,4);_(z,{type:"multi",children:(t,l)=>{o();var e=a();e.nodeValue=`$data = file_get_contents('php://input');
$data = json_decode($data, true);
`,r(t,e)},$$slots:{default:!0}}),r(y,R)}export{B as component};
