import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListService } from '../list.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.page.html',
  styleUrls: ['./add-edit-item.page.scss'],
})
export class AddEditItemPage {
  item: any;
  tabIndex: number;
  itemIndex: number;
  buttons: Array<string>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private listService: ListService
  ) {
    this.buttons = ["radio-button-off", "radio-button-on", "snow", "flame"];

    const tabIndexParam = this.route.snapshot.paramMap.get('tab');
    const itemIndexParam = this.route.snapshot.paramMap.get('item');

    this.tabIndex = tabIndexParam ? +tabIndexParam : -1;
    this.itemIndex = itemIndexParam ? +itemIndexParam : -1;

    if (this.itemIndex >= 0) {
      const tempItem = this.listService.getItem(this.tabIndex, this.itemIndex);
      if (tempItem) {
        this.item = Object.assign({}, tempItem);
        if (this.item.date) {
          this.item.date = new Date(this.item.date).toISOString();
        }
      } else {
        this.item = {
          date: new Date().toISOString(),
          task: '',
          icon: 'radio-button-off'
        };
      }
    } else {
      this.item = {
        date: new Date().toISOString(),
        task: '',
        icon: 'radio-button-off'
      };
    }
  }

  async error(message: any) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  save() {
    if (!this.item?.task?.length) {
      this.error('The task cannot be empty');
    } else {
      if (this.itemIndex >= 0) {
        this.listService.setItem(this.tabIndex, this.item, this.itemIndex);
      } else {
        this.listService.setItem(this.tabIndex, this.item);
      }
      this.router.navigate(['/home']);
    }
  }
}
