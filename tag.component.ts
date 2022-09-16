import {Component, OnInit} from '@angular/core';
import {TagService} from "./tag.service";
import {Tag} from './tag';
import { FormGroup, FormControl} from "@angular/forms";
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
    tag: Tag | undefined;
    tagAll: any;

    formValue = new FormGroup({
        color: new FormControl(),
        name: new FormControl(),
        numberOfRecordings: new FormControl()
    });

    constructor(private service: TagService) {
    }

    ngOnInit(): void {
        this.service.getTag()
            .toPromise()
            .then(tags => {
                this.tagAll = tags;
                console.log(this.tagAll);
            })
    }

    postTagDetails() {
        this.tag = this.formValue.value;
        this.service.postTag(this.tag).toPromise()
            .then(addedTag => {
                let ref = document.getElementById('cancel')
                ref?.click();
                this.formValue.reset();
                this.tagAll.push(addedTag);
            })
            .catch(err => {
                alert(" Please select all the fields")
            });
        this.getAllTags()
    }

    getAllTags() {
        this.service.getTag().subscribe(res => {
            this.tagAll = res;
        })
    }

    deleteTags(data: any) {
        this.tag = this.formValue.value;
        this.service.deleteTag(data.uuid).toPromise()
            .then(deletedTag => {
                this.formValue.reset();
                this.tagAll.push(deletedTag);
                this.getAllTags()
            });
    }
}
