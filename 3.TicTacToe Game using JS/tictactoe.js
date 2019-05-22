var checkbox=document.querySelectorAll(".box");
var turn=document.querySelector('#turn');
var reset=document.querySelector('#reset');
var zerosOnes=0;
for(i=0;i<checkbox.length;i++){
	checkbox[i].addEventListener('click',function(){
	if(this.innerHTML!=="X" && this.innerHTML!=="O"){
		if(zerosOnes%2===0){ 
			this.innerHTML="X";
			turn.textContent="Player O Turn";
			getwinner();
			zerosOnes+=1;	
			}
		else{
			this.innerHTML="O";
			turn.textContent="Player X Turn";
			getwinner();
			zerosOnes+=1;
			}

	}
	})
	
}

reset.addEventListener("click",function(){
	for(i=0;i<checkbox.length;i++){
		checkbox[i].innerHTML=" ";
		checkbox[i].style.background="none";
		turn.textContent="Start the Game ";

	}
})


function getwinner(){
	var box1=document.querySelector("#box1");
	var box2=document.querySelector("#box2");
	var box3=document.querySelector("#box3");
	var box4=document.querySelector("#box4");
	var box5=document.querySelector("#box5");
	var box6=document.querySelector("#box6");
	var box7=document.querySelector("#box7");
	var box8=document.querySelector("#box8");
	var box9=document.querySelector("#box9");
	if(box1.innerHTML!==" " && box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML){
		box1.style.background='pink';
		box2.style.background='pink';
		box3.style.background='pink';
		turn.textContent="Winner";
	}

	else if(box4.innerHTML!==" " && box4.innerHTML===box5.innerHTML && box4.innerHTML===box6.innerHTML){
		box4.style.background='pink';
		box5.style.background='pink';
		box6.style.background='pink';
		turn.textContent="Winner";
	}

	else if(box7.innerHTML!==" " && box7.innerHTML===box8.innerHTML && box7.innerHTML===box9.innerHTML){
		box7.style.background='pink';
		box8.style.background='pink';
		box9.style.background='pink';
		turn.textContent="Winner";
	}
	else if(box1.innerHTML!==" " && box1.innerHTML===box4.innerHTML && box1.innerHTML===box7.innerHTML){
		box1.style.background='pink';
		box4.style.background='pink';
		box7.style.background='pink';
		turn.textContent="Winner";
	}
	else if(box2.innerHTML!==" " && box2.innerHTML===box5.innerHTML && box2.innerHTML===box8.innerHTML){
		box2.style.background='pink';
		box5.style.background='pink';
		box8.style.background='pink';
		turn.textContent="Winner";
	}
	else if(box3.innerHTML!==" " && box3.innerHTML===box6.innerHTML && box3.innerHTML===box9.innerHTML){
		box3.style.background='pink';
		box6.style.background='pink';
		box9.style.background='pink';
		turn.textContent="Winner";
	}
	else if(box1.innerHTML!==" " && box1.innerHTML===box5.innerHTML && box1.innerHTML===box9.innerHTML){
		box1.style.background='pink';
		box5.style.background='pink';
		box9.style.background='pink';
		turn.textContent="Winner";
	}
	else if(box3.innerHTML!==" " && box3.innerHTML===box5.innerHTML && box3.innerHTML===box7.innerHTML){
		box3.style.background='pink';
		box5.style.background='pink';
		box7.style.background='pink';
		turn.textContent="Winner";
	}
}