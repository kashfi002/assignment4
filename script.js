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