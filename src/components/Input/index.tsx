import { FC, useEffect, useRef } from "react";
import { IInput } from "./interface";
import { useMessageContext } from "../../context/messageContext";
import { messagesIcons } from "../../constants/icons";
import { processingInput } from "../../utils/processingInput";

import styles from "./input.module.scss";

const Input: FC<IInput> = () => {
  const { setInputState, inputState, sendMessage } = useMessageContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(e.target)) {
        setInputState((prev) => ({ ...prev, active: false }));
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setInputState]);

  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={ref}
      className={styles.root}
    >
      <div
        onClick={() => {
          setInputState((prev) => ({ ...prev, active: true }));
        }}
        className={styles.custom__input}
      >
        {inputState.text.length > 0 || inputState.active ? (
          <p className={styles.text__user}>
            {processingInput(inputState.text)}
            {inputState.active && (
              <span className={styles.input__animation}>|</span>
            )}
          </p>
        ) : (
          <p className={styles.placeholder}>Type messsage</p>
        )}
      </div>
      <picture className={styles.footer}>
        <button
          onClick={() => {
            setInputState((prev) => ({ ...prev, active: true }));
          }}
          className={styles.btn__clip}
        >
          <img src={messagesIcons.clip} alt="icon clip" />
        </button>
        <button className={styles.btn__arrow}>
          <img
            onClick={sendMessage}
            src={messagesIcons.arrow}
            alt="icon clip"
          />
        </button>
      </picture>
    </section>
  );
};

export { Input };
