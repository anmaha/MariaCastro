
const numComplaintsInput = document.querySelector('.complaints-search-bar input');

const complaintsSearchOutput = document.querySelector('.complaints-search-output');

// const complaintResponse = (response) =>
// `   <div class ="complaint-response">
//         <h3>${response}<h3>
//     </div>    
// `;

const complaintTemplate = (complaintTitle, response, index) => 
`
        <div class="complaint">
            <div class="complaint-title">
                <h3>${complaintTitle}</h3>
                <button onclick="toggleResponse(${index})">What did the police do?</button>
            </div>
            <div class ="complaint-response">
                <h3>${response}<h3>
            </div>  
        </div>
`
const toggleResponse = (index) => {
    //let newComplaintDiv =element.parentNode.parentNode;
    let complaintResponses = document.getElementsByClassName('complaint-response');
 
   // console.log(complaintResponses);
    let complaintResponse = complaintResponses[index];
    console.log('complaintResponse');
    if (complaintResponse.classList.contains('active')) {
        console.log(complaintResponse.classList);
        complaintResponse.classList.remove('active');
    } else {
        complaintResponse.classList.add('active');
    }
   
    // console.log(element.parentNode);
}
const lookupComplaint = (borough) => {
    let boroughComplaints = [];
   // console.log("Num of complaints " + numComplaintsInput.value);

    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json'
    ).then( (resp) => resp.json()
        ).then( (json) => {
           let tempBoroughComplaints  = json
                .filter(jsonObject => jsonObject.borough === borough)
                .map(boroughObject => (
                    { complaintTitle: boroughObject.complaint_type, 
                        response: boroughObject.resolution_description === undefined 
                        ? boroughObject.status 
                        : boroughObject.resolution_description
                    } 
                ) );
                // let newComplaintObject = {};
                // newComplaintObject.complaintTitle = boroughObject.complaint_type;
                // newComplaintObject.response = boroughObject.status;
            
                // return newComplaintObject;
            console.log(tempBoroughComplaints);

            if(numComplaintsInput.value === ''){
                boroughComplaints = tempBoroughComplaints;
            }else{ 
                let numberOfComplaints = Math.floor(numComplaintsInput.value);
                for(let i=0; i< numberOfComplaints; i++) {
                    let complaint = tempBoroughComplaints[i];
                    boroughComplaints.push(complaint);
                }
           }
           //return boroughComplaints;
           //console.log(typeof(numComplaintsInput.value))
           //console.log(boroughComplaints)
        }).finally( () => {
            complaintsSearchOutput.innerHTML = '';
            boroughComplaints.forEach( (complaint, index) => {
                let newComplaintDiv = complaintTemplate(complaint.complaintTitle, complaint.response, index);
                complaintsSearchOutput.innerHTML += newComplaintDiv;
            });
        })
};    

