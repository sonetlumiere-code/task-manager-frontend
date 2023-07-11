export interface TaskInterface {
  _id: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
}

export type NewTaskInterface = Omit<TaskInterface, 'id'>;
