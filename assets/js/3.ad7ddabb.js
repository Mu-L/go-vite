(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{528:function(t,e,o){t.exports=o.p+"assets/img/YW-Vite-EOS-Contract.085a39d9.png"},529:function(t,e,o){t.exports=o.p+"assets/img/YW-Vite-EOS-Contract-1.5f73f195.png"},530:function(t,e,o){t.exports=o.p+"assets/img/YW-Vite-EOS-Contract-2.dc5d37ce.png"},531:function(t,e,o){t.exports=o.p+"assets/img/YW-Vite-EOS-Contract-3.b6a21353.png"},532:function(t,e,o){t.exports=o.p+"assets/img/YW-Vite-EOS-Contract-4.6b1e6320.png"},671:function(t,e,o){"use strict";o.r(e);var a=o(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-economics-of-smart-contract-vite-v-s-eos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-economics-of-smart-contract-vite-v-s-eos"}},[t._v("#")]),t._v(" The Economics of Smart Contract — Vite v.s. EOS")]),t._v(" "),a("h2",{attrs:{id:"costs-of-smart-contract-on-vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#costs-of-smart-contract-on-vite"}},[t._v("#")]),t._v(" Costs of smart contract on Vite")]),t._v(" "),a("p",[t._v("On Vite, the costs of smart contract depend on the resources used, including CPU, memory, network bandwidth, storage space, etc, and the resource consumption is measured in terms of quota, which can be obtained by staking VITE coin. Quota is refilled every snapshot block during the stake period. The staking size is proportional to the actual resources that are used by the contract. The more resources used, the more VITE coins should be staked.\nNote: Apart of staking, Vite also supports another method of solving PoW puzzle to get free quota. It will be discussed below.\nIn general, the costs can be split into two parts:\n— Cost of creating a contract: To create a smart contract, the contract developer needs to pay a 10 VITE deployment fee, which will be destroyed. In the meantime, a small amount of quota is consumed from the developer’s account to trigger the deployment transaction.\n— Cost of calling a contract: Due to the asynchronous architecture adopted by Vite’s smart contract, both transactions of request (triggering the contract) and response (executing the contract) consume quota. The former spends quota from the user’s account, while the latter is usually secured by quota staked for the contract account by a contract developer.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(528),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"costs-of-smart-contract-on-eos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#costs-of-smart-contract-on-eos"}},[t._v("#")]),t._v(" Costs of smart contract on EOS")]),t._v(" "),a("p",[t._v("The cost of an EOS contract is measured in three resources: RAM, CPU, and NET. RAM is on-chain storage, including account balances, public keys, staking and voting entries, contract states, etc. For example, creating an ordinary EOS account requires 4KB of RAM to store the related information. For a smart contract, RAM is used in storing contract’s code and states. Specifically, contract states are the data saved through EOS’s DB interface. This part of cost can be covered either by the contract developer or by the user, counting on how it is specified in the contract. RAM must be purchased in the secondary market, and can be recovered after the resource is released. The selling price of RAM follows Bancor Algorithm.")]),t._v(" "),a("p",[t._v("CPU and NET stand for CPU resource and network bandwidth on EOS. They are both obtained by staking EOS coins, and the amount of resources retrieved depends on the proportion of the stake amount of an account to the total amount of all current stakes. The amount of CPU and NET resources specifies the CPU cycles in microseconds the account is able to execute and the size of network capacity in bytes the account can leverage in the current window (a window is equivalent to 24h according to the EOS’ specification). CPU and NET are consumed for each EOS transaction, and will be restored in the next window.")]),t._v(" "),a("p",[t._v("The cost of an EOS contract can also be split into two parts:\n— Cost of creating a contract: To create an EOS contract, the contract developer must pay RAM for storing contract states, as well as CPU and NET to launch the contract creation transaction.\n— Cost of calling a contract: To call a contract, the user needs to spend CPU and NET in executing the contract call. If the contract has new contract state to store, RAM is also charged. In most cases, it’s the user who pays the RAM.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(529),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"cost-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cost-comparison"}},[t._v("#")]),t._v(" Cost Comparison")]),t._v(" "),a("p",[a("img",{attrs:{src:o(530),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"an-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-example"}},[t._v("#")]),t._v(" An Example")]),t._v(" "),a("p",[t._v("Let’s see a simple quiz contract.\nThe contract has a guess function, which takes a number ranging from 0–9. The function generates a random seed, and if the last digit of the random seed is the same as the input parameter, it prints “win”, otherwise prints “lose”.\nOn Vite the contract code is as follows:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cHJhZ21hIHNvbGlkaXR5cHAgXjAuNC4yOwpjb250cmFjdCBiZXQgewogICAgZXZlbnQgd2luKCk7CiAgICBldmVudCBsb3NlKCk7CiAgICBvbk1lc3NhZ2UgZ3Vlc3ModWludDggdGFyZ2V0KSB7CiAgICAgICAgdWludDY0IHJhbmRvbSA9IHJhbmRvbTY0KCk7CiAgICAgICAgaWYgKHRhcmdldCA9PSByYW5kb20gJSAxMCkgewogICAgICAgICAgICBlbWl0IHdpbigpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGVtaXQgbG9zZSgpOwogICAgICAgIH0KICAgIH0KfQo="}}),t._v(" "),a("p",[t._v("To create the contract:\nThe contract developer pays 10 VITE as deployment fee, and at least stakes 400 VITE or calculates a PoW with a difficulty of 147722953 to launch the contract creation transaction. The quota consumption is 45956.\nTo call the contract:\nThe user should stake at least 267 VITE (in this case, one call request can be triggered every 75 snapshot blocks, approximately 75s) or calculate a PoW with a difficulty of 75164738 (in this case, one call request can be triggered per snapshot block, approximately 1s). The quota consumption is 23448.\nThe contract developer should stake at least 267 VITE for the contract to execute a contract response for every 75 snapshot blocks, approximately 75s. The quota consumption is 22288. Ideally, the contract can process up to 3455 calls in three days.")]),t._v(" "),a("p",[t._v("On EOS the contract code is as follows:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"I2luY2x1ZGUgJmx0O2Vvc2lvbGliL2Vvc2lvLmhwcCZndDsKI2luY2x1ZGUgJmx0O2Vvc2lvbGliL3ByaW50LmhwcCZndDsKdXNpbmcgbmFtZXNwYWNlIGVvc2lvOwogCmNsYXNzIGJldDpwdWJsaWMgZW9zaW86OmNvbnRyYWN0IHsKICBwdWJsaWM6CiAgICB1c2luZyBjb250cmFjdDo6Y29udHJhY3Q7CiAgICAgCiAgICBbW2Vvc2lvOjphY3Rpb25dXQogICAgdm9pZCBndWVzcyh1aW50OF90IHRhcmdldCkgewogICAgICBhdXRvIHJhbmRvbSA9IGN1cnJlbnRfdGltZSgpOwogICAgICBpZih0YXJnZXQgPT0gcmFuZG9tICUgMTApIHsKICAgICAgICBwcmludCgmcXVvdDt3aW4mcXVvdDspOwogICAgICB9IGVsc2UgewogICAgICAgIHByaW50KCZxdW90O2xvc2UmcXVvdDspOwogICAgICB9CiAgICB9Cn07Cg=="}}),t._v(" "),a("p",[t._v("To create the contract:\nThe contract developer should create a contract account that consumes 200 bytes of NET and 214 μs of CPU;\nHe also needs to update the contract code and ABI, consuming 704 bytes of NET and 4664 μs of CPU.\nAfter the contract is deployed, a total of 10873 bytes of RAM are used, which costs 0.578 EOS.\nTo call the contract:\nThe user triggers a contract call transaction that consumes 96 bytes of NET and 1665 μs of CPU. To perform 3455 calls within 3 days, at least a stake of 0.338 EOS for NET and 63494.205 EOS for CPU is required.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(531),alt:""}})]),t._v(" "),a("p",[t._v("Note: On June 11, 2020, the RAM price was approximately 1 EOS buys 18.81 KB RAM, the NET price was approximately 1 EOS gets 0.98 MB NET, and the CPU price was approximately 1 EOS gets 90.6 μs of CPU.")]),t._v(" "),a("p",[t._v("Comparison of staking costs between Vite and EOS under different transaction volumes (0.1 TPS means that the contract is executed once 10s):")]),t._v(" "),a("p",[a("img",{attrs:{src:o(532),alt:""}})]),t._v(" "),a("p",[t._v("Note: 1 VITE = 0.01538 USD，1 EOS = 2.6601 USD，1 EOS = 5167.98 EOS loan for 30 days")]),t._v(" "),a("p",[t._v("According to the table, to deploy the same smart contract on the two platform, the staking cost on EOS is 77240.85x of that on Vite. If the contract serves 5 requests per second, the staking cost reaches a ridiculous amount of $63,354,138.23 on EOS, with the comparison of $819.37 on Vite.")]),t._v(" "),a("p",[t._v("Considering the huge gap of staking cost between the two platforms, instead of staking for resources, the user can choose to borrow resources from EOSREX to reduce cost. In this case, to borrow sufficient resources for 30 days, he must pay 4608.637 EOS as rental, equivalent to $12258.97, which is still 14.96x of the staking cost on Vite.")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Costs are much, much lower on Vite than on EOS for smart contract;")])]),t._v(" "),a("li",[a("p",[t._v("Compared with EOS, Vite is extremely suitable for scenarios like high-frequent execution.")])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);