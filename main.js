let input = document.getElementById('ho');
let input2 = document.getElementById('nahi');
input.addEventListener('click', Question)

function Question(e){
   let ans = prompt("Who is your best-friend?").toLowerCase();
    if(ans == "kallu"){
      setTimeout(() => {
        window.location.href = 'index1.html';
      }, 500);
            
        
    }
    else if(ans == 'kalyani'){
        alert('its was really nice guess, but the page need to be more spacific🫶');
    }
    else if(ans== 'ishwar'){
        alert('Thank you for thinking that way.. But you have stopped talking to me');
    }
    else if(ans== 'pratiksha'){
        alert('Are you sure, You think she is your best-friend....?')
    }
    else{
        alert('Just chill...and try to remember!, the real gift is waiting for you')
    }
}

input2.addEventListener('click', No)

function No(e){
    alert("Don't you want see your gift?, Accept the page for gift!")

}
