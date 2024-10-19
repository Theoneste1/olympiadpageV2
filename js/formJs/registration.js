//Defining API        
        
        let SHEET_ID = '1_goCAnx9eFbY_hBHQpUggbWYQKWuKZrUPWP8s8zgpIM'
        // let SHEET_TITLE = 'teachers';
        let SHEET_TITLE = 'SchoolData';
        let SHEET_RANGE = 'A1:AE419'
        
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

        
        // // Define district options based on province
        // const districtOptions = {
        //     Eastern: ["Bugesera", "Gatsibo", "Kayonza", "Kirehe", "Ngoma", "Nyagatare", "Rwamagana"],
        //     Northern: ["Burera", "Gakenke", "Musanze", "Rulindo"],
        //     Southern: ["Gisagara", "Huye", "Kamonyi", "Muhanga", "Nyamagabe", "Nyaruguru", "Ruhango"],
        //     Western: ["Karongi", "Ngororero", "Nyabihu", "Nyamasheke", "Rubavu", "Rusizi", "Rutsiro"],
        //     // Add more provinces as needed
        // };

        // // Define sector options based on district
        // const sectorOptions = {
        //     Bugesera: ["Bugesera", "Gashora", "Juru", "Nyamata", "Ntarama"],
        //     Gatsibo: ["Gatsibo", "Kabarore", "Kageyo", "Kiramuruzi", "Remera"],
        //     Kayonza: ["Kabare", "Kabarondo", "Murama", "Murundi", "Rukara"],
        //     Kirehe: ["Gatore", "Kigarama", "Kigina", "Mpanga", "Nasho"],
        //     Ngoma: ["Kibungo", "Mugesera", "Mutenderi", "Rurenge", "Sake"],
        //     Nyagatare: ["Gabiro", "Karangazi", "Katabagemu", "Kiyombe", "Matimba"],
        //     Rwamagana: ["Gishari", "Kabare", "Muhazi", "Musha", "Ndego"],

        //     Burera: ["Butaro", "Cyanika", "Cyeru", "Kagogo", "Rugarama"],
        //     Gakenke: ["Coko", "Cyabingo", "Gashenyi", "Mataba", "Muhondo"],
        //     Musanze: ["Busogo", "Cyuve", "Kinigi", "Muhoza", "Nkotsi"],
        //     Rulindo: ["Base", "Burega", "Bushoki", "Cyinzuzi", "Masoro"],

        //     Gisagara: ["Gikonko", "Kansi", "Kibirizi", "Mamba", "Muganza"],
        //     Huye: ["Gishamvu", "Karama", "Maraba", "Muganza", "Ngoma"],
        //     Kamonyi: ["Gacurabwenge", "Karama", "Kayenzi", "Mugina", "Musambira"],
        //     Muhanga: ["Cyeza", "Kabacuzi", "Kiyumba", "Muhanga", "Nyamabuye"],
        //     Nyamagabe: ["Buruhukiro", "Cyanika", "Gasaka", "Kaduha", "Kibirizi"],
        //     Nyaruguru: ["Busanze", "Cyahinda", "Kibeho", "Kivu", "Ngoma"],
        //     Ruhango: ["Bweramana", "Kinazi", "Kinihira", "Muhanga", "Nyanza"],

        //     Karongi: ["Bwishyura", "Gishyita", "Mubuga", "Muganza", "Murambi"],
        //     Ngororero: ["Bwira", "Kabaya", "Muhanda", "Ndaro", "Rambura"],
        //     Nyabihu: ["Bigogwe", "Jomba", "Jenda", "Mukamira", "Rurembo"],
        //     Nyamasheke: ["Bigogwe", "Karambi", "Kagano", "Mukamira", "Rusizi"],
        //     Rubavu: ["Bugeshi", "Burera", "Gisenyi", "Kanama", "Nyundo"],
        //     Rusizi: ["Bugarama", "Gihundwe", "Gitambi", "Kigeyo", "Mururu"],
        //     Rutsiro: ["Boneza", "Gihango", "Kigeyo", "Murunda", "Rwaniro"],
        // };

        // // Function to populate districts based on selected province
        // function populateDistricts() {
        //     const provinceSelect = document.getElementById("school-province");
        //     const districtSelect = document.getElementById("school-district");
        //     const selectedProvince = provinceSelect.value;

        //     // Clear current options
        //     districtSelect.innerHTML = '<option value="">Select district...</option>';

        //     // Populate with new options based on selected province
        //     if (selectedProvince && districtOptions[selectedProvince]) {
        //         districtOptions[selectedProvince].forEach(function(district) {
        //             const option = document.createElement("option");
        //             option.text = district;
        //             option.value = district;
        //             districtSelect.appendChild(option);
        //         });
        //     }

        //     // Reset sectors when changing province
        //     const sectorSelect = document.getElementById("school-sector");
        //     sectorSelect.innerHTML = '<option value="">Select sector...</option>';
        // }

        // // Function to populate sectors based on selected district
        // function populateSectors() {
        //     const districtSelect = document.getElementById("school-district");
        //     const sectorSelect = document.getElementById("school-sector");
        //     const selectedDistrict = districtSelect.value;

        //     // Clear current options
        //     sectorSelect.innerHTML = '<option value="">Select sector...</option>';

        //     // Populate with new options based on selected district
        //     if (selectedDistrict && sectorOptions[selectedDistrict]) {
        //         sectorOptions[selectedDistrict].forEach(function(sector) {
        //             const option = document.createElement("option");
        //             // Remove "Sector" from the sector name
        //             const sectorName = sector.replace(/Sector/g, "").trim();
        //             option.text = sectorName;
        //             option.value = sectorName;
        //             sectorSelect.appendChild(option);
        //         });
        //     }
        // }
    

