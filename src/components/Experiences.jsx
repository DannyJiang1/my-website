import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";
import Entry from "./Entry";
import MobileEntry from "./MobileEntry";

function Experiences({ mobile }) {
  const [showPopup, setShowPopUp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false); // Manage content rendering
  const [currID, setCurrID] = useState(-1);
  // Handles opening the popup with transition
  const handleOpen = (pTitle, pText, newID) => {
    setIsTransitioning(true); // Start the green box transition
    setShowPopUp(true); // Show the popup container (without content)

    setTimeout(() => {
      setPopupTitle(pTitle);
      setPopupText(pText);
      setCurrID(newID);
      setIsContentVisible(true); // Render content when the box is fully covered
    }, 500); // Show content after green box covers (1 second)

    setTimeout(() => {
      setIsTransitioning(false); // End transition after the box slides out
    }, 1000); // Complete after the green box slides out
  };

  // Handles closing the popup with transition
  const handleClose = () => {
    if (isTransitioning) return;
    setIsTransitioning(true); // Start the transition to cover the content with the green box

    setTimeout(() => {
      setCurrID(-1);
      setIsContentVisible(false); // Hide content when the box is fully covered
    }, 500); // Hide content after the green box covers it

    setTimeout(() => {
      setShowPopUp(false); // Fully close the popup after the green box slides out
      setIsTransitioning(false); // End transition
    }, 1000); // Complete after the green box slides out
  };

  // Handles transition between content
  const handleTransition = (newTitle, newText, newID) => {
    if (showPopup) {
      // If the popup is already open, do the transition
      if (newID === currID) return;
      if (isTransitioning) return;
      setIsTransitioning(true); // Start transition

      setTimeout(() => {
        setPopupTitle(newTitle);
        setPopupText(newText);
        setCurrID(newID);
        setIsContentVisible(true); // Update content
      }, 500); // Update content after green box covers it

      setTimeout(() => {
        setIsTransitioning(false); // End transition after the green box slides out
      }, 1000); // Complete after the green box slides out
    } else {
      // If the popup is not open, handle it like a normal open
      if (isTransitioning) return;
      handleOpen(newTitle, newText, newID);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: `calc(100vh - 80px)`,
      }}
    >
      {mobile ? (
        <div>
          <MobileEntry
            title={"SUSE"}
            onClick={() => handleTransition("TEST pTitle1", "TEST pText1", 0)}
          >
            Show Entry Popup
          </MobileEntry>
          <MobileEntry
            title={"SUSE2"}
            onClick={() => handleTransition("TEST pTitle2", "TEST pText2", 1)}
          >
            MOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas lk;dfm;aslkdfms;alk
            mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl; asfadfasfma
            sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma sflkdsm
            MOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas lk;dfm;aslkdfms;alk
            mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl; asfadfasfma
            sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma
            sflkdsmMOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas
            lk;dfm;aslkdfms;alk mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl;
            asfadfasfma sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma
            sflkdsmMOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas
            lk;dfm;aslkdfms;alk mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl;
            asfadfasfma sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma sflkdsm
          </MobileEntry>
          <MobileEntry
            title={"SUSE2"}
            onClick={() => handleTransition("TEST pTitle2", "TEST pText2", 1)}
          >
            MOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas lk;dfm;aslkdfms;alk
            mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl; asfadfasfma
            sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma sflkdsm
            MOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas lk;dfm;aslkdfms;alk
            mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl; asfadfasfma
            sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma
            sflkdsmMOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas
            lk;dfm;aslkdfms;alk mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl;
            asfadfasfma sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma
            sflkdsmMOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas
            lk;dfm;aslkdfms;alk mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl;
            asfadfasfma sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma sflkdsm
          </MobileEntry>
          <MobileEntry
            title={"SUSE2"}
            onClick={() => handleTransition("TEST pTitle2", "TEST pText2", 1)}
          >
            MOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas lk;dfm;aslkdfms;alk
            mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl; asfadfasfma
            sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma sflkdsm
            MOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas lk;dfm;aslkdfms;alk
            mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl; asfadfasfma
            sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma
            sflkdsmMOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas
            lk;dfm;aslkdfms;alk mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl;
            asfadfasfma sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma
            sflkdsmMOBILE dfl; asfadfasfma sdflkasfdams dfkldasmfas
            lk;dfm;aslkdfms;alk mfsal;mfsad sfdmasfmas;lfmasflkdsm MOBILE dfl;
            asfadfasfma sdflkasfdam sdfkldasmfaslk;d fm;aslkdfms;alkm fsal;mfsad
            sfdmasfmas;lfm asflkdsmMOBILE dfl; asfadfa sfmasdflkas fdamsdfk
            ldasmfa slk;dfm;asl kdfms;alkmf sal;mfsad sfdmasfm as;lfma sflkdsm
          </MobileEntry>
        </div>
      ) : (
        <div>
          <Entry
            title={"SUSE"}
            onClick={() => handleTransition("TEST pTitle1", "TEST pText1", 0)}
          >
            Show Entry Popup
          </Entry>
          <Entry
            title={"SUSE2"}
            onClick={() => handleTransition("TEST pTitle2", "TEST pText2", 1)}
          >
            Show Entry Popup
          </Entry>
          {showPopup && !mobile && (
            <div
              style={{
                position: "fixed",
                top: "15%",
                left: "50%",
                transform: "translate(-50%, -50%)", // transform needs to be a string
              }}
            >
              <EntryPopUp
                title={popupTitle}
                onClose={handleClose}
                isTransitioning={isTransitioning}
                isContentVisible={isContentVisible}
              >
                {popupText}
              </EntryPopUp>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Experiences;
