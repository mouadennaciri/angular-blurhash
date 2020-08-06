import { trigger, transition, animate, style, state } from '@angular/animations';

import { AnimationState } from '../models/animation-state.enum';

export const FadeIn = trigger('fadeIn', [
  state(
    AnimationState.VISIBLE,
    style({ opacity: 1 })
  ),
  transition('* => visible', [animate('500ms ease-out')])
]);
