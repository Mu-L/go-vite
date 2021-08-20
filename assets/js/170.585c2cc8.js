(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{780:function(t,e,a){"use strict";a.r(e);var n=a(1),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vep-6-vite-uri-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vep-6-vite-uri-formatting"}},[t._v("#")]),t._v(" VEP 6: Vite URI Formatting")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This specification defines standard URI format used in Vite")]),t._v(" "),a("h2",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"c++",base64:"cmVxdWVzdCAgICAgICAgICAgICAgICAgPSAmcXVvdDt2aXRlJnF1b3Q7ICZxdW90OzomcXVvdDtbdGFyZ2V0X2FkZHJlc3NdIFsgJnF1b3Q7QCZxdW90OyBjaGFpbl9pZCBdIFsgJnF1b3Q7LyZxdW90OyBmdW5jdGlvbl9uYW1lIF0gWyAmcXVvdDs/JnF1b3Q7IHBhcmFtZXRlcnMgXQp0YXJnZXRfYWRkcmVzcyAgICAgICAgICA9IHZpdGVfYWRkcmVzcwpjaGFpbl9pZCAgICAgICAgICAgICAgICA9IDEqRElHSVQKZnVuY3Rpb25fbmFtZSAgICAgICAgICAgPSBTVFJJTkcKdml0ZV9hZGRyZXNzICAgICAgICAgICAgPSAoICZxdW90O3ZpdGVfJnF1b3Q7IDUwKkhFWERJRyApIC8gVk5TX05BTUUKcGFyYW1ldGVycyAgICAgICAgICAgICAgPSBwYXJhbWV0ZXIgKiggJnF1b3Q7JmFtcDsmcXVvdDsgcGFyYW1ldGVyICkKcGFyYW1ldGVyICAgICAgICAgICAgICAgPSBrZXkgJnF1b3Q7PSZxdW90OyB2YWx1ZQprZXkgICAgICAgICAgICAgICAgICAgICA9ICZxdW90O3R0aSZxdW90OyAvICZxdW90O2Ftb3VudCZxdW90OyAvICZxdW90O2ZlZSZxdW90OyAvICZxdW90O2RhdGEmcXVvdDsKdmFsdWUgICAgICAgICAgICAgICAgICAgPSBudW1iZXIgLyB2aXRlX2FkZHJlc3MgLyB0b2tlbl90eXBlX2lkIC8gU1RSSU5HCnRva2VuX3R5cGVfaWQgICAgICAgICAgID0gJnF1b3Q7dHRpXyZxdW90OyAyNCAqSEVYRElHCm51bWJlciAgICAgICAgICAgICAgICAgID0gWyAmcXVvdDstJnF1b3Q7IC8gJnF1b3Q7KyZxdW90OyBdICpESUdJVCBbICZxdW90Oy4mcXVvdDsgMSpESUdJVCBdIFsgKCAmcXVvdDtlJnF1b3Q7IC8gJnF1b3Q7RSZxdW90OyApIFsgMSpESUdJVCBdCg=="}}),t._v(" "),a("p",[a("em",[a("strong",[t._v("STRING")])]),t._v(" - A "),a("code",[t._v("URLEncode")]),t._v(" string, using "),a("em",[a("strong",[t._v("%")])]),t._v(" to escape all of delimiters. Delimiters that need to be escaped include "),a("em",[a("strong",[t._v("@/?&=%:")])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("number")])]),t._v(" - A number represented in scientific notation")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("VNS_NAME")])]),t._v(" - Vite name service. Specific standard is being worked out")]),t._v(" "),a("h3",{attrs:{id:"syntax-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("target_address")]),t._v(" "),a("td",[t._v("It indicates transfer address when transferring and refers to contract address when calling smart contract")])]),t._v(" "),a("tr",[a("td",[t._v("chain_id")]),t._v(" "),a("td",[t._v("Identify MainNet, TestNet and private net. This part can be omitted, and then use current network type of client side")])]),t._v(" "),a("tr",[a("td",[t._v("function_name")]),t._v(" "),a("td",[t._v("Function name of calling smart contract, if it's contract calling, there must be '/' mark, if there isn't, the calling is a common transfer. function_name can be an empty string, which indicates default contract method of current address. Attention: currently when we call smart contract, contract method signature and parameter information can be represented by setting data field, thus function_name do not do any analyse work, and you can call smart contract by specifying function_name and contract parameters by then.")])]),t._v(" "),a("tr",[a("td",[t._v("parameters")]),t._v(" "),a("td",[t._v('params, key including "tti" / "amount" / "fee" / "data"')])])])]),t._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("value")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tti")]),t._v(" "),a("td",[t._v("token_type_id")]),t._v(" "),a("td",[t._v("Specify transfer Token Id, optional. If it's omitted that means Vite Token is making the transfer.")]),t._v(" "),a("td",[t._v("tti=tti_5649544520544f4b454e6e40")])]),t._v(" "),a("tr",[a("td",[t._v("amount")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Specify transfer amount, unit follows token's basic unit. For instance, transfer 1 VITE equals amount = 1, optional. If it's omitted means amount = 0")]),t._v(" "),a("td",[t._v("amount=1e-3，amount=1000，amount=0.04")])]),t._v(" "),a("tr",[a("td",[t._v("fee")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Specify Vite volume that need to be destroyed, unit is Vite's common unit, optional. If it's omitted means fee = 0")]),t._v(" "),a("td",[t._v("Same as amount")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4648#section-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("base64 url safe encode"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("It means remarks when transferring, remarks need to comply with the conventional format in "),a("RouterLink",{attrs:{to:"/vep/vep-8.html"}},[t._v("VEP-8")]),t._v(", also it represents method signature and parameter information when calling smart contract")],1),t._v(" "),a("td",[t._v("data=MTIzYWJjZA")])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Example")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("vite:vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad")]),t._v(" "),a("td",[t._v("Represent account address vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad")])]),t._v(" "),a("tr",[a("td",[t._v("vite:vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad?tti=tti_5649544520544f4b454e6e40&amount=1&data=MTIzYWJjZA")]),t._v(" "),a("td",[t._v("Transfer 1 VITE to vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad with a comment of “123abcd”")])]),t._v(" "),a("tr",[a("td",[t._v("vite:vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad/echo?amount=1&data=MTIzYWJjZA")]),t._v(" "),a("td",[t._v("Call 'echo' method of contract vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);