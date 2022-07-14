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
        return <Part title={prop.title} exercises={prop.exercises} />;
      })}
    </>
  );
};
const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      title: 'Fundamentals of React',
      exercises: 10,
    },
    {
      title: 'Using props to pass data',
      exercises: 7,
    },
    {
      title: 'State of a component',
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content props={parts} />
      <Total props={parts} />
    </div>
  );
};

export default App;
