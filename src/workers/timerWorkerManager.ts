import { TaskStateModel } from "../models/TaskStateModel";

let instance: TimerWokerManager | null = null;

export class TimerWokerManager {
  private worker: Worker;
  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url));
  }
  static getInstance() {
    if (!instance) {
      instance = new TimerWokerManager();
    }
    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }
  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
