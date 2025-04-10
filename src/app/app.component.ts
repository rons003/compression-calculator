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
    const sVolume = this.bore * this.bore * this.stroke * 0.0007854;
    this.cr = (sVolume + this.uVolume) / this.uVolume;

  }

  getCompressionRatio(): string {
    const cr = Math.round(this.cr);
    return cr.toString() + " : 1";
  }
}
