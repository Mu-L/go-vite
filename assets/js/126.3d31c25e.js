(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{707:function(e,t,o){"use strict";o.r(t);var n=o(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"voting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voting"}},[e._v("#")]),e._v(" Voting")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("Please note this is not a technical document, but mainly describes voting-related topics. Technical details will be introduced in the yellow paper.")]),e._v(" "),o("p",[e._v("The Definitions of Terms:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Voting")]),e._v("：A solution of on-chain governance by calculating the Vite coins held by voter as voting weight to elect super node.")]),e._v(" "),o("li",[o("strong",[e._v("Super node")]),e._v("： The node in snapshot consensus group who is eligible for producing snapshot block.")]),e._v(" "),o("li",[o("strong",[e._v("Delegated node")]),e._v("： The node in delegated consensus group who is eligible for producing blocks for corresponding smart contract.")])])]),e._v(" "),o("h2",{attrs:{id:"what-is-voting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-voting"}},[e._v("#")]),e._v(" What is voting")]),e._v(" "),o("p",[e._v("Vite uses a protocol-based voting mechanism for governance. There are two voting categories: global voting and delegated voting. Global voting is based on the VITE held by the user to calculate voting weight, mainly used for the super node election of the snapshot consensus group. The delegated voting is for smart contract. When the contract is deployed, a certain token is designated as the voting token, which can be used to elect the delegated node of the delegated consensus group that the contract belongs to.")]),e._v(" "),o("p",[e._v("In addition to the confirmation of transaction, the super node of the snapshot consensus group is able to choose whether to perform non-compatible upgrade on Vite system. Similarly, the delegated consensus group has the right to decide whether to upgrade an existing contract, so that avoiding the risk of contract upgrade failure. This helps improve the efficiency of decision-making and prevent decision failure from insufficient voting. These super nodes or delegated nodes are also subject to the consensus protocol. No upgrade will be implemented if the majority cannot reach agreement. Additionally, if they do not behave correctly as expected, users can vote them out.")]),e._v(" "),o("h2",{attrs:{id:"voting-rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voting-rules"}},[e._v("#")]),e._v(" Voting rules")]),e._v(" "),o("p",[e._v("For each consensus group, user can vote for a delegated node by sending a voting transaction to the built-in contract with specified consensus group ID and the delegated node address he votes for. After the corresponding response transaction is confirmed by snapshot chain, voting is successfully completed.")]),e._v(" "),o("p",[e._v("Votes are calculated every round. The delegated nodes for next round will be elected based on the voting result at the time being.")]),e._v(" "),o("p",[e._v("Voting can be cancelled at any time, by sending a cancel-voting transaction with a specified consensus group ID.")]),e._v(" "),o("h2",{attrs:{id:"faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),o("ul",[o("li",[e._v("Can I vote for multiple super nodes in the snapshot consensus group at the same time?")])]),e._v(" "),o("p",[e._v("No. An individual user can only vote for one super node at a time, however, you can still vote for delegated node in delegated consensus group in the meantime.")]),e._v(" "),o("ul",[o("li",[e._v("If the delegate node I voted for has cancelled the qualification (delegate node can cancel the stake after 3 months of registration), what is going to happen to my voting?")])]),e._v(" "),o("p",[e._v("If the delegate node cancels the stake, the belonging consensus group will no longer count the votes of this node. All votes for this delegated node will become invalid. You should vote for another node instead.")]),e._v(" "),o("ul",[o("li",[e._v("If I don't have any VITE in my wallet, can I vote?")])]),e._v(" "),o("p",[e._v("Voting consumes quota, not VITE, so that you can vote even if you do not have VITE in the account. However, SBP(snapshot block producer) is elected based on voting weight, if your VITE balance is 0, your vote has 0 voting weight and will be regarded as invalid.")]),e._v(" "),o("ul",[o("li",[e._v("Can I vote for the delegated node in public delegated consensus group?")])]),e._v(" "),o("p",[e._v("No, you cannot. However, since public delegated consensus group shares the same block producing nodes with snapshot consensus group, you should vote for super node in snapshot consensus group instead.")])])}),[],!1,null,null,null);t.default=s.exports}}]);