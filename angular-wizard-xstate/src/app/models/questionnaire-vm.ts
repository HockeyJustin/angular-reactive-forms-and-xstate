
export class FullName{
    public title:string;
    public firstName:string;
    public lastName:string;
}

export class Address{
    public addressL1: string;
    public addressL2: string;
    public postcodeZip:string;
}

export class phonenumber{
    public phonenumberName: string;
    public phonenumberAcctNo: string;
}

export class notes{
    public numberOfnotes: number;
}


export class QuestionnaireVM{
    public fullName: FullName;
    public address: Address;
    public phonenumber: phonenumber;
    public notes: notes;
}



// fullName: this.fb.group({
//     title: ['', Validators.required],
//     firstName: ['', Validators.required],
//     lastName: [''],
//   }),
//   address: this.fb.group({
//     street: ['', [Validators.required, Validators.minLength(2)]],
//     city: [''],
//     state: [''],
//     zip: ['']
//   })