import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  providers: [UserService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  colleges = [];
  user;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    // alert("Entered Email id : " + data);
    this.userService.createUser(data).subscribe(
      result => {
        this.user = result.json();
      },
      error => {
        console.log(error);
      }
    )
  }

  login(data) {
    
  }

  getColleges() {
    this.userService.getCollegesList().subscribe(
      result => {
        this.colleges = result.json();
        console.log(this.colleges)
      },
      error => {
        console.log("error");
      }
    )
  }


}
