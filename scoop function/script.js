// global function //
let hospitalName = "Healthy Life Clinic";

console.log(hospitalName); 


 // function scope //

function checkPatient() {
   
    let patientName = "John";

    console.log("Hospital:" + hospitalName); 
    console.log("Patient:"  + patientName); 


  // block scope //

    if (true) {
        
        let healthStatus = "Healthy";

        console.log(patientName + " is " + healthStatus);
        console.log("Clinic:", hospitalName);
    }

   
}


checkPatient();


