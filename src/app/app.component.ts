import { Component, Inject, ElementRef, ViewChild, } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

/*SERVICES*/
import { PruebaService } from './service/prueba.service';
/*MODELS*/
import { TestBeck } from 'src/app/models/testbeck';
import { Person } from 'src/app/models/person';
/*FORMS*/
import { FormGroup } from '@angular/forms';
/* */
import { AvisoComponent } from './aviso/aviso.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PruebaService]
})
export class AppComponent {
  title = 'Instrucciones';

  person: Person | any;
  testbeck: TestBeck | any;
  data: [] | any
  nivel_ansiedad: number | any
  formPerson: FormGroup | any;
  formTest: FormGroup;

  constructor(private pruebaService: PruebaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formPerson = Person.getForm(this.person);
    this.formTest = TestBeck.getForm(this.testbeck);
  }

  openDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      nota: this.nivel_ansiedad,
      title: 'Interpretación del Test Aplicado'
    };
    const dialogRef = this.dialog.open(AvisoComponent, {
      data: dialogConfig.data,
    });
  }

  ansiedad_total(testbeck){
    var sum = 0;
    sum += parseInt(testbeck.p1)
    sum += parseInt(testbeck.p2)
    sum += parseInt(testbeck.p3)
    sum += parseInt(testbeck.p4)
    sum += parseInt(testbeck.p5)
    sum += parseInt(testbeck.p6)
    sum += parseInt(testbeck.p7)
    sum += parseInt(testbeck.p8)
    sum += parseInt(testbeck.p9)
    sum += parseInt(testbeck.p10)
    sum += parseInt(testbeck.p11)
    sum += parseInt(testbeck.p12)
    sum += parseInt(testbeck.p13)
    sum += parseInt(testbeck.p14)
    sum += parseInt(testbeck.p15)
    sum += parseInt(testbeck.p16)
    sum += parseInt(testbeck.p17)
    sum += parseInt(testbeck.p18)
    sum += parseInt(testbeck.p19)
    sum += parseInt(testbeck.p20)
    sum += parseInt(testbeck.p21)
    return sum
  }

  predict() {
    this.testbeck = this.formTest.value;
    var ansiedad = this.ansiedad_total(this.testbeck);
    this.formPerson.get('total_test_beck').setValue(ansiedad);
    this.person = this.formPerson.value;
    this.pruebaService.predict(this.person).subscribe((data)=>{
      if (data) {
        this.nivel_ansiedad = data;
        return this.openDialog(this.nivel_ansiedad);
      } else {
        return this.title = "Completar los campos";
      }
    })
  }
}

