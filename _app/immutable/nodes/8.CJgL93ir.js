import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{U as u,T as n,V as a}from"../chunks/DwB3qp1y.js";import{t as i,a as t,b as d}from"../chunks/DhYkO-ht.js";import{A as v}from"../chunks/C8x85miN.js";import{C as h}from"../chunks/CGardy9S.js";var $=i('<h1 class="svelte-1h4jldp">JSON vs XML</h1>'),f=i('<!> <p class="svelte-1h4jldp">В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p class="svelte-1h4jldp">В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p class="svelte-1h4jldp">Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p class="svelte-1h4jldp"><span class="bold svelte-1h4jldp">XML</span></p> <!> <p class="svelte-1h4jldp"><span class="bold svelte-1h4jldp">JSON</span></p> <!> <p class="svelte-1h4jldp">За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function X(m){var p=f(),r=u(p);v(r,{id:"vsXML",children:(s,o)=>{var e=$();t(s,e)},$$slots:{default:!0}});var l=n(r,10);h(l,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,o)=>{a();var e=d();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,t(s,e)},$$slots:{default:!0}});var c=n(l,4);h(c,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,o)=>{a();var e=d();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,t(s,e)},$$slots:{default:!0}}),a(2),t(m,p)}export{X as component};
