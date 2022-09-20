import React = require('react');
import Button from '../components/Button';

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
          <label></label>
          <input type="time" />
        </div>
        <Button />
      </form>
    );
  }
}
