export interface Hour {
    push(hour: Hour): unknown;
    from: string;
    to: string;
    description: string;
  }