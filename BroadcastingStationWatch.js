/*
时间：2020/11/19
功能：地方电台打开
原理：寻找文字点击控件，寻找地方电台打开，控件寻找返回
声明：代码仅供交流使用
*/
sleep(2000);
//兼容环境和网络
click("北京",0);
//点击北京频道 
//id("comm_head_xuexi_score").findOne().click();
sleep(4000);
click("北京卫视");
//地方电台观看完成
sleep(2000);
className("android.widget.LinearLayout").clickable(true).findOne().click();
//返回主页
setTimeout(function(){ engines.execScriptFile("VideoWatch.js");}, 3000);
//3秒后调用第4个脚本
toastLog("正在进行视听说任务");
//输出文本进度