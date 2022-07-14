const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  );
};

const Total = ({ props }) => {
  const total = props.map((prop) => prop.exercises).reduce((a, b) => a + b, 0);
  return <p>Number of exercises {total}</p>;
};

const Content = ({ props }) => {
  return (
    <>
      {props.map((prop) => {
        return <Part title={prop.name} exercises={prop.exercises} />;
      })}
    </>
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts} />
      <Total props={course.parts} />
    </div>
  );
};

export default App;
