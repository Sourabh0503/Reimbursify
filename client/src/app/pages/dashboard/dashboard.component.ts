import { Component } from '@angular/core';
import { ReimbursementService } from '../../services/reimbursement.service';
import { ViolatorData } from '../../models/ViolatorsData.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  TopVoilators: ViolatorData[] = [];
  constructor(private readonly reimburesementService: ReimbursementService) {
    this.TopVoilators = this.reimburesementService.getTopViolators(8);
  }
}

