import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Interfaces/ipost';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  currentPostId: number = 0;
  post: IPost | null;
  constructor(
    private fetchApi: GenericApiFetcher,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.currentPostId = Number(
      this.activatedRoute.snapshot.paramMap.get('pstId')
    );

    this.fetchApi
      .genericFetchFunc<IPost>('get', 'posts', {}, this.currentPostId)
      .subscribe((pst) => (this.post = pst));
  }
  goBack() {
    this.location.back();
  }
}
