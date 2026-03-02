import '../styles/Education.css';

const education = [
  {
    school: 'University at Buffalo (SUNY)',
    major: 'Master of Science in Computer Science (AI/ML)',
    gpa: '3.9 / 4.0',
    year: 'Jan 2024 – May 2025',
  },
  {
    school: 'New Horizon College of Engineering',
    major: 'Bachelor of Technology in Computer Science',
    gpa: '8.9 / 10',
    year: 'Aug 2015 – May 2019',
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="education_heading">Education</h2>
      <div className="education_cards">
        {education.map((item, index) => (
          <article key={index} className="education_card">
            <h3 className="education_school">{item.school}</h3>
            <p className="education_major">{item.major}</p>
            <p className="education_gpa">GPA: {item.gpa}</p>
            <p className="education_year">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
