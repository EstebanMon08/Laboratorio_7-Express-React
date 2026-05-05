import { useState } from "react"
import "./Calculator.css"

const OPERATORS = { "/": "÷", "*": "×", "-": "−", "+": "+" }

export default function Calculator() {
  const [cur, setCur] = useState("0")
  const [prev, setPrev] = useState("")
  const [operator, setOperator] = useState("")
  const [expr, setExpr] = useState("")
  const [freshInput, setFreshInput] = useState(false)

  function digit(d) {
    if (freshInput) {
      setCur(d)
      setFreshInput(false)
    } else {
      setCur(c => c === "0" ? d : c + d)
    }
  }

  function dot() {
    if (freshInput) {
      setCur("0.")
      setFreshInput(false)
    } else {
      setCur(c => c.includes(".") ? c : c + ".")
    }
  }

  function handleOp(o) {
    setExpr(cur + " " + OPERATORS[o])
    setPrev(cur)
    setOperator(o)
    setFreshInput(true)
  }

  function calculate() {
    if (!prev || !operator) return
    const a = parseFloat(prev)
    const b = parseFloat(cur)
    let result

    if (operator === "/") result = b === 0 ? "Error" : a / b
    else if (operator === "*") result = a * b
    else if (operator === "-") result = a - b
    else result = a + b

    setExpr(prev + " " + OPERATORS[operator] + " " + cur + " =")
    setCur(result === "Error" ? "Error" : parseFloat(result.toFixed(10)).toString())
    setPrev("")
    setOperator("")
    setFreshInput(true)
  }

  function ac() {
    setCur("0")
    setPrev("")
    setOperator("")
    setExpr("")
    setFreshInput(false)
  }

  function sign() {
    if (cur !== "0" && cur !== "Error") {
      setCur(c => c.startsWith("-") ? c.slice(1) : "-" + c)
    }
  }

  function pct() {
    if (!isNaN(parseFloat(cur))) {
      setCur(parseFloat((parseFloat(cur) / 100).toFixed(10)).toString())
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expr}</div>
        <div className="number">{cur}</div>
      </div>

      <div className="buttons">
        <button className="btn clear" onClick={ac}>AC</button>
        <button className="btn op" onClick={sign}>+/-</button>
        <button className="btn op" onClick={pct}>%</button>
        <button className="btn op" onClick={() => handleOp("/")}>÷</button>

        <button className="btn" onClick={() => digit("7")}>7</button>
        <button className="btn" onClick={() => digit("8")}>8</button>
        <button className="btn" onClick={() => digit("9")}>9</button>
        <button className="btn op" onClick={() => handleOp("*")}>×</button>

        <button className="btn" onClick={() => digit("4")}>4</button>
        <button className="btn" onClick={() => digit("5")}>5</button>
        <button className="btn" onClick={() => digit("6")}>6</button>
        <button className="btn op" onClick={() => handleOp("-")}>−</button>

        <button className="btn" onClick={() => digit("1")}>1</button>
        <button className="btn" onClick={() => digit("2")}>2</button>
        <button className="btn" onClick={() => digit("3")}>3</button>
        <button className="btn op" onClick={() => handleOp("+")}>+</button>

        <button className="btn zero" onClick={() => digit("0")}>0</button>
        <button className="btn" onClick={dot}>.</button>
        <button className="btn eq" onClick={calculate}>=</button>
      </div>
    </div>
  )
}
