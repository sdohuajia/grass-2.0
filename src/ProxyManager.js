const a0_0x3e7726=a0_0x174c;(function(_0x187623,_0x39be56){const _0x5c24ad=a0_0x174c,_0x18bce0=_0x187623();while(!![]){try{const _0x3a1466=-parseInt(_0x5c24ad(0x94))/0x1*(parseInt(_0x5c24ad(0x8f))/0x2)+parseInt(_0x5c24ad(0x7a))/0x3*(parseInt(_0x5c24ad(0x98))/0x4)+-parseInt(_0x5c24ad(0x79))/0x5+-parseInt(_0x5c24ad(0x7f))/0x6+-parseInt(_0x5c24ad(0x8a))/0x7+-parseInt(_0x5c24ad(0x9c))/0x8+parseInt(_0x5c24ad(0x85))/0x9;if(_0x3a1466===_0x39be56)break;else _0x18bce0['push'](_0x18bce0['shift']());}catch(_0xd047d4){_0x18bce0['push'](_0x18bce0['shift']());}}}(a0_0x5046,0xd4b91));const a0_0x197575=(function(){let _0x3844ed=!![];return function(_0x56ad36,_0x450459){const _0xfc3d6e=_0x3844ed?function(){if(_0x450459){const _0x2dbb86=_0x450459['apply'](_0x56ad36,arguments);return _0x450459=null,_0x2dbb86;}}:function(){};return _0x3844ed=![],_0xfc3d6e;};}()),a0_0x4fe4f9=a0_0x197575(this,function(){const _0x384fcf=a0_0x174c,_0x469bbd={'OwcKN':'(((.+)+)+)+$'};return a0_0x4fe4f9[_0x384fcf(0x7c)]()['search'](_0x469bbd['OwcKN'])[_0x384fcf(0x7c)]()[_0x384fcf(0x95)](a0_0x4fe4f9)[_0x384fcf(0x76)](_0x469bbd['OwcKN']);});function a0_0x174c(_0x2318d1,_0x2978f5){const _0x2a0e35=a0_0x5046();return a0_0x174c=function(_0x4fe4f9,_0x197575){_0x4fe4f9=_0x4fe4f9-0x6d;let _0x504612=_0x2a0e35[_0x4fe4f9];return _0x504612;},a0_0x174c(_0x2318d1,_0x2978f5);}a0_0x4fe4f9(),require(a0_0x3e7726(0x97));const axios=require('axios'),fs=require('fs'),代理来源={'服务器1':a0_0x3e7726(0x74),'服务器2':a0_0x3e7726(0x9b),'服务器3':a0_0x3e7726(0x83),'服务器4':a0_0x3e7726(0x96),'服务器5':a0_0x3e7726(0x77),'服务器6':a0_0x3e7726(0x6f)};async function 获取代理(_0x261350){const _0x3849a2=a0_0x3e7726;try{const _0x99ebcc=await axios['get'](_0x261350);return console['log'](('\x0a从\x20'+_0x261350+_0x3849a2(0x8c))[_0x3849a2(0x89)]),_0x99ebcc[_0x3849a2(0x8d)][_0x3849a2(0x78)]('\x0a')[_0x3849a2(0x6d)](Boolean);}catch(_0x4e68bc){return console['error'](('从\x20'+_0x261350+_0x3849a2(0x99)+_0x4e68bc[_0x3849a2(0x82)])[_0x3849a2(0x7b)]),[];}}async function 读取行(_0x30165a){const _0x41d61a=a0_0x3e7726,_0x486b92={'WFBrA':_0x41d61a(0x71)};try{const _0x59f68c=await fs[_0x41d61a(0x7e)][_0x41d61a(0x72)](_0x30165a,_0x41d61a(0x8e));return console[_0x41d61a(0x88)](('从\x20'+_0x30165a+_0x41d61a(0x80))[_0x41d61a(0x89)]),_0x59f68c[_0x41d61a(0x78)]('\x0a')['filter'](Boolean);}catch(_0x27daed){return _0x486b92[_0x41d61a(0x92)]!==_0x486b92[_0x41d61a(0x92)]?{'类型':'无'}:(console[_0x41d61a(0x7d)](('读取\x20'+_0x30165a+_0x41d61a(0x87)+_0x27daed[_0x41d61a(0x82)])['red']),[]);}}async function 选择代理来源(_0x205c97){const _0x13a6b1=a0_0x3e7726,_0x3596f3={'eZcOl':'list','fOiCA':_0x13a6b1(0x70),'TkHVu':function(_0x21503f,_0x2c86c4){return _0x21503f===_0x2c86c4;},'tGceb':_0x13a6b1(0x75),'UYLjD':'文件名','fnsrL':'输入你的\x20proxy.txt\x20文件路径：','MTEPE':_0x13a6b1(0x93)},_0x39eb3d=[...Object['keys'](代理来源),_0x13a6b1(0x75),_0x13a6b1(0x90)],{来源:_0x4bb3bb}=await _0x205c97[_0x13a6b1(0x9a)]([{'type':_0x3596f3[_0x13a6b1(0x6e)],'name':'来源','message':_0x3596f3[_0x13a6b1(0x84)]['cyan'],'choices':_0x39eb3d}]);if(_0x3596f3[_0x13a6b1(0x8b)](_0x4bb3bb,_0x3596f3['tGceb'])){const {文件名:_0x401a0b}=await _0x205c97[_0x13a6b1(0x9a)]([{'type':_0x13a6b1(0x73),'name':_0x3596f3[_0x13a6b1(0x86)],'message':_0x3596f3['fnsrL'][_0x13a6b1(0x91)],'default':_0x3596f3[_0x13a6b1(0x81)]}]);return{'类型':'文件','来源':_0x401a0b};}else return _0x3596f3['TkHVu'](_0x4bb3bb,_0x13a6b1(0x90))?{'类型':'无'}:{'类型':'网址','来源':代理来源[_0x4bb3bb]};}module['exports']={'获取代理':获取代理,'读取行':读取行,'选择代理来源':选择代理来源};function a0_0x5046(){const _0x56f4f5=['toString','error','promises','10032816PcHzpg','\x20加载数据成功','MTEPE','message','https://files.ramanode.top/airdrop/grass/server_3.txt','fOiCA','57844557rZonOY','UYLjD','\x20失败：','log','green','10776458FwhxHv','TkHVu','\x20获取代理成功','data','utf-8','2mETRyL','不使用代理','cyan','WFBrA','proxy.txt','1292417QNLgoV','constructor','https://files.ramanode.top/airdrop/grass/server_4.txt','colors','4caNFkU','\x20获取代理失败：','prompt','https://files.ramanode.top/airdrop/grass/server_2.txt','6466912sleuEB','filter','eZcOl','https://files.ramanode.top/airdrop/grass/server_6.txt','选择代理来源：','lmYEr','readFile','input','https://files.ramanode.top/airdrop/grass/server_1.txt','自定义','search','https://files.ramanode.top/airdrop/grass/server_5.txt','split','3991350tUcbGE','1664463OpUfUC','red'];a0_0x5046=function(){return _0x56f4f5;};return a0_0x5046();}
