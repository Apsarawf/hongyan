window.onload = function(){
	// Follow us 后面切换图片地址
	var hR = document.getElementById("h_r");
	var aImg = hR.getElementsByTagName("img");

	for(var i=0;i<aImg.length;i++){
		aImg[i].index=i;
		aImg[i].onmouseover = function(){
			this.src="imgs/1.png";
		}
		aImg[i].onmouseout = function(){
			this.src="imgs/"+ this.index +".png";
		}
	}
	//实现列表下拉菜单
	var box1 = document.getElementById("box1");
	var aLi = box1.getElementsByTagName("li");
	var l = 13;
	for(var j=0;j<aLi.length;j++){
		if(aLi[j].className == 'box1-li'){
			aLi[j].style.left = l + 'px';
			l+=157;//给li设置位置

			//实现下拉
			aLi[j].onmouseover = function(){
				var box2 = this.getElementsByTagName("ul")[0];
				box2.style.display = 'block';
			}
			aLi[j].onmouseout = function(){
				var box2 = this.getElementsByTagName("ul")[0];
				box2.style.display = 'none';
			}
		}
	}
	//实现轮播图
	var timer1 = null;
	var timer2 = null;
	var iSpeed = 5;
	var iShow = 0;
	var iTime = 3080;
	var oUl = document.getElementById("banner_ul"); 
	var bLi = oUl.getElementsByTagName('li');
	var bLfet = document.getElementById("banner_left");
	var bRight = document.getElementById("banner_right");

	oUl.innerHTML+=oUl.innerHTML;
	
	oUl.style.width=960*bLi.length+'px';

	timer2 = setInterval(show,iTime);

	bLfet.onclick = function(){
		iSpeed=-5;
	}
	bRight.onclick = function(){
		iSpeed=5;
	}//通过点击鼠标控制图片向左向右滑动

	//鼠标移入图片和离开时图片滑动的暂停和继续滑动
	bRight.onmouseover =bLfet.onmouseover = oUl.onmouseover=function(){

		if(oUl.offsetLeft%960==0)
		{
			bLfet.style.display = 'block';
			bRight.style.display = 'block';
		}//只有当完整图片展示时控制向左向右滑动的图标才显示
		
		clearInterval(timer1);
		clearInterval(timer2);
	}
	bRight.onmouseout=bLfet.onmouseout=oUl.onmouseout=function(){
		bLfet.style.display = 'none';
		bRight.style.display = 'none';
		timer1 = setInterval(doMove,10);
		timer2 = setInterval(show,iTime);
	}


	//实现图片停留展示
	function show(){
		timer1 = setInterval(doMove,10);
		iTime=5000;
	}

	//实现图片滑动
	function doMove()
	{

		if(oUl.offsetLeft<-oUl.offsetWidth/2)
		{
			oUl.style.left=0;
			iShow=0;
		}
		else if(oUl.offsetLeft>=0)
		{
			oUl.style.left=-oUl.offsetWidth/2+'px';
		}
		oUl.style.left=oUl.offsetLeft+iSpeed+'px';
		iShow = iShow+iSpeed;
		if(iShow==960||iShow==-960)
		{
			clearInterval(timer1);
			iShow=0;
		}
	}
}