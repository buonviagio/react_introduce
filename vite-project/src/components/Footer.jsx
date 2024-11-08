import React from "react";

export default function Footer({ handlePageChange, pageNumber }) {
  return (
    <div className="footer-container">
      <div className="container-of-arrows">
        <div>
          <span className="material-symbols-outlined arrow-back">
            <button
              className="button-back"
              onClick={handlePageChange}
              disabled={pageNumber === 1}
            >
              arrow_back_ios
            </button>
          </span>
        </div>

        <div>
          <span className="material-symbols-outlined arrow-forward">
            <button
              className="button-forward"
              onClick={handlePageChange}
              disabled={pageNumber === 10}
            >
              arrow_forward_ios
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
