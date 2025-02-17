import{t as c,a,b as n}from"../chunks/qGGmyE-U.js";import"../chunks/9Ud8F66T.js";import{M as h,L as i,N as t}from"../chunks/TTrIPi8I.js";import{A as v}from"../chunks/5ZNi9sMP.js";import{C as m}from"../chunks/DTaq0LnW.js";var y=c('<h1 class="svelte-1lpjany">JSON vs XML</h1>'),$=c('<!> <p class="svelte-1lpjany">В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p class="svelte-1lpjany">В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p class="svelte-1lpjany">Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p class="svelte-1lpjany"><span class="bold svelte-1lpjany">XML</span></p> <!> <p class="svelte-1lpjany"><span class="bold svelte-1lpjany">JSON</span></p> <!> <p class="svelte-1lpjany">За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function S(d){var p=$(),l=h(p);v(l,{id:"vsXML",children:(s,o)=>{var e=y();a(s,e)},$$slots:{default:!0}});var r=i(l,10);m(r,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,o)=>{t();var e=n();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,a(s,e)},$$slots:{default:!0}});var u=i(r,4);m(u,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(s,o)=>{t();var e=n();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,a(s,e)},$$slots:{default:!0}}),t(2),a(d,p)}export{S as component};
