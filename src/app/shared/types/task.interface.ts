export interface TaskInterface {
  _id: string;
  name: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export type NewTaskInterface = Omit<TaskInterface, '_id' | 'createdAt' | 'updatedAt'>;
