import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import { State } from "./../../redux/reducers";
import "../../styles/input.scss";
import { getTranslated } from "../../redux/action/input";
import { setHistory } from "../../redux/action/history";
import { Languages } from "./../../redux/action-types";

const Input = () => {
  const [inputValue, setinputValue] = useState("");
  const [isOpenTo, setIsOpenTo] = useState(false);
  const [lang, setLang] = useState(Languages.french);

  const toggleTo = () => {
    setIsOpenTo(!isOpenTo);
  };

  const dispatch = useDispatch();
  const { inputManager } = useSelector((state: State) => state);

  useEffect(() => {
    managing(inputValue);
  }, [inputValue, lang]);

  const managing = (text: string) => {
    if (text !== "") {
      dispatch(getTranslated({ text, lang }));
    }
  };

  const submit = () => {
    if (inputValue) {
      dispatch(
        setHistory({
          text: inputValue,
          textTranslated: inputManager[0],
        })
      );
    }
  };

  return (
    <div className="input">
      <div className="inputs">
        <textarea
          className="textarea"
          placeholder="Write English Text..."
          onChange={(e) => setinputValue(e.target.value)}
          data-testid="input"
        >
          {inputValue}
        </textarea>
        <div className="translated">
          <p>
            {inputValue !== "" ? (
              inputManager[0]
            ) : (
              <span style={{ color: "grey" }} data-testid="translated">
                Translating...
              </span>
            )}
          </p>
        </div>
      </div>

      <Button
        color="primary"
        className="button"
        onClick={submit}
        data-testid="submit-btn"
        block
      >
        Submit
      </Button>

      <ButtonDropdown isOpen={isOpenTo} toggle={toggleTo} className="to-lang">
        <DropdownToggle caret color="success">
          Translate To
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => setLang(Languages.french)}
            disabled={lang === "fra" ? true : false}
          >
            French
          </DropdownItem>
          <DropdownItem
            onClick={() => setLang(Languages.german)}
            disabled={lang === "ger" ? true : false}
          >
            German
          </DropdownItem>
          <DropdownItem
            onClick={() => setLang(Languages.russian)}
            disabled={lang === "rus" ? true : false}
          >
            Russian
          </DropdownItem>
          <DropdownItem
            onClick={() => setLang(Languages.italian)}
            disabled={lang === "ita" ? true : false}
          >
            Italian
          </DropdownItem>
          <DropdownItem
            onClick={() => setLang(Languages.polish)}
            disabled={lang === "pol" ? true : false}
          >
            Polish
          </DropdownItem>
          <DropdownItem
            onClick={() => setLang(Languages.spanish)}
            disabled={lang === "spa" ? true : false}
          >
            Spanish
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
};

export default Input;
