import React, { useState } from 'react';
import Goal from './GoalList';

function GoalList() {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Finish React project', completed: false },
    { id: 2, text: 'Improve JavaScript skills', completed: true },
    { id: 3, text: 'Learn backend integration', completed: false },
  ]);

  const toggleGoal = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div>
      <h3>My Goals</h3>
      {goals.map(goal => (
        <Goal
          key={goal.id}
          goal={goal}
          onToggle={toggleGoal}
          onDelete={deleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;
