import React, { useMemo, useCallback, useRef, useState } from "react";
import ReactDom from "react-dom";
import classnames from "classnames";
import "./index.scss";
import { useEffect } from "react";

const Popup = (props) => {
  const {
    direction = "bottom",
    visible = false,
    onClose,
    children,
    mask,
  } = props;

  const [popupVisi, setPopupVisi] = useState(visible);

  const wrapperRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);

  // const maskClass = useMemo(() => {
  //   const show = mask && visible ? "popup__mask--show" : "";
  //   const hide = !(mask && visible) ? "popup__mask--hide" : "";
  //   return `${show}${hide}`;
  // }, [visible, mask]);

  if (!wrapperRef.current) {
    wrapperRef.current = document.createElement("div");
    wrapperRef.current.setAttribute("id", "popup-wrapper");
    document.body.appendChild(wrapperRef.current);
  }

  useEffect(() => {
    setPopupVisi(visible);
  }, [visible]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener(
        "transitionend",
        function () {
          alert("end");
        },
        false
      );
    }
    return () => {
      contentRef.current.removeEventListener("animationend");
    };
  }, []);

  const startAnimate = (visi) => {
    const state = visi ? "show" : "hide";
    if (visi) {
      contentRef.current.classList.add(`popup__content__${direction}--show`);
      mask && maskRef.current.classList.add(`popup__mask--show`);
    } else {
      mask && maskRef.current.classList.remove(`popup__mask--show`);
      contentRef.current.classList.remove(`popup__content__${direction}--show`);
      contentRef.current.classList.add(`popup__content__${direction}--hide`);
    }
  };

  useEffect(() => {
    startAnimate(visible);
  }, [popupVisi]);

  const popupDom = (
    <div>
      <div
        onClick={() => {
          onClose();
        }}
        ref={maskRef}
        className={`popup__mask`}
      ></div>
      <div
        className={`popup__content popup__content__${direction}`}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );

  return ReactDom.createPortal(popupDom, wrapperRef.current);
};

export default Popup;
