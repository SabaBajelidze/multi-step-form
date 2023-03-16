import completedImg from '../images/icon-thank-you.svg';

export default function PageFive() {
  return (
    <div className="form-wrapper" id='page5-formwrapper'>
      <form className="form" id="page5-form">
        <img src={completedImg} alt="completed icon" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com
        </p>
      </form>
    </div>
  );
}
