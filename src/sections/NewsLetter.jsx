import React from 'react';
import {
  iconList,
  illustrationSignUpDesktop,
  illustrationSignUpMobile,
} from '../assets/images';
const monthlyUpdateDescription = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];
const emailRegex = /^\S+@\S+\.\S+$/;
const NewsLetter = ({ handleGoto }) => {
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(true);
  const handleSubscribe = () => {
    if (!emailRegex.test(email)) {
      setEmailValid(false);
      return;
    } else {
      setEmailValid(true);
      handleGoto('newsletter-success');
    }
  };
  return (
    <div className="flex sm:items-center">
      <div className="flex flex-col items-center bg-white sm:flex-row-reverse sm:p-8 sm:rounded-xl gap-10">
        <section>
          <img
            src={illustrationSignUpMobile}
            alt="sign-up mobile"
            className="sm:hidden"
          />
          <img
            src={illustrationSignUpDesktop}
            alt="sign-up desktop"
            className="max-sm:hidden"
          />
        </section>
        <div className="flex flex-col px-5 text-[16px] font-roboto font-normal justify-center ">
          <section>
            <h1 className="text-4xl mb-10 font-bold ">Stay updated</h1>
            <p>Join 60.000+ product managers receiving monthly updates on:</p>
            <ul className="mt-4">
              {monthlyUpdateDescription.map((description, index) => (
                <li key={index} className="flex flex-row my-2">
                  <img
                    src={iconList}
                    alt="icon list"
                    className="h-[22px] w-[22px] mr-3"
                  />
                  {description}
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-8 ">
            <div className="flex flex-row justify-between">
              <p className="text-[12px]">Email address</p>
              {!emailValid && (
                <p className="text-[12px] text-tomato font-semibold">
                  Valid email required
                </p>
              )}
            </div>
            <input
              className={`border rounded-lg w-full p-4 ${
                !emailValid &&
                `border-tomato  focus:outline-none bg-tomato/10  text-tomato`
              }`}
              placeholder="email@company.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <div className="mt-5 max-sm:mb-10">
            <button
              className="w-full p-4 bg-dark-slate-grey rounded-lg text-white font-bold"
              onClick={(e) => handleSubscribe()}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
