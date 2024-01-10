const WorkoutDetails = ({ workout }) => {
  return (
    <div
      style={{
        border: '.5px solid grey',
        margin: '20px auto',
        padding: '0px 20px',
        backgroundColor: 'white',
        boxShadow: '2px 5px 10px lightgrey',
        borderRadius: '4px',
        position: 'relative',
      }}
    >
      <h2 style={{ color: 'green' }}>{workout.title}</h2>
      <p>
        <strong>Load (kg):</strong> {workout.load}{' '}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}{' '}
      </p>
      <p> {workout.createdAt} </p>
    </div>
  );
};

export default WorkoutDetails;
