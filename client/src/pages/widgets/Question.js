import { useState } from "react";

export default function Question({ question }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{question.title}
          <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
        </h4>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}