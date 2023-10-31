/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

function Job({ job }) {
  const [index, setIndex] = useState(0);
  const { company, dates, duties, title } = job[index];
  return (
    <>
      <main className="menu-section">
        <section className="section">
          <div className="title">
            <h2>Experience</h2>
          </div>

          <div className="jobDescription">
            <div className="btn-container">
              {job.map((job, index) => {
                return (
                  <button key={job.id} onClick={() => setIndex(index)}>
                    {job.company}
                  </button>
                );
              })}
            </div>

            <article className="job-info">
              <h3 className="job-Title">{title}</h3>
              <span className="company">{company}</span>
              <p className="dates">{dates}</p>

              {duties.map((duty, index) => {
                return (
                  <div key={index} className="dutyContainer">
                    <p className="icon">
                      <AiOutlineDoubleRight />
                    </p>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Job;
