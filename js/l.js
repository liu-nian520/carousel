window.onload = function() {
	var container = document.getElementById("container");
	var list = document.getElementById("list");

	var next = document.getElementById("next")

	var index = 1;

	var animated = false;
	var timer;

	//点击箭头时图片切换
	function animate(offset) {
		animated = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time = 300; //位移总时间
		var interval = 10; //位移间隔时间
		var speed = offset / (time / interval); //每次位移量

		function go() {
			if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
				list.style.left = parseInt(list.style.left) + speed + 'px';

				//			调用
				setTimeout(go, interval);

			} else {
				animated = false;
				list.style.left = newLeft + 'px';

				if (newLeft > -600) {
					list.style.left = -3000 + 'px';
				}
				if (newLeft < -3000) {
					list.style.left = -600 + 'px';
				}
			}
		}
		go();
	}
	function play() {
		//		播放,可以一直执行,setTimeOut之后执行一次
		timer = setInterval(function() {
			next.onclick();
		}, 3000);
	}

	function stop() {
		clearInterval(timer);
	}
	//	点击右箭头
	next.onclick = function() {
			if (index == 5) {
				index = 1;
			} else {
				index += 1;
			}
			if (!animated) {
				animate(-600);
			}

		}
		
	container.onmouseover = stop;
	container.onmouseout = play;
	play();
}