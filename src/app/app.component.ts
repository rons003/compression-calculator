import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavModule, FormsModule],
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

  calculate(){
    const bore = Number(this.bore);
    const stroke = Number(this.stroke);
    const uVolume = Number(this.uVolume);
    const sVolume = bore * bore * stroke * 0.0007854;
    this.cr = (sVolume + uVolume) / uVolume;

  }

  getCompressionRatio(): string {
    const cr = this.cr.toFixed(1);
    return cr.toString() + ":1";
  }
}
