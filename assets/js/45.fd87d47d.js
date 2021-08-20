(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{558:function(t,e,a){t.exports=a.p+"assets/img/dapp-architecture.02471d70.png"},741:function(t,e,a){"use strict";a.r(e);var n=a(1),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"get-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[t._v("#")]),t._v(" Get Started")]),t._v(" "),n("h2",{attrs:{id:"how-dapp-works-in-vite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-dapp-works-in-vite"}},[t._v("#")]),t._v(" How dApp Works in Vite")]),t._v(" "),n("p",[n("img",{attrs:{src:a(558),alt:""}})]),t._v(" "),n("p",[t._v("Above diagram shows how dApp works in Vite. In general, a dApp consists of one (or several) smart contract and companion web application. dApp communicates to a full node (private or non-private) via HTTP or WebSocket connection, fetches data from blockchain and then displays on the webpage. Usually dApp doesn't manage private keys and addresses. Instead, a dApp establishes a connection to Vite wallet (where mnemonic seed and private keys are managed) for sending/receiving transactions, calling smart contract deployed on blockchain, etc.\nTo set up the connection between dApp and Vite wallet, at present there are three options.")]),t._v(" "),n("ol",[n("li",[t._v("Scan a QR code on the dApp by using Vite wallet for every transaction;")]),t._v(" "),n("li",[t._v("Integrate the dApp into Vite wallet;")]),t._v(" "),n("li",[n("strong",[t._v("Use ViteConnect")]),t._v(".")])]),t._v(" "),n("p",[t._v("The first option is not good enough because you have to scan QR code each time you send transaction or call smart contract. It only applies to very simple dApp where user should only talk to smart contract once! A simple voting program could be an example of this case.")]),t._v(" "),n("p",[t._v("Integrating dApp into Vite wallet is a good choice once you got approval from Vite team, so that you have a place for your dApp in Vite wallet! So far so good! However, you need request first and there is no guarantee that it must be approved.")]),t._v(" "),n("p",[t._v("We recommend ViteConnect. ViteConnect establishes WebSocket connection between dApp and Vite wallet. More safe, and more convenient. User just need scan QR code once and the subsequent transactions can be auto-signed (if you turn on the switch). For how to incorporate ViteConnect into your dApp, see "),n("a",{attrs:{href:"https://github.com/vitelabs/vite-connect-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vite Connect SDK"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"dapp-release-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dapp-release-process"}},[t._v("#")]),t._v(" dApp Release Process")]),t._v(" "),n("ul",[n("li",[t._v("Complete dApp (smart contract and companion web application) development and testing;")]),t._v(" "),n("li",[t._v("Set up a full node that provides both HTTP and WebSocket RPC services;")]),t._v(" "),n("li",[t._v("Deploy smart contract on blockchain and stake VITE coins for the contract's account to make sure it has enough quota;")]),t._v(" "),n("li",[t._v("Deploy companion web application;")]),t._v(" "),n("li",[t._v("Test dApp's functionalities to make sure it works well. If it should integrate with Vite wallet, test in "),n("RouterLink",{attrs:{to:"/tutorial/dappguide/testdapp.html"}},[t._v("Vite Test Wallet")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"before-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#before-development"}},[t._v("#")]),t._v(" Before Development")]),t._v(" "),n("h3",{attrs:{id:"run-local-dev-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-local-dev-node"}},[t._v("#")]),t._v(" Run Local Dev Node")]),t._v(" "),n("p",[t._v("See "),n("RouterLink",{attrs:{to:"/tutorial/dappguide/testnode.html"}},[t._v("Run Local Development Node")]),t._v(" to install your local development node.")],1),t._v(" "),n("h3",{attrs:{id:"install-vite-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-vite-js"}},[t._v("#")]),t._v(" Install Vite.js")]),t._v(" "),n("p",[t._v("Install the latest release of "),n("RouterLink",{attrs:{to:"/api/vitejs/"}},[t._v("Vite.js")]),t._v(". Vite.js is the Javascript SDK provided by Vite team.")],1),t._v(" "),n("h3",{attrs:{id:"download-solppc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#download-solppc"}},[t._v("#")]),t._v(" Download "),n("code",[t._v("solppc")])]),t._v(" "),n("p",[t._v("Download the latest Solidity++ compiler at "),n("a",{attrs:{href:"https://github.com/vitelabs/soliditypp-bin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("solppc Releases"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"install-test-wallet-optional"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-test-wallet-optional"}},[t._v("#")]),t._v(" Install Test Wallet (optional)")]),t._v(" "),n("p",[t._v("Setup "),n("RouterLink",{attrs:{to:"/tutorial/dappguide/testdapp.html"}},[t._v("Vite Test Wallet")]),t._v(" to connect to your development node.")],1),t._v(" "),n("h2",{attrs:{id:"debug-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debug-contract"}},[t._v("#")]),t._v(" Debug Contract")]),t._v(" "),n("p",[t._v("Install VSCode IDE and Soliditypp Extension Plugin at "),n("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com"),n("OutboundLink")],1),t._v(".\nFollow "),n("RouterLink",{attrs:{to:"/tutorial/dappguide/debug.html#debugging-in-vs-code"}},[t._v("This Guide")]),t._v(" to write and debug your smart contract in VSCode IDE.")],1),t._v(" "),n("h2",{attrs:{id:"deploy-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-contract"}},[t._v("#")]),t._v(" Deploy Contract")]),t._v(" "),n("p",[t._v("We suggest to deploy smart contract through Vite.js SDK.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Quota Required")]),t._v(" "),n("p",[t._v("Do not forget to get some quota for your contract by staking.")])]),t._v(" "),n("p",[t._v("Now let's see an example. The following code presents a simple HelloWorld contract.")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cHJhZ21hIHNvbGlkaXR5cHAgXjAuNC4yOwpjb250cmFjdCBIZWxsb1dvcmxkIHsKICAgZXZlbnQgdHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGFkZHIsdWludDI1NiBhbW91bnQpOwogICAgIG9uTWVzc2FnZSBTYXlIZWxsbyhhZGRyZXNzIGFkZHIpIHBheWFibGUgewogICAgICAgIGFkZHIudHJhbnNmZXIobXNnLnRva2VuaWQgLG1zZy5hbW91bnQpOwogICAgICAgIGVtaXQgdHJhbnNmZXIoYWRkciwgbXNnLmFtb3VudCk7CiAgICAgfQp9Cg=="}}),t._v(" "),n("p",[t._v("Compile the contract by running the following command. Now we get contract's ABI and binary code.")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9zb2xwcGMgLS1hYmkgLS1iaW4gSGVsbG9Xb3JsZC5zb2xwcAo="}}),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),n("p",[t._v("ABI and binary code can also be generated in the IDE.")])]),t._v(" "),n("p",[t._v("Now deploy the contract through a node.\nBelow Javascript code shows how to deploy smart contract and obtain quota using Vite.js:")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgeyBIVFRQX1JQQyB9ID0gcmVxdWlyZSgnQHZpdGUvdml0ZWpzLWh0dHAnKTsKY29uc3QgeyBWaXRlQVBJLCBhY2NvdW50QmxvY2ssIHdhbGxldCwgY29uc3RhbnQgfSA9IHJlcXVpcmUoJ0B2aXRlL3ZpdGVqcycpOwoKbGV0IHByb3ZpZGVyID0gbmV3IEhUVFBfUlBDKCZxdW90O2h0dHA6Ly8xMjcuMC4wLjE6MjM0NTYmcXVvdDspOwpsZXQgY2xpZW50ID0gbmV3IFZpdGVBUEkocHJvdmlkZXIpOwoKLy8gaW1wb3J0IGFjY291bnQKbGV0IG1uZW1vbmljID0gJnF1b3Q7c2FkbmVzcyBicmlnaHQgbW90aGVyIGJpZCB0b25ndWUgc2FtZSBwZWFyIHJlY3ljbGUgdXNlbGVzcyBodWIgYmVhdXR5IGZyb3plbiB0b3dhcmQgbm9taW5lZSBnbGlkZSBjaGVlc2UgcGljbmljIHZpYnJhbnQgdmFndWUgdGhvdWdodCBodXJyeSBzbGVlcCBob2xkIGxpemFyZCZxdW90OzsKbGV0IG15QWNjb3VudCA9IHdhbGxldC5nZXRXYWxsZXQobW5lbW9uaWMpLmRlcml2ZUFkZHJlc3MoMCk7CgpsZXQgYWJpID0gW3smcXVvdDtjb25zdGFudCZxdW90OzpmYWxzZSwmcXVvdDtpbnB1dHMmcXVvdDs6W3smcXVvdDtuYW1lJnF1b3Q7OiZxdW90O2FkZHImcXVvdDssJnF1b3Q7dHlwZSZxdW90OzomcXVvdDthZGRyZXNzJnF1b3Q7fV0sJnF1b3Q7bmFtZSZxdW90OzomcXVvdDtTYXlIZWxsbyZxdW90OywmcXVvdDtvdXRwdXRzJnF1b3Q7OltdLCZxdW90O3BheWFibGUmcXVvdDs6dHJ1ZSwmcXVvdDtzdGF0ZU11dGFiaWxpdHkmcXVvdDs6JnF1b3Q7cGF5YWJsZSZxdW90OywmcXVvdDt0eXBlJnF1b3Q7OiZxdW90O2Z1bmN0aW9uJnF1b3Q7fSx7JnF1b3Q7YW5vbnltb3VzJnF1b3Q7OmZhbHNlLCZxdW90O2lucHV0cyZxdW90OzpbeyZxdW90O2luZGV4ZWQmcXVvdDs6dHJ1ZSwmcXVvdDtuYW1lJnF1b3Q7OiZxdW90O2FkZHImcXVvdDssJnF1b3Q7dHlwZSZxdW90OzomcXVvdDthZGRyZXNzJnF1b3Q7fSx7JnF1b3Q7aW5kZXhlZCZxdW90OzpmYWxzZSwmcXVvdDtuYW1lJnF1b3Q7OiZxdW90O2Ftb3VudCZxdW90OywmcXVvdDt0eXBlJnF1b3Q7OiZxdW90O3VpbnQyNTYmcXVvdDt9XSwmcXVvdDtuYW1lJnF1b3Q7OiZxdW90O3RyYW5zZmVyJnF1b3Q7LCZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7ZXZlbnQmcXVvdDt9XTsKbGV0IGJpbmFyeUNvZGUgPSc2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MTAxNDE4MDYxMDAyMDYwMDAzOTYwMDBmM2ZlNjA4MDYwNDA1MjYwMDQzNjEwNjEwMDQxNTc2MDAwMzU3YzAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDA0NjNmZmZmZmZmZjE2ODA2MzkxYTZjYjRiMTQ2MTAwNDY1NzViNjAwMDgwZmQ1YjYxMDA4OTYwMDQ4MDM2MDM2MDIwODExMDE1NjEwMDVjNTc2MDAwODBmZDViODEwMTkwODA4MDM1NzRmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjkwNjAyMDAxOTA5MjkxOTA1MDUwNTA2MTAwOGI1NjViMDA1YjgwNzRmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjQ2NjlmZmZmZmZmZmZmZmZmZmZmZmZmZjE2MzQ2MDQwNTE2MDQwNTE4MDgyMDM5MDgzODU4N2YxNTA1MDUwNTA4MDc0ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY3ZmFhNjUyODFmNWRmNGI0YmQzYzcxZjJiYTI1OTA1YjkwNzIwNWZjZTA4MDlhODE2ZWY4ZTA0YjRkNDk2YTg1YmIzNDYwNDA1MTgwODI4MTUyNjAyMDAxOTE1MDUwNjA0MDUxODA5MTAzOTBhMjUwNTZmZWExNjU2MjdhN2E3MjMwNTgyMGY1MGZlODlhMzdlNmNkYTg4N2FhZWFlNTliZjQ1NjcwZDU1MmUyNzIxNWVlOGFlZDliODNmZTBjOGQ1MjVmY2IwMDI5JzsKCi8vIGNyZWF0ZSBhIG5ldyBjb250cmFjdApsZXQgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdjcmVhdGVDb250cmFjdCcsIHsKICAgICAgICBhZGRyZXNzOiBteUFjY291bnQuYWRkcmVzcywKICAgICAgICBhYmksCiAgICAgICAgY29kZTogYmluYXJ5Q29kZSwKICAgICAgICBwYXJhbXM6IFtdCiAgICB9KS5zZXRQcm92aWRlcihjbGllbnQpLnNldFByaXZhdGVLZXkobXlBY2NvdW50LnByaXZhdGVLZXkpOwoKYmxvY2suYXV0b1NldFByZXZpb3VzQWNjb3VudEJsb2NrKCkudGhlbigoKSA9Jmd0OyB7CiAgICBibG9jay5zaWduKCkuc2VuZCgpLnRoZW4oKHJlc3VsdCkgPSZndDsgewogICAgICAgIGNvbnNvbGUubG9nKCdTbWFydCBjb250cmFjdCAlcyBkZXBsb3llZCEnLCByZXN1bHQudG9BZGRyZXNzKTsKCiAgICAgICAgLy8gc3Rha2UgMTAwMDAgVklURSBmb3IgdGhlIG5ldyBjb250cmFjdCBmb3IgcXVvdGEKICAgICAgICBsZXQgY29udHJhY3RBZGRyZXNzID0gcmVzdWx0LnRvQWRkcmVzczsKICAgICAgICBsZXQgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdzdGFrZUZvclF1b3RhJywgewogICAgICAgICAgICBhZGRyZXNzOiBteUFjY291bnQuYWRkcmVzcywKICAgICAgICAgICAgYmVuZWZpY2lhcnlBZGRyZXNzOiBjb250cmFjdEFkZHJlc3MsCiAgICAgICAgICAgIGFtb3VudDogJzEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJwogICAgICAgIH0pLnNldFByb3ZpZGVyKGNsaWVudCkuc2V0UHJpdmF0ZUtleShteUFjY291bnQucHJpdmF0ZUtleSk7CiAgICAgICAgYmxvY2suYXV0b1NldFByZXZpb3VzQWNjb3VudEJsb2NrKCkudGhlbigoKSA9Jmd0OyB7CiAgICAgICAgICAgIGJsb2NrLnNpZ24oKS5zZW5kKCkudGhlbigoKSA9Jmd0OyB7CiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3Rha2VkICVzIFZJVEUgdG8gYWRkcmVzcyAlcyEnLCAxMDAwMCwgY29udHJhY3RBZGRyZXNzKTsKICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPSZndDsgewogICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnIpOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgIH0pOwp9KS5jYXRjaChlcnIgPSZndDsgewogICAgY29uc29sZS5lcnJvcihlcnIpOwp9KTsK"}}),t._v(" "),n("p",[t._v("To verify a deployed smart contract, use "),n("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#contract_getcontractinfo"}},[t._v("Contract Query API")]),t._v(". If the returned summary has binary code contained, the contract is successfully deployed.")],1),t._v(" "),n("h2",{attrs:{id:"call-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call-contract"}},[t._v("#")]),t._v(" Call Contract")]),t._v(" "),n("p",[t._v("In above example, the smart contract we deployed has one function "),n("code",[t._v("SayHello(address addr)")]),t._v(", which accepts an address parameter. Let's call it.")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"YXN5bmMgZnVuY3Rpb24gY2FsbENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgbWV0aG9kTmFtZSwgYWJpLCBwYXJhbXMsIGFtb3VudCkgewogICAgY29uc3QgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdjYWxsQ29udHJhY3QnLCB7CiAgICAgICAgYWRkcmVzczogbXlBY2NvdW50LmFkZHJlc3MsCiAgICAgICAgYWJpLAogICAgICAgIG1ldGhvZE5hbWUsCiAgICAgICAgYW1vdW50LAogICAgICAgIHRvQWRkcmVzczogY29udHJhY3RBZGRyZXNzLAogICAgICAgIHBhcmFtcwogICAgfSkuc2V0UHJvdmlkZXIoY2xpZW50KS5zZXRQcml2YXRlS2V5KG15QWNjb3VudC5wcml2YXRlS2V5KTsKCiAgICBhd2FpdCBibG9jay5hdXRvU2V0UHJldmlvdXNBY2NvdW50QmxvY2soKTsKICAgIGF3YWl0IGJsb2NrLnNpZ24oKS5zZW5kKCk7Cn0KLy8gc2F5IGhlbGxvIHRvIHZpdGVfZDhmNjdhYTUwZmQxNThmMTM5NDEzMGE1NTQ1NTIyMDRkOTA1ODZmNWQwNjFjNmRiNGYKY2FsbENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywnU2F5SGVsbG8nLCBhYmksIFsndml0ZV9kOGY2N2FhNTBmZDE1OGYxMzk0MTMwYTU1NDU1MjIwNGQ5MDU4NmY1ZDA2MWM2ZGI0ZiddLCAnMTAwMDAwMDAwMDAwMDAwMDAwMDAwJykKLnRoZW4ocmVzID0mZ3Q7IGNvbnNvbGUubG9nKHJlcykpCi5jYXRjaChlcnIgPSZndDsgY29uc29sZS5lcnJvcihlcnIpKTsK"}}),t._v(" "),n("h2",{attrs:{id:"remote-signing-library"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remote-signing-library"}},[t._v("#")]),t._v(" Remote Signing Library")]),t._v(" "),n("p",[t._v("In most cases, dApp should not manage private keys and mnemonics, which, for safety reasons, should always be stored in user's Vite wallet. Therefore, how dApp calls up Vite wallet and sends transactions through becomes the real concern. How is it addressed in Vite?")]),t._v(" "),n("p",[t._v("We provide two libraries.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.npmjs.com/package/@vite/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vite/bridge"),n("OutboundLink")],1),n("br"),t._v("\nVite Bridge is recommended for dApps that are integrated into Vite wallet. Through Vite Bridge client SDK, you are able to\n"),n("ul",[n("li",[t._v("Obtain current user's Vite address within web application, and")]),t._v(" "),n("li",[t._v("Send transaction or call smart contract from web application.")])])])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),n("p",[t._v("If your dApp is not to be integrated with Vite wallet app. Do NOT use Vite Bridge.")])]),t._v(" "),n("p",[t._v("Let's see an example of sending 1 VITE to a second address.")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IEJyaWRnZSBmcm9tICZxdW90O0B2aXRlL2JyaWRnZSZxdW90OzsKaW1wb3J0IHsgdXRpbHMsIGNvbnN0YW50IH0gZnJvbSAmcXVvdDtAdml0ZS92aXRlanMmcXVvdDs7CgovLyBpbml0aWF0ZSBicmlkZ2UgaW5zdGFuY2UKY29uc3QgYnJpZGdlID0gbmV3IEJyaWRnZSgpOwoKLy8gZ2V0IGN1cnJlbnQgYWNjb3VudCBhZGRyZXNzCmJyaWRnZVsnd2FsbGV0LmN1cnJlbnRBZGRyZXNzJ10oKS50aGVuKGFjY291bnRBZGRyZXNzID0mZ3Q7IHsKICAgIC8vIHNlbmQgMSB2aXRlIHRvIHRhcmdldCBhZGRyZXNzCiAgICBicmlkZ2VbJnF1b3Q7d2FsbGV0LnNlbmRUeEJ5VVJJJnF1b3Q7XSh7CiAgICAgICAgYWRkcmVzczogYWNjb3VudEFkZHJlc3MsIAogICAgICAgIHVyaTogdXRpbHMudXJpU3RyaW5naWZ5KHsgCiAgICAgICAgICAgIHRhcmdldF9hZGRyZXNzOiAndml0ZV85ZGU4MDk1NTY4MTA1ZWU5YTUyOTdmZDQyMzdlMmM0NjZlMjAyMDBjOWZiMDEyZjU3MycsIAogICAgICAgICAgICBwYXJhbXM6IHsgCiAgICAgICAgICAgICAgICBhbW91bnQ6IDEsIC8vIDEgdml0ZQogICAgICAgICAgICAgICAgdHRpOiBjb25zdGFudC5WaXRlX1Rva2VuSWQgLy8gZGVmYXVsdCBpcyB2aXRlLiB1c2UgYW5vdGhlciB0dGkgaWYgeW91IG5lZWQgdG8gc2VuZCBvdGhlciB0b2tlbnMKICAgICAgICAgICAgIH0KICAgICAgICB9KQogICAgfSkudGhlbihhY2NvdW50QmxvY2sgPSZndDsgewogICAgICBjb25zb2xlLmxvZyhhY2NvdW50QmxvY2spOwogICAgfSk7Cn0pLmNhdGNoKGVyciA9Jmd0OyB7CiAgICBjb25zb2xlLmVycm9yKGVycik7Cn0pOwo="}}),t._v(" "),n("p",[t._v("Here below is another example of calling a smart contract.")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IEJyaWRnZSBmcm9tICZxdW90O0B2aXRlL2JyaWRnZSZxdW90OzsKaW1wb3J0IHsgYWJpLCB1dGlscyB9IGZyb20gJnF1b3Q7QHZpdGUvdml0ZWpzJnF1b3Q7OwoKY29uc3QgYnJpZGdlID0gbmV3IEJyaWRnZSgpOwovLyBlbmNvZGUgZnVuY3Rpb24gY2FsbApjb25zdCBoZXhkYXRhID0gYWJpLmVuY29kZUZ1bmN0aW9uQ2FsbChbewogICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7U2F5SGVsbG8mcXVvdDssCiAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDtmdW5jdGlvbiZxdW90OywKICAgICZxdW90O2lucHV0cyZxdW90OzogW3sKICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDthZGRyZXNzJnF1b3Q7LAogICAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O2FkZHImcXVvdDsKICAgIH1dCn1dLCBbJ3ZpdGVfOWRlODA5NTU2ODEwNWVlOWE1Mjk3ZmQ0MjM3ZTJjNDY2ZTIwMjAwYzlmYjAxMmY1NzMnXSwgJ1NheUhlbGxvJyk7Ci8vIGNvbnZlcnQgdG8gYmFzZTY0CmNvbnN0IGJhc2U2NGRhdGEgPSB1dGlscy5fQnVmZmVyLmZyb20oaGV4ZGF0YSwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTsKLy8gc2VuZCB0aGUgY2FsbApicmlkZ2VbJnF1b3Q7d2FsbGV0LnNlbmRUeEJ5VVJJJnF1b3Q7XSh7CiAgICBhZGRyZXNzOiBhY2NvdW50QWRkcmVzcywgLy8geW91ciBhY2NvdW50IGFkZHJlc3MKICAgIHVyaTogdXRpbHMudXJpU3RyaW5naWZ5KHsKICAgICAgICB0YXJnZXRfYWRkcmVzczogY29udHJhY3RBZGRyZXNzLCAvLyBzbWFydCBjb250cmFjdCBhZGRyZXNzCiAgICAgICAgZnVuY3Rpb25fbmFtZTogJ1NheUhlbGxvJywKICAgICAgICBwYXJhbXM6IHsKICAgICAgICAgICAgZGF0YTogYmFzZTY0ZGF0YQogICAgICAgIH0KICAgIH0pCn0pLnRoZW4oYWNjb3VudEJsb2NrID0mZ3Q7IHsKICBjb25zb2xlLmxvZyhhY2NvdW50QmxvY2spOwp9KTsK"}}),t._v(" "),n("p",[t._v("To learn more about Vite Bridge, access our source code on "),n("a",{attrs:{href:"https://github.com/vitelabs/bridge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vitelabs/vite-connect-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vite/connector"),n("OutboundLink")],1),t._v("\nVite Connect is the recommended solution for signing transactions for dApps that are not hosted in Vite wallet. At present the following features are supported\n"),n("ul",[n("li",[t._v("Establish connection sessions from Vite wallet to dApp by scanning QR code displayed on dApp's web page")]),t._v(" "),n("li",[t._v("Connection is retained for the whole session until disconnected")]),t._v(" "),n("li",[t._v("Transactions triggered on dApp are signed and sent out through Vite wallet app, not on dApp")]),t._v(" "),n("li",[t._v("Once enabled, transactions can be auto-signed")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Recommended")]),t._v(" "),n("p",[t._v("Vite Connect is the general remote signing solution for all dApps that will not be integrated into Vite Wallet.")])]),t._v(" "),n("p",[t._v("Let's see a piece of code that defines how Vite Connect should be setup in Javascript client.")]),t._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IENvbm5lY3RvciBmcm9tICdAdml0ZS9jb25uZWN0b3InCgpjb25zdCBCUklER0UgPSAnaHR0cDovLzE5Mi4xNjguMzEuODI6NTAwMScgLy8gdXJsIHRvIHZpdGUgY29ubmVjdCBzZXJ2ZXIKCmNvbnN0IHZiSW5zdGFuY2UgPSBuZXcgQ29ubmVjdG9yKHsgYnJpZGdlOiBCUklER0UgfSkKCnZiSW5zdGFuY2UuY3JlYXRlU2Vzc2lvbigpLnRoZW4oKCkgPSZndDsgewogICAgLy8gdmJJbnN0YW5jZS51cmkgY2FuIGNvbnZlcnRlZCBpbnRvIGFuIFFSIGNvZGUgaW1hZ2UuCiAgICAvLyBpbiBtb3N0IHNjZW5hcmlvcywgeW91IHNob3VsZCBkaXNwbGF5IHRoZSBRUiBjb2RlIGhlcmUgc28gaXQgY2FuIGJlIHNjYW5uZWQgYnkgdGhlIHZpdGUgd2FsbGV0IGluIG9yZGVyIHRvIGVzdGFibGlzaCBjb25uZWN0aW9uCiAgICBjb25zb2xlLmxvZygnY29ubmVjdCB1cmknLCB2Ykluc3RhbmNlLnVyaSkKfSk7Cgp2Ykluc3RhbmNlLm9uKCdjb25uZWN0JywgKGVyciwgcGF5bG9hZCkgPSZndDsgeyAvLyBjb25uZWN0aW9uIGVzdGFibGlzaGVkCiAgICAvKiAKICAgICAqIFBheWxvYWQgaXMgYW4gT2JqZWN0IGZvbGxvd2luZyB0aGUgZm9sbG93aW5nIGRlZmluaXRpb246ICh1c3VhbGx5IHRoZSBwZWVyIGlzIFZpdGUgQXBwKQoKICAgICAqICB7CiAgICAgKiAgICAgIHZlcnNpb246IG51bWJlciwgICAgLy8gdmMgcHJvdG9jb2wgdmVyc2lvbiwgMiBhdCBwcmVzZW50CiAgICAgKiAgICAgIHBlZXJJZDogc3RyaW5nLCAgICAgLy8gY2FuIGJlIGlnbm9yZWQKICAgICAqICAgICAgcGVlck1ldGE6IHsgICAgICAgICAvLyBWaXRlIEFwcCBtZXRhIGluZm8KICAgICAqICAgICAgICAgIGJyaWRnZVZlcnNpb246IG51bWJlciwKICAgICAqICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsCiAgICAgKiAgICAgICAgICB1cmw6IHN0cmluZywKICAgICAqICAgICAgICAgIGljb25zOiBzdHJpbmdbXSwKICAgICAqICAgICAgICAgIG5hbWU6IHN0cmluZywKICAgICAqICAgICAgfSwKICAgICAqICAgICAgY2hhaW5JZDogbnVtYmVyLCAgICAvLyBjYW4gYmUgaWdub3JlZAogICAgICogICAgICBhY2NvdW50czogc3RyaW5nW10gIC8vIHRoZSBhZGRyZXNzIHJldHVybmVkIGZyb20gVml0ZSB3YWxsZXQuCiAgICAgKiAgfQogICAgICovCiAgICBjb25zdCB7IGFjY291bnRzIH0gPSBwYXlsb2FkLnBhcmFtc1swXTsKICAgIGlmICghYWNjb3VudHMgfHwgIWFjY291bnRzWzBdKSB0aHJvdyBuZXcgRXJyb3IoJ2FkZHJlc3MgaXMgbnVsbCcpOwoKICAgIGNvbnN0IGFkZHJlc3MgPSBhY2NvdW50c1swXTsKICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpCn0pCgovLyBzZW5kIHRyYW5zYWN0aW9uCnZiSW5zdGFuY2Uuc2VuZEN1c3RvbVJlcXVlc3QoewogICAgbWV0aG9kOiAndml0ZV9zaWduQW5kU2VuZFR4JywKICAgIHBhcmFtczogewogICAgICAgIC8qCiAgICAgICAgICogYmxvY2sgc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOgogICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHRvQWRkcmVzczogc3RyaW5nOyAgIC8vIGFjY291bnQgYWRkcmVzcyBvciBjb250cmFjdCBhZGRyZXNzCiAgICAgICAgICAgICAgICB0b2tlbklkOiBzdHJpbmc7ICAgIC8vIGFzc2V0IGlkIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gc2VuZAogICAgICAgICAgICAgICAgYW1vdW50OiBzdHJpbmc7ICAgICAvLyBpbiBhdG9taWMgdW5pdCAod2l0aCBmdWxsIGRlY2ltYWxzKQogICAgICAgICAgICAgICAgZmVlPzogc3RyaW5nOyAgICAgICAvLyBpbiBhdG9taWMgdW5pdCAod2l0aCBmdWxsIGRlY2ltYWxzKQogICAgICAgICAgICAgICAgZGF0YT8gc3RyaW5nOyAgICAgICAvLyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcsIG5lY2Vzc2FyeSB3aGVuIGNhbGxpbmcgc21hcnQgY29udHJhY3QKICAgICAgICAgICB9CiAgICAgICAgICovCiAgICAgICAgYmxvY2s6IHsKICAgICAgICAgICAgYWNjb3VudEFkZHJlc3M6ICZxdW90O3ZpdGVfNjE0MDRkM2I2MzYxZjk3OTIwOGM4YTVjNDQyY2ViODdjMWYwNzI0NDZmNTgxMThmNjgmcXVvdDssCiAgICAgICAgICAgIGFtb3VudDogJnF1b3Q7MjAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAgICAgZGF0YTogJnF1b3Q7YzJGa1ptRnpaZz09JnF1b3Q7LAogICAgICAgICAgICB0b0FkZHJlc3M6ICZxdW90O3ZpdGVfNjE0MDRkM2I2MzYxZjk3OTIwOGM4YTVjNDQyY2ViODdjMWYwNzI0NDZmNTgxMThmNjgmcXVvdDssCiAgICAgICAgICAgIHRva2VuSWQ6ICZxdW90O3R0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAmcXVvdDssCiAgICAgICAgfSwKICAgIH0KfSkudGhlbihzaWduZWRCbG9jayA9Jmd0OyBjb25zb2xlLmxvZyhzaWduZWRCbG9jayksIGVyciA9Jmd0OyBjb25zb2xlLmVycm9yKGVycikpCi8vIHJlZ2lzdGVyIGRpc2Nvbm5lY3Rpb24gbGlzdGVuZXIKdmJJbnN0YW5jZS5vbignZGlzY29ubmVjdCcsIGVyciA9Jmd0OyB7CiAgICBjb25zb2xlLmxvZyhlcnIpIC8vIGFueSBoYW5kbGluZyBsb2dpYyBoZXJlCn0pICAK"}}),t._v(" "),n("p",[t._v("To learn more about Vite Connect, access our source code on "),n("a",{attrs:{href:"https://github.com/vitelabs/vite-connect-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"useful-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useful-apis"}},[t._v("#")]),t._v(" Useful APIs")]),t._v(" "),n("p",[t._v("You may use the following APIs in your dApp.")]),t._v(" "),n("h3",{attrs:{id:"rpc-query-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpc-query-api"}},[t._v("#")]),t._v(" RPC Query API")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("API")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getlatestaccountblock"}},[t._v("ledger_getLatestAccountBlock")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get the latest transaction of the specified account")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getaccountinfobyaddress"}},[t._v("ledger_getAccountInfoByAddress")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get account summary by address, including chain height, balances, etc.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getaccountblocksbyaddress"}},[t._v("ledger_getAccountBlocksByAddress")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get transaction list of the specified account")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getaccountblockbyheight"}},[t._v("ledger_getAccountBlockByHeight")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get transaction by block height")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getaccountblockbyhash"}},[t._v("ledger_getAccountBlockByHash")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get transaction by hash")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getvmlogs"}},[t._v("ledger_getVmLogs")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get smart contract execution logs by log hash")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getunreceivedtransactionsummarybyaddress"}},[t._v("ledger_getUnreceivedTransactionSummaryByAddress")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get summary of unreceived transactions for the specified account")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getunreceivedblocksbyaddress"}},[t._v("ledger_getUnreceivedBlocksByAddress")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get unreceived transaction list for the specified account")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#contract_getcontractinfo"}},[t._v("contract_getContractInfo")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Get contract summary, including code, consensus group, etc.")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#contract_calloffchainmethod"}},[t._v("contract_callOffChainMethod")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Call contract's' off-chain method")])])])]),t._v(" "),n("p",[t._v("For API definitions for all RPC methods, please visit "),n("RouterLink",{attrs:{to:"/api/rpc/"}},[t._v("RPC API")])],1),t._v(" "),n("p",[t._v("To learn more abut calling RPC API in Vite.js, please visit "),n("RouterLink",{attrs:{to:"/api/vitejs/ViteAPI/GViteRPC.html#how-to-call-gvite-rpc-methods"}},[t._v("Vite.js SDK")])],1),t._v(" "),n("h3",{attrs:{id:"event-subscription"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription"}},[t._v("#")]),t._v(" Event Subscription")]),t._v(" "),n("p",[t._v("Event subscription is an advanced function that can be used in dApp to monitor state change of smart contract.")]),t._v(" "),n("p",[t._v("See "),n("RouterLink",{attrs:{to:"/contract/subscribe.html"}},[t._v("Event Subscription")]),t._v(" and "),n("RouterLink",{attrs:{to:"/api/rpc/subscribe_v2.html"}},[t._v("Subscription API")]),t._v(" for more information.")],1),t._v(" "),n("h2",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("How to know smart contract execution result in time?")]),t._v(" "),n("p",[t._v("Since smart contract is executed asynchronously on Vite, you do not know execution result immediately after a request function call has been sent.\nYou must get the execution info in the response transaction, which is performed a bit later according to various contract parameters and Vite network status.")]),t._v(" "),n("p",[t._v("One way to obtain execution result is polling "),n("code",[t._v("ledger_getAccountBlockByHash")]),t._v(" by your request transaction hash to see if it is received by smart contract.\nAnother is to use event subscription.")]),t._v(" "),n("p",[t._v("Once the request transaction is successfully received, you can check the 33th byte in data field of the response transaction. "),n("code",[t._v("0")]),t._v(" means execution succeeded while "),n("code",[t._v("1")]),t._v(" stands for failure.\nUsually a failed execution may result from "),n("code",[t._v("REVERT")]),t._v(" instruction in function call, insufficient quota of smart contract or insufficient balance upon transferring to 3rd account.")]),t._v(" "),n("p",[t._v("Usually (depending on how your smart contract is written), some events were triggered during execution and saved in "),n("code",[t._v("logHash")]),t._v(" field of the response transaction. Use "),n("code",[t._v("ledger_getVmLogs")]),t._v(" to get the events.")])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);