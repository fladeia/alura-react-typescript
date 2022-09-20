import React = require('react');
import Button from '../Button';
// import Button from '../components/Button';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
