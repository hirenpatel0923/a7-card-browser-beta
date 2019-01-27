import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GroupListColorsStartService } from '../../../services/shared-services/data/group-list-colors/group-list-colors-start.service';
import { StartColors } from '../../../services/shared-services/data/group-list-colors/group-list-colors-start';
// import { colors } from '../../../globals/colors';
import { $ } from 'jquery';

@Component({
  selector: 'app-group-list-start',
  templateUrl: './group-list-start.component.html',
  styleUrls: ['./group-list-start.component.less']
})
export class GroupListStartComponent implements OnInit {
  colors: string[];
  colorSubscription: any;
  selectedColor;
  // colors = colors;
  // colors = [
  //   'red',
  //   'green',
  //   'blue',
  //   'pink',
  //   'yellow',
  //   'orange',
  // ];

  constructor(private groupListColorsStartService: GroupListColorsStartService) {

   }

  ngOnInit() {
    this.colorSubscription = this.groupListColorsStartService.StartColors.subscribe(
      (startColors: StartColors) => this.colors = startColors.colors
    );
    this.groupListColorsStartService.currentSelectedColor.subscribe(
      selectedColor => this.selectedColor = selectedColor
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }

  clicked(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    this.groupListColorsStartService.changeSelectedColor(this.colorToHex(target.style.color));
    this.cssClassAddRemove(target);
    console.log('selectedcolor : ' + this.selectedColor);
  }

  cssClassAddRemove(target) {
    let grandParent = target.parentElement.parentElement.parentElement;
    (function($){
      $('div.selected').removeClass('selected');
    })(jQuery);
    grandParent.classList.add('selected');
  }

  colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    let digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    let red = parseInt(digits[2]);
    let green = parseInt(digits[3]);
    let blue = parseInt(digits[4]);
    let rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16).padStart(6, '0');
  }

  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    this.groupListColorsStartService.addNewColor('#' + ('000000' + color).slice(-6));
  }

}
