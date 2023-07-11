export interface TaskInterface {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export type NewTaskInterface = Omit<TaskInterface, 'id'>;
