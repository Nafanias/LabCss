import{t as n,a as o,b as l}from"../chunks/22ccgk4N.js";import"../chunks/B1_hZmLh.js";import{s,f as F,c as $,n as a,r as i}from"../chunks/DwcvzRHm.js";import{A as u}from"../chunks/DMQh0Ac0.js";import{O as R}from"../chunks/Du8Kq-ZH.js";import{C as _}from"../chunks/B1fFkSG_.js";var M=n('<h2 class="svelte-c0j5xz">1. Кодирование</h2>'),k=n('<h2 class="svelte-c0j5xz">2. Декодирование</h2>'),B=n('<h2 class="svelte-c0j5xz">3. Получение ошибок и их исправление</h2>'),g=n('<h2 class="svelte-c0j5xz">4. HTTP-запросы в формате JSON</h2>'),w=n('<h1 class="svelte-c0j5xz">Работа с JSON в PHP</h1> <p class="svelte-c0j5xz">В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.</p> <!> <p class="svelte-c0j5xz"><!> – кодирует массив или объект в JSON.</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Как видно кириллица кодируется, исправляется это добавлением опции <span style="color: var(--cds-support-03)">JSON_UNESCAPED_UNICODE.</span></p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Далее такую строку можно сохранить в файл, или отдать в браузер, например при AJAX запросах.</p> <!> <!> <p class="svelte-c0j5xz">Функция <!> преобразует строку в объект:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Если добавить вторым аргументом true, то произойдёт преобразование в массив:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <!> <p class="svelte-c0j5xz"><span style="color: var(--cds-support-03)">json_decode()</span> возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции <span style="color: var(--cds-support-03)">json_last_error():</span></p> <!> <p class="svelte-c0j5xz">Посмотреть значения констант JSON:</p> <!> <p class="svelte-c0j5xz">Результат:</p> <!> <p class="svelte-c0j5xz">Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут <!> или BOM. Удалить их можно следующим образом:</p> <!> <!> <p class="svelte-c0j5xz">Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:</p> <!> <p class="svelte-c0j5xz">А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса.</p> <!>',1);function q(b){var O=w(),h=s(F(O),4);u(h,{id:"encoding",children:(t,r)=>{var e=M();o(t,e)},$$slots:{default:!0}});var c=s(h,2),H=$(c);R(H,{visited:!0,href:"https://www.php.net/manual/ru/function.json-encode.php",children:(t,r)=>{a();var e=l("json_encode($value, $options)");o(t,e)},$$slots:{default:!0}}),a(),i(c);var v=s(c,2);_(v,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$array = array(
	'1' => 'Значение 1', 
	'2' => 'Значение 2', 
	'3' => 'Значение 3', 
	'4' => 'Значение 4', 
	'5' => 'Значение 5'
);
			 
$json = json_encode($array);
echo $json;`,o(t,e)},$$slots:{default:!0}});var N=s(v,4);_(N,{code:'{"1":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 1","2":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 2","3":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 3","4":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 4","5":"\\u0417\\u043d\\u0430\\u0447\\u0435\\u043d\\u0438\\u0435 5"}',hideCopyButton:!0});var S=s(N,4);_(S,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json;
`,o(t,e)},$$slots:{default:!0}});var E=s(S,4);_(E,{code:'{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}',hideCopyButton:!0});var j=s(E,4);_(j,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`header('Content-Type: application/json');
echo $json;
exit();
`,o(t,e)},$$slots:{default:!0}});var P=s(j,2);u(P,{id:"decoding",children:(t,r)=>{var e=k();o(t,e)},$$slots:{default:!0}});var d=s(P,2),L=s($(d));R(L,{visited:!0,href:"https://www.php.net/manual/ru/function.json-decode.php",children:(t,r)=>{a();var e=l("json_decode($json)");o(t,e)},$$slots:{default:!0}}),a(),i(d);var T=s(d,2);_(T,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json);
print_r($array);
`,o(t,e)},$$slots:{default:!0}});var x=s(T,4);_(x,{type:"multi",hideCopyButton:!0,children:(t,r)=>{a();var e=l();e.nodeValue=`stdClass Object
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,o(t,e)},$$slots:{default:!0}});var J=s(x,4);_(J,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
$array = json_decode($json, true);
print_r($array);
`,o(t,e)},$$slots:{default:!0}});var f=s(J,4);_(f,{type:"multi",hideCopyButton:!0,children:(t,r)=>{a();var e=l();e.nodeValue=`Array
(
	[1] => Значение 1
	[2] => Значение 2
	[3] => Значение 3
	[4] => Значение 4
	[5] => Значение 5
)
`,o(t,e)},$$slots:{default:!0}});var C=s(f,2);u(C,{id:"errors",children:(t,r)=>{var e=B();o(t,e)},$$slots:{default:!0}});var y=s(C,4);_(y,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{"1:"Значение 1"}';
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
`,o(t,e)},$$slots:{default:!0}});var A=s(y,4);_(A,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$constants = get_defined_constants(true);
foreach ($constants['json'] as $name => $value) {
	echo $name . ': ' . $value . '<br>';
}
`,o(t,e)},$$slots:{default:!0}});var m=s(A,4);_(m,{type:"multi",hideCopyButton:!0,children:(t,r)=>{a();var e=l();e.nodeValue=`JSON_HEX_TAG: 1
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
`,o(t,e)},$$slots:{default:!0}});var p=s(m,2),D=s($(p));R(D,{visited:!0,href:"https://snipp.ru/handbk/table-ascii#link-upravlyayuschie-simvoly",children:(t,r)=>{a();var e=l("управляющие символы");o(t,e)},$$slots:{default:!0}}),a(),i(p);var U=s(p,2);_(U,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$json = '{...}';

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
`,o(t,e)},$$slots:{default:!0}});var z=s(U,2);u(z,{id:"http",children:(t,r)=>{var e=g();o(t,e)},$$slots:{default:!0}});var I=s(z,4);_(I,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$data = array(
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
`,o(t,e)},$$slots:{default:!0}});var V=s(I,4);_(V,{type:"multi",children:(t,r)=>{a();var e=l();e.nodeValue=`$data = file_get_contents('php://input');
$data = json_decode($data, true);
`,o(t,e)},$$slots:{default:!0}}),o(b,O)}export{q as component};
