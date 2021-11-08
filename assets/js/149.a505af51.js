(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{755:function(a,e,t){"use strict";t.r(e);var s=t(1),l=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"run-sbp-node-on-ubuntu-16-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-sbp-node-on-ubuntu-16-04"}},[a._v("#")]),a._v(" Run SBP Node on Ubuntu 16.04")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[a._v("This document explains how to set up an SBP node. All steps have been tested on ubuntu 16.04.")])]),a._v(" "),t("h2",{attrs:{id:"install-gvite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-gvite"}},[a._v("#")]),a._v(" Install gvite")]),a._v(" "),t("h3",{attrs:{id:"install-from-a-binary-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-from-a-binary-package"}},[a._v("#")]),a._v(" Install from a Binary Package")]),a._v(" "),t("p",[a._v("Latest installation package can be found at "),t("a",{attrs:{href:"https://github.com/vitelabs/go-vite/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("gvite Releases"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash replace version",base64:"IyMgRG93bmxvYWQKY3VybCAtTCAtTyBodHRwczovL2dpdGh1Yi5jb20vdml0ZWxhYnMvZ28tdml0ZS9yZWxlYXNlcy9kb3dubG9hZC8ke3ZlcnNpb259L2d2aXRlLSR7dmVyc2lvbn0tbGludXgudGFyLmd6Cg=="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash replace version",base64:"IyMgVW5wYWNrIHBhY2thZ2UKdGFyIC14enZmIGd2aXRlLSR7dmVyc2lvbn0tbGludXgudGFyLmd6Cg=="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash replace version",base64:"IyMgRW50ZXIgdGhlIGZvbGRlci4gWW91IHNob3VsZCBzZWUgMyBmaWxlczogZ3ZpdGUsIGJvb3RzdHJhcCBhbmQgbm9kZV9jb25maWcuanNvbgptdiBndml0ZS0ke3ZlcnNpb259LWxpbnV4IHZpdGUKY2Qgdml0ZQo="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgQ29uZmlnIG5vZGVfY29uZmlnLmpzb24gYW5kIHRoZW4gc2F2ZQp2aSBub2RlX2NvbmZpZy5qc29uCg=="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgQm9vdCB1cCBndml0ZSBub2RlCi4vYm9vdHN0cmFwCg=="}}),a._v(" "),t("h3",{attrs:{id:"check-if-gvite-is-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-if-gvite-is-started"}},[a._v("#")]),a._v(" Check if gvite is Started")]),a._v(" "),t("p",[a._v("Check the content of gvite.log in the same folder to determine whether the program is up and running.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2F0IGd2aXRlLmxvZwo="}}),a._v(" "),t("p",[a._v("The following messages indicate that boot is successful.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dD0yMDE4LTExLTA5VDE3OjQ0OjQ4KzA4MDAgbHZsPWluZm8gbXNnPU5vZGVTZXJ2ZXIuRGF0YURpcjovaG9tZS91YnVudHUvLmd2aXRlL21haW5kYXRhIG1vZHVsZT1ndml0ZS9ub2RlX21hbmFnZXIKdD0yMDE4LTExLTA5VDE3OjQ0OjQ4KzA4MDAgbHZsPWluZm8gbXNnPU5vZGVTZXJ2ZXIuS2V5U3RvcmVEaXI6L2hvbWUvdWJ1bnR1Ly5ndml0ZS9tYWluZGF0YS93YWxsZXQgbW9kdWxlPWd2aXRlL25vZGVfbWFuYWdlcgpQcmVwYXJlIHRoZSBOb2RlIHN1Y2Nlc3MhISEKU3RhcnQgdGhlIE5vZGUgc3VjY2VzcyEhIQo="}}),a._v(" "),t("h3",{attrs:{id:"obtain-the-path-of-installation-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtain-the-path-of-installation-directory"}},[a._v("#")]),a._v(" Obtain the Path of Installation Directory")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cHdkCg=="}}),a._v(" "),t("p",[a._v("Please write down the path, which will be used later")]),a._v(" "),t("p",[a._v("For example, if you logged in as root user, the installation directory is:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L3Jvb3Qvdml0ZQo="}}),a._v(" "),t("h2",{attrs:{id:"create-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-wallet"}},[a._v("#")]),a._v(" Create Wallet")]),a._v(" "),t("h3",{attrs:{id:"create-a-new-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-wallet"}},[a._v("#")]),a._v(" Create a New Wallet")]),a._v(" "),t("p",[a._v("Execute the following command")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Li9ndml0ZSBycGMgfi8uZ3ZpdGUvbWFpbmRhdGEvZ3ZpdGUuaXBjIHdhbGxldF9jcmVhdGVFbnRyb3B5RmlsZSAnWyZxdW90OzEyMzQ1NiZxdW90O10nCg=="}}),a._v(" "),t("p",[a._v("Here "),t("code",[a._v("123456")]),a._v(" is keystore's password, you should replace it with your own password.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LCAKICAgICZxdW90O2lkJnF1b3Q7OiAxLCAKICAgICZxdW90O3Jlc3VsdCZxdW90OzogewogICAgICAgICZxdW90O21uZW1vbmljJnF1b3Q7OiAmcXVvdDthbmNpZW50IHJhdCBmaXNoIGludGFjdCB2aWFibGUgZmxvd2VyIG5vdyByZWJ1aWxkIG1vbmtleSBhZGQgbW9yYWwgaW5qdXJ5IGJhbmFuYSBjcmFzaCByYWJiaXQgYXdmdWwgYm9hdCBicm9vbSBzcGhlcmUgd2VsY29tZSBhY3Rpb24gZXhoaWJpdCBqb2IgZmxhdm9yJnF1b3Q7LCAKICAgICAgICAmcXVvdDtwcmltYXJ5QWRkciZxdW90OzogJnF1b3Q7dml0ZV9mMWMyZDk0NGIxZTViOGNiZmNkNWY5MGY5NGEwZTg3N2JlYWZlY2VkMWYzMzFkOWFjZiZxdW90OywgCiAgICAgICAgJnF1b3Q7ZmlsZW5hbWUmcXVvdDs6ICZxdW90O34vLmd2aXRlL21haW5kYXRhL3dhbGxldC92aXRlX2YxYzJkOTQ0YjFlNWI4Y2JmY2Q1ZjkwZjk0YTBlODc3YmVhZmVjZWQxZjMzMWQ5YWNmJnF1b3Q7CiAgICB9Cn0K"}}),a._v(" "),t("ul",[t("li",[t("code",[a._v("mnemonic")]),a._v(": Mnemonic phrase. Please keep it safe")]),a._v(" "),t("li",[t("code",[a._v("primaryAddr")]),a._v(": Vite address at index 0 corresponding to the mnemonic")]),a._v(" "),t("li",[t("code",[a._v("filename")]),a._v(": The location of the keyStore file")])]),a._v(" "),t("p",[a._v("Run "),t("code",[a._v("exit")]),a._v(" to abort")]),a._v(" "),t("h3",{attrs:{id:"check-if-the-wallet-has-been-created-successfully"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-if-the-wallet-has-been-created-successfully"}},[a._v("#")]),a._v(" Check if the Wallet has been Created Successfully")]),a._v(" "),t("p",[a._v("Execute the following command")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bHMgfi8uZ3ZpdGUvbWFpbmRhdGEvd2FsbGV0Lwo="}}),a._v(" "),t("p",[a._v("The following result should be displayed")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dml0ZV9mMWMyZDk0NGIxZTViOGNiZmNkNWY5MGY5NGEwZTg3N2JlYWZlY2VkMWYzMzFkOWFjZgo="}}),a._v(" "),t("p",[t("code",[a._v("vite_f1c2d944b1e5b8cbfcd5f90f94a0e877beafeced1f331d9acf")]),a._v(" is the wallet address created above. Multiple addresses will be displayed if more than one keystore files were created.")]),a._v(" "),t("h2",{attrs:{id:"edit-node-config-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-node-config-json"}},[a._v("#")]),a._v(" Edit node_config.json")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dmkgbm9kZV9jb25maWcuanNvbgo="}}),a._v(" "),t("p",[a._v("Edit following content：")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAmcXVvdDtNaW5lciZxdW90OzogdHJ1ZSwKICAgICAgICAmcXVvdDtDb2luQmFzZSZxdW90OzogJnF1b3Q7MDoke3lvdXJfYWRkcmVzc30mcXVvdDssCiAgICAgICAgJnF1b3Q7RW50cm9weVN0b3JlUGF0aCZxdW90OzogJnF1b3Q7JHt5b3VyX2FkZHJlc3N9JnF1b3Q7LAogICAgICAgICZxdW90O0VudHJvcHlTdG9yZVBhc3N3b3JkJnF1b3Q7OiAmcXVvdDske3lvdXJfcGFzc3dvcmR9JnF1b3Q7LAo="}}),a._v(" "),t("ul",[t("li",[t("code",[a._v("${your_address}")]),a._v(": Your wallet address created above. This address will be used to produce snapshot blocks")]),a._v(" "),t("li",[t("code",[a._v("${your_password}")]),a._v(": Your wallet password")])]),a._v(" "),t("p",[a._v("Save and quit")]),a._v(" "),t("h2",{attrs:{id:"reboot-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reboot-node"}},[a._v("#")]),a._v(" Reboot Node")]),a._v(" "),t("p",[a._v("Kill existing gvite process")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGdyZXAgZ3ZpdGUgfCB4YXJncyBraWxsIC05Cg=="}}),a._v(" "),t("p",[a._v("Reboot")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9ib290c3RyYXAK"}}),a._v(" "),t("p",[a._v("Check if gvite is rebooted successfully")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cHMgLWVmd3d8Z3JlcCAtdyAnZ3ZpdGUnCg=="}}),a._v(" "),t("p",[a._v("Below output indicates reboot is completed successfully:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm9vdCAgICAgIDY1NjAgIDU5MzkgIDAgMTI6MjkgcHRzLzEgICAgMDA6MDA6MDAgZ3JlcCAtLWNvbG9yPWF1dG8gLXcgZ3ZpdGUK"}}),a._v(" "),t("h2",{attrs:{id:"query-current-snapshot-height-in-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-current-snapshot-height-in-command-line"}},[a._v("#")]),a._v(" Query Current Snapshot Height in Command Line")]),a._v(" "),t("p",[a._v("Input：")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICAuL2d2aXRlIHJwYyB+Ly5ndml0ZS9tYWluZGF0YS9ndml0ZS5pcGMgbGVkZ2VyX2dldFNuYXBzaG90Q2hhaW5IZWlnaHQK"}}),a._v(" "),t("p",[a._v("Output:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ICAmcXVvdDt7XCZxdW90O2lkXCZxdW90OzowLFwmcXVvdDtqc29ucnBjXCZxdW90OzpcJnF1b3Q7Mi4wXCZxdW90OyxcJnF1b3Q7cmVzdWx0XCZxdW90OzpcJnF1b3Q7NDk5OTY3XCZxdW90O30mcXVvdDsK"}}),a._v(" "),t("p",[a._v("499967 is current block height.")]),a._v(" "),t("p",[a._v("For more command usage please run command "),t("code",[a._v("vite.help")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"config-gvite-as-auto-start-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-gvite-as-auto-start-service"}},[a._v("#")]),a._v(" Config gvite as Auto-start Service")]),a._v(" "),t("h3",{attrs:{id:"create-install-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-install-sh"}},[a._v("#")]),a._v(" Create install.sh")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgTmF2aWdhdGUgdG8gZ3ZpdGUgaW5zdGFsbGF0aW9uIGRpcmVjdG9yeSwgYW5kIG1ha2Ugc3VyZSBpdCBjb250YWlucyBndml0ZSBhbmQgbm9kZV9jb25maWcuanNvbgpjZCB2aXRlCmxzCg=="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgQ3JlYXRlIGluc3RhbGwuc2ggYW5kIGNvcHkgYmVsb3cgc2NyaXB0IGNvbnRlbnQgaW4KdmkgaW5zdGFsbC5zaAo="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"CiMhL2Jpbi9iYXNoCgpzZXQgLWUKCkNVUl9ESVI9YHB3ZGAKQ09ORl9ESVI9JnF1b3Q7L2V0Yy92aXRlJnF1b3Q7CkJJTl9ESVI9JnF1b3Q7L3Vzci9sb2NhbC92aXRlJnF1b3Q7CkxPR19ESVI9JEhPTUUvLmd2aXRlCgplY2hvICZxdW90O2luc3RhbGwgY29uZmlnIHRvICZxdW90OyRDT05GX0RJUgoKCnN1ZG8gbWtkaXIgLXAgJENPTkZfRElSCnN1ZG8gY3AgJENVUl9ESVIvbm9kZV9jb25maWcuanNvbiAkQ09ORl9ESVIKbHMgICRDT05GX0RJUi9ub2RlX2NvbmZpZy5qc29uCgplY2hvICZxdW90O2luc3RhbGwgZXhlY3V0YWJsZSBmaWxlIHRvICZxdW90OyRCSU5fRElSCnN1ZG8gbWtkaXIgLXAgJEJJTl9ESVIKbWtkaXIgLXAgJExPR19ESVIKc3VkbyBjcCAkQ1VSX0RJUi9ndml0ZSAkQklOX0RJUgoKZWNobyAnIyEvYmluL2Jhc2gKZXhlYyAnJEJJTl9ESVIvZ3ZpdGUnIC1wcHJvZiAtY29uZmlnICckQ09ORl9ESVIvbm9kZV9jb25maWcuanNvbicgJmd0OyZndDsgJyRMT0dfRElSL3N0ZC5sb2cnIDImZ3Q7JmFtcDsxJyB8IHN1ZG8gdGVlICRCSU5fRElSL2d2aXRlZCAmZ3Q7IC9kZXYvbnVsbAoKc3VkbyBjaG1vZCAreCAkQklOX0RJUi9ndml0ZWQKCmxzICAkQklOX0RJUi9ndml0ZQpscyAgJEJJTl9ESVIvZ3ZpdGVkCgplY2hvICZxdW90O2NvbmZpZyB2aXRlIHNlcnZpY2UgYm9vdC4mcXVvdDsKCmVjaG8gJ1tVbml0XQpEZXNjcmlwdGlvbj1HVml0ZSBub2RlIHNlcnZpY2UKQWZ0ZXI9bmV0d29yay50YXJnZXQKCltTZXJ2aWNlXQpFeGVjU3RhcnQ9JyRCSU5fRElSL2d2aXRlZCcKUmVzdGFydD1vbi1mYWlsdXJlClVzZXI9J2B3aG9hbWlgJwpMaW1pdENPUkU9aW5maW5pdHkKTGltaXROT0ZJTEU9MTAyNDAKTGltaXROUFJPQz0xMDI0MAoKW0luc3RhbGxdCldhbnRlZEJ5PW11bHRpLXVzZXIudGFyZ2V0JyB8IHN1ZG8gdGVlIC9ldGMvc3lzdGVtZC9zeXN0ZW0vdml0ZS5zZXJ2aWNlJmd0Oy9kZXYvbnVsbAoKc3VkbyBzeXN0ZW1jdGwgZGFlbW9uLXJlbG9hZAo="}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgR3JhbnQgZXhlY3V0YWJsZSBwZXJtaXNzaW9uCnN1ZG8gY2htb2QgK3ggaW5zdGFsbC5zaAo="}}),a._v(" "),t("h3",{attrs:{id:"run-install-sh-and-enable-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-install-sh-and-enable-service"}},[a._v("#")]),a._v(" Run install.sh and Enable Service")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgUnVuIGluc3RhbGwuc2gKLi9pbnN0YWxsLnNoCgojIyBTZXQgYXV0by1zdGFydApzdWRvIHN5c3RlbWN0bCBlbmFibGUgdml0ZQo="}}),a._v(" "),t("h3",{attrs:{id:"start-gvite-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-gvite-service"}},[a._v("#")]),a._v(" Start gvite service")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyMgS2lsbCBvcmlnaW5hbCBndml0ZSBwcm9jZXNzCnBncmVwIGd2aXRlIHwgeGFyZ3Mga2lsbCAtcyA5CgojIyBDaGVjayByZXN1bHQKcHMgLWVmIHwgZ3JlcCBndml0ZQoKIyMgU3RhcnQgZ3ZpdGUgc2VydmljZQpzdWRvIHNlcnZpY2Ugdml0ZSBzdGFydAoKIyMgQ2hlY2sgcmVzdWx0CnBzIC1lZiB8IGdyZXAgZ3ZpdGUKCiMjIENoZWNrIHNlcnZpY2Ugc3RhdHVzCnN1ZG8gc2VydmljZSB2aXRlIHN0YXR1cwoKIyMgQ2hlY2sgYm9vdCBsb2cKdGFpbCAtbjIwMCB+Ly5ndml0ZS9zdGQubG9nCg=="}}),a._v(" "),t("p",[a._v("Below message will be displayed if the service has been started up successfully:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"dml0ZS5zZXJ2aWNlIC0gR1ZpdGUgbm9kZSBzZXJ2aWNlCiAgIExvYWRlZDogbG9hZGVkICgvZXRjL3N5c3RlbWQvc3lzdGVtL3ZpdGUuc2VydmljZTsgZGlzYWJsZWQ7IHZlbmRvciBwcmVzZXQ6IGVuYWJsZWQpCiAgIEFjdGl2ZTogYWN0aXZlIChydW5uaW5nKSBzaW5jZSBUaHUgMjAxOC0xMS0yMiAyMToyMzozMCBDU1Q7IDFzIGFnbwogTWFpbiBQSUQ6IDE1ODcyIChndml0ZSkKICAgIFRhc2tzOiA3CiAgIE1lbW9yeTogMTIuMU0KICAgICAgQ1BVOiAxMTZtcwogICBDR3JvdXA6IC9zeXN0ZW0uc2xpY2Uvdml0ZS5zZXJ2aWNlCiAgICAgICAgICAg4pSU4pSAMTU4NzIgL3Vzci9sb2NhbC92aXRlL2d2aXRlIC1wcHJvZiAtY29uZmlnIC9ldGMvdml0ZS9ub2RlX2NvbmZpZy5qc29uCgpOb3YgMjIgMjE6MjM6MzAgdWJ1bnR1IHN5c3RlbWRbMV06IFN0YXJ0ZWQgR1ZpdGUgbm9kZSBzZXJ2aWNlLgo="}}),a._v(" "),t("h3",{attrs:{id:"shut-down-gvite-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shut-down-gvite-service"}},[a._v("#")]),a._v(" Shut down gvite Service")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBzZXJ2aWNlIHZpdGUgc3RvcAo="}}),a._v(" "),t("p",[a._v("!!! Gvite service config is located in /etc/vite. Gvite console messages are logged in $HOME/.gvite/std.log.")]),a._v(" "),t("h2",{attrs:{id:"tips"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[a._v("#")]),a._v(" Tips")]),a._v(" "),t("h3",{attrs:{id:"print-current-snapshot-block-height"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#print-current-snapshot-block-height"}},[a._v("#")]),a._v(" Print Current Snapshot Block Height")]),a._v(" "),t("p",[a._v("Execute below command in gvite command line console")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9ndml0ZSBycGMgfi8uZ3ZpdGUvbWFpbmRhdGEvZ3ZpdGUuaXBjICBsZWRnZXJfZ2V0U25hcHNob3RDaGFpbkhlaWdodAo="}}),a._v(" "),t("p",[a._v("The latest height will be printed out in every second. Run "),t("code",[a._v("exit")]),a._v(" to abort.")])],1)}),[],!1,null,null,null);e.default=l.exports}}]);