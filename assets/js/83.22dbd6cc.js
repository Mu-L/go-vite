(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{649:function(t,e,a){"use strict";a.r(e);var i=a(0),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" Start")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("IPC")]),t._v("：Supported by all RPC API")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("*nix(Linux Darwin)")]),t._v(": "),a("code",[t._v("~/.gvite/testdata/gvite.ipc")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Windows")]),t._v(": "),a("code",[t._v("\\\\.\\pipe\\gvite.ipc")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Http")]),t._v("：Supported by public API. Default port is "),a("strong",[t._v("48132")]),t._v(". Note: API in wallet module is excluded")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("WebSocket")]),t._v("：Supported by public API. Default port is "),a("strong",[t._v("31420")]),t._v(". Note: API in wallet module is excluded")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("To avoid unexpected behaviors, using standard "),a("strong",[t._v("JSON RPC 2.0")]),t._v(" library is highly recommended")]),t._v(" "),a("li",[t._v("A transaction or tx is equivalent to an account block")]),t._v(" "),a("li",[t._v("Byte array should be converted to base64 encoding before passing in")]),t._v(" "),a("li",[a("code",[t._v("uint64")]),t._v(", "),a("code",[t._v("float")]),t._v(" and "),a("code",[t._v("big.int")]),t._v(" are passed in string")])])]),t._v(" "),a("h2",{attrs:{id:"common-rpc-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-rpc-errors"}},[t._v("#")]),t._v(" Common RPC Errors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Code")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Message")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Failed to parse JSON string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32700")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JSON parse failure")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid JSON request")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32600")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid request")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Method not found. Please check if corresponding module has been configured in "),a("code",[t._v("PublicModules")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32601")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Method not found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Parameter type error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32602")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid parameter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Service stopped")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32000")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Server shut down")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Service temporarily unavailable. Please try again later")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32001")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Server panic")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Callback error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-32002")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Callback error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"common-business-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-business-errors"}},[t._v("#")]),t._v(" Common Business Errors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Code")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Message")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Wrong password")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-34001")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Key decryption error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Insufficient balance")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35001")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Insufficient balance for transfer")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Insufficient quota")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35002")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Out of quota")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid parameter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35004")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid method param")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Too many PoW requests")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35005")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoW called twice in one snapshot block")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ABI Method not found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35006")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ABI method not found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid response latency upon contract creation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35007")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid confirm time")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Contract not found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35008")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Contract not exist")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid quota multiplier upon contract creation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35010")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid quota ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("PoW not available due to network jam")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35011")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoW service not supported")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Maximum quota for single transaction reached")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-35012")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("quota limit for block reached")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid block producing address")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-36001")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Block producing address not valid")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Hash verification failure")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-36002")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Hash verification failed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Signature verification failure")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-36003")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Signature verification failed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Invalid PoW nonce")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-36004")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoW nonce check failed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Hash verification failure for previous block")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-36005")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PreHash verification failed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Waiting for block")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-36006")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Pending for block referred to")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"json-rpc-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-support"}},[t._v("#")]),t._v(" JSON-RPC Support")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("JSON-RPC 2.0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IPC")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Publish–Subscribe")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("WebSocket")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);