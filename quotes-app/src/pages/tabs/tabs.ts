import {Component} from "@angular/core";
import {FavouritesPage} from "../favourites/favourites";

@Component({
    selector: 'pages-tab',
    template: `
        <ion-tabs>
            <ion-tab [root]="favouritesPage"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    favouritesPage = FavouritesPage;
}