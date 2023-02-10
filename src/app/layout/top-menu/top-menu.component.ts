import { Component, Input } from '@angular/core';
import { CurrentNode, NavigationNode } from 'src/app/navigation/navigation.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  //@Input() nodes: NavigationNode[];
  @Input() currentNode: CurrentNode | undefined;

  productCount: number = 0;
  hidden: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.countObserver.subscribe((count) => this.productCount = count);
  }


}
