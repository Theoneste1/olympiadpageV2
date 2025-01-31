let SHEET_ID = '1_goCAnx9eFbY_hBHQpUggbWYQKWuKZrUPWP8s8zgpIM'
// let SHEET_TITLE = 'teachers';
let SHEET_TITLE = 'JRMC2025ROUND1';
let SHEET_RANGE = 'A1:Y40000'

let ROUND3GRADE = ('https://docs.google.com/spreadsheets/d/'+ SHEET_ID +'/gviz/tq?sheet='+SHEET_TITLE +'&range='+SHEET_RANGE);


let length;
let table
let data
let countList = new Array()

let firstcount=0;
let lastpoint=length;
let pageSize =10;
let countPerEachPage =10;
let presentPage =1;
let countOfPages;

let currentStartingPoint =0;
let currentEndingPoing =pageSize;

let previousStartingPoint;
let previousEndingPoint;

let nextStatingPoint;
let nextEndingPoint;



function getCode(){
    return document.getElementById('code').value;
}

fetch(ROUND3GRADE)
.then(res => res.text())
.then(rep => {
    data = JSON.parse(rep.substr(47).slice(0,-2)); 
    console.log(data)
    
    length = data.table.rows.length;
    console.log("This is length ", length)

        table = document.createElement("table");
        table.border = "1";

        //Add the header row.
        var row = table.insertRow(-1);

        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "N";
        row.appendChild(headerCell);

        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "STUDENT NAME";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "G";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "L";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "GR";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "STATUS";
        row.appendChild(headerCell);
   
   
    //function for loading pagination functionality
    function loadMyPagination() {
    prepareList();
    loadMyPaginationList();
    }
    window.onload = loadMyPagination;

}
 
)



//function for creating how many how many number per each page
function getCountOfPages() {
    countOfPages=Math.ceil(length / countPerEachPage);
    return countOfPages;
    }


//function for adding how many numbers in total
// function prepareList() {
    
//     countList.push(count);
    
// }
    //function for moving to next page
    const getNextPage=()=> {
    presentPage += 1;
    loadMyPaginationList();
   
    }
    //function for moving previous page
    function getPreviousPage() {
    presentPage -= 1;
    loadMyPaginationList();
   
    }
    //function for moving to first page
    function getFirstPage() {
        presentPage = 0;
        loadMyPaginationList();
        document.getElementById("first").disabled;
    }
    //function for moving last page
    function getLastPage() {
    presentPage = countOfPages;
    loadMyPaginationList();
    }

     //function for creating how to move between the pages
     function loadMyPaginationList() { 
        document.getElementById("dvCustomersGrid").innerHTML = "";     
        createPageList();
        addPageList = countList.slice(currentStartingPoint, currentEndingPoing);
       
        validatePageCount();
        }

        //check how many students
         function countOfstudents(){
            countNumber=0
            
            for(j=0; j<length; j++){
                // console.log(data.table.rows[j].c[6].v)
                let compare =data.table.rows[j].c[5].v
                
                
                if(compare == getCode()){
        
                    // console.log("The following data from excel : ",data.table.rows[j].c[6].v)
                    countNumber=countNumber+1;
                    // console.log("This is the number", countNumber)
                }
         }
         return countNumber;
        }
        //button



        CheckListbutton=document.getElementById("first")
        CheckListbutton.addEventListener("click", function(){
            if(getCode()=="" && CheckListbutton.disabled==false){
                document.getElementById("error").innerHTML="Enter the school code!!"
                return false
            }
            if(getCode()!="" && CheckListbutton.disabled==false){
            CheckListbutton.disabled=true
            
            }
        })
    
   // get the number of the students

    //function for adding numbers to each page
    function createPageList() {
        
        if(countOfstudents()==0){
            document.getElementById("error").innerHTML="Wrong code, Not found!"
                // return false 
        }
        else{
        // document.getElementById("dvCustomersGrid").innerHTML = "";

        let index;
       
        initialStudent=0;
        let tatal =countOfstudents()
        // console.log("This is the cound=t number of the students", tatal);
        for (i = 0; i<length; i++) {
                //Add the data row.
               
                // var row = document.createElement("tr");
              
                let compare =data.table.rows[i].c[5].v
                

                code =document.getElementById('code').innerHTML
                // console.log("The data from excel : ",data.table.rows[i].c[6].v)
                if(compare == getCode())
                {
                    initialStudent +=1;
                    // keep the value for making the list
                    index =i 
                // Add the data cells.
                // var cell = row.insertCell(-1);
                datas=initialStudent.toString()

                var row = table.insertRow(-1);
                var headerCell = document.createElement("td");
                headerCell.innerHTML = datas
                row.appendChild(headerCell);

                var headerCell = document.createElement("td");
                headerCell.innerHTML = data.table.rows[i].c[0].v;
                row.appendChild(headerCell);

                headerCell = document.createElement("td");
                headerCell.innerHTML = data.table.rows[i].c[1].v;
                row.appendChild(headerCell);

                headerCell = document.createElement("td");
                headerCell.innerHTML = data.table.rows[i].c[2].v;
                row.appendChild(headerCell);

                headerCell = document.createElement("td");
                // headerCell.innerHTML = data.table.rows[i].c[3].v;
                headerCell.innerHTML = 'xx';
                row.appendChild(headerCell);

                headerCell = document.createElement("td");
                // headerCell.innerHTML = data.table.rows[i].c[5].v;
                headerCell.innerHTML = 'Pending';
                row.appendChild(headerCell);
                        }

                    }
                   let style= document.getElementById("school");
                   style.classList.remove("remove");
                    document.getElementById("school").style.color="black";
                    

                

                    // school informations
                    document.getElementById("schoolname").innerHTML=data.table.rows[index].c[4].v;
                    document.getElementById("teachername").innerHTML=data.table.rows[index].c[3].v;
                    document.getElementById("districtname").innerHTML=data.table.rows[index].c[6].v;
                    document.getElementById("sectorname").innerHTML=data.table.rows[index].c[8].v;
                    document.getElementById("snumber").innerHTML=initialStudent

                    var dvTable = document.getElementById("dvCustomersGrid");
                    dvTable.innerHTML = "";
                    dvTable.appendChild(table);
                    findTrs()
        // document.getElementById("countList").innerHTML = document.getElementById("countList").innerHTML+ addPageList[p] + "<br/>";
    

        }
        // close of else

        
    }

    function findTrs(){

    let trs=document.querySelectorAll("tr");
    trs =Array.from(trs);

    // console.log("These are trs",trs);
    }

    // getting the size of table.





        function cleaning(){
            loadMyPaginationList();
            location.reload()
            document.getElementById("dvCustomersGrid").innerHTML=" "
         }
        //function for validating real time condition like if move to last page, last page disabled etc
        function validatePageCount() {
       
        // document.getElementById("next").disabled = presentPage == countOfPages ? true : false;
        // document.getElementById("previous").disabled = presentPage == 1 ? true : false;
        // document.getElementById("first").disabled = presentPage == 1 ? true : false;
        // document.getElementById("last").disabled = presentPage == countOfPages ? true : false;
        }

