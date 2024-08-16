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
      <form onSubmit={handleSubmit}>
        <input name="boxholder" placeholder="Boxholder Name" required />
        <select name="boxSize" required>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Add Mailbox</button>
      </form>
    );
};
  
export default MailboxForm;