import { useState } from 'react';
import {
  iconList,
  illustrationSignUpDesktop,
  illustrationSignUpMobile,
} from './assets/images';
const monthlyUpdateDescription = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];
function App() {
  return (
    <div className="w-screen h-screen bg-red flex justify-center">
      <div className="mobile:w-[375px]">
        <section>
          <img src={illustrationSignUpMobile} alt="sign-up desktop" />
        </section>
        <div className="px-5 text-[16px] font-roboto font-normal">
          <section className="mt-10 ">
            <h1 className="text-2xl mb-10 ">Stay updated</h1>
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
            <p className="text-[12px]">Email address</p>
            <input
              className="border rounded-lg w-full p-4"
              placeholder="email@company.com"
            />
          </section>
          <div className="mt-5">
            <button className="w-full p-4 bg-dark-slate-grey rounded-lg text-white font-bold">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
