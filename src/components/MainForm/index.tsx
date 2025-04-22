import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm() {
  const { setState } = useTaskContext();
  function handleClick() {
    setState((prevState) => {
      return { ...prevState, formattedSecondsRemaining: "21:00" };
    });
  }

  return (
    <form className="form" action="">
      <button onClick={handleClick} type="button">
        clicar
      </button>
      <div className="formRow">
        <Input
          labelText="task"
          id="inputTask"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Proximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
