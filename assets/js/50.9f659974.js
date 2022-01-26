(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{624:function(e,t,a){e.exports=a.p+"assets/img/faucet.d1ea71a0.png"},796:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"developer-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-wallet"}},[e._v("#")]),e._v(" Developer Wallet")]),e._v(" "),r("p",[e._v("To test smart contracts on either the testnet or the mainnet, you will need a Vite wallet that has enough Quota to deploy your contract and make contract contract calls. You will also need to supply your contract with Quota. This page describes an approach to funding your wallet and locking Vite for Quota, while keeping your personal funds and developer funds "),r("em",[r("strong",[e._v("separate")])]),e._v(" for better security.")]),e._v(" "),r("p",[e._v("The approach used in this page requires setting up two wallets:")]),e._v(" "),r("h4",{attrs:{id:"_1-developer-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-developer-wallet"}},[e._v("#")]),e._v(' 1. "Developer" Wallet')]),e._v(" "),r("ul",[r("li",[e._v("Mnemonic phrase is generated by the debugger interface.")]),e._v(" "),r("li",[e._v("Quota for the wallet should be provided by your personal wallet.")]),e._v(" "),r("li",[r("strong",[e._v("Wallet should only contain a minimal amount of Vite used to deploy contracts (around 10 Vite).")])])]),e._v(" "),r("h4",{attrs:{id:"_2-personal-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-personal-wallet"}},[e._v("#")]),e._v(' 2. "Personal" Wallet')]),e._v(" "),r("ul",[r("li",[e._v("Mnemonic phrase is generated by the Vite app on Android or iOS, or via a Ledger hardware wallet.")]),e._v(" "),r("li",[e._v("Mnemonic phrase should never be input into a computer.")]),e._v(" "),r("li",[e._v("Can safely lock Vite to provide Quota for your developer wallet and smart contracts.")]),e._v(" "),r("li",[e._v("In general, it is safe practice to have a new wallet dedicated to testing.")])]),e._v(" "),r("h2",{attrs:{id:"wallet-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wallet-setup"}},[e._v("#")]),e._v(" Wallet Setup")]),e._v(" "),r("p",[e._v("We will now walk you through setting up both wallets, as well as instructions for locking Vite to provide Quota.")]),e._v(" "),r("h3",{attrs:{id:"developer-wallet-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-wallet-setup"}},[e._v("#")]),e._v(' "Developer" Wallet Setup')]),e._v(" "),r("ol",[r("li",[e._v("Generate a Mnemonic phrase using the debugger.")]),e._v(" "),r("li",[e._v("Safely backup the phrase.")]),e._v(" "),r("li",[e._v("Record the address of the wallet.")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",[e._v("This is not a secure method for generating a Vite wallet. This is not an issue for use on the testnet, but do not store large amounts of mainnet Vite on this wallet.")])]),e._v(" "),r("h3",{attrs:{id:"personal-wallet-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#personal-wallet-setup"}},[e._v("#")]),e._v(' "Personal" Wallet Setup')]),e._v(" "),r("ol",[r("li",[r("p",[r("strong",[e._v("(mainnet only)")])]),e._v(" "),r("ul",[r("li",[e._v("Create a wallet through the "),r("a",{attrs:{href:"https://app.vite.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite iOS or Android app"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("(testnet only)")])]),e._v(" "),r("ul",[r("li",[e._v("Web Wallet\n"),r("ul",[r("li",[e._v("You may be tempted to use an existing Vite wallet for this purpose. In general, it is safe practice to have a new wallet dedicated to testing. Obtain the seed phrase on this website: "),r("a",{attrs:{href:"https://iancoleman.io/bip39/",target:"_blank",rel:"noopener noreferrer"}},[e._v("generate mnemonic"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Import the seed phrase (aka mnemonic) to access your Testnet wallet here: "),r("a",{attrs:{href:"https://buidl.vite.net/startLogin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testnet wallet"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("li",[e._v("Vite iOS or Android app\n"),r("ul",[r("li",[e._v("In the Node Setting Page of the Android/iOS Vite app, set your network to "),r("code",[e._v("https://buidl.vite.net/gvite")])])])])])]),e._v(" "),r("li",[r("p",[e._v("Get Vite:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("(testnet)")]),e._v(" "),r("br"),e._v("\nGo to the "),r("a",{attrs:{href:"https://discordapp.com/invite/CsVY76q",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite Discord"),r("OutboundLink")],1),e._v(" and send a DM containing "),r("code",[e._v("!send vite_yourtestnetaddress")]),e._v(" to the bot @faucet (see image). Your address will be provided with 10,000 Vite.\n"),r("br"),e._v(" "),r("div",{staticStyle:{height:"15em",display:"flex","justify-content":"space-between"}},[r("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[r("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(624)}}),r("br"),e._v("Get testnet Vite through Discord.")])]),e._v(" "),r("br"),r("br"),r("br")])])])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("(mainnet)")]),e._v(" "),r("br"),e._v("\nBuy Vite from any of the exchanges "),r("a",{attrs:{href:"https://vite.org/token#getToken",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(", and transfer to your address.")])]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[e._v("Now you can lock Vite for Quota using the web wallet.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("(testnet)")]),e._v(": "),r("a",{attrs:{href:"https://buidl.vite.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://buidl.vite.net"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("(mainnet)")]),e._v(": "),r("a",{attrs:{href:"https://x.vite.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://x.vite.net"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("You'll want to provide Quota for your Developer wallet, as well as any contracts you deploy. Since your funds are still stored in your personal wallet, and you can log into the web wallet through ViteConnect, this approach is safer.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);