import{t as d,a,b as l}from"../chunks/DfmwQWje.js";import"../chunks/Dj_7PSR_.js";import{f as c,s as i,n as r}from"../chunks/Dvl4aESe.js";import{A as $,C as m}from"../chunks/Bm4sU34b.js";var f=d("<h1>JSON vs XML</h1>"),v=d('<!> <p>В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p>В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p>Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p><span class="bold">XML</span></p> <!> <p><span class="bold">JSON</span></p> <!> <p>За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function S(u){var o=v(),s=c(o);$(s,{id:"vsXML",children:(t,n)=>{var e=f();a(t,e)},$$slots:{default:!0}});var p=i(s,10);m(p,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,n)=>{r();var e=l();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,a(t,e)},$$slots:{default:!0}});var h=i(p,4);m(h,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,n)=>{r();var e=l();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,a(t,e)},$$slots:{default:!0}}),r(2),a(u,o)}export{S as component};
