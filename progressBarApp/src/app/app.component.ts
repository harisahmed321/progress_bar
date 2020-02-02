import { Component, OnInit } from "@angular/core";
import { Bar } from "./models/bar.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "progressBarApp";
  bar: Bar;
  selectedBar: number;

  constructor() {
    this.bar = new Bar();
    this.bar.button = [10, 38, -13, -18];
    this.bar.bars = [
      { color: "success", val: 62 },
      { color: "success", val: 45 },
      { color: "success", val: 62 }
    ];
    this.bar.limit = 230;
    this.selectedBar = 0;
  }

  ngOnInit() {
    this.updateBarWithPercentage();
  }

  updateBarWithPercentage() {
    const barLength = this.bar.bars.length;
    for (let index = 0; index < barLength; index++) {
      const per = Math.round(
        (Number(this.bar.bars[index].val) / Number(this.bar.limit)) * 100
      );
      this.bar.bars[index].val = per;
      this.bar.bars[index].color = this.getPerColor(per);
    }
  }

  onChangeBarHandler(addValue: number, selectedBar: number) {
    let percentage = Math.round(
      (Number(addValue) / Number(this.bar.limit)) * 100
    );
    let newPercentage = this.bar.bars[selectedBar].val + percentage;
    if (newPercentage > 0 && newPercentage < 100) {
      this.bar.bars[selectedBar].val = newPercentage;
    }
    if (newPercentage < 0) {
      this.bar.bars[selectedBar].val = 0;
    }
    if (newPercentage > 100) {
      this.bar.bars[selectedBar].val = 100;
    }
    this.bar.bars[selectedBar].color = this.getPerColor(newPercentage);
  }

  getPerColor(percentage: number) {
    if (percentage <= 30) {
      return "danger";
    }
    if (percentage <= 60) {
      return "warning";
    }
    if (percentage <= 100) {
      return "success";
    }
  }
}
