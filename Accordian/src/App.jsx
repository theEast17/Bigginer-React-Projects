import  { useState } from 'react';
import data from './Data';
import SingleQuestion from './Question';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
         <SingleQuestion  questions={questions}/>
        </section>
      </div>
    </main>
  );
}

export default App;

