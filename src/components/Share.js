import ShareModal from "./ShareModal";
import React from "react";
import "../styles/share.css";
import {useState } from "react";
function Share({ label, text, title }) {
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const shareDetails = { url, title, text };

    const handleSharing = async () => {
        if (navigator.share) {
            try {
                await navigator
                    .share(shareDetails)
                    .then(() =>
                        console.log("Hooray! Your content was shared to tha world")
                    );
            } catch (error) {
                console.log(`Oops! I couldn't share to the world because: ${error}`);
            }
        } else {
            // fallback code
            // fallback code
            setShowModal(true); //this is the line added in this snippet
            // .... other code statement below
        }
    };
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="border-2 text-bolder text-xl  p-2 rounded-md   transition ease-in-out delay-100 bg-[#1E91B6] hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2" onClick={handleSharing}>
            <span className="sharer-button-text">{label}</span>
        </button>
        <ShareModal
      handleClose={setShowModal}
      shareData={shareDetails}
      modalVisible={showModal}
            />
        </>
    );
}
export default Share;