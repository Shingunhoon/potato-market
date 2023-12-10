import "../app/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
