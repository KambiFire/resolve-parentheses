import "./styles.css";

export default function App() {
  // s is a string !
  function Parentheses(s = [""]) {
    if (s.length < 1) return "Valid";

    const temp = [];
    const keys = { ")": "(", "]": "[", "}": "{" };
    const open = (x) => Object.values(keys).includes(x);

    for (let i = 0; i < s.length; i++) {
      if (open(s[i])) temp.push(s[i]);
      else if (temp[temp.length - 1] === keys[s[i]]) temp.pop();
      else return "Nada";
    }
    if (temp.length < 1) return "Valid 😊";
    else return "Nada 👹";
  }

  const tests = ["''", "(]", "(){}[]", "{}", "(({{[[]]}}))", "{{[]]}"];

  const results = (test) => {
    const result = Parentheses(test);
    console.log(test, "--", result);
    return result;
  };

  return (
    <div className="App">
      <h1>Resolve Parentheses</h1>
      {tests.map((test, index) => (
        <h3 key={index}>
          {Array.from(test).join(" ")} - {results(test)}
        </h3>
      ))}
    </div>
  );
}
