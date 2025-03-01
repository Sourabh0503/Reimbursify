import { Component } from '@angular/core';
import { ReimbursementRequest, Status } from '../../models/ReimbursmentRequest.model';
import { ReimbursementService } from '../../services/reimbursement.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-reimbursement',
  standalone: false,
  templateUrl: './reimbursement.component.html',
  styleUrl: './reimbursement.component.scss'
})
export class ReimbursementComponent {
  columnNames: string[] = []
  AllReimbursementRequests : ReimbursementRequest[] = []
  ShowableReimbursementRequests : ReimbursementRequest[] = []
  selectedType: number = 1;
  selectedRow: string | null = null;
  activeMenu: string | null = null;
  

  constructor(private readonly reimburesementService:ReimbursementService, private menuService:MenuService) { 
    this.columnNames = ['title', 'date', 'category', 'userid', 'amount', 'status'];
    this.AllReimbursementRequests = this.reimburesementService.getAllReimbursementRequests();
    this.ShowableReimbursementRequests=this.AllReimbursementRequests;
    this.menuService.activeMenu.subscribe(data=>{
      this.activeMenu=data;
    })
  }

  onTypeChange(type:number){
    this.selectedType=type;
    if(this.selectedType==1){
      this.ShowableReimbursementRequests=this.AllReimbursementRequests;
    }
    if(this.selectedType==2){
      this.ShowableReimbursementRequests= this.AllReimbursementRequests.filter(item=> item.status==Status.pending || item.status==Status.screening);
    }
    if(this.selectedType==3){
      this.ShowableReimbursementRequests= this.AllReimbursementRequests.filter(item=>item.status==Status.paid);
    }
  }

  toggleMenu(event: MouseEvent, rowid:string) {
    event.preventDefault();
    event.stopPropagation();
    if(this.activeMenu==='more-option' && this.selectedRow==rowid){
      this.menuService.clearActiveMenu();
      this.selectedRow=null;
    }else{
     this.menuService.setActiveMenu('more-option', {x: event.clientX, y: event.clientY});
     this.selectedRow=rowid;
    }
  }
}