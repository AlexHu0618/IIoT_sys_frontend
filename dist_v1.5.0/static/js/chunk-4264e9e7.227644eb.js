(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4264e9e7"],{"1dff":function(t,a,e){},"40ee":function(t,a,e){"use strict";var n=e("51b5"),o=e.n(n);o.a},"4fe2":function(t,a,e){},"51b5":function(t,a,e){},9406:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"data-view"}},[e("dv-full-screen-container",[e("div",{staticClass:"main-header"},[e("div",{staticClass:"mh-middle"},[e("dv-decoration-7",{staticStyle:{width:"100%",height:"30px"}},[t._v("智能机电运维管理平台")])],1),t._v(" "),e("div",{staticClass:"mh-right"},[e("dv-border-box-2",{staticStyle:{width:"70px",height:"30px","line-height":"30px","text-align":"center",margin:"5px 10px"}},[e("a",{attrs:{href:"/"}},[t._v("Home")])])],1),t._v(" "),e("div",[e("Datetime")],1)]),t._v(" "),e("dv-border-box-1",{staticClass:"main-container"},[e("div",{staticClass:"mc-top"},[e("div",{staticClass:"mc-top-left"},[e("dv-border-box-10",[e("dv-decoration-1",{staticStyle:{height:"50px"}}),t._v(" "),e("dv-border-box-5",{staticStyle:{width:"90%",height:"80%",left:"10px"}},[e("h2",{staticStyle:{"padding-top":"40px","padding-left":"20px"}},[t._v("当前故障率预测")]),t._v(" "),e("dv-decoration-9",{staticStyle:{width:"150px",height:"150px",top:"10px",left:"30px"}},[e("p",{staticStyle:{"font-size":"xx-large"}},[t._v("60%")])])],1)],1)],1),t._v(" "),e("MapChart"),t._v(" "),e("div",{staticClass:"mc-top-right"},[e("dv-border-box-10",[e("dv-decoration-3",{staticStyle:{height:"50px"}}),t._v(" "),e("dv-active-ring-chart",{staticStyle:{width:"300px",height:"300px"},attrs:{config:t.mcTopRightOpt}}),t._v(" "),e("span",{staticStyle:{"padding-left":"60px","font-size":"x-large"}},[t._v("当前在线设备占比")])],1)],1)],1),t._v(" "),e("div",{staticClass:"mc-bottom"},[e("div",{staticClass:"mc-bottom-left"},[e("dv-border-box-10",[e("span",{staticStyle:{"padding-left":"10px","font-size":"large"}},[t._v("总能耗排名")]),t._v(" "),e("dv-scroll-ranking-board",{staticStyle:{padding:"10px",height:"80%"},attrs:{config:t.mcBottomLeftOpt}})],1)],1),t._v(" "),e("div",{staticClass:"mc-bottom-middle"},[e("dv-border-box-10",[e("TopRightCmp",{staticStyle:{height:"100%",width:"100%"}})],1)],1),t._v(" "),e("div",{staticClass:"mc-bottom-right"},[e("dv-border-box-10",[e("span",{staticStyle:{"padding-left":"10px","font-size":"large"}},[t._v("故障事件列表")]),t._v(" "),e("dv-scroll-board",{staticStyle:{padding:"10px",height:"80%"},attrs:{config:t.mcBottomRightOpt}})],1)],1)])])],1)],1)},o=[],i=e("4360"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v("\n  "+t._s(t.nowDate+" "+t.nowTime+" "+t.nowWeek)+"\n")])},d=[],l={name:"Datatime",data:function(){return{nowDate:"",nowTime:"",nowWeek:""}},mounted:function(){this.currentTime()},beforeDestroy:function(){this.getDate&&(console.log("销毁定时器"),clearInterval(this.getDate))},methods:{currentTime:function(){setInterval(this.getDate,500)},getDate:function(){var t=this,a=(new Date).getFullYear(),e=(new Date).getMonth()+1,n=(new Date).getDate(),o=(new Date).getDay(),i=(new Date).getHours(),r=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes();this.nowWeek=1===o?"星期一":2===o?"星期二":3===o?"星期三":4===o?"星期四":5===o?"星期五":6===o?"星期六":"星期日",t.nowTime=i+":"+r,t.nowDate=a+"/"+e+"/"+n}}},s=l,m=e("2877"),h=Object(m["a"])(s,r,d,!1,null,null,null),u=h.exports,c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chinaecharts"},[e("div",{ref:"mapChart",attrs:{id:"mapChart"}})])},v=[],p=e("313e");e("3139");var f={name:"ChinaEcharts",mounted:function(){this.mapFn()},methods:{mapFn:function(){var t=p.init(document.getElementById("mapChart"));t.setOption({backgroundColor:"",visualMap:{min:0,max:100,calculable:!0,inRange:{color:["#fb714c","#70b4f4","#70e4f4","#f09640","#f9d9bb"]},textStyle:{color:"#fff"},itemWidth:10,left:"10%"},tooltip:{show:!0,trigger:"item",formatter:"{b}-设备故障率：{c}%"},series:[{name:"地图",type:"map",map:"china",data:[{name:"北京",value:Math.round(100*Math.random())},{name:"天津",value:Math.round(100*Math.random())},{name:"上海",value:Math.round(100*Math.random())},{name:"重庆",value:Math.round(100*Math.random())},{name:"河北",value:Math.round(100*Math.random())},{name:"河南",value:Math.round(100*Math.random())},{name:"云南",value:Math.round(100*Math.random())},{name:"辽宁",value:Math.round(100*Math.random())},{name:"黑龙江",value:Math.round(100*Math.random())},{name:"湖南",value:Math.round(100*Math.random())},{name:"安徽",value:Math.round(100*Math.random())},{name:"山东",value:Math.round(100*Math.random())},{name:"新疆",value:Math.round(100*Math.random())},{name:"江苏",value:Math.round(100*Math.random())},{name:"浙江",value:Math.round(100*Math.random())},{name:"江西",value:Math.round(100*Math.random())},{name:"湖北",value:Math.round(100*Math.random())},{name:"广西",value:Math.round(100*Math.random())},{name:"甘肃",value:Math.round(100*Math.random())},{name:"山西",value:Math.round(100*Math.random())},{name:"内蒙古",value:Math.round(100*Math.random())},{name:"陕西",value:Math.round(100*Math.random())},{name:"吉林",value:Math.round(100*Math.random())},{name:"福建",value:Math.round(100*Math.random())},{name:"贵州",value:Math.round(100*Math.random())},{name:"广东",value:Math.round(100*Math.random())},{name:"青海",value:Math.round(100*Math.random())},{name:"西藏",value:Math.round(100*Math.random())},{name:"四川",value:Math.round(100*Math.random())},{name:"宁夏",value:Math.round(100*Math.random())},{name:"海南",value:Math.round(100*Math.random())},{name:"台湾",value:Math.round(100*Math.random())},{name:"香港",value:Math.round(100*Math.random())},{name:"澳门",value:Math.round(100*Math.random())},{name:"南海诸岛",value:Math.round(100*Math.random())}],itemStyle:{emphasis:{label:{show:!0}}},zoom:1,label:{show:!0}},{type:"scatter",showEffectOn:"render",coordinateSystem:"geo",symbolSize:10,data:[{name:"宜昌",value:[111.3,30.7,130]}],zlevel:99999}]}),window.addEventListener("resize",function(){t.resize()})}}},M=f,g=(e("d273"),Object(m["a"])(M,c,v,!1,null,"aa5ccdb2",null)),b=g.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top-right-cmp"},[e("div",{staticClass:"chart-name"},[e("dv-decoration-11",{staticStyle:{width:"130px",height:"40px"}},[t._v("设备故障月趋势")])],1),t._v(" "),e("dv-charts",{attrs:{option:t.option}})],1)},w=[],y={name:"TopRightCmp",data:function(){return{option:{legend:{data:[{name:"收费系统",color:"#00baff"},{name:"监控系统",color:"#ff5ca9"},{name:"通信系统",color:"#3de7c9"},{name:"供配电系统",color:"#f5d94e"}],textStyle:{fill:"#fff"}},xAxis:{data:["10/01","10/02","10/03","10/04","10/05","10/06","10/07"],axisLine:{style:{stroke:"#999"}},axisLabel:{style:{fill:"#999"}},axisTick:{show:!1}},yAxis:{data:"value",splitLine:{show:!1},axisLine:{style:{stroke:"#999"}},axisLabel:{style:{fill:"#999"}},axisTick:{show:!1},min:0,max:8},series:[{name:"收费系统",data:[2.5,3.5,6.5,6.5,7.5,6.5,2.5],type:"bar",barStyle:{fill:"rgba(0, 186, 255, 0.4)"}},{name:"监控系统",data:[2.5,3.5,6.5,6.5,7.5,6.5,2.5],type:"line",lineStyle:{stroke:"#ff5ca9"},linePoint:{radius:4,style:{fill:"#ff5ca9",stroke:"transparent"}}},{name:"通信系统",data:[1.3,2.3,5.3,5.3,6.3,5.3,1.3],type:"line",smooth:!0,lineArea:{show:!0,gradient:["rgba(55, 162, 218, 0.6)","rgba(55, 162, 218, 0)"]},lineStyle:{lineDash:[5,5]},linePoint:{radius:4,style:{fill:"#00db95"}}},{data:[.2,1.2,4.2,4.2,5.2,4.2,.2],type:"line",name:"供配电系统",lineArea:{show:!0,gradient:["rgba(245, 217, 79, 0.8)","rgba(245, 217, 79, 0.2)"]},lineStyle:{stroke:"#f5d94e"},linePoint:{radius:4,style:{fill:"#f5d94e",stroke:"transparent"}}}]}}}},_=y,S=(e("40ee"),Object(m["a"])(_,x,w,!1,null,null,null)),C=S.exports,D={name:"DataView",components:{Datetime:u,MapChart:b,TopRightCmp:C},data:function(){return{mcTopRightOpt:{data:[{name:"广州",value:55},{name:"北京",value:120},{name:"上海",value:78},{name:"杭州",value:66},{name:"深圳",value:80}],lineWidth:40,activeRadius:"60%"},mcBottomLeftOpt:{data:[{name:"广州",value:55},{name:"北京",value:120},{name:"上海",value:78},{name:"杭州",value:66},{name:"深圳",value:80}],unit:"kwh",rowNum:4},mcBottomRightOpt:{header:["日期","地点","事件"],data:[["2020/03/01","广州","零件疲劳失效"],["2020/03/03","杭州","电流过大"],["2020/03/05","北京","振动异常"],["2020/03/06","广州","电流过大"],["2020/03/09","上海","电流过大"],["2020/03/14","上海","定位异常"],["2020/03/16","深圳","润滑油有异物"],["2020/03/17","北京","异常停机"],["2020/03/20","杭州","异常停机"],["2020/03/23","重庆","振动幅值过大"]]}}},mounted:function(){i["a"].dispatch("app/closeSideBar",{withoutAnimation:!0})}},k=D,O=(e("cda4"),Object(m["a"])(k,n,o,!1,null,null,null));a["default"]=O.exports},cda4:function(t,a,e){"use strict";var n=e("1dff"),o=e.n(n);o.a},d273:function(t,a,e){"use strict";var n=e("4fe2"),o=e.n(n);o.a}}]);