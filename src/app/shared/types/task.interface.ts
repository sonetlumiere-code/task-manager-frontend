export interface TaskInterface {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type NewTaskInterface = Omit<TaskInterface, '_id' | 'createdAt' | 'updatedAt'>;
