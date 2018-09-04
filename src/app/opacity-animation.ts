import { trigger, state, style, animate, transition } from '@angular/animations';

export const opacityAnimation = trigger('opacity', [
    state('in', style({opacity: 1})),
    transition('void => *', [
      style({
        opacity: 0
      }),
      animate('0.2s ease-in')
    ]),
    transition('* => void', [
      animate('0.2s ease-out', style({
        opacity: 0
      }))
    ])
  ]);
