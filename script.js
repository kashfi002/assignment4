let interviewList=[];
let rejectedList=[];
let currentStatus="all";

const allToggle=document.getElementById("all-toggle");
const interviewToggle=document.getElementById("interview-toggle");
const rejectedToggle=document.getElementById("rejected-toggle");
const Availability=document.getElementsByClassName('availability')[0];


const allCard=document.getElementById("all-card");
const section1=document.getElementById("section1");
const section2=document.getElementById("section2");

function calculateCounts(){
    document.getElementById("total-count").innerText = allCard.children.length;
    document.getElementById("interview-count").innerText = interviewList.length;
    document.getElementById("rejected-count").innerText = rejectedList.length;

    const total = allCard.children.length;
    const availCount = document.getElementById("available-count");

    if (currentStatus === "all-toggle") {
        availCount.innerText = total;}
    else if(currentStatus === "all") {
        availCount.innerText = total;
    }
    else if (currentStatus === "interview-toggle") {
        availCount.innerText = `${interviewList.length} of ${total}`;
    } 
    else if (currentStatus === "rejected-toggle") {
        availCount.innerText = `${rejectedList.length} of ${total}`;
    }
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
    calculateCounts(); 

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
        updatedStatus.classList.remove("text-red-400","border","border-red-400");
        updatedStatus.classList.add("text-green-400","border","border-green-400");
        const SingleCard=event.target.closest('.single-card');
        SingleCard.classList.remove("border-l-4", "border-red-400");
        SingleCard.classList.add("border-l-4", "border-green-400");

        if(currentStatus === "rejected-toggle"){
            renderRejected();
             calculateCounts();

        }
        renderInterview();
        calculateCounts();
         
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
         updatedStatus.classList.remove("text-green-400","border","border-green-400");
        updatedStatus.classList.add("text-red-400","border","border-red-400");
        const SingleCard=event.target.closest('.single-card');
        SingleCard.classList.remove("border-l-4", "border-green-400");
        SingleCard.classList.add("border-l-4", "border-red-400");

          if(currentStatus === "interview-toggle"){
            renderInterview();
            calculateCounts();
        }
        renderRejected();
        calculateCounts();
    }
    else if (event.target.closest('.delete-button')) {

    const SingleCard = event.target.closest('.single-card');
    const CompanyName = SingleCard.querySelector('.company-name').innerText;
    interviewList = interviewList.filter(
        item => item.CompanyName !== CompanyName
    );
    rejectedList = rejectedList.filter(
        item => item.CompanyName !== CompanyName
    );
    if (SingleCard.parentElement.id === "all-card") {
        SingleCard.remove();
    }

    renderInterview();
    renderRejected();
    calculateCounts();
}

function renderInterview(){
    section1.innerHTML=''
    if(interviewList.length==0){
         section1.innerHTML=`
       <div class="flex flex-col items-center mt-10">
            <img src="images/jobs.png" alt="No Interview Jobs" class="mb-4">
            <p class="text-gray-500 text-lg">No interview jobs yet.</p>
        </div>
         `;
         return
    }
     for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className ="single-card flex justify-between shadow rounded-2xl p-[20px] space-y-4 mt-[20px] border-l-4 border-green-400"
        div.innerHTML=`
         <div >
                    <p class="company-name text-2xl font-bold mb-[10px]">${interview.CompanyName}</p>
                    <p class="position text-gray-600 mb-[10px]">Software Engineer</p>
                    <p class="job-type text-gray-600 mb-[10px]">Remote• Full-time •$130,000 - $175,000</p>
                    <p class="status mb-[10px] bg-white text-green-400 border border-green-400 w-[113px] text-center py-[5px] rounded-sm">${interview.status}</p>
                    <p class="note mb-[10px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <div class="apply-button">
                        <button class="interview-button border border-green-400 text-green-400 rounded px-[10px]">Interview</button>
                        <button class="rejected-button border border-red-400 text-red-400 rounded px-[10px]">Rejected</button>
                    </div>
                </div>
                <div>
                    <button class="delete-button"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `
        section1.appendChild(div);
}
}
function renderRejected(){
    section2.innerHTML=''
    if(rejectedList.length==0){
         section2.innerHTML=`
       <div class="flex flex-col items-center mt-10">
            <img src="images/jobs.png" alt="No Interview Jobs" class="mb-4">
            <p class="text-gray-500 text-lg">No interview jobs yet.</p>
        </div>
         `;
         return
    }
     for (let reject of rejectedList) {
        let div = document.createElement('div');
        div.className ="single-card flex justify-between shadow rounded-2xl p-[20px] space-y-4 mt-[20px] border-l-4 border-red-400"
        div.innerHTML=`
         <div >
                    <p class="company-name text-2xl font-bold mb-[10px]">${reject.CompanyName}</p>
                    <p class="position text-gray-600 mb-[10px]">Software Engineer</p>
                    <p class="job-type text-gray-600 mb-[10px]">Remote• Full-time •$130,000 - $175,000</p>
                    <p class="status mb-[10px] bg-white text-red-400 border border-red-400 w-[113px] text-center py-[5px] rounded-sm">${reject.status}</p>
                    <p class="note mb-[10px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <div class="apply-button">
                        <button class="interview-button border border-green-400 text-green-400 rounded px-[10px]">Interview</button>
                        <button class="rejected-button border border-red-400 text-red-400 rounded px-[10px]">Rejected</button>
                    </div>
                </div>
                <div>
                    <button class="delete-button"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `
        section2.appendChild(div);
       }
    }
});
