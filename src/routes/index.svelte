<div class="bg-gray-200 container-grid">
	<nav class="center-layout">
		<img src="" class="inline-block bg-white" alt="logo" />
	</nav>

	<header class="center-layout">
		<h1>Your partner <br /> in design & development</h1>
		<h3>We create apps and websites your clients will love!</h3>
		<a href="#contact">Let's Get Started!</a>
	</header>

	<section class="center-layout">
		<h2>What we're offering</h2>

		<div class="offering">
			<div class="offer">Design</div>
			<div class="offer">Development</div>
			<div class="offer">Depoloyment</div>
			<div class="offer">Maintenance</div>
		</div>
	</section>

	<section class="center-layout">
		<header>The team</header>

		Robby Pelssers Joris Compernol Luuk Moret
	</section>

	<section class="center-layout">
		<header>Portfolio</header>

		No portfolio yet<br />
	</section>

	<section id="contact" class="center-layout">
		<header>Start your project with philomatica</header>
		<p>
			Tell us more about your project. Send us a message and we'll get back to you as soon as
			possible.
		</p>
		<button>Send us an Email</button>
	</section>

	<footer class="center-layout">
		philomatica design and development team Begium, The Netherlands - philomaticateam@gmail.com
		Copyright © 2022 - All rights reserved
	</footer>
</div>

<style lang="postcss">
	.container-grid {
		display: grid;
		grid-template-rows: 6rem 40vh;
		grid-template-columns:
			[full-start] minmax(6rem, 1fr)
			[center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
			[center-end] minmax(6rem, 1fr) [full-end];
	}

	.full-layout {
		grid-column: full-start / full-end;
	}

	.center-layout {
		grid-column: center-start / center-end;
	}

	.offering {
		@apply grid gap-6;
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	}

	.offer {
		@apply bg-white p-4;
	}
</style>
