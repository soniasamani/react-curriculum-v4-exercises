//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Sonia Samani';
  const age = 30;
  const hobbies = ['programming', 'tennis', 'ski', 'reading books'];

  return (
    <div>
      {/* add JSX here */}
      <h1>{name}</h1>
      <p>
        Hi! My name is {name}, and I am {age} years old. I enjoy learning React!
      </p>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}
