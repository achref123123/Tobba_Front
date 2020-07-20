import {Component, OnInit} from '@angular/core';
import {MedicalService} from "../../Services/MedicalService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-traitement',
  templateUrl: './new-traitement.component.html',
  styleUrls: ['./new-traitement.component.scss']
})

export class NewTraitementComponent implements OnInit {
  traitementForm: FormGroup;
  types : any = ['1','2','3']

  constructor(private  medicalService: MedicalService , private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.traitementForm = this.formBuilder.group({
      traitement_title: ['', [Validators.required]],
      traitement_type: [1,[Validators.required]],
      traitement_content: [null, [Validators.required]],


    });
  }

  handleUpload(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.traitementForm.get('traitement_content').setValue(reader.result);
      };
    }
  }

  addTraitement(){
    console.log(this.traitementForm.value)
    this.medicalService.addTraitement(this.traitementForm.value).subscribe(
      response => {
        console.log(response)
      },
      error => console.log('error', error)
    );

  }


}
