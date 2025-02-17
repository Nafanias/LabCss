import{t as i,a as t,b as n}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{M as u,L as d,N as a}from"../chunks/TTrIPi8I.js";import{A as v}from"../chunks/5ZNi9sMP.js";import{C as h}from"../chunks/DTaq0LnW.js";var $=i('<h1 class="svelte-1h4jldp">JSON vs XML</h1>'),f=i('<!> <p class="svelte-1h4jldp">В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p class="svelte-1h4jldp">В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p class="svelte-1h4jldp">Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p class="svelte-1h4jldp"><span class="bold svelte-1h4jldp">XML</span></p> <!> <p class="svelte-1h4jldp"><span class="bold svelte-1h4jldp">JSON</span></p> <!> <p class="svelte-1h4jldp">За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function S(m){var p=f(),l=u(p);v(l,{id:"vsXML",children:(s,o)=>{var e=$();t(s,e)},$$slots:{default:!0}});var r=d(l,10);h(r,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,o)=>{a();var e=n();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,t(s,e)},$$slots:{default:!0}});var c=d(r,4);h(c,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,o)=>{a();var e=n();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,t(s,e)},$$slots:{default:!0}}),a(2),t(m,p)}export{S as component};
