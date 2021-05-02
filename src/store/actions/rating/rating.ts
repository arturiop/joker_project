import { ActionsTypes } from '../../../types/types';

export const actionRating = {
  raisRating: (value: number) => ({ type: 'RATING/RAISING_RATING', value } as const),
};

export type ActionTypeRating = ActionsTypes<typeof actionRating>;
