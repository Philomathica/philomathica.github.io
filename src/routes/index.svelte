<div class="font-sans bg-gray-100">
  <header>
    <nav class="bg-slate-800">
      <div class="container flex items-center px-4 py-4 mx-auto">
        <a href="#main" class="flex items-center text-blue-200 hover:text-blue-400">
          <span class="w-5 h-5">
            <svg viewBox="0 0 185 205" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentcolor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M185 92.5C185 143.586 143.586 185 92.5 185C71.6763 185 52.4597 178.119 37 166.507V186.5C37 196.717 28.7173 205 18.5 205H0V94H0.0119162C0.00398204 93.501 0 93.0009 0 92.5C0 41.4137 41.4137 0 92.5 0C143.586 0 185 41.4137 185 92.5ZM145 92.5C145 121.495 121.495 145 92.5 145C63.5051 145 40 121.495 40 92.5C40 63.5051 63.5051 40 92.5 40C121.495 40 145 63.5051 145 92.5Z"
              />
            </svg>
          </span>
          <span class="ml-4 text-sm tracking-wide">Philomatica</span>
        </a>
        <ul class="items-center hidden ml-auto space-x-8 text-white md:flex">
          <li>
            <a class="text-sm font-semibold text-blue-200 transition-colors duration-200 hover:text-blue-400" href="#offering">offering</a>
          </li>
          <li>
            <a class="text-sm font-semibold text-blue-200 transition-colors duration-200 hover:text-blue-400" href="#team">team</a>
          </li>
          <!-- <li>
            <a class="text-sm font-semibold text-blue-200 transition-colors duration-200 hover:text-blue-400" href="#portfolio">portfolio</a>
          </li> -->
        </ul>
        <button class="w-6 h-6 ml-auto text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="container mx-auto"><div class="h-px mx-3 bg-blue-200 opacity-[0.2]" /></div>
    </nav>
    <section id="hero" class="h-[40vh] flex items-center bg-blue-800 bg-gradient-to-t from-slate-900 to-slate-800">
      <div class="container px-4 mx-auto text-white">
        <h1>Your partner <br /> in design & development</h1>
        <h2 class="font-thin normal-case">- We create apps and websites your clients will love!</h2>
        <a class="inline-block px-8 py-3 mt-4 tracking-wide text-white bg-blue-500 font-narrow hover:bg-blue-700 rounded-md" href="#contact"
          >Let's Get Started!</a
        >
      </div>
    </section>
  </header>

  <main id="main" class="container px-4 mx-auto">
    <section id="offering" class="py-8 md:py-16">
      <h2 class="text-xl text-gray-900 normal-case md:text-3xl">What we're offering</h2>
      <p class="pt-4 font-normal text-gray-600 text-">
        We help you start your business with a modern, <br />user-friendly, and intuitive web application.
      </p>

      <div class="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2">
        <div class="flex flex-col items-center p-8 bg-gray-200 h-36">
          <h4 class="">Design</h4>
          <p class="mt-2 text-sm text-gray-600">Product design, UI/UX design, Design systems.</p>
        </div>
        <div class="flex flex-col items-center p-8 bg-gray-200 h-36">
          <h4 class="">Development</h4>
          <p class="mt-2 text-sm text-gray-600">Developing scalable web apps and mobile apps.</p>
        </div>
        <div class="flex flex-col items-center p-8 bg-gray-200 h-36">
          <h4 class="">Deployment</h4>
          <p class="mt-2 text-sm text-gray-600">Automated deployment workflow and CI/CD pipelines.</p>
        </div>
        <div class="flex flex-col items-center p-8 bg-gray-200 h-36">
          <h4 class="">Maintenance</h4>
          <p class="mt-2 text-sm text-gray-600">Continuous monitoring, maintenance and support .</p>
        </div>
      </div>
    </section>

    <section id="team" class="py-8 md:py-16">
      <h2 class="text-xl text-gray-900 normal-case md:text-3xl">The team</h2>
      <p>We are a small team of designers and developers who create awesome stuff for the web and mobile.</p>

      <div class="flex p-16 my-4 bg-gray-200">
        <img class="w-24 h-24 rounded-[100%]" src="avatar.png" alt="" />
        <div class="ml-8 text-gray-700">
          <h3 class="text-3xl normal-case">Luuk Moret</h3>
          <ul class="">
            <li>— Full-stack developer, Devops, Architect</li>
            <li>— Lead experience</li>
          </ul>
          <div class="flex flex-wrap gap-4 mt-8">
            <img class="w-10 h-10" src="/icons/html.svg" alt="" />
            <img class="w-10 h-10" src="/icons/css.svg" alt="" />
            <img class="w-10 h-10" src="/icons/javascript.svg" alt="" />
            <img class="w-10 h-10" src="/icons/svelte.svg" alt="" />
            <img class="w-10 h-10" src="/icons/tailwindcss.svg" alt="" />
            <img class="w-10 h-10" src="/icons/mongodb.svg" alt="" />
            <img class="w-10 h-10" src="/icons/mysql.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="flex p-16 my-4 bg-gray-200">
        <img class="filtered w-24 h-24 rounded-full" src="/images/avatar-joris.jpeg" alt="" />

        <div class="ml-8 text-gray-700">
          <h3 class="text-3xl normal-case">Joris Compernol</h3>
          <ul class="">
            <li>— UI/UX designer, Front-end developer, data-viz</li>
            <li>— Lead experience</li>
          </ul>
          <div class="flex flex-wrap gap-4 mt-8">
            <img class="w-10 h-10" src="/icons/figma.svg" alt="figma" />
            <img class="w-10 h-10" src="/icons/tailwindcss.svg" alt="tailwindcss" />
            <img class="w-10 h-10" src="/icons/typescript.svg" alt="typescript" />
            <img class="w-10 h-10" src="/icons/svelte.svg" alt="svelte" />
            <img class="w-10 h-10" src="/icons/d3.svg" alt="d3" />
            <img class="w-10 h-10" src="/icons/angular.svg" alt="angular" />
            <img class="w-10 h-10" src="/icons/nest.svg" alt="nest" />
            <img class="w-10 h-10" src="/icons/mongodb.svg" alt="mongodb" />
          </div>
        </div>
      </div>

      <div class="flex p-16 my-4 bg-gray-200">
        <img class="w-24 h-24 rounded-[100%]" src="avatar.png" alt="" />
        <div class="ml-8 text-gray-700">
          <h3 class="text-3xl normal-case">Robby Pelssers</h3>
          <ul class="">
            <li>— Full stack developer, Database and API architect</li>
            <li>— Lead experience</li>
          </ul>
          <div class="flex flex-wrap gap-4 mt-8">
            <img class="w-10 h-10" src="/icons/html.svg" alt="" />
            <img class="w-10 h-10" src="/icons/css.svg" alt="" />
            <img class="w-10 h-10" src="/icons/javascript.svg" alt="" />
            <img class="w-10 h-10" src="/icons/svelte.svg" alt="" />
            <img class="w-10 h-10" src="/icons/tailwindcss.svg" alt="" />
            <img class="w-10 h-10" src="/icons/mongodb.svg" alt="" />
            <img class="w-10 h-10" src="/icons/mysql.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="portfolio" class="py-8 md:py-16">
      <h2 class="text-xl text-gray-900 normal-case md:text-3xl">Portfolio</h2>

      <div class="p-16 mt-4 bg-gray-200">item1</div>
      <div class="p-16 mt-4 bg-gray-200">item2</div>
      <div class="p-16 mt-4 bg-gray-200">item3</div>
    </section> -->

    <section id="contact" class="py-8 md:py-16">
      <h2 class="text-xl text-gray-900 normal-case md:text-3xl">Start your project with philomatica</h2>

      <p class="pt-4 font-normal text-gray-600 text-">
        Tell us more about your project. Send us a message and we'll get back to you as soon as possible.
      </p>
      <a
        href="mailto:philomaticateam@gmail.com"
        class="inline-block px-8 py-3 mt-4 tracking-wide text-white bg-blue-500 font-narrow hover:bg-blue-700 rounded-md"
        >Send us an Email
      </a>
    </section>
  </main>

  <footer class="py-8 bg-gray-800 md:py-16">
    <div class="container px-4 mx-auto text-xs font-thin text-center text-white">
      philomatica design and development team Begium, The Netherlands - philomaticateam@gmail.com Copyright © 2022 - All rights reserved
    </div>
  </footer>
</div>
