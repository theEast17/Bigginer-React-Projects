import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ questions }) => {
  const [showInfoArray, setShowInfoArray] = useState(questions.map(() => false));

  const handleToggle = (index) => {
    const newShowInfoArray = [...showInfoArray];
    newShowInfoArray[index] = !newShowInfoArray[index];
    setShowInfoArray(newShowInfoArray);
  };

  return (
    <>
      {questions.map((question, index) => {
        const { id, title, info } = question;
        return (
          <article className='question' key={id}>
            <header>
              <h4>{title}</h4>
              <button className='btn' onClick={() => handleToggle(index)}>
                {showInfoArray[index] ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </header>
            {showInfoArray[index] && <p>{info}</p>}
          </article>
        );
      })}
    </>
  );
};

export default Question;
