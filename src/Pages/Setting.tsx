import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function SettingsCard() {
  return (
     <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />*/}
      <div className="flex flex-col justify-center items-center mx-auto max-w-2xl lg:max-w-4xl "> 
        {/* <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
          className="mx-auto h-12"
        /> */}
        <figure className="mt-10">
          <blockquote className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            <p className="text-justify text-primary">
             We're working on this feature  🚀
            </p>
          </blockquote>
        </figure>
        <div className="w-full flex justify-center items-center mt-4">
        <div className="wrapper">
            <div className="circle"></div>
              <div className="circle"></div>
             <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
           <div className="shadow"></div>
          </div>
          </div>
      </div>
    </section>
  )
}