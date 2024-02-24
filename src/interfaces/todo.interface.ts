
export interface Todo {
    id:          string;
    title:       string;
    description: string;
    done:        boolean;
    created_at:  string;
    updated_at:  string;
}

export type CreateTodo = Omit<Todo, 'created_at' | 'updated_at' | 'id'>;