// Hidding and displaying the card.
let informationForm = document.getElementById("informationForm");
let RegistrationForm  =document.getElementById("RegistrationForm");
let RegistrationCard = document.getElementById("modal-body");

document.getElementById("registrationId").addEventListener('click',(e)=>{
    
        informationForm.classList.add("hidden");
        RegistrationForm.classList.remove("hidden");
       
        e.preventDefault()
})

//Checking if the school code exist.

function getCode(){
    return document.getElementById('code').value;
}

//Fetching the data
fetch(ROUND3GRADE)
.then(res => res.text())
.then(rep => {
    data = JSON.parse(rep.substr(47).slice(0,-2)); 
    console.log(data)
    
    length = data.table.rows.length;
    // console.log("This is length ", length)

    //     table = document.createElement("table");
    //     table.border = "1";

    //     //Add the header row.
    //     var row = table.insertRow(-1);

    //     //Add the header cells.
    //     var headerCell = document.createElement("TH");
    //     headerCell.innerHTML = "N";
    //     row.appendChild(headerCell);

    //     var headerCell = document.createElement("TH");
    //     headerCell.innerHTML = "STUDENT NAME";
    //     row.appendChild(headerCell);

    //     headerCell = document.createElement("TH");
    //     headerCell.innerHTML = "G";
    //     row.appendChild(headerCell);

    //     headerCell = document.createElement("TH");
    //     headerCell.innerHTML = "L";
    //     row.appendChild(headerCell);

    //     headerCell = document.createElement("TH");
    //     headerCell.innerHTML = "GR";
    //     row.appendChild(headerCell);

    //     headerCell = document.createElement("TH");
    //     headerCell.innerHTML = "STATUS";
    //     row.appendChild(headerCell);
   
   
    //function for loading pagination functionality
    function loadMyPagination() {
    // prepareList();
    // loadMyPaginationList();
    }
    window.onload = loadMyPagination;

}
 
)

// get the number of the students

    //function for adding numbers to each page
   //check how many students
   function countOfstudents(){
    countNumber=0
    
    for(j=0; j<length-1; j++){
        // console.log(data.table.rows[j].c[6].v)
        let compare =data.table.rows[j].c[0].v
        
        
        if(compare == getCode()){
            // document.getElementById("school-name").value=data.table.rows[j].c[4].v

            // console.log("The following data from excel : ",data.table.rows[j].c[6].v)
            countNumber=countNumber+1;
            // console.log("This is the number", countNumber)
        }
 }
 return countNumber;
}


//Assign the values

function assignValues(){
    document.getElementById("email").value=data.table.rows[j].c[1].v
    document.getElementById("school-type").value=data.table.rows[j].c[2].v
    document.getElementById("school-name").value=data.table.rows[j].c[3].v
    document.getElementById("teacher-name").value=data.table.rows[j].c[4].v
    document.getElementById("teacher-email").value=data.table.rows[j].c[5].v

    document.getElementById("school-province").value=data.table.rows[j].c[6].v
    document.getElementById("school-sector").value=data.table.rows[j].c[7].v
    document.getElementById("school-district").value="Nyamagabe"
    document.getElementById("head-teacher-name").value=data.table.rows[j].c[8].v
    document.getElementById("head-teacher-phone").value=data.table.rows[j].c[9].v
    document.getElementById("head-teacher-email").value=data.table.rows[j].c[10].v
    document.getElementById("school-bank-account").value=data.table.rows[j].c[11].v
    document.getElementById("school-bank-name").value=data.table.rows[j].c[12].v
    document.getElementById("school-bank-branch").value=data.table.rows[j].c[13].v
    document.getElementById("school-code").value=data.table.rows[j].c[0].v
  
document.getElementById("teacher-phone-contact").value=data.table.rows[j].c[16].v
document.getElementById("students-jrmc").value=45
document.getElementById("students-srmc").value=45
document.getElementById("call-head-teacher").value="Yes"


}


