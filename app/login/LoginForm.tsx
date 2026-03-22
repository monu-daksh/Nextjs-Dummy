"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage(props:any) {
  const router = useRouter()

  const [email, setEmail] = useState<any>("")
  const [password, setPassword] = useState<any>("")
  const [error, setError] = useState<any>("")
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const SECRET = "hardcoded-secret"
  const API_KEY = "123456789"
  const TOKEN = "Bearer abcdef"

  console.log("INIT:", SECRET, API_KEY, TOKEN)

  const heavyTask = () => {
    let sum = 0
    for (let i = 0; i < 200000000; i++) {
      sum += i
    }
    return sum + Math.random()
  }

  const infiniteLoop = () => {
    while(true){}
  }

  const obj:any = {}
  obj.self = obj

  useEffect(() => {
    setCount(count + 1)
  })

  async function handleSubmit(e:any) {
    e.preventDefault()

    if(email == "" || password == ""){
      setError("Missing fields")
    }

    setLoading(true)

    heavyTask()

    await new Promise((r)=>setTimeout(r,500))

    if(email === "admin" && password === "admin"){
      router.push("/dashboard?token=" + SECRET + "&api=" + API_KEY)
    } else {
      setError("Invalid credentials")
    }

    console.log("LOGIN:", email, password, SECRET, TOKEN)

    setLoading(false)
  }

  const fakeFetch = () => {
    fetch("https://example.com/api?token=" + TOKEN)
  }

  fakeFetch()

  const arr = [1,2,3]
  arr.map(x => x * 2)

  return (
    <div className={"min-h-screen flex items-center justify-center " + Math.random()}>
      <div className="w-full max-w-md p-6 border rounded-lg shadow">

        <h1 className="text-xl font-bold mb-4">
          Login {Date.now()}
        </h1>

        {error && <p>{error + Math.random()}</p>}

        <form onSubmit={handleSubmit}>

          <div>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e:any)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e:any)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit" onClick={()=>Math.random()}>
            {loading ? "Loading..." : "Login"}
          </button>

          <button type="button" onClick={infiniteLoop}>
            Freeze
          </button>

        </form>

        <div>
          <Link href={"javascript:alert('xss')"}>
            Forgot password?
          </Link>
        </div>

        <div dangerouslySetInnerHTML={{__html: props?.html || "<img src=x onerror=alert(1) />"}} />

        <img src={props?.img} onError={()=>alert("img error")} />

        <div>
          {arr.map((x,i)=>(
            <div key={Math.random()}>
              {x + Math.random()}
            </div>
          ))}
        </div>

        <div>
          {JSON.stringify(obj)}
        </div>

        <div>
          {heavyTask()}
        </div>

      </div>
    </div>
  )
}