import React, { useState, useRef, useEffect } from "react";
import DetailContentsProfileBackdrop from "./DetailContentsProfileBackdrop";
import DetailContentsProfileWrap from "./DetailContentsProfileWrap";
import DetailContentsProfileCard from "./DetailContentsProfileCard";
import DetailContentsProfilePage from "./DetailContentsProfilePage";
import DetailContentsProflieArrow from "./DetailContentsProflieArrow";

const DetailContentsProfileModal = ({ profileModal, setProfileModal }) => {
  const [card, setCard] = useState();
  const [drag, setDrag] = useState();
  const [cardId, setCardId] = useState(Number(profileModal.id));
  const [startClientX, setstartClientX] = useState();
  const [speed, setSpeed] = useState(0);
  const saveDrag = useRef();
  const [arrow, setArrow] = useState({
    side: 0,
    top: 0,
  });

  const close = () => setProfileModal(!profileModal.clicked);

  let img = new Image();
  img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

  const halfDiv = card / 2;
  const halfWindowWidth = window.innerWidth / 2;
  const halfWindowHeight = window.innerHeight / 2;
  const marginRight = 19;

  const Move = (id) => card * id - halfDiv - marginRight - halfWindowWidth;

  const firstID = 1;
  const lastID = Number(profileModal?.data?.length);

  const minimumLength = profileModal?.data?.length > 1;

  useEffect(() => {
    const calc = (width, div) => (width * div) / 100;
    const calcDiv = 41.38;

    const currentWindowSize = () =>
      window.innerWidth <= 999
        ? setCard(calc(window.innerWidth, calcDiv) * 2)
        : setCard(calc(window.innerWidth, calcDiv));

    currentWindowSize();

    window.addEventListener("resize", (e) => {
      currentWindowSize();
    });
  }, []);

  useEffect(() => {
    cardId === firstID ? settingValues(Math.abs(Move(cardId))) : settingValues(Move(cardId) * -1);

    setArrow({ ...arrow, side: Math.abs(Move(firstID)) });
  }, [card, cardId]);

  const settingValues = (value, speed) => {
    setDrag(value);
    saveDrag.current = value;
    setSpeed(speed);
  };

  const dragStart = (e) => {
    e.dataTransfer.setDragImage(img, 0, 0);
    setstartClientX(e.nativeEvent.clientX);
  };

  const dragOver = (e) => {
    e.preventDefault();

    const result = saveDrag.current + e.nativeEvent.clientX - startClientX;

    setSpeed(0);
    setDrag(result);
  };

  const dragEnd = (e) => {
    e.preventDefault();
    const divWidth = e.target.clientWidth;
    const divHeight = e.target.clientHeight / 2;

    const next = drag <= saveDrag.current;
    const prev = drag >= saveDrag.current;

    const move = (next && saveDrag.current - divWidth) || (prev && saveDrag.current + divWidth);

    if (next) {
      settingValues(move, 300);
      setCardId((current) => current + 1);
    } else if (prev) {
      settingValues(move, 300);
      setCardId((current) => current - 1);
    }

    const firstCard = Math.abs(Move(firstID)) <= drag;
    const lastCard = Move(lastID) * -1 >= drag;

    if (firstCard) {
      setCardId(firstID);
      settingValues(Math.abs(Move(firstID)), 300);
    } else if (lastCard) {
      setCardId(lastID);
      settingValues(Move(lastID) * -1, 300);
    }

    setArrow({ ...arrow, top: Math.abs(halfWindowHeight - divHeight + 75) });
  };

  const slideButton = (next) => {
    next === true ? setCardId((current) => current + 1) : setCardId((current) => current - 1);
    settingValues(Move(cardId), 300);
  };

  return (
    <DetailContentsProfileBackdrop>
      <DetailContentsProfileWrap
        drag={drag}
        cardId={cardId}
        marginRight={marginRight}
        speed={speed}
        dragStart={dragStart}
        dragOver={dragOver}
        dragEnd={dragEnd}
      >
        <DetailContentsProfileCard
          profileModal={profileModal?.data}
          cardId={cardId}
          card={card}
          close={close}
          minimumLength={minimumLength && true}
        />
      </DetailContentsProfileWrap>

      <DetailContentsProflieArrow
        arrow={arrow}
        cardId={cardId}
        firstID={firstID}
        marginRight={marginRight}
        slideButton={slideButton}
        lastID={lastID}
      />

      {minimumLength && <DetailContentsProfilePage cardId={cardId} lastID={lastID} />}
    </DetailContentsProfileBackdrop>
  );
};

export default DetailContentsProfileModal;
