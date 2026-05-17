import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ChevronRight, Mail, Compass, BrainCircuit, Users, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Background gradients for subtle visual interest */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/50 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between max-w-6xl">
          <div className="font-heading font-extrabold text-xl md:text-2xl tracking-tighter text-foreground flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs md:text-sm">SP</div>
            Shailesh Pathak
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-semibold text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">About</a>
            <a href="#how-i-help" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">How I Help</a>
            <a href="#contact" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contact</a>
          </nav>
          <Button className="rounded-full px-5 md:px-7 h-9 md:h-11 text-xs md:text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
            Contact Me
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-32 lg:pt-40 lg:pb-48 px-4 sm:px-6">
          {/* subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 items-center">
              <div className="flex flex-col gap-6 md:gap-8 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-both text-center lg:text-left">
                <div className="inline-flex items-center rounded-full border border-primary/20 px-3 py-1.5 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors bg-background/50 backdrop-blur-sm text-primary w-fit shadow-sm mx-auto lg:mx-0">
                  <Compass className="w-3.5 h-3.5 mr-1.5 md:mr-2" />
                  Career Clarity Coach
                </div>
                
                <h1 className="text-3xl leading-[1.2] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold lg:leading-[1.1] text-foreground tracking-tight">
                  <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-foreground/80 mb-2 sm:mb-4 tracking-normal">For Parents & Class 9-10 Students Confused About Class 11 Subject Stream</span>
                  Get Absolute Clarity Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Stress, Guesswork, or Arguments</span>
                </h1>
                
                <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed font-medium">
                  <p>
                    “I help parents and students of Class 9 and 10 choose the right subject stream and career path using scientific psychometric assessments and personalized guidance without confusion or stress.”
                  </p>
                  <div className="pl-4 md:pl-6 border-l-4 border-primary/30 py-1 md:py-2 text-left">
                    <p className="text-foreground/80 italic font-normal text-sm md:text-lg">
                      “In just 3 days, you will confidently choose the right Class 11 stream without the stress, confusion, and family pressure that usually comes with this decision.”
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 md:pt-6 items-center lg:items-start w-full">
                  <Button size="lg" className="w-full sm:w-auto rounded-xl h-auto py-4 px-6 md:px-10 text-sm sm:text-base md:text-lg font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 group bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white border-none whitespace-normal leading-tight">
                    <span className="flex items-center justify-center text-center">
                      Book My Free Stream Clarity Call Now
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </Button>
                  <p className="text-xs md:text-sm font-semibold text-muted-foreground/80">Normally Rs. 2000 - <span className="text-orange-500 font-bold">Today It's Free</span></p>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto lg:max-w-[400px] lg:ml-auto animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both mt-4 lg:mt-0">
                {/* Decorative elements behind the image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-[2rem] md:rounded-[2.5rem] transform rotate-3 scale-105 blur-xl md:blur-2xl -z-10" />
                <div className="absolute -inset-1 bg-gradient-to-br from-border/50 to-background rounded-[2rem] md:rounded-[2.5rem] -z-10" />
                
                <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] bg-secondary/60 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-primary/20">
                  <img 
                    src="/images/coach-placeholder-horizontal.png" 
                    alt="Shailesh Pathak" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-background/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-4 shadow-2xl border border-white/10 flex items-center gap-3 md:gap-4 animate-bounce hover:animate-none delay-500">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-foreground">Clarity Delivered</p>
                    <p className="text-[10px] md:text-xs font-medium text-muted-foreground">in just 3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Decorative subtle background shapes */}
          <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/30 rounded-full blur-[80px] md:blur-[100px] translate-y-1/3 -translate-x-1/3" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-foreground">
                Does This Sound Like You?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
              {/* Problem 1 */}
              <Card className="bg-background/40 backdrop-blur-2xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group rounded-2xl md:rounded-3xl">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-80" />
                <div className="absolute -right-6 -top-6 md:-right-10 md:-top-10 w-24 h-24 md:w-32 md:h-32 bg-violet-400/10 rounded-full blur-2xl group-hover:bg-violet-400/20 transition-colors duration-500" />
                <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col h-full relative z-10">
                  <div className="mb-4 md:mb-6 h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-violet-100/50 flex items-center justify-center text-violet-600 font-extrabold text-xl md:text-2xl shadow-sm border border-violet-200/50 backdrop-blur-sm">
                    1
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 leading-snug">
                    "We are confused between <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Science, Commerce, and Humanities.</span>"
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-auto font-medium">
                    Marks are creating pressure, relatives are giving opinions, and online advice is overwhelming. You want clarity, but every option feels risky.
                  </p>
                </CardContent>
              </Card>

              {/* Problem 2 */}
              <Card className="bg-background/40 backdrop-blur-2xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group rounded-2xl md:rounded-3xl translate-y-0 md:translate-y-8">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-80" />
                 <div className="absolute -right-6 -top-6 md:-right-10 md:-top-10 w-24 h-24 md:w-32 md:h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-colors duration-500" />
                <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col h-full relative z-10">
                  <div className="mb-4 md:mb-6 h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-blue-100/50 flex items-center justify-center text-blue-600 font-extrabold text-xl md:text-2xl shadow-sm border border-blue-200/50 backdrop-blur-sm">
                    2
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 leading-snug">
                    "I don't want my child to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">regret this decision</span> later."
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-auto font-medium">
                    You're worried that one wrong choice now could lead to loss of confidence, stress, or academic struggles down the line.
                  </p>
                </CardContent>
              </Card>

              {/* Problem 3 */}
              <Card className="bg-background/40 backdrop-blur-2xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group rounded-2xl md:rounded-3xl">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-400 to-orange-400 opacity-80" />
                 <div className="absolute -right-6 -top-6 md:-right-10 md:-top-10 w-24 h-24 md:w-32 md:h-32 bg-rose-400/10 rounded-full blur-2xl group-hover:bg-rose-400/20 transition-colors duration-500" />
                <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col h-full relative z-10">
                  <div className="mb-4 md:mb-6 h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-rose-100/50 flex items-center justify-center text-rose-600 font-extrabold text-xl md:text-2xl shadow-sm border border-rose-200/50 backdrop-blur-sm">
                    3
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 leading-snug">
                    "Parents and students are <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">not on the same page.</span>"
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-auto font-medium">
                    Conversations turn into arguments. Everyone wants what's best, but reaching an agreement seems impossible without an unbiased expert.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="flex flex-col items-center text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 md:mb-6 text-foreground">About Your Coach</h2>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-6 text-foreground/90">Shailesh Pathak</h3>
              <p className="text-base sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-semibold mb-6">Career Clarity & Stream Selection Coach</p>
              <div className="h-1 md:h-1.5 w-16 md:w-24 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary/80 w-1/3 rounded-full shadow-[0_0_10px_rgba(255,165,0,0.5)]" />
              </div>
            </div>

            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/20 to-rose-500/20 rounded-[2rem] md:rounded-[3rem] blur-xl md:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Card className="relative border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.1)] bg-background/40 backdrop-blur-2xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 hover:shadow-primary/10">
                <CardContent className="p-6 sm:p-8 md:p-16 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                  
                  <div className="flex flex-col text-left space-y-4 md:space-y-6 order-2 md:order-1">
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                      I guide Class 9 and 10 students to choose the right subject stream and future career using scientific psychometric assessments and structured one-on-one guidance eliminating confusion and costly mistakes.
                    </p>
                    {/* <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                      With years of experience working closely with students, I've developed a proven framework to identify their true strengths and align them with the right academic paths.
                    </p> */}
                    
                    <div className="pt-4 md:pt-6 border-t border-border/50">
                       <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground/80">Professional Background</h4>
                       <ul className="space-y-2 md:space-y-3">
                         {[
                           "Entrepreneur",
                           "Former Chairman, CII Himachal Pradesh",
                           "Former Chairman, IGBC Chandigarh",
                           "Board Member, Shoolini University"
                         ].map((role, i) => (
                           <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                             <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                             <span className="font-medium text-foreground/90">{role}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>

                  <div className="relative w-full max-w-[280px] sm:max-w-none mx-auto aspect-[4/3] rounded-[1.5rem] md:rounded-2xl border-2 border-transparent flex flex-col items-center justify-center text-center order-1 md:order-2 overflow-hidden shadow-xl shadow-primary/10">
                    <img 
                      src="/images/coach-placeholder.png" 
                      alt="Shailesh Pathak" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60" />
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How I Help Section */}
        <section id="how-i-help" className="py-20 md:py-32 relative overflow-hidden bg-background">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-20 items-center">
              
              <div className="order-1 text-center lg:text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 md:mb-4 block">The Process</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 md:mb-8 text-foreground">How I Help?</h2>
                <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground/90 font-medium text-left lg:text-left">
                  <p className="leading-relaxed">
                    I help Class 9 & 10 students choose the right Class 11 stream using <strong className="text-foreground font-bold border-b-2 border-primary/40 pb-0.5">scientific psychometric assessments</strong>, and <strong className="text-foreground font-bold border-b-2 border-primary/40 pb-0.5">personalised guidance</strong> without <strong className="text-foreground font-bold text-primary">confusion, pressure, or guesswork.</strong>
                  </p>
                  {/* <p className="leading-relaxed">
                    I created the <strong className="text-foreground font-bold">Right Stream Decision Blueprint</strong> so families never have to rely on guesswork, pressure, or random opinions again.
                  </p> */}
                  {/* <p className="leading-relaxed">
                    My approach is practical, structured, and designed to bring <strong className="text-foreground font-bold text-primary">clarity, peace, and confidence</strong> to both parents and students.
                  </p> */}
                </div>
              </div>
              
              <div className="grid gap-4 md:gap-6 order-2 w-full">
                {[
                  {
                    num: "1",
                    title: "Scientific Psychometric Assessments",
                    desc: "Data-driven insights to uncover natural aptitudes and true potential.",
                    icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
                    gradient: "from-violet-500/10 to-fuchsia-500/10"
                  },
                  {
                    num: "2",
                    title: "Strength-Based Mapping",
                    desc: "Aligning personal strengths with the right academic and career paths.",
                    icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
                    gradient: "from-blue-500/10 to-cyan-500/10"
                  },
                  {
                    num: "3",
                    title: "Personalised Guidance",
                    desc: "One-on-one support tailored to your unique family situation and goals.",
                    icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
                    gradient: "from-rose-500/10 to-orange-500/10"
                  }
                ].map((item, i) => (
                  <Card key={i} className={`shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border-white/10 bg-background/40 backdrop-blur-xl group overflow-hidden rounded-2xl md:rounded-3xl ${i === 1 ? 'lg:translate-x-8' : ''}`}>
                    <CardContent className="p-5 md:p-8 flex gap-4 md:gap-6 items-start relative z-10 text-left">
                      <div className={`absolute right-0 top-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-bl ${item.gradient} rounded-bl-[80px] md:rounded-bl-[100px] -z-10 transform translate-x-4 md:translate-x-8 -translate-y-4 md:-translate-y-8 group-hover:scale-150 transition-transform duration-700`} />
                      
                      <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/20 transition-colors duration-300 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-xl mb-1.5 md:mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                What Client Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 block sm:inline mt-1 sm:mt-0">About Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              {/* Testimonial 1 */}
              <Card className="bg-background/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 rounded-2xl md:rounded-3xl overflow-hidden group">
                <CardContent className="p-6 md:p-10 flex flex-col h-full relative">
                   <div className="absolute -right-10 -top-10 md:-right-20 md:-top-20 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-2xl md:blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-6 md:h-6 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-lg font-medium mb-6 md:mb-8 italic relative z-10">
                    "Before this call, we were completely stuck. My son was good in studies, but unsure about Science. I was scared of closing doors for him. After the call, everything became clear. We finally understood his strengths and took a decision with confidence - without pressure."
                  </p>
                  <div className="mt-auto pt-4 md:pt-6 border-t border-white/10 relative z-10">
                    <p className="font-bold text-foreground text-sm md:text-lg">Anita Sharma</p>
                    <p className="text-primary font-medium text-[11px] md:text-sm">Parent of Class 10 Student</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-background/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 rounded-2xl md:rounded-3xl overflow-hidden group">
                <CardContent className="p-6 md:p-10 flex flex-col h-full relative">
                   <div className="absolute -right-10 -top-10 md:-right-20 md:-top-20 w-32 h-32 md:w-40 md:h-40 bg-orange-400/10 rounded-full blur-2xl md:blur-3xl group-hover:bg-orange-400/20 transition-colors duration-500" />
                  <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-6 md:h-6 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-lg font-medium mb-6 md:mb-8 italic relative z-10">
                    "Our son never argued, but he had completely withdrawn from the discussion. Whenever we mentioned stream selection, he would say 'anything is fine.' During the session, Mr. Shailesh Asked questions that helped him open up. For the first time, we heard what he actually wanted. The atmosphere at home changed immediately. the decision was not forced. It became a shared choice."
                  </p>
                  <div className="mt-auto pt-4 md:pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                    <div>
                      <p className="font-bold text-foreground text-sm md:text-lg">Happy Parent</p>
                      <p className="text-primary font-medium text-[11px] md:text-sm">Class 10 Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-foreground text-background py-14 md:py-20 px-6 md:px-8 text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-20" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-6 md:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Ready to Find Your True Path?</h2>
                <p className="text-base sm:text-lg md:text-xl text-background/80 font-medium">
                  Stop guessing and start planning your future with confidence.
                </p>
                <div className="flex flex-col items-center gap-3 w-full pt-2">
                  <Button size="lg" className="w-full sm:w-auto rounded-full h-14 md:h-16 px-6 md:px-10 text-sm md:text-lg bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20 whitespace-normal leading-tight">
                    <span className="flex items-center justify-center text-center">
                      Book Your Consultation Now
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary/40 border-t border-border/40 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="font-heading font-extrabold text-xl md:text-2xl tracking-tighter flex items-center gap-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-foreground text-background flex items-center justify-center text-xs md:text-sm">SP</div>
              Shailesh Pathak
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4 text-xs md:text-sm font-semibold text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-center text-xs md:text-sm font-medium text-muted-foreground/60 pt-6 md:pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p>Copyright © 2025 shaileshpathak.in</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
