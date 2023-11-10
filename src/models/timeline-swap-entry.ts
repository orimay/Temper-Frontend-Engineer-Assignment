import { createId } from '@/utils/create-id';

export class TimelineSwapEntry {
  public readonly id: string;

  public constructor(
    public readonly subject: string,
    public readonly indexFrom: number,
    public readonly indexTo: number,
  ) {
    this.id = createId();
  }
}
