// el signo de pregunta es para decirle que puede que venga o no
export interface UpdateTaskDto {
  title?: string;
  description?: string;
  done?: boolean;
}
