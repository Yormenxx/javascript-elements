import Link from "next/link"


const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl">Simple website for games</h1>
      <p>This website is created for practice about nested-routes in nextjs</p>
      <Link href="/games" className="text-xl text-blue-300">Click here to watch result</Link>
    </div>
  )
}

export default page
