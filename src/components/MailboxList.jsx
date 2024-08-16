//src/components/MailboxList.jsx
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.map((mailbox) => (
        <div key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>
            Box {mailbox._id}: {mailbox.boxholder} ({mailbox.boxSize})
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MailboxList;