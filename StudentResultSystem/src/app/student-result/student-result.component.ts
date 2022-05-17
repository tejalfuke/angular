import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent {
  public Maths:number=0;
  public Physics:number=0;
  public Chemistry:number=0;
  public average:number=0;

  Average(){
    this.average=(this.Maths+this.Physics+this.Chemistry)/3;
  }

}

