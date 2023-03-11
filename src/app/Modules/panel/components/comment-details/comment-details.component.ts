import { IComment } from 'src/app/Interfaces/icomment';
import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css'],
})
export class CommentDetailsComponent implements OnInit {
  currentCommentId: number = 0;
  comment: IComment | null;
  constructor(
    private fetchApi: GenericApiFetcher,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}
  ngOnInit(): void {
    this.currentCommentId = Number(
      this.activatedRoute.snapshot.paramMap.get('comId')
    );
    
    this.fetchApi
      .genericFetchFunc<IComment>('get', 'comments', {}, this.currentCommentId)
      .subscribe((com) => (this.comment = com));
  }
  goBack() {
    this.location.back();
  }
}
