import { Box, Button, Center, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const inputHandler = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const countSelector = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const changeCountValue = (dir) => {
    if (dir === "increment") {
      dispatch({
        type: "INCREMENT_COUNTER",
      });
    } else if (dir === "decrement") {
      dispatch({
        type: "DECREMENT_COUNTER",
      });
    } else if (dir === "reset") {
      dispatch({
        type: "RESET_COUNTER",
      });
    } else if (dir === "set_state") {
      dispatch({
        type: "SET_COUNTER_STATE",
        payload: inputValue,
      });
    }
  };

  return (
    <Center>
      <Flex alignItems="Center" marginTop="10">
        <Button marginRight="4" onClick={() => changeCountValue("decrement")}>
          -
        </Button>
        <Text fontsize="2xl">{countSelector.count}</Text>
        <Button marginLeft="4" onClick={() => changeCountValue("increment")}>
          +
        </Button>
        <Button onClick={() => changeCountValue("reset")}>Reset</Button>
      </Flex>
      <Center>
        <Flex alignItems="Center" marginTop="10">
          <input onChange={inputHandler} type="number"></input>
          <Button onClick={() => changeCountValue("set_state")}>
            Set State
          </Button>
        </Flex>
      </Center>
    </Center>
  );
};

export default CounterPage;
