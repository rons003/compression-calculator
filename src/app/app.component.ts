import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbNavModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'compression-calculator';
  active = 1;
  cr: number = 0;

  bore: number = 0;
  stroke: number = 0;
  uVolume: number = 0;
  rodLength: number = 0;
  intakeClosingAngle: number = 0;

  calculate() {
    const bore = Number(this.bore);
    const stroke = Number(this.stroke);
    const uVolume = Number(this.uVolume);
    const rodLength = Number(this.rodLength);
    const intakeAngle = Number(this.intakeClosingAngle);

    const sVolume = bore * bore * stroke * 0.0007854;

    if (this.active == 1) {
      this.cr = (sVolume + uVolume) / uVolume;
    } else {
      const rd = (1 / 2 * stroke) * Math.sin(intakeAngle * Math.PI / 180);
      const rr = (1 / 2 * stroke) * Math.cos(intakeAngle * Math.PI / 180);
      const pr1 = Math.sqrt(Math.pow(rodLength, 2) - (Math.pow(rd, 2)));
      const pr2 = pr1 - rr;
      const dst = stroke - ((pr2 + (1 / 2 * stroke)) - rodLength)
      const losv = dst * (Math.PI / 4) * Math.pow(bore, 2) / 1000;
      const dcr = (sVolume + uVolume) / (uVolume + losv) * 10;
      this.cr = dcr;
    }

  }


  getCompressionRatio(): string {
    const cr = this.cr.toFixed(1);
    return cr.toString() + ":1";
  }
}
