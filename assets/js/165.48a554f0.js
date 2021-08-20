(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{778:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vep-10-vite-testnet-premainnet-data-migration-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vep-10-vite-testnet-premainnet-data-migration-plan"}},[t._v("#")]),t._v(" VEP-10: Vite TestNet-PreMainnet Data Migration Plan")]),t._v(" "),n("h2",{attrs:{id:"background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),n("p",[t._v("Due to massive optimizations made in blockchain's data structure and consensus algorithm, old transaction data cannot be verified in the pre-mainnet. Therefore, transactions in TestNet will not be retained after the migration, but only account status will be.")]),t._v(" "),n("h2",{attrs:{id:"objectives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[t._v("#")]),t._v(" Objectives")]),t._v(" "),n("ol",[n("li",[t._v("Keep complete account state information")]),t._v(" "),n("li",[t._v("Ensure consensus works smoothly when pre-mainnet launches")])]),t._v(" "),n("h2",{attrs:{id:"migration-plan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#migration-plan"}},[t._v("#")]),t._v(" Migration Plan")]),t._v(" "),n("p",[t._v("Generate a genesis block on each account involved to store balance, contract states and other information that should be migrated. Then snapshot these genesis account blocks into a genesis snapshot block.")]),t._v(" "),n("h3",{attrs:{id:"user-account"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-account"}},[t._v("#")]),t._v(" User Account")]),t._v(" "),n("p",[t._v("User account status includes account balance and un-received transactions.")]),t._v(" "),n("ul",[n("li",[t._v("Balance is directly saved")]),t._v(" "),n("li",[t._v("Amounts of all un-received transactions are summed up and added into account balance")]),t._v(" "),n("li",[t._v("Only balances of "),n("strong",[t._v("VITE")]),t._v(" and "),n("strong",[t._v("VCP")]),t._v(" are retained")])]),t._v(" "),n("h3",{attrs:{id:"contract-account"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contract-account"}},[t._v("#")]),t._v(" Contract Account")]),t._v(" "),n("p",[t._v("Contract account status includes contract information (code, delegated consensus group that the contract belongs to), contract states (contract storage), contract account balance and un-received transactions.")]),t._v(" "),n("h4",{attrs:{id:"built-in-contracts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#built-in-contracts"}},[t._v("#")]),t._v(" Built-in Contracts")]),t._v(" "),n("ul",[n("li",[t._v("Balance is directly saved")]),t._v(" "),n("li",[t._v("Amounts of all un-received transactions are returned to original accounts")]),t._v(" "),n("li",[t._v("Only balances of "),n("strong",[t._v("VITE")]),t._v(" and "),n("strong",[t._v("VCP")]),t._v(" are retained")])]),t._v(" "),n("p",[t._v("Staking contract (address "),n("code",[t._v("vite_0000000000000000000000000000000000000003f6af7459b9")]),t._v(")")]),t._v(" "),n("ul",[n("li",[t._v("Retain all staking information with new expiration height 1 (can be retrieved immediately after the pre-mainnet launches)")])]),t._v(" "),n("p",[t._v("Original SBP registration contract, voting contract and consensus group contract are merged into new consensus group contract (address "),n("code",[t._v("vite_0000000000000000000000000000000000000004d28108e76b")]),t._v(")")]),t._v(" "),n("ul",[n("li",[t._v("Retain all valid SBP registrations with new registration expiration height 7776000 (about 3 months after pre-mainnet launches)")]),t._v(" "),n("li",[t._v("Retain all voting information")]),t._v(" "),n("li",[t._v("Retain all settings in snapshot consensus group and public delegated consensus group")])]),t._v(" "),n("p",[t._v("Mintage contract (address "),n("code",[t._v("vite_000000000000000000000000000000000000000595292d996d")]),t._v(")")]),t._v(" "),n("ul",[n("li",[t._v("Retain token information for "),n("strong",[t._v("VITE")]),t._v(" and "),n("strong",[t._v("VCP")])]),t._v(" "),n("li",[t._v("Change "),n("strong",[t._v("VITE")]),t._v(" to re-issuable")]),t._v(" "),n("li",[t._v("For other tokens, token issuance fee (1,000 VITE each) is refunded to issuer's account and the relevant token will not be retained")])]),t._v(" "),n("h4",{attrs:{id:"user-deployed-contracts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-deployed-contracts"}},[t._v("#")]),t._v(" User-deployed Contracts")]),t._v(" "),n("ul",[n("li",[t._v("User-deployed contracts will not be retained")]),t._v(" "),n("li",[t._v("Contract deployment fee (10 VITE each) is refunded to contract creator")]),t._v(" "),n("li",[t._v("Contract balance is returned to contract creator")]),t._v(" "),n("li",[t._v("Amounts of all un-received transactions are returned to original accounts")]),t._v(" "),n("li",[t._v("Only balances of "),n("strong",[t._v("VITE")]),t._v(" and "),n("strong",[t._v("VCP")]),t._v(" are retained")])]),t._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),n("ul",[n("li",[t._v("Consensus state is carried over from TestNet. The snapshot consensus group info and SBP ranking is unchanged")]),t._v(" "),n("li",[t._v("Account information remain unchanged, including balance, staking, voting, SBP registration and token issuance information")]),t._v(" "),n("li",[t._v("All user-issued tokens need to be re-minted in pre-mainnet")]),t._v(" "),n("li",[t._v("All user-deployed smart contracts need to be re-deployed in pre-mainnet")])])])}),[],!1,null,null,null);e.default=s.exports}}]);