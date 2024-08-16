//src/components/MailboxForm.jsx
const MailboxForm = ({ addBox }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const newMailbox = {
        boxholder: event.target.boxholder.value,
        boxSize: event.target.boxSize.value,
      };
      addBox(newMailbox);
    };
  
    return (
      <div>
        <h1>Create a New Mailbox</h1>
        <form onSubmit={handleSubmit}>
          <h4>Enter a boxholder:</h4>
          <input name="boxholder" placeholder="Boxholder Name" required />
          <h4>Select a box size:</h4>
          <select name="boxSize" required>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="submit">Add Mailbox</button>
        </form>
      </div>
    );
};
  
export default MailboxForm;