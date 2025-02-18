import{t as u,a as r,b as _}from"../chunks/wGYI1cqU.js";import"../chunks/DcXOWZAV.js";import{s as o,f as M,c,n as a,r as i}from"../chunks/Bwj3twEK.js";import{A as l,C as n}from"../chunks/8c0qxEc2.js";import{O as R}from"../chunks/BELJ4VRa.js";var k=u("<h2>1. Кодирование</h2>"),B=u("<h2>2. Декодирование</h2>"),g=u("<h2>3. Получение ошибок и их исправление</h2>"),w=u("<h2>4. HTTP-запросы в формате JSON</h2>"),X=u('<h1>Работа с JSON в PHP</h1> <p>В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.</p> <!> <p><!> – кодирует массив или объект в JSON.</p> <!> <p>Результат:</p> <!> <p>Как видно кириллица кодируется, исправляется это добавлением опции <span style="color: var(--cds-support-03)">JSON_UNESCAPED_UNICODE.</span></p> <!> <p>Результат:</p> <!> <p>Далее такую строку можно сохранить в файл, или отдать в браузер, например при AJAX запросах.</p> <!> <!> <p>Функция <!> преобразует строку в объект:</p> <!> <p>Результат:</p> <!> <p>Если добавить вторым аргументом true, то произойдёт преобразование в массив:</p> <!> <p>Результат:</p> <!> <!> <p><span style="color: var(--cds-support-03)">json_decode()</span> возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции <span style="color: var(--cds-support-03)">json_last_error():</span></p> <!> <p>Посмотреть значения констант JSON:</p> <!> <p>Результат:</p> <!> <p>Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут <!> или BOM. Удалить их можно следующим образом:</p> <!> <!> <p>Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:</p> <!> <p>А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса.</p> <!>',1);function q(H){var O=X(),h=o(M(O),4);l(h,{id:"encoding",children:(t,s)=>{var e=k();r(t,e)},$$slots:{default:!0}});var d=o(h,2),L=c(d);R(L,{visited:!0,href:"https://www.php.net/manual/ru/function.json-encode.php",children:(t,s)=>{a();var e=_("json_encode($value, $options)");r(t,e)},$$slots:{default:!0}}),a(),i(d);var N=o(d,2);n(N,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$array = array(
	'1' => 'Значение 1', 
	'2' => 'Значение 2', 
	'3' => 'Значение 3', 
	'4' => 'Значение 4', 
	'5' => 'Значение 5'
);
			 
$json = json_encode($array);
echo $json;`,r(t,e)},$$slots:{default:!0}});var S=o(N,4);n(S,{code:'{"1":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 1","2":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 2","3":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 3","4":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 4","5":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 5"}',hideCopyButton:!0});var E=o(S,4);n(E,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
`,r(t,e)},$$slots:{default:!0}});var v=o(E,4);n(v,{code:'{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}',hideCopyButton:!0});var P=o(v,4);n(P,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`header('Content-Type: application/json');
echo $json;
exit();
`,r(t,e)},$$slots:{default:!0}});var T=o(P,2);l(T,{id:"decoding",children:(t,s)=>{var e=B();r(t,e)},$$slots:{default:!0}});var p=o(T,2),D=o(c(p));R(D,{visited:!0,href:"https://www.php.net/manual/ru/function.json-decode.php",children:(t,s)=>{a();var e=_("json_decode($json)");r(t,e)},$$slots:{default:!0}}),a(),i(p);var J=o(p,2);n(J,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json);
print_r($array);
`,r(t,e)},$$slots:{default:!0}});var f=o(J,4);n(f,{type:"multi",hideCopyButton:!0,children:(t,s)=>{a();var e=_();e.nodeValue=`stdClass Object
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,r(t,e)},$$slots:{default:!0}});var j=o(f,4);n(j,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json, true);
print_r($array);
`,r(t,e)},$$slots:{default:!0}});var C=o(j,4);n(C,{type:"multi",hideCopyButton:!0,children:(t,s)=>{a();var e=_();e.nodeValue=`Array
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,r(t,e)},$$slots:{default:!0}});var y=o(C,2);l(y,{id:"errors",children:(t,s)=>{var e=g();r(t,e)},$$slots:{default:!0}});var A=o(y,4);n(A,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$json = '{"1:"Значение 1"}';
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
`,r(t,e)},$$slots:{default:!0}});var m=o(A,4);n(m,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$constants = get_defined_constants(true);
foreach ($constants['json'] as $name => $value) {
	echo $name . ': ' . $value . '<br>';
}
`,r(t,e)},$$slots:{default:!0}});var U=o(m,4);n(U,{type:"multi",hideCopyButton:!0,children:(t,s)=>{a();var e=_();e.nodeValue=`JSON_HEX_TAG: 1
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
`,r(t,e)},$$slots:{default:!0}});var $=o(U,2),V=o(c($));R(V,{visited:!0,href:"https://snipp.ru/handbk/table-ascii#link-upravlyayuschie-simvoly",children:(t,s)=>{a();var e=_("управляющие символы");r(t,e)},$$slots:{default:!0}}),a(),i($);var x=o($,2);n(x,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$json = '{...}';

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
`,r(t,e)},$$slots:{default:!0}});var I=o(x,2);l(I,{id:"http",children:(t,s)=>{var e=w();r(t,e)},$$slots:{default:!0}});var b=o(I,4);n(b,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$data = array(
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
`,r(t,e)},$$slots:{default:!0}});var F=o(b,4);n(F,{type:"multi",children:(t,s)=>{a();var e=_();e.nodeValue=`$data = file_get_contents('php://input');
$data = json_decode($data, true);
`,r(t,e)},$$slots:{default:!0}}),r(H,O)}export{q as component};
