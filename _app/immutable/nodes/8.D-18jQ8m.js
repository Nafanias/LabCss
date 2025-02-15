import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{S as r,T as m,V as t}from"../chunks/k7iXlUI8.js";import{t as c,a,b as o}from"../chunks/CP3h-6DZ.js";import{C as n}from"../chunks/DBMAbNen.js";var u=c('<h1 id="vsXML" class="svelte-1h4jldp">JSON vs XML</h1> <p class="svelte-1h4jldp">В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p class="svelte-1h4jldp">В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p class="svelte-1h4jldp">Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p class="svelte-1h4jldp"><span class="bold svelte-1h4jldp">XML</span></p> <!> <p class="svelte-1h4jldp"><span class="bold svelte-1h4jldp">JSON</span></p> <!> <p class="svelte-1h4jldp">За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function L(d){var p=u(),l=r(m(p),10);n(l,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,i)=>{t();var e=o();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,a(s,e)},$$slots:{default:!0}});var h=r(l,4);n(h,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,i)=>{t();var e=o();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,a(s,e)},$$slots:{default:!0}}),t(2),a(d,p)}export{L as component};
