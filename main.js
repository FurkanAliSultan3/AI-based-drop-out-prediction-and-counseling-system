let selectedRole = "";

function showRoleSelect(){
    // alert("Button clicked")
  document.getElementById("home").classList.add("hidden");
  document.getElementById("role").classList.remove("hidden");
}

function showLogin(role){
  selectedRole = role;
  document.getElementById("role").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function doLogin(){
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  if(user === "" || pass === ""){
    alert("Enter username and password");
    return;
  }
  document.getElementById("login").classList.add("hidden");
  document.getElementById("navbar").classList.remove("hidden");
  if(selectedRole === "teacher"){
    document.getElementById("teacher").classList.remove("hidden");
  } else {
    document.getElementById("student").classList.remove("hidden");
    animateProgress();
  }
}

// logout resets to home
function logout(){
  document.querySelectorAll(".container").forEach(c=>c.classList.add("hidden"));
  document.getElementById("navbar").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function animateProgress(){
  setTimeout(()=>{document.getElementById("progress").style.width="75%";},300);
}

// Chatbot echo
function sendMessage(){
  let input=document.getElementById("chatInput");
  if(input && input.value.trim()){
    alert("Bot reply: " + input.value);
    input.value="";
  }
}

/* Charts - make sure Chart.js is loaded before this script */
window.addEventListener('load', function(){
  // Risk chart (teacher)
  const riskCtx = document.getElementById("riskChart");
  if(riskCtx){
    new Chart(riskCtx,{
      type:"doughnut",
      data:{
        labels:["High","Medium","Low"],
        datasets:[{
          data:[5,10,20],
          backgroundColor:["#ef5350","#ffca28","#66bb6a"]
        }]
      },
      options:{responsive:true}
    });
  }

  // Progress chart (student)
  const progCtx = document.getElementById("progressChart");
  if(progCtx){
    new Chart(progCtx,{
      type:"line",
      data:{
        labels:["Week1","Week2","Week3","Week4"],
        datasets:[{
          label:"Score",
          data:[60,65,70,75],
          borderColor:"#26a69a",
          fill:false,
          tension:0.3
        }]
      },
      options:{responsive:true}
    });
  }
});
