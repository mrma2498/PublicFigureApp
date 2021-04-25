import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public instagram = "https://www.instagram.com/jakegyllenhaal/";
  public facebook = "https://www.facebook.com/JakeGyllenhaal"
  public imdb = "https://www.imdb.com/name/nm0350453/"

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  sendToPage(url: string){
    window.open(url,'_system');
  }
}