//button



CheckListbutton=document.getElementById("first")
CheckListbutton.addEventListener("click", function(){
    if(getCode()=="" && CheckListbutton.disabled==false){
        document.getElementById("error").innerHTML="Enter the school code!!"
        return false
    }
    if(getCode()!="" && CheckListbutton.disabled==false){
        createPageList()
       
        let RegistrationCard = document.getElementById("modal-body");

        // RegistrationCard.classList.remove("hidden");
        // RegistrationCard.classList.add("block");
        CheckListbutton.disabled=false
    
    }
})

GoBackBtn = document.getElementById("ClearTables");
GoBackBtn.addEventListener("click", function(){
if(getCode()!="" && CheckListbutton.disabled==true){
    CheckListbutton.disabled=false;
    }

})

// get the number of the students

//function for adding numbers to each page
function createPageList() {

if(countOfstudents()==0){
    console.log("THE DATAS ARE", data.table.rows[3].c[0].v)
    console.log("The entered datas are",getCode())
    document.getElementById("error").innerHTML="Your Code is Not found!"
        // return false 
}
else{
// document.getElementById("dvCustomersGrid").innerHTML = "";

let index;
assignValues()
// RegistrationForm.classList.add("hidden");
RegistrationCard.classList.remove("hidden");
RegistrationCard.classList.add("block");


initialStudent=0;
let tatal =countOfstudents()
// console.log("This is the cound=t number of the students", tatal);
for (i = 0; i<length; i++) {
        //Add the data row.
       
        // var row = document.createElement("tr");
      
        let compare =data.table.rows[i].c[0].v
        console.log("The data---------WRONG CODE----------")
        console.log(data.table.rows[i].c[0].v)
        

        code =document.getElementById('code').innerHTML
        // console.log("The data from excel : ",data.table.rows[i].c[6].v)
        if(compare == getCode())
        {
            initialStudent +=1;
            // keep the value for making the list
            console.log(data.table.rows[i].c[0].v)
            console.log("The data-------------------")
            index =i 
        // Add the data cells.
        // var cell = row.insertCell(-1);
        datas=initialStudent.toString()

        // var row = table.insertRow(-1);
        // var headerCell = document.createElement("td");
        // headerCell.innerHTML = datas
        // row.appendChild(headerCell);

        // var headerCell = document.createElement("td");
        // headerCell.innerHTML = data.table.rows[i].c[1].v;
        // row.appendChild(headerCell);

        // headerCell = document.createElement("td");
        // headerCell.innerHTML = data.table.rows[i].c[2].v;
        // row.appendChild(headerCell);

        // headerCell = document.createElement("td");
        // headerCell.innerHTML = data.table.rows[i].c[3].v;
        // row.appendChild(headerCell);

        // headerCell = document.createElement("td");
        // headerCell.innerHTML = data.table.rows[i].c[4].v;
        // // headerCell.innerHTML = 'xx';
        // row.appendChild(headerCell);

        // headerCell = document.createElement("td");
        // headerCell.innerHTML = data.table.rows[i].c[5].v;
        // // headerCell.innerHTML = 'Pending';
        // row.appendChild(headerCell);
                }

            }
        //    let style= document.getElementById("school");
        //    style.classList.remove("remove");
        //     document.getElementById("school").style.color="black";
            

        

            // school informations
            // document.getElementById("schoolname").innerHTML=data.table.rows[index].c[10].v;
            // document.getElementById("teachername").innerHTML=data.table.rows[index].c[9].v;
            // document.getElementById("districtname").innerHTML=data.table.rows[index].c[7].v;
            // document.getElementById("sectorname").innerHTML=data.table.rows[index].c[8].v;
            // document.getElementById("snumber").innerHTML=initialStudent

            // var dvTable = document.getElementById("dvCustomersGrid");
            // dvTable.innerHTML = "";
            // dvTable.appendChild(table);
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

}



    