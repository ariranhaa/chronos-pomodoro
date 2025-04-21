import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, Mainform
  secondsRemaining: number; // countdown, historico, mainform, button
  formattedSecondsRemaining: string; // titulo, countdown
  activeTask: TaskModel | null; // coutndown, historica, mainform, button
  currentCycle: number; // home
  config: {
    workTime: number; //mainform
    shortBreakTime: number; // mainform
    longBreakTime: number; // mainform
  };
};
