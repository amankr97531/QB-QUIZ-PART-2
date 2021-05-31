window.onload = function() {
	show(0);
}

let questions = [
		 {
			 
	 id:1,
		 question:"Q1:CASE is understood as ",
		 answer: "Computer aided software engineering",
		 options:[
		   "Computer added software engineering",
		   "Computer aided software engineering",
		   "Computer added system engineering",
		   "None of these"]
	     },
{
	 id:2,
		question:"Q2:PERT is the abbreviation for  ",
		 answer: "Program evaluation and review technique",
		 options:[
		   "Program evaluation and review technique",
		   "Program execution and review technique",
		   "Program evaluation and report technique",
		   "None of these"]
	     },
		 {
	id:3,		 
		 question:"Q3: Full form SRS ",
		 answer: "System requirment specification",
		 options:[
		   "System remote specification",
		   "System report specification",
		   "System requirment specification",
		   "None of these"]
	     },
		 {
	id:4,		 
		question:"Q4:ERP stands for",
		 answer: "Enterprise resource planning",
		 options:[
		   "Enterprise resource prepared",
		   "Enterprise resource planning",
		   "Enterprise resource processing",
		   "None of these"]
	     },
		 { 
	id:5,		 
		question:"Q5:CISE stands for",
		 answer: "Complex instruction set computers",
		 options:[
		   "Complex instruction set computers",
		   "Compound instruction set computers",
		   "Complex introduction set computers",
		   "None of these"]
	     },	
		 {		 
	id:6,		 
		question:"Q6:CDMA stands for",
		 answer: "Code division multiple access",
		 options:[
		   "Code division maintain access",
		   "Common division multiple access",
		   "Code division multiple access",
		   "None of these"]	
	     },	 
		 
	{
	id:7,		 
		question:"Q7:GSM stands for",
		 answer: "Global system for mobile communication",
		 options:[
		   "Global system for mobile communication",
		   "Global system for monitoring communication",
		   "Global system for multiple communication",
		   "None of these"]
	     },	 
		 
		 {
	id:8,		 
		question:"Q8:RISC stands for ",
		 answer: "Reduce instruction set computer",
		 options:[
		   "Reduce instruction set computing",
		   "Remote instruction set computer",
		   "Reduce instruction set computer",
		   "None of these"]
	     },	 
		 
		  {
	id:9,		 
		question:"Q9:TDMA stands for ",
		 answer: "Time division multiple access",
		 options:[
		   "Text division multiple access",
		   "Time division multiple access",
		   "Time division multiple allows",
		   "None of these"]
	     },	 
		 {
	id:10,		 
		question:"Q10:PDU stands for",
		 answer: "Protocol data unit",
		 options:[
		   "Protocol data unit",
		   "Protocol device unit",
		   "Primary data unit",
		   "None of these"]
	     },	 
		 {
	id:11,		 
		question:"Q11:ARPANET stands for",
		 answer: "Advanced research project agency network",
		 options:[
		   "Advanced remote project agency network",
		   "Available research project agency network",
		   "Advanced research project agency network",
		   "None of these"]
	     },	 	 
		 {
	id:12,		 
		question:"Q12:AM stands for",
		 answer: "Amplitude modulation",
		 options:[
		   "Amplitude modulation",
		   "Amplitude modification",
		   "Amplitude message",
		   "None of these"]
	     },	 	 
		 
		  {
	id:13,		 
		question:"Q13:ITU stands for ",
		 answer: "International telecommunication union",
		 options:[
		   "Intermediate telecommunication union",
		   "International telecommunication union",
		   "International telecommunication unit",
		   "None of these"]
	     },	 	 
		 
		 	  {
	id:14,		 
		question:"Q14:SDLC is understood as",
		 answer: "System development life cycle",
		 options:[
		   "System development life cycle",
		   "System development life communication",
		   "System development life computing",
		   "None of these"]
	     },	 	 
		 
		 
		 	  {
	id:15,		 
		question:"Q15:EDP stands for",
		 answer: "Electronic data processing",
		 options:[
		   "Electronic data protocol",
		   "Electronic device processing",
		   "Electronic data processing",
		   "None of these"]
	     },	 	 
		 
		 	  {
	id:16,		 
		question:"Q16:FDM stands for",
		 answer: "Frequency division multiplexing program",
		 options:[
		   "Frequency division multiplexing program",
		   "Frequency device multiplexing program",
		   "Frequency division multiple processing ",
		   "None of these"]
	     },	 	 
		 
		  	  {
	id:17,		 
		question:"Q17:PSTN stands for",
		 answer: "Public switched telephone network",
		 options:[
		   "Public switched telephone network",
		   "Private switched telephone network",
		   "Protected switched telephone network",
		   "None of these"]
	     },	 	 
		 
		   {
	id:18,		 
		question:"Q18:ISO stands for",
		 answer: "International organisation for standardization",
		 options:[
		   "Intermediate organisation for standardization",
		   "International organisation for standardization",
		   "Investigation organisation for standardization",
		   "None of these"]
	     },	 

  {
	id:19,		 
		question:"Q19:ISDN stands for",
		 answer: "Integrated services digital network",
		 options:[
		   "Integrated services digital network",
		   "Integrated services data network",
		   "Integrated services device network",
		   "None of these"]
	     },	 

{
	id:20,		 
		question:"Q20:BDP stands for",
		 answer: "Bandwidth delay product",
		 options:[
		   "Bandwidth delay product",
		   "Bandwidth data product",
		   "Bandwidth device product",
		   "None of these"]
	     },	 		 
 ];

function submitForm(e){
	e.preventDefault();
	let name = document.forms["welcome_form"]["name"].value;
	
	sessionStorage.setItem("name", name);
	
	location.href = "quiz.html";
	
}


let question_count = 0;

let point = 0;


function next() {
	
	let user_answer = document.querySelector("li.option.active").innerHTML;
	
     if(user_answer == questions[question_count].answer){
		point += 1;
		
		sessionStorage.setItem("points", point);
	 }
	 
	 
	if (question_count == questions.length - 1){
		sessionStorage.setItem("time", `${minutes} min ${seconds} sec`);
		clearInterval(mytime);
		location.href = "end.html";
		return;
	}
	
	
	

	

	
	question_count ++;
	show(question_count);
	
	
	
}
 function show(count) {
	 let question = document.getElementById("questions");
	 
	 
	 //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
	 
	 
	 question.innerHTML = `
	 ${questions[count].question}
	 
	  <ul class="option_group">
				    <li class="option">${questions[count].options[0]}</li>
					<li class="option">${questions[count].options[1]}</li>
					<li class="option">${questions[count].options[2]}</li>
					<li class="option">${questions[count].options[3]}</li>
				</ul>
	 
	 `;
	 
	 toggleActive();
 
 }
 
 function toggleActive() {
	 let option = document.querySelectorAll("li.option");
	 
	 for(let i=0; i< option.length; i++) {
		 option[i].onclick = function() {
			 for(let j=0; j< option.length; j++){
				if(option[j].classList.contains("active")) {
					option[j].classList.remove("active");
				}
			 }
			 option[i].classList.add("active");
		 }
	 }
 }	 