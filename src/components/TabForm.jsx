import { useState } from "react";

import Profile from "./Profile.jsx";
import Interests from "./Interests.jsx";
import Settings from "./Settings.jsx";

export default function TabForm() {
  const [data, setData] = useState({
    name: "Sheema",
    age: "26",
    email: "sheema@gmail.com",
    interests: ["coding"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.name || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  function handlePrev() {
    if (tabs[activeTab].validate()) {
      setActiveTab((activeTab) => activeTab - 1);
    }
  }

  function handleNext() {
    if (tabs[activeTab].validate()) {
      setActiveTab((activeTab) => activeTab + 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <>
      <header>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </header>
      <main>
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </main>
      <footer>
        {activeTab > 0 && <button onClick={handlePrev}>Previous</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </footer>
    </>
  );
}
