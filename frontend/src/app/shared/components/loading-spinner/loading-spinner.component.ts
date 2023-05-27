import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../../services/loading-spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private _loadingSpinnerService: LoadingSpinnerService) {}

  ngOnInit(): void {
    this.isLoading$ = this._loadingSpinnerService.getLoading();
  }
}
