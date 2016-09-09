
		var box = document.getElementById('box');
		var bor = document.getElementById('bor');
		var inp = document.getElementsByTagName('input')[0];
		var timer = null;
		var arr = [];
		var arr1 = [];
		var n = 0;
		var x,y;
		var onOff = false;
		box.onmousedown = function(ev){
			//记录鼠标距离box边缘的位置,和鼠标按下时让边框显示bor出来;
			var leftX =  ev.clientX - this.offsetLeft;
			var topY =  ev.clientY - this.offsetTop;
			bor.style.display = 'block';
			document.onmousemove = function(ev){
				//获取到移动过程中鼠标的位置，然后减去鼠标到box边缘的位置。
				x = ev.clientX - leftX;
				y = ev.clientY - topY;
				//在全局创建两个空数组分别是x,y轴的值用来记录鼠标移动时的位置,在把数值push到分别的数组中;
				arr.push(x);
				arr1.push(y);
				bor.style.left = x + 'px';
				bor.style.top = y +'px';
			};
			//鼠标抬起
			document.onmouseup = function(){
				//清楚鼠标移动和鼠标抬起;(清楚鼠标抬起是为了每次点击按钮时box不会记录上次停止的位置)
				document.onmousemove = document.onmouseup = null;
				//鼠标抬起时bor边框消失;
				bor.style.display = '';
				box.style.left = bor.style.left;
				box.style.top = bor.style.top;
				//鼠标抬起时把数组的length-1存入n中;
				n = arr.length-1;
			};
		};
		//点击按钮
		inp.onclick = function(){
			if (onOff) {
				return;
			}
			onOff = true;
			timer = setInterval(function(){
				//判断box是不是在起始位置如果在就清楚定时器,两个数组清空;
				if(n == 0){
					clearInterval(timer);
					arr = [];
					arr1 = [];
					onOff = false;
					return;
					// x = 0;
					// y = 0;
				}
				//n值减减这样就会做到box随着之前的路径返回;
				n--;
				box.style.left = arr[n]+'px';
				box.style.top = arr1[n]+'px';
			},30);
		}