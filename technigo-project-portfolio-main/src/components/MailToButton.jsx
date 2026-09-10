

export const MailToButton = ({className, mailTo, label}) => {
  return (
    <a
      className={`${className}`}
      to="#"
      onClick={ (e) => {
        e.preventDefault();
        window.location.href = mailTo
      }}
    >
      <h3>
        {label}
      </h3>
    </a>
  );
};