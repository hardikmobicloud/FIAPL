import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-form-english',
  templateUrl: './form-english.page.html',
  styleUrls: ['./form-english.page.scss'],
})
export class FormEnglishPage implements OnInit {
  Ename:string;
  EId:string;
division:string;
department:string;
EMoNumber:string;
emergencyContact:string;
VName:string;
district:string;
private todo : FormGroup;
self_fever_value;
payloadData:object;
self_Breathlessness_value;
self_SoreThroat_value;
  test_covid_gone: any;
  test_covid_gone_description: any;
  stayed_at_home: any;
  is_highly_affected_area: any;
  contact_with_person_positive: any;
  aware_of_methods: any;
  date_of_pune_journey: any;
  mode_of_travel: any;
  date_of_resume_office: any='05/03/2020';
  assistance_need: any;
  assistance_need_description: any;
  suggetions_on_how_FIAPL_fight: any;
  since_when_description: any;
  registered_for_Arogyasetu: any;
  date_of_App_register: any;
  dataPostSuccess:boolean=false;
  myDate: String = new Date().toISOString();
  is_different_location: any;
  self_sweating_value: any;
  self_wheezing_value: any;
  self_cough_value: any;
  self_diarrhoea_value: any;
  contact_with_someone_who_have_tested: any;
  contact_positive_description: any;
  Visited_COVID19_affected_area: any;
  visited_Infected_Area_description: any;
  family_sweating_value: any;
  family_wheezing_value: any;
  family_cough_value: any;
  family_diarrhoea_value: any;
  family_contact_with_someone_who_have_tested: any;
  family_contact_positive_description: any;
  family_Visited_COVID19_affected_area: any;
  family_visited_Infected_Area_description: any;
  government_Quarantine_your_residence: any;
  quarantined_area_name_description: any;
  nature_of_employment: string;
  symtoms_that_apply:any;
  name_of_agency: any;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    public loadingCtrlr: LoadingController,
    public alertController: AlertController
    ) {
    this.todo = this.formBuilder.group({
      empnature: ['', Validators.required],
      agencyname: ['', Validators.required],
      ename: ['', Validators.required],
      eid: ['', Validators.required],
      departmentControl: ['', Validators.required],
      divisionControl: ['', Validators.required],
      econtact: ['', Validators.required],
      location: ['', Validators.required],
      districtControl: ['', Validators.required],
      Fever: ['', Validators.required],
      sweating: ['', Validators.required],
      wheezing: ['', Validators.required],
      cough: ['', Validators.required],
      Breathlessness: ['', Validators.required],
      SoreThroat: ['', Validators.required],
      diarrhoea: ['', Validators.required],
      contactpositive: ['', Validators.required],
     
      visitAffectedArea: ['', Validators.required],
     
      family_Fever: ['', Validators.required],
      sweating_family: ['', Validators.required],
      family_wheezing: ['', Validators.required],
      Family_Breathlessness: ['', Validators.required],
      Family_SoreThroat: ['', Validators.required],
      family_diarrhoea: ['', Validators.required],
      family_cough: ['', Validators.required],
      familyvisitAffectedArea: ['', Validators.required],
      familycontactpositive: ['', Validators.required],
      test_covid: ['', Validators.required],
      stayhome: ['', Validators.required],
      higheffectarea: ['', Validators.required],
      arogyasetuApp: ['', Validators.required],
      
      preventionmethod: ['', Validators.required],
      
      travelmode: ['', Validators.required],
      resumeoffice: ['', Validators.required],
      assistance: ['', Validators.required],
      suggetionsFIAPL: ['', Validators.required],
      currentLocation: ['', Validators.required],
      // familycontactpositivedescription: ['', Validators.required],
      //familyvisitedInfectedAreadescription: ['', Validators.required],
      journeybacklocation: ['', Validators.required],
      assistanceDescription: ['', Validators.required],
      //quarantineyourresidencedescription: ['', Validators.required],
      //test_covid_decription: ['', Validators.required],
    
      // contactpositivedescription: ['', Validators.required],
      // visitedInfectedAreadescription: ['', Validators.required],
      //quarantineyourresidence: ['', Validators.required],
      symtomthatapply: ['', Validators.required],

    
    });

 

   }

   changeValidationAgencyName(){
    if(this.nature_of_employment == 'FIAPL Employee'){
      this.todo.get('agencyname').clearValidators();
      this.todo.get('agencyname').updateValueAndValidity();
      this.todo.get('eid').setValidators([Validators.required]);
      this.todo.get('eid').updateValueAndValidity();
     }
    
     else{
      this.todo.get('agencyname').setValidators([Validators.required]);
      this.todo.get('agencyname').updateValueAndValidity();
      this.todo.get('eid').clearValidators();
      this.todo.get('eid').updateValueAndValidity();
     }
   }

   
  //  changeValidation(){
  //   if(this.contact_with_someone_who_have_tested == 'No'){
  //     this.todo.get('contactpositivedescription').clearValidators();
  //     this.todo.get('contactpositivedescription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('contactpositivedescription').setValidators([Validators.required]);
  //     this.todo.get('contactpositivedescription').updateValueAndValidity();
  //    }
  //  }

  //  changeValidationaffectedArea(){
  //   if(this.Visited_COVID19_affected_area == 'No'){
  //     this.todo.get('visitedInfectedAreadescription').clearValidators();
  //     this.todo.get('visitedInfectedAreadescription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('visitedInfectedAreadescription').setValidators([Validators.required]);
  //     this.todo.get('visitedInfectedAreadescription').updateValueAndValidity();
  //    }
  //  }

  //  changeValidationFamilyPositive(){
  //   if(this.family_contact_with_someone_who_have_tested == 'No'){
  //     this.todo.get('familycontactpositivedescription').clearValidators();
  //     this.todo.get('familycontactpositivedescription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('familycontactpositivedescription').setValidators([Validators.required]);
  //     this.todo.get('familycontactpositivedescription').updateValueAndValidity();
  //    }
  //  }


  //  changeValidationFamilyVisitInfected(){
  //   if(this.family_Visited_COVID19_affected_area == 'No'){
  //     this.todo.get('familyvisitedInfectedAreadescription').clearValidators();
  //     this.todo.get('familyvisitedInfectedAreadescription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('familyvisitedInfectedAreadescription').setValidators([Validators.required]);
  //     this.todo.get('familyvisitedInfectedAreadescription').updateValueAndValidity();
  //    }
  //  }

  //  changeValidationGoneforTest(){
  //   if(this.test_covid_gone == 'No'){
  //     this.todo.get('test_covid_decription').clearValidators();
  //     this.todo.get('test_covid_decription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('test_covid_decription').setValidators([Validators.required]);
  //     this.todo.get('test_covid_decription').updateValueAndValidity();
  //    }
  //  }

  //  changeValidationIsHighlyAffected(){
  //   if(this.is_highly_affected_area == 'No'){
  //     this.todo.get('quarantineyourresidence').clearValidators();
  //     this.todo.get('quarantineyourresidence').updateValueAndValidity();
  //     this.todo.get('quarantineyourresidencedescription').clearValidators();
  //     this.todo.get('quarantineyourresidencedescription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('quarantineyourresidence').setValidators([Validators.required]);
  //     this.todo.get('quarantineyourresidence').updateValueAndValidity();
  //     this.todo.get('quarantineyourresidencedescription').setValidators([Validators.required]);
  //     this.todo.get('quarantineyourresidencedescription').updateValueAndValidity();
  //    }
  //  }

  //  changeValidationQResidents(){
  //   if(this.government_Quarantine_your_residence == 'No'){
  //     this.todo.get('quarantineyourresidencedescription').clearValidators();
  //     this.todo.get('quarantineyourresidencedescription').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('quarantineyourresidencedescription').setValidators([Validators.required]);
  //     this.todo.get('quarantineyourresidencedescription').updateValueAndValidity();
  //    }
  //  }

  //  changeValidationAppRegister(){
  //   if(this.registered_for_Arogyasetu == 'Yes'){
  //     this.todo.get('arogyasetuAppresterdate').clearValidators();
  //     this.todo.get('arogyasetuAppresterdate').updateValueAndValidity();
  //    }
    
  //    else{
  //     this.todo.get('arogyasetuAppresterdate').setValidators([Validators.required]);
  //     this.todo.get('arogyasetuAppresterdate').updateValueAndValidity();
  //    }
  //  }

   changeValidationDifferentLoc(){
    if(this.is_different_location == 'No'){
      this.todo.get('journeybacklocation').clearValidators();
      this.todo.get('journeybacklocation').updateValueAndValidity();
      this.todo.get('travelmode').clearValidators();
      this.todo.get('travelmode').updateValueAndValidity();
     }
    
     else{
      this.todo.get('journeybacklocation').setValidators([Validators.required]);
      this.todo.get('journeybacklocation').updateValueAndValidity();
      this.todo.get('travelmode').setValidators([Validators.required]);
      this.todo.get('travelmode').updateValueAndValidity();
     }
   }

   changeValidationAssistanceNeed(){
    if(this.assistance_need == 'No'){
      this.todo.get('assistanceDescription').clearValidators();
      this.todo.get('assistanceDescription').updateValueAndValidity();
     }
    
     else{
      this.todo.get('assistanceDescription').setValidators([Validators.required]);
      this.todo.get('assistanceDescription').updateValueAndValidity();
     }
   }



   self_consulted_doctor;
   self_diagnosis_description;
   family_fever_value;
   Family_Breathlessness_value;
   Family_SoreThroat_value;
   Family_since_when;
   family_residing_with_you;
   family_consulted_doctor;
   Family_diagnosis_description;

   submitData(){

    if(navigator.onLine){
      this.payloadData= {
        "nature_employment":this.nature_of_employment,
        "agency_name":this.name_of_agency,
        "name":this.Ename,
        "employee_id":this.EId,
        "division":this.division,
        "department":this.department,
        "emergency_contact":this.EMoNumber,
        "present_location":this.VName,
        "district":this.district,
        "fever_in_self":this.self_fever_value,
        "shivering_and_sweating_in_self":this.self_sweating_value,
        "trouble_breathing_or_severe_wheezing_in_self":this.self_wheezing_value,
        "symptoms-Breathlessness":this.self_Breathlessness_value,
        "cough_in_self":this.self_cough_value,
        "symptoms-Sore_Throat":this.self_SoreThroat_value,
        "diarrhoea_in_self":this.self_diarrhoea_value,
        "since_when":this.since_when_description,
  
        "consulted_doctor":this.self_consulted_doctor,
      
        "contact_with_corona_positive_person":this.contact_with_someone_who_have_tested,
        
        "visited_corona_affected_area":this.Visited_COVID19_affected_area,
      

        "disease_information":this.symtoms_that_apply,
  
        "symptoms_in_family-Fever":this.family_fever_value,
        "shivering_and_sweating_in_family":this.family_sweating_value,
        "trouble_breathing_or_severe_wheezing_in_family":this.family_wheezing_value,
        "symptoms_infamily_Breathlessness":this.Family_Breathlessness_value,
        "cough_in_family":this.family_cough_value,
        "symptoms_sore_throat_in_family":this.Family_SoreThroat_value,
        "diarrhoea_in_family":this.family_diarrhoea_value,
  
        "since_when_infamily":this.Family_since_when,
        "residing_with_employee":this.family_residing_with_you,
        "consulted_doctor_of_family":this.family_consulted_doctor,
        
  
        "family_members_contact_with_corona_positive_person":this.family_contact_with_someone_who_have_tested,
        
        "family_members_visited_corona_affected_area":this.family_Visited_COVID19_affected_area,
    
    
    
        "self_or_family_member_goes_for_corona_test":this.test_covid_gone,
        
  
        "during_lockdown_stay_at_home":this.stayed_at_home,
        
        "travelling_area_is_highly_affected":this.is_highly_affected_area,
        
    
        "register_for_aarogyasetu_app":this.registered_for_Arogyasetu,
    
        "aware_of_corona_prevention_method":this.aware_of_methods,
        "current_location":this.is_different_location,
        "start_journey_to_pune":this.date_of_pune_journey,
        "mode_of_travel":this.mode_of_travel,
        "joining_date_of_office":this.date_of_resume_office,
        "require_assistance_for_fight_to_corona_virus":this.assistance_need,
        "required_assistance":this.assistance_need_description,
        "suggestion_to_fight_with_corona":this.suggetions_on_how_FIAPL_fight
        
         
        }
  
        
  
        this.UserService.postEmployeeDetails(this.payloadData).subscribe( (data: any) => {
        //  console.log(data);
          if ( data.status == 'success' ) {
          
               this.dataPostSuccess=true;
         
  
               history.pushState(null, null, location.href);
               window.onpopstate = function () {
                   history.go(1);
               };
    
          } else {
            
          }
        });
    }

    else{
      this.presentAlertNetworkConnection();
    }

  
   }

   checkAlreadySubmittedOnID(){
     if(navigator.onLine){
      this.UserService.checkExistEnployee(this.EId).subscribe( (data: any) => {
        // console.log(data);
         if ( data.status == 'success' ) {
         
             
              if(data.exists=='yes'){
               this.presentAlert();
               this.EId="";
              }        
   
         } else {
        
         }
       });
     }

     else{
      this.presentAlertNetworkConnection();
     }

   }



   

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Repeated ID',
      
      message: 'We have received response for your employee ID.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertNetworkConnection() {
    const alert = await this.alertController.create({
      header: 'Connection Failed',
      
      message: 'There may be a problem in your internet connection. Please try again!',
      buttons: ['Okay']
    });

    await alert.present();
  }
  
   closeWindow(){
     
    window.close();
    
   }

   showLoading( message: string = '') {
    this.loadingCtrlr.create({
      message
    }).then( loader => {
        loader.present();
    });
  }

  hideLoading() {
    this.loadingCtrlr.dismiss();
  }


  ngOnInit() {

  }

}
