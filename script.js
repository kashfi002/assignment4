let interviewList=[];
let rejectedList=[];
let currentStatus="all";

const allToggle=document.getElementById("all-toggle");
const interviewToggle=document.getElementById("interview-toggle");
const rejectedToggle=document.getElementById("rejected-toggle");

const allCard=document.getElementById("all-card");
const section1=document.getElementById("section1");
const section2=document.getElementById("section2");

function calculateCounts(){
    document.getElementById("total-count").innerText =allCard.children.length;
    document.getElementById("interview-count").innerText=interviewList.length;
    document.getElementById("rejected-count").innerText=rejectedList.length;
}
calculateCounts();
function TogggleStyle(id){
    allToggle.classList.remove("bg-blue-500","text-white");
    interviewToggle.classList.remove("bg-blue-500","text-white");
    rejectedToggle.classList.remove("bg-blue-500","text-white");
    allToggle.classList.add("text-gray-600");

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-blue-500','text-white');

    if(id==="all-toggle"){
        allCard.classList.remove("hidden");
        section1.classList.add("hidden");
        section2.classList.add("hidden");
    }
    else if(id==="interview-toggle"){
        allCard.classList.add("hidden");
        section1.classList.remove("hidden");
        section2.classList.add("hidden");
    }
    else if(id==="rejected-toggle"){
        allCard.classList.add("hidden");
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
    }

}

const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interview-button')){
        const parentNode = event.target.parentNode.parentNode;

        const CompanyName = parentNode.querySelector('.company-name').innerText;
        const Position = parentNode.querySelector('.position').innerText;
        const JobType = parentNode.querySelector('.job-type').innerText;
        const status=parentNode.querySelector('.status').innerText;
        const note=parentNode.querySelector('.note').innerText;
        const cardInfo={
            CompanyName,
            Position,
            JobType,
            status:'Interview',
            note
        }
        
        const Exist= interviewList.find(
            item => item.CompanyName == cardInfo.CompanyName
        );

        if(!Exist){
            interviewList.push(cardInfo);
        }

        rejectedList=rejectedList.filter(item => item.CompanyName !== cardInfo.CompanyName);


        const updatedStatus= parentNode.querySelector('.status');
        updatedStatus.innerText="Interview";
        updatedStatus.classList.remove("text-gray-600","bg-gray-200");
        updatedStatus.classList.add("text-green-400","border","border-green-400");
        const SingleCard=event.target.closest('.single-card');
        SingleCard.classList.remove("border-l-4", "border-red-400");
        SingleCard.classList.add("border-l-4", "border-green-400");
    }

    else if(event.target.classList.contains('rejected-button')){
        const parentNode = event.target.parentNode.parentNode;

        const CompanyName = parentNode.querySelector('.company-name').innerText;
        const Position = parentNode.querySelector('.position').innerText;
        const JobType = parentNode.querySelector('.job-type').innerText;
        const status=parentNode.querySelector('.status').innerText;
        const note=parentNode.querySelector('.note').innerText;

        const cardInfo={
            CompanyName,
            Position,
            JobType,
            status:'Rejected',
            note
        }

        const Exist= rejectedList.find(
            item => item.CompanyName == cardInfo.CompanyName
        );

        if(!Exist){
            rejectedList.push(cardInfo);
        }

        interviewList=interviewList.filter(item => item.CompanyName !== cardInfo.CompanyName);

        const updatedStatus= parentNode.querySelector('.status');
        updatedStatus.innerText="Rejected";
        updatedStatus.classList.remove("text-gray-600","bg-gray-200");
        updatedStatus.classList.add("text-red-400","border","border-red-400");
        const SingleCard=event.target.closest('.single-card');
        SingleCard.classList.remove("border-l-4", "border-green-400");
        SingleCard.classList.add("border-l-4", "border-red-400");
       
    }
});


