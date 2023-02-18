//cmd: ng g class employee

import { FormGroup,FormControl, Validators } from "@angular/forms";

export class Employee {
    "id":number;
    "firstName":string;
    "lastName":string;
    "emailId":string;

    // validation=new FormGroup({
    //     firstName:new FormControl('',Validators.required),
    //     lastName:new FormControl('',Validators.required),
    //     emailId:new FormControl('',Validators.required)
    // });
}
