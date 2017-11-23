
window.onload = function(){
	var bannerBox = document.getElementById("banner_box");
	setTimeout(banner(bannerBox),1);
}


function banner(bannerBox){
	var bImg = bannerBox.getElementsByTagName("ul")[0];
	var bImgLi = bImg.getElementsByTagName("li"); 
	var bYuan = bannerBox.getElementsByTagName("ul")[1];	
	var bLeft = bannerBox.getElementsByTagName("div")[0];
	var bRight = bannerBox.getElementsByTagName("div")[1];
	var length = bImgLi.length;//获取要实现轮播的图片个数
	var timer1 = null;
	var timer2 = null;
	var j = 0;
	var x = 1;//控制向左向右轮播
	var opacity = 0;
	bRight.style.display = bLeft.style.display = 'none';

	//根据图片数量来控制小圆点的数量和位置
	bYuan.style.width = length*20+10+'px';
	bYuan.style.left = (bannerBox.offsetWidth-bYuan.offsetWidth)/2+'px';
	for(var a = 0;a<length;a++){
		var li=document.createElement("li"); 
		bYuan.appendChild(li);
	}
	var bYuanLi = bYuan.getElementsByTagName("li");
	bYuanLi[0].style.background = "#000";

	timer1 = setInterval(show,4000);//实现定时换图

	//鼠标移入移出时的效果
	bannerBox.onmouseover=function(){
		bRight.style.display = bLeft.style.display = 'block';
		clearInterval(timer1);
	}
	bannerBox.onmouseout=function(){
		bRight.style.display = bLeft.style.display = 'none';
		timer1 = setInterval(show,4000);
	}
	bLeft.onclick = function(){
		x=-1;
		//避免点击过快时图片未完全显示timer2没有被清掉
		if(opacity<1){
			clearInterval(timer2);
			opacity = 0;
		}
		show();
	}
	bRight.onclick = function(){
		x=1;
		//避免点击过快时图片未完全显示timer2没有被清掉
		if(opacity<1){
			clearInterval(timer2);
			opacity = 0;
		}
		show();
	}
	//切换下一张图片的样式改变
	function show(){
		for(var i = 0;i<bImgLi.length;i++){
			bImgLi[i].style.display = 'none';
			bImgLi[i].style.opacity = '0';
			bYuanLi[i].style.background = '#b7917a';
		}
		j+=x;
		if(j>length-1){
			j=0;
		}
		if(j<0){
			j=length-1;
		}//控制j值来确定显示哪张图片
		bYuanLi[j].style.background = '#000';
		bImgLi[j].style.display = 'block';
		timer2 = setInterval(jianru,80);	
	}
	//实现图片渐入的效果
	function jianru(){
		opacity+=0.1;
		bImgLi[j].style.opacity = opacity;
		if(opacity>=1){
			clearInterval(timer2);
			opacity = 0;
		}
	}
}