import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <h1 style={{ color: "blue", fontSize: "30px" }}>
          Sebastian Vettel Car
        </h1>
      </header>
      <p>Description</p>
    </div>
  );
}

function Main() {
  const carYear = ["2008", "2009", "2010", "2011", "2012", "2013", "2014"];
  const carList = [
    "Toro Rosso STR3",
    "Red Bull RB5",
    "Red Bull RB6",
    "Red Bull RB7",
    "Red Bull RB8",
    "Red Bull RB9",
    "Red Bull RB10",
  ];
  const carName = [
    "Julie",
    "Kate, Kate's Dirty Sister",
    "Luscious Liz, Randy Mandy",
    "Kinky Kylie",
    "Abbey",
    "Hungry Heidi",
    "Suzie",
  ];
  return (
    <main>
      <tbody>
        <tr>
          <th>Season</th>
          <th>Car</th>
          <th>Name's</th>
        </tr>
        <td>
          {carYear.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </td>
        <td>
          {carList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </td>
        <td>
          {carName.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </td>
      </tbody>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>Ceci est le footer</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
