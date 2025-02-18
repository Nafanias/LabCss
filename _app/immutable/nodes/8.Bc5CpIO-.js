import{t as d,a,b as i}from"../chunks/22ccgk4N.js";import"../chunks/B1_hZmLh.js";import{f as c,s as l,n as r}from"../chunks/DwcvzRHm.js";import{A as f}from"../chunks/DMQh0Ac0.js";import{C as m}from"../chunks/BX3sD_mN.js";var $=d("<h1>JSON vs XML</h1>"),v=d('<!> <p>В SOAP можно применять <u>только</u> XML, там без вариантов.</p> <p>В REST можно применять как XML, так и JSON. Разработчики отдают предпочтение json-формату, потому что он проще воспринимается и меньше весит. В XML есть лишняя обвязка, название полей повторяется дважды (открывающий и закрывающий тег).</p> <p>Сравните один и тот же запрос на обновление данных в карточке пользователя:</p> <p><span class="bold">XML</span></p> <!> <p><span class="bold">JSON</span></p> <!> <p>За счет того, что мы не дублируем название поля каждый раз «surname – surname», читать JSON проще. И за счет этого же запрос меньше весит, что при плохом интернете бывает важно. Или при большой нагрузке.</p>',1);function X(u){var o=v(),s=c(o);f(s,{id:"vsXML",children:(t,n)=>{var e=$();a(t,e)},$$slots:{default:!0}});var p=l(s,10);m(p,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,n)=>{r();var e=i();e.nodeValue=`<req>

	<surname>Иванов</surname>

	<name>Иван</name>

	<patronymic>Иванович</patronymic>

	<birthdate>01.01.1990</birthdate>

	<birthplace>Москва</birthplace>

	<phone>8 926 766 48 48</phone>

</req>
`,a(t,e)},$$slots:{default:!0}});var h=l(p,4);m(h,{type:"multi",hideCopyButton:!0,showMoreLess:!1,children:(t,n)=>{r();var e=i();e.nodeValue=`{

	"surname": "Иванов",

	"name": "Иван",

	"patronymic": "Иванович",

	"birthdate": "01.01.1990",

	"birthplace": "Москва",

	"phone": "8 926 766 48 48"

}
`,a(t,e)},$$slots:{default:!0}}),r(2),a(u,o)}export{X as component};
