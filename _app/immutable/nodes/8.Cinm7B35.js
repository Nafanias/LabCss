import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{s as p,h as u,n as t}from"../chunks/MOftl_Qc.js";import{t as d,a,b as l}from"../chunks/DcT4jPJw.js";import{C as n}from"../chunks/CcsI_mK9.js";var h=d('<h1 id="vsXML" class="svelte-12j9roq">JSON vs XML</h1> <p class="svelte-12j9roq">В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p class="svelte-12j9roq">В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p class="svelte-12j9roq">Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p class="svelte-12j9roq"><span class="bold svelte-12j9roq">XML</span></p> <!> <p class="svelte-12j9roq"><span class="bold svelte-12j9roq">JSON</span></p> <!> <p class="svelte-12j9roq">За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function $(i){var r=h(),o=p(u(r),10);n(o,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,c)=>{t();var e=l();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,a(s,e)},$$slots:{default:!0}});var m=p(o,4);n(m,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,c)=>{t();var e=l();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,a(s,e)},$$slots:{default:!0}}),t(2),a(i,r)}export{$ as component};
