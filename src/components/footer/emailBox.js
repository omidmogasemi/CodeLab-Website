import React from "react";
import "../../css/footer.css";

function EmailBox(props) {
  return (
    <div>
      <input type="text" placeholder="Email" className="mailingListBox" />
      <div className="submitButton">
        <p className="submitButtonText">Submit</p>
      </div>
    </div>
  );
}

export default EmailBox;
