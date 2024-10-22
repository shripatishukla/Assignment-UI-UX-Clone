import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // Import the red cross icon

import '../input.css';
import '../output.css';

const List = ({ children }) => {
  // Check if the children string is "5% fee per transaction"
  const isFeeTransaction = children === "5% fee per transaction";

  return (
    <div className="flex items-center">
      {/* Render either the check or cross icon based on the condition */}
      {isFeeTransaction ? (
        <FontAwesomeIcon icon={faTimesCircle} className="text-red-600" /> // Red cross icon
      ) : (
        <FontAwesomeIcon icon={faCheckSquare} /> // Check square icon
      )}
      <p className="text-base p-3 text-body-color dark:text-dark-6">{children}</p>
    </div>
  );
};

export default List;
