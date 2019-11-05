import { Component } from "@angular/core";
import { Comments } from "./models/comments";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  commentsArr: Comments[] = [];

  selectedComments: Comments = new Comments();

  openForEdit(comment: Comments) {
    this.selectedComments = comment;
  }
  addOrEdit() {
    if (this.selectedComments.id === 0) {
      this.selectedComments.id = this.commentsArr.length + 1;
      this.commentsArr.push(this.selectedComments);
    }
    this.selectedComments = new Comments();
  }

  delete() {
    this.selectedComments = new Comments();
  }
}
