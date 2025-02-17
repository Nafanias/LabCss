import{t as _,a as o,b as l}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{L as s,M as F,J as c,N as a,K as i}from"../chunks/TTrIPi8I.js";import{A as u}from"../chunks/5ZNi9sMP.js";import{O as R}from"../chunks/-XsP_0nH.js";import{C as n}from"../chunks/DTaq0LnW.js";var k=_('<h2 class="svelte-60aon4">1. Кодирование</h2>'),B=_('<h2 class="svelte-60aon4">2. Декодирование</h2>'),g=_('<h2 class="svelte-60aon4">3. Получение ошибок и их исправление</h2>'),w=_('<h2 class="svelte-60aon4">4. HTTP-запросы в формате JSON</h2>'),X=_('<h1 class="svelte-60aon4">Работа с JSON в PHP</h1> <p class="svelte-60aon4">В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.</p> <!> <p class="svelte-60aon4"><!> – кодирует массив или объект в JSON.</p> <!> <p class="svelte-60aon4">Результат:</p> <!> <p class="svelte-60aon4">Как видно кириллица кодируется, исправляется это добавлением опции <span style="color: var(--cds-support-03)">JSON_UNESCAPED_UNICODE.</span></p> <!> <p class="svelte-60aon4">Результат:</p> <!> <p class="svelte-60aon4">Далее такую строку можно сохранить в файл, или отдать в браузер, например при AJAX запросах.</p> <!> <!> <p class="svelte-60aon4">Функция <!> преобразует строку в объект:</p> <!> <p class="svelte-60aon4">Результат:</p> <!> <p class="svelte-60aon4">Если добавить вторым аргументом true, то произойдёт преобразование в массив:</p> <!> <p class="svelte-60aon4">Результат:</p> <!> <!> <p class="svelte-60aon4"><span style="color: var(--cds-support-03)">json_decode()</span> возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции <span style="color: var(--cds-support-03)">json_last_error():</span></p> <!> <p class="svelte-60aon4">Посмотреть значения констант JSON:</p> <!> <p class="svelte-60aon4">Результат:</p> <!> <p class="svelte-60aon4">Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут <!> или BOM. Удалить их можно следующим образом:</p> <!> <!> <p class="svelte-60aon4">Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:</p> <!> <p class="svelte-60aon4">А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса.</p> <!>',1);function z(b){var O=X(),h=s(F(O),4);u(h,{id:"encoding",children:(t,r)=>{var e=k();o(t,e)},$$slots:{default:!0}});var d=s(h,2),H=c(d);R(H,{visited:!0,href:"https://www.php.net/manual/ru/function.json-encode.php",children:(t,r)=>{a();var e=l("json_encode($value, $options)");o(t,e)},$$slots:{default:!0}}),a(),i(d);var v=s(d,2);n(v,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$array = array(
	'1' => 'Значение 1', 
	'2' => 'Значение 2', 
	'3' => 'Значение 3', 
	'4' => 'Значение 4', 
	'5' => 'Значение 5'
);
			 
$json = json_encode($array);
echo $json;`,o(t,e)},$$slots:{default:!0}});var N=s(v,4);n(N,{code:'{"1":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 1","2":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 2","3":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 3","4":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 4","5":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 5"}',hideCopyButton:!0});var S=s(N,4);n(S,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
`,o(t,e)},$$slots:{default:!0}});var E=s(S,4);n(E,{code:'{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}',hideCopyButton:!0});var P=s(E,4);n(P,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`header('Content-Type: application/json');
echo $json;
exit();
`,o(t,e)},$$slots:{default:!0}});var T=s(P,2);u(T,{id:"decoding",children:(t,r)=>{var e=B();o(t,e)},$$slots:{default:!0}});var p=s(T,2),D=s(c(p));R(D,{visited:!0,href:"https://www.php.net/manual/ru/function.json-decode.php",children:(t,r)=>{a();var e=l("json_decode($json)");o(t,e)},$$slots:{default:!0}}),a(),i(p);var J=s(p,2);n(J,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json);
print_r($array);
`,o(t,e)},$$slots:{default:!0}});var f=s(J,4);n(f,{type:"multi",hideCopyButton:!0,children:(t,r)=>{a();var e=l();e.nodeValue=`stdClass Object
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,o(t,e)},$$slots:{default:!0}});var j=s(f,4);n(j,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json, true);
print_r($array);
`,o(t,e)},$$slots:{default:!0}});var C=s(j,4);n(C,{type:"multi",hideCopyButton:!0,children:(t,r)=>{a();var e=l();e.nodeValue=`Array
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,o(t,e)},$$slots:{default:!0}});var y=s(C,2);u(y,{id:"errors",children:(t,r)=>{var e=g();o(t,e)},$$slots:{default:!0}});var A=s(y,4);n(A,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{"1:"Значение 1"}';
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
`,o(t,e)},$$slots:{default:!0}});var m=s(A,4);n(m,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$constants = get_defined_constants(true);
foreach ($constants['json'] as $name => $value) {
	echo $name . ': ' . $value . '<br>';
}
`,o(t,e)},$$slots:{default:!0}});var U=s(m,4);n(U,{type:"multi",hideCopyButton:!0,children:(t,r)=>{a();var e=l();e.nodeValue=`JSON_HEX_TAG: 1
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
`,o(t,e)},$$slots:{default:!0}});var $=s(U,2),V=s(c($));R(V,{visited:!0,href:"https://snipp.ru/handbk/table-ascii#link-upravlyayuschie-simvoly",children:(t,r)=>{a();var e=l("управляющие символы");o(t,e)},$$slots:{default:!0}}),a(),i($);var x=s($,2);n(x,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{...}';

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
`,o(t,e)},$$slots:{default:!0}});var I=s(x,2);u(I,{id:"http",children:(t,r)=>{var e=w();o(t,e)},$$slots:{default:!0}});var L=s(I,4);n(L,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$data = array(
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
`,o(t,e)},$$slots:{default:!0}});var M=s(L,4);n(M,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$data = file_get_contents('php://input');
$data = json_decode($data, true);
`,o(t,e)},$$slots:{default:!0}}),o(b,O)}export{z as component};
