(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{706:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"snapshot-block-producer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-block-producer"}},[e._v("#")]),e._v(" Snapshot Block Producer")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("This document explains the concept of Vite SBP, SBP staking requirement and how SBP is selected and incentivized.")]),e._v(" "),a("p",[e._v("Definitions of Terms:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("SBP")]),e._v(": Snapshot Block Producer")]),e._v(" "),a("li",[a("strong",[e._v("Staking")]),e._v("： Locking an amount of "),a("strong",[e._v("VITE")]),e._v(" of the account for certain purpose. In this document, this is SBP registration.")]),e._v(" "),a("li",[a("strong",[e._v("A Round")]),e._v(": 75 seconds approximately, in which votes of SBPs are re-calculated. In ideal condition, 75 snapshot blocks are produced in a round.")]),e._v(" "),a("li",[a("strong",[e._v("A Cycle")]),e._v(": Refers to 1152 rounds, approximately one day.")]),e._v(" "),a("li",[a("strong",[e._v("Registration Address")]),e._v(": Also known as "),a("strong",[e._v("Staking Address")]),e._v(". Refers to the address by which the SBP is registered.")]),e._v(" "),a("li",[a("strong",[e._v("Block Creation Address")]),e._v(": Refers to the address installed on the SBP node for producing blocks.")])])]),e._v(" "),a("h2",{attrs:{id:"sbp-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sbp-registration"}},[e._v("#")]),e._v(" SBP Registration")]),e._v(" "),a("p",[e._v("Registering SBP is free in Vite through "),a("strong",[e._v("Staking")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"staking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-rules"}},[e._v("#")]),e._v(" Staking Rules")]),e._v(" "),a("p",[a("strong",[e._v("Staking Amount：")])]),e._v(" "),a("p",[a("em",[e._v("1,000,000 VITE")])]),e._v(" "),a("p",[a("strong",[e._v("Staking Period：")])]),e._v(" "),a("p",[e._v("Staking cannot be retrieved immediately after registration. The lock-up period is approximately 3 months ("),a("strong",[e._v("7776000")]),e._v(" snapshot blocks).\nAfter the locking period expires, the SBP's owner (registration account) can cancel the SBP registration and retrieve staked VITE tokens.")]),e._v(" "),a("h3",{attrs:{id:"registration-and-cancellation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration-and-cancellation"}},[e._v("#")]),e._v(" Registration and Cancellation")]),e._v(" "),a("p",[e._v("In the Mainnet, registering SBP, producing blocks and withdrawing rewards can be from 3 different addresses.")]),e._v(" "),a("p",[e._v("To register one SBP, the account shall send an "),a("strong",[e._v("SBP Registration")]),e._v(" transaction to Vite's built-in consensus smart contract. When the transaction is confirmed, the registration is completed.")]),e._v(" "),a("p",[e._v("Similarly, to cancel an SBP whose locking period has expired, the registration account needs send "),a("strong",[e._v("Cancel Registration")]),e._v(" transaction to the consensus contract. In this case, the node will be removed from SBP list once the transaction is confirmed.")]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Block Creation Address")]),e._v(":\nIt is highly recommended to use a different address with SBP registration address for security reason.\nBlock creation address can be changed by sending an "),a("strong",[e._v("Update Registration")]),e._v(" transaction by registration account.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("SBP Name")]),e._v(": String of 1-40 characters, including Chinese and English, numbers, underscores and dots. Duplicated names are not allowed. SBP name is mainly used for voting.")])])]),e._v(" "),a("h2",{attrs:{id:"how-sbp-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-sbp-works"}},[e._v("#")]),e._v(" How SBP Works")]),e._v(" "),a("h3",{attrs:{id:"round"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#round"}},[e._v("#")]),e._v(" Round")]),e._v(" "),a("p",[e._v("A round is approximately 75 seconds. Voting result is re-calculated in every 75 seconds in order to select the SBPs in next round. Each SBP will have chance to produce 3 consecutive blocks in a round.")]),e._v(" "),a("h3",{attrs:{id:"selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selection"}},[e._v("#")]),e._v(" Selection")]),e._v(" "),a("p",[e._v("In each round, 25 SBPs are selected according to following rules:")]),e._v(" "),a("ul",[a("li",[e._v("23 SBPs are randomly selected from the top 25 (sorted by votes) supernodes. Ratio is ${23/25}$")]),e._v(" "),a("li",[e._v("2 SBPs are randomly selected from supernodes ranking from 26 to 100. Ratio is ${2/75}$")])]),e._v(" "),a("h2",{attrs:{id:"sbp-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sbp-rewards"}},[e._v("#")]),e._v(" SBP Rewards")]),e._v(" "),a("p",[e._v("An annual inflation of up to 3% of circulation of VITE are minted as SBP rewards. In the Mainnet, the reward for each snapshot block is ${0.951293759512937595}$ "),a("strong",[e._v("VITE")])]),e._v(" "),a("h3",{attrs:{id:"reward-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-allocation"}},[e._v("#")]),e._v(" Reward Allocation")]),e._v(" "),a("p",[e._v("The rewards are equally split in 2 parts:")]),e._v(" "),a("h4",{attrs:{id:"rewards-allocated-to-sbp-who-produced-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewards-allocated-to-sbp-who-produced-blocks"}},[e._v("#")]),e._v(" Rewards Allocated to SBP Who Produced Blocks")]),e._v(" "),a("p",[e._v("50% of rewards will be given to block producers in number of the blocks created, called "),a("strong",[e._v("Block Creation Reward")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"rewards-allocated-to-top-100-sbps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewards-allocated-to-top-100-sbps"}},[e._v("#")]),e._v(" Rewards Allocated to Top 100 SBPs")]),e._v(" "),a("p",[e._v("50% of rewards will be given to the top 100 SBPs, called "),a("strong",[e._v("Candidate Additional Reward")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Candidate Additional Reward")]),e._v(" has following rules:")]),e._v(" "),a("ul",[a("li",[e._v("Voting reward is proportional to the number of votes the SBP is entitled in last round of the cycle.")]),e._v(" "),a("li",[e._v("Rewards are generated daily in every "),a("em",[e._v("1152")]),e._v(" rounds. Rewards generated "),a("em",[e._v("48")]),e._v(" rounds ago (about 1 hour) are eligible for allocation.")]),e._v(" "),a("li",[e._v("In each cycle, SBP's up-time is calculated as $\\frac{Total Blocks Produced}{Total Blocks On Target}$.")])]),e._v(" "),a("h3",{attrs:{id:"reward-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-calculation"}},[e._v("#")]),e._v(" Reward Calculation")]),e._v(" "),a("p",[a("strong",[e._v("A cycle")]),e._v(": Refers to 1152 rounds, approximately 1 day. The first cycle starts at genesis snapshot.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Q")]),e._v(": the total reward of the SBP in one cycle")]),e._v(" "),a("li",[a("code",[e._v("l")]),e._v(": the number of blocks that are produced by the SBP in one cycle")]),e._v(" "),a("li",[a("code",[e._v("m")]),e._v(": the number of blocks that are expected to produce by the SBP in one cycle. If no block is produced by any SBP in a round, "),a("code",[e._v("m")]),e._v(" should substrate the target block producing number of that round")]),e._v(" "),a("li",[a("code",[e._v("X")]),e._v(": the total number of blocks that are produced by all SBP nodes in one cycle")]),e._v(" "),a("li",[a("code",[e._v("W")]),e._v(": the total number of votes of the top 100 SBPs in the last round of one cycle, plus the total staking amounts of registration of the top 100 SBPs (1m VITE for each SBP in the Mainnet)")]),e._v(" "),a("li",[a("code",[e._v("V")]),e._v(": the number of votes of the SBP in the last round of one cycle, plus the staking amounts of registration of this node (1m VITE for each SBP in the Mainnet)")]),e._v(" "),a("li",[a("code",[e._v("R")]),e._v(": The reward for each block, fixed at "),a("code",[e._v("0.951293759512937595")]),e._v(" VITE in the first year")])]),e._v(" "),a("p",[e._v("$$Q = \\frac{l}{m}"),a("em",[e._v("\\frac{V}{W}"),a("em",[e._v("X")]),e._v("R")]),e._v("0.5 + l"),a("em",[e._v("R")]),e._v("0.5$$")]),e._v(" "),a("p",[e._v("Note:")]),e._v(" "),a("ul",[a("li",[e._v("According to the above formula, if one SBP ranks more than 100 in the last round of a cycle, the reward for the SBP in this cycle is 0")]),e._v(" "),a("li",[e._v("There is no reward for the first cycle the SBP is registered")]),e._v(" "),a("li",[e._v("There is no reward for the last cycle the SBP is cancelled")]),e._v(" "),a("li",[e._v("If 0 block is produced by all SBPs in a round (75 seconds), this round will be excluded from reward calculation by setting total blocks on target of the round as 0")])]),e._v(" "),a("h4",{attrs:{id:"reward-withdrawal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-withdrawal"}},[e._v("#")]),e._v(" Reward Withdrawal")]),e._v(" "),a("p",[e._v("In the Mainnet, SBP should explicitly send a "),a("strong",[e._v("Reward Withdrawal")]),e._v(" transaction from the staking address to get the rewards.")]),e._v(" "),a("p",[a("strong",[e._v("Reward withdrawal rules:")])]),e._v(" "),a("ul",[a("li",[e._v("Reward withdrawal transaction must be initiated by the registration account, or an account designated by it")]),e._v(" "),a("li",[e._v("Rewards generated "),a("strong",[e._v("48")]),e._v(" rounds ago (about one hour) are available for withdrawal")]),e._v(" "),a("li",[e._v("If no cycle is specified, all available rewards will be withdrawn. Available rewards are the rewards allocated since the time of last withdrawal till one hour ago")]),e._v(" "),a("li",[e._v("Reward receiving address can be any Vite address")]),e._v(" "),a("li",[e._v("Reward withdrawal transaction will consume "),a("code",[e._v("68200")]),e._v(" quota")])]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("ul",[a("li",[e._v("I don't have enough "),a("strong",[e._v("VITE")]),e._v(" in my account. Can I register with someone else together?")])]),e._v(" "),a("p",[e._v("Currently, no. However, you can write a co-staking smart contract and have the contract send registration request once enough VITE are collected.")]),e._v(" "),a("ul",[a("li",[e._v("If the uptime of one SBP in a cycle is 0, I understand the "),a("strong",[e._v("Candidate Additional Reward")]),e._v(' will be 0, but will this "missing" reward be distributed to other SBPs?')])]),e._v(" "),a("p",[e._v("Rewards distribution will take place only when requested by the SBP. If some SBP's rewards is 0, no VITE token will be minted, so as that other SBPs won't receive extra rewards.")]),e._v(" "),a("ul",[a("li",[e._v("If I register an SBP but do not have a physical node, can I get reward?")])]),e._v(" "),a("p",[e._v("No. Your SBP reward will be 0 due to 0 uptime.")]),e._v(" "),a("ul",[a("li",[e._v("I already have a SBP node running, but why do I find out my uptime is 0?")])]),e._v(" "),a("p",[e._v("This may happen. The possible reasons include poor internet connection, or your node does not have chance to produce block in the cycle due to low ranks.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("My SBP node produced a snapshot block, can I get both block creation reward and candidate additional reward?")]),e._v(" "),a("p",[e._v("Not 100%. There is no reward for the cycle of registration and the cycle of cancellation. Also, if the SBP ranks out of 100 in the last round of the cycle, it does not have reward either.")])]),e._v(" "),a("li",[a("p",[e._v("I staked 1m when I registered my SBP. Is it also eligible for quota?")])])]),e._v(" "),a("p",[e._v("No. You cannot re-use these tokens for other purpose until your SBP's registration is cancelled.")]),e._v(" "),a("ul",[a("li",[e._v("Can I register multiple SBPs from the same account address?")])]),e._v(" "),a("p",[e._v("Yes, you can, by specifying a different block producing address for each new SBP node.")]),e._v(" "),a("ul",[a("li",[e._v("If one SBP node has 100% uptime in the first half cycle, and due to some reason, no block is produced by any SBP in the second half cycle, what is the uptime of this SBP node in the cycle?")])]),e._v(" "),a("p",[e._v("The uptime is 100%. Because no block is produced in the second half cycle, only the first half will be counted for uptime calculation.")])])}),[],!1,null,null,null);t.default=o.exports}}]);