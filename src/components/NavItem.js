import React, { useRef, useEffect } from "react";
import "./NavItem.css";

export const NavItem = ({
  children,
  type,
  onClick,
  setActivePage,
  closeMobileMenu,
  page,
  isMobile,
  def_text,
  anim_text,
}) => {
  const animTextRef = useRef(null);

  const handleClick = () => {
    if (setActivePage && closeMobileMenu && page) {
      setActivePage(page);
      closeMobileMenu();
    }
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (animTextRef.current) {
      const textWidth = animTextRef.current.scrollWidth + 5;
      animTextRef.current.style.setProperty("--text-width", `${textWidth}px`);
      animTextRef.current.style.setProperty(
        "--steps",
        animTextRef.current.textContent.length
      );
    }
  }, []);

  return (
    <button
      className={`btn--${isMobile ? "mobile" : "primary"}`}
      onClick={handleClick}
      type={type}
    >
      {children}
      <div className="anim">
        <span className="anim-btn">{def_text}</span>
        <span className="anim-text" ref={animTextRef}>
          {anim_text}
        </span>
      </div>
    </button>
  );
};
