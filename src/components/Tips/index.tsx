import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNestCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const tipsForWhenACtiveTask = {
    workTime: <span>Foque por {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Descanse por {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoACtiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenACtiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoACtiveTask[nextCycleType]}
    </>
  );
}
